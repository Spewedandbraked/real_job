<?php

namespace App\Filament\Resources;

use App\Filament\Resources\DocsResource\Pages;
use App\Filament\Resources\DocsResource\RelationManagers;
use App\Models\Docs;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class DocsResource extends Resource
{
    public static function getLabel():string
    {
        return 'Документ';
    }
    public static function getPluralLabel(): string
    {
        return 'Документы';
    }
    protected static ?string $model = Docs::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->required()
                    ->label('Заголовок'),

                Forms\Components\RichEditor::make('description')
                    ->required()
                    ->toolbarButtons([
                        'bold', 'italic', 'underline', 'strike', 'link',
                        'bulletList', 'orderedList', 'blockquote',
                        'redo', 'undo', 'codeBlock'
                    ])
                    ->label('Описание'),

                Forms\Components\RichEditor::make('content')
                    ->label('Контент')
                    ->toolbarButtons([
                        'bold', 'italic', 'underline', 'strike', 'link',
                        'bulletList', 'orderedList', 'blockquote',
                        'redo', 'undo', 'codeBlock'
                    ])
                    ->required(),

                Forms\Components\FileUpload::make('image_path')
                    ->label('Изображение')
                    ->image()
                    ->directory('uploads/images')
                    ->label('Файл')
                    ->getUploadedFileNameForStorageUsing(function ($file) {
                        return $file->getClientOriginalName();
                    }),

                Forms\Components\Repeater::make('blocks')
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->label('Заголовок'),

                        Forms\Components\RichEditor::make('content')
                            ->label('Контент')
                            ->toolbarButtons([
                                'bold', 'italic', 'underline', 'strike', 'link',
                                'bulletList', 'orderedList', 'blockquote',
                                'redo', 'undo', 'codeBlock'
                            ]),

                        Forms\Components\FileUpload::make('image')
                            ->label('Изображение')
                            ->image()
                            ->directory('uploads/images')
                            ->label('Файл')
                            ->getUploadedFileNameForStorageUsing(function ($file) {
                                return $file->getClientOriginalName();
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
            'index' => Pages\ListDocs::route('/'),
            'create' => Pages\CreateDocs::route('/create'),
            'edit' => Pages\EditDocs::route('/{record}/edit'),
        ];
    }
}
