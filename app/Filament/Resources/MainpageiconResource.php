<?php

namespace App\Filament\Resources;

use App\Filament\Resources\MainpageiconResource\Pages;
use App\Filament\Resources\MainpageiconResource\RelationManagers;
use App\Models\Mainpageicon;
use Filament\Forms;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Forms\Components\FileUpload;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class MainpageiconResource extends Resource
{
    protected static ?string $model = Mainpageicon::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')
                    ->label('Текст')
                    ->required(),
                TextInput::make('link')
                    ->default('http://')
                    ->label('Ссылка')
                    ->required(),
                FileUpload::make('image')
                    ->required()
                    ->label('Изображение')
                    ->image()
                    ->directory('uploads/images')
                    ->label('Файл')
                    ->getUploadedFileNameForStorageUsing(function ($file) {
                        return $file->getClientOriginalName();
                    }),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title'),
                TextColumn::make('link'),
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
            'index' => Pages\ListMainpageicons::route('/'),
            'create' => Pages\CreateMainpageicon::route('/create'),
            'edit' => Pages\EditMainpageicon::route('/{record}/edit'),
        ];
    }
}
