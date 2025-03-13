<?php
//used in News and Menu forms
namespace App\Filament\Resources;

use Filament\Forms\Components\Builder;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;

class BlockDefinition
{
    public static function BlockElement(String $name): Builder
    {
        return Builder::make($name)
            ->blocks([
                Builder\Block::make('content')
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
                    ])->label('Текст | Контент'),
                Builder\Block::make('image')
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
                    ])->label('Изображение'),
                Builder\Block::make('blockquote')
                    ->schema([
                        //...
                        TextInput::make('quote')
                            ->label('Цитата'),
                    ])->label('Цитата | (BlockQuote)'),
                Builder\Block::make('title')
                    ->schema([
                        //...
                        TextInput::make('title')
                            ->label('Заголовок')
                            ->required(),
                    ])->label('Заголовок'),
                Builder\Block::make('doubleTitle')
                    ->schema([
                        //...
                        TextInput::make('first_title')
                            ->label('Первый заголовок')
                            ->required(),
                        TextInput::make('second_title')
                            ->label('Второй заголовок')
                            ->required(),
                    ])->label('Двойной заголовок'),
                Builder\Block::make('multiImage')
                    ->schema([
                        //...
                        Repeater::make('images')->schema([
                            FileUpload::make('image_path')
                                ->label('Изображение')
                                ->image()
                                ->directory('uploads/images')
                                ->label('Файл')
                                ->getUploadedFileNameForStorageUsing(function ($file) {
                                    return $file->getClientOriginalName();
                                })
                        ])->maxItems(3),
                    ])->label('Несколько изображений'),
            ])
            ->label('Блоки')
            ->columnSpan('full')
            ->collapsible();
    }
}
