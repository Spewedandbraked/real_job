<?php

namespace App\Filament\Resources;

use App\Filament\Resources\NewsResource\Pages;
use App\Filament\Resources\NewsResource\RelationManagers;
use App\Models\News;
use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Tabs\Tab;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class NewsResource extends Resource
{
    public static function getLabel():string
    {
        return 'Новость';
    }
    public static function getPluralLabel(): string
    {
        return 'Новости';
    }
    protected static ?string $model = News::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('author')
                    ->required()
                    ->label('Автор'),

                Forms\Components\DateTimePicker::make('published_at')
                    ->label('Дата публикации')
                    ->required()
                    ->default(now())
                    ->native(false)
                    ->timezone('Europe/Moscow')
                    ->format('Y-m-d H:i:s'),

                Forms\Components\Repeater::make('blocks')->schema([
                    Select::make('type_id')
                    ->options([
                        1 => 'Заголовок',
                        2 => 'Контент',
                        3 => 'Изображение',
                        4 => 'Заурядный блок',
                    ])
                    ->live(),
                    Forms\Components\Tabs::make('tab2')
                    ->schema(fn (Get $get):array => match ($get('type_id')){
                        default => [Tab::make('Контент')->schema([
                            // ...
                            Forms\Components\RichEditor::make('content')
                            ->label('Контент')
                            ->toolbarButtons([
                                'bold', 'italic', 'underline', 'strike', 'link',
                                'bulletList', 'orderedList', 'blockquote',
                                'redo', 'undo', 'codeBlock'
                            ]),
                        ])],
                        '1' => [Tab::make('Заголовок')->schema([
                            // ...
                            Forms\Components\TextInput::make('title')
                            ->label('Заголовок'),
                        ])],
                        /* '2' => [Tab::make('Контент')->schema([
                            // ...
                            Forms\Components\RichEditor::make('content')
                            ->label('Контент')
                            ->toolbarButtons([
                                'bold', 'italic', 'underline', 'strike', 'link',
                                'bulletList', 'orderedList', 'blockquote',
                                'redo', 'undo', 'codeBlock'
                            ]),
                        ])], */
                        '3' => [Tab::make('Изображение')->schema([
                            // ...
                            Forms\Components\FileUpload::make('image_path')
                            ->label('Изображение')
                            ->image()
                            ->directory('uploads/images')
                            ->label('Файл')
                            ->getUploadedFileNameForStorageUsing(function ($file) {
                                return $file->getClientOriginalName();
                            })
                        ])],
                        '4' => [Tab::make('Заурядный блок')->schema([
                            // ...
                            Forms\Components\TextInput::make('title')
                            ->label('Заголовок'),

                        Forms\Components\RichEditor::make('content')
                            ->label('Контент')
                            ->toolbarButtons([
                                'bold', 'italic', 'underline', 'strike', 'link',
                                'bulletList', 'orderedList', 'blockquote',
                                'redo', 'undo', 'codeBlock'
                            ]),

                        Forms\Components\FileUpload::make('image_path')
                            ->label('Изображение')
                            ->image()
                            ->directory('uploads/images')
                            ->label('Файл')
                            ->getUploadedFileNameForStorageUsing(function ($file) {
                                return $file->getClientOriginalName();
                            })
                        ])],
                    })
                ])
                ->label('Блоки')
                ->minItems(1)
                ->maxItems(10)
                ->collapsible(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->label('Заголовок'),

                Tables\Columns\TextColumn::make('author')
                    ->label('Автор'),

                Tables\Columns\TextColumn::make('published_at')
                    ->dateTime()
                    ->label('Дата публикации'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\ViewAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListNews::route('/'),
            'create' => Pages\CreateNews::route('/create'),
            'edit' => Pages\EditNews::route('/{record}/edit'),
        ];
    }
}
