<?php

namespace App\Filament\Resources;

use App\Filament\Resources\NewsResource\Pages;
use App\Filament\Resources\NewsResource\RelationManagers;
use App\Models\News;
use Filament\Forms;
use Filament\Forms\Components\Builder;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Tabs;
use Filament\Forms\Components\Tabs\Tab;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class NewsResource extends Resource
{
    public static function getLabel(): string
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
                TextInput::make('author')
                    ->required()
                    ->label('Автор'),

                DateTimePicker::make('published_at')
                    ->label('Дата публикации')
                    ->required()
                    ->default(now())
                    ->native(false)
                    ->timezone('Europe/Moscow')
                    ->format('d.m.Y'),

                Repeater::make('title')->schema([
                    Select::make('title_type_id')
                        ->options([
                            1 => 'Обычный',
                            2 => 'Двойной',
                        ])
                        ->live(),
                    Tabs::make('data')->schema(fn(Get $get): array => match ($get('title_type_id')) {
                        default => [Tab::make('Обычный')->schema([
                            // ...
                            TextInput::make('title')
                                ->label('Обычный заголовок')
                                ->required(),
                        ])],
                        '2' => [Tab::make('Двойной')->schema([
                            // ...
                            TextInput::make('first_title')
                                ->label('Первый заголовок')
                                ->required(),
                            TextInput::make('second_title')
                                ->label('Второй заголовок')
                                ->required(),
                        ])],
                    })

                ])
                    ->label('Заголовок')
                    ->columns(2)
                    ->addable(false)
                    ->reorderableWithDragAndDrop(false)
                    ->deletable(false),

                Forms\Components\FileUpload::make('required_image_path')
                    ->required()
                    ->label('Изображение')
                    ->image()
                    ->directory('uploads/images')
                    ->label('Файл')
                    ->getUploadedFileNameForStorageUsing(function ($file) {
                        return $file->getClientOriginalName();
                    }),
                Builder::make('blocks')
                    ->blocks([
                        Builder\Block::make('Content')
                            ->schema([
                                //...
                                RichEditor::make('content')
                                    ->label('Контент')
                                    ->toolbarButtons([
                                        'bold',
                                        'italic',
                                        'underline',
                                        'strike',
                                        'link',
                                        'bulletList',
                                        'orderedList',
                                        'blockquote',
                                        'redo',
                                        'undo',
                                        'codeBlock'
                                    ]),
                            ]),
                        Builder\Block::make('Image')
                            ->schema([
                                //...
                                FileUpload::make('image_path')
                                    ->label('Изображение')
                                    ->image()
                                    ->directory('uploads/images')
                                    ->label('Файл')
                                    ->getUploadedFileNameForStorageUsing(function ($file) {
                                        return $file->getClientOriginalName();
                                    })
                            ]),
                        Builder\Block::make('Multiple Fields')
                            ->schema([
                                //...
                                TextInput::make('title')
                                    ->label('Заголовок'),
                                RichEditor::make('content')
                                    ->label('Контент')
                                    ->toolbarButtons([
                                        'bold',
                                        'italic',
                                        'underline',
                                        'strike',
                                        'link',
                                        'bulletList',
                                        'orderedList',
                                        'blockquote',
                                        'redo',
                                        'undo',
                                        'codeBlock'
                                    ]),

                                FileUpload::make('image_path')
                                    ->label('Изображение')
                                    ->image()
                                    ->directory('uploads/images')
                                    ->label('Файл')
                                    ->getUploadedFileNameForStorageUsing(function ($file) {
                                        return $file->getClientOriginalName();
                                    })
                            ]),
                        Builder\Block::make('Цитата (BlockQuote)')
                            ->schema([
                                //...
                                TextInput::make('quote')
                                    ->label('Цитата'),
                            ]),
                    ])
                    ->label('Блоки')
                    ->minItems(1)
                    ->maxItems(10)
                    ->columnSpan('full')
                    ->collapsible(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')->formatStateUsing(function ($state): string {
                    $a = json_decode($state, true);
                    switch ($a) {
                        case ($a['title_type_id'] == null) or ($a['title_type_id'] == 1):
                            return $a['title'];
                        case $a['title_type_id'] == 2:
                            return $a['first_title'] . ' ' . $a['second_title'];
                        default:
                            return 'error';
                    }
                    return 'error';
                })
                    ->label('Заголовок')
                    ->limit(50),

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
