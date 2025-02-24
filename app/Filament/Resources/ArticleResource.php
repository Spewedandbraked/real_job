<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ArticleResource\Pages;
use App\Filament\Resources\ArticleResource\RelationManagers;
use App\Models\Article;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ArticleResource extends Resource
{
    public static function getLabel(): string
    {
        return 'Статья';
    }

    public static function getPluralLabel(): string
    {
        return 'Статьи';
    }

    protected static ?string $model = Article::class;

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

                        Forms\Components\FileUpload::make('image_path')
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
            'index' => Pages\ListArticles::route('/'),
            'create' => Pages\CreateArticle::route('/create'),
            'edit' => Pages\EditArticle::route('/{record}/edit'),
        ];
    }
}
