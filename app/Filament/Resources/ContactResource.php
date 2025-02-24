<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ContactResource\Pages;
use App\Filament\Resources\ContactResource\RelationManagers;
use App\Models\Contact;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ContactResource extends Resource
{
    public static function getLabel():string
    {
        return 'Контакт';
    }
    public static function getPluralLabel(): string
    {
        return 'Контакты';
    }
    protected static ?string $model = Contact::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('address')
                    ->required()
                    ->label('Адрес'),
                Forms\Components\TextInput::make('phone')
                    ->required()
                    ->label('Телефон'),
                Forms\Components\TextInput::make('email')
                    ->required()
                    ->email()
                    ->unique(table: 'users', column: 'email', ignoreRecord: true)
                    ->label('Электронная почта'),
                Forms\Components\TextInput::make('vk_link')
                    ->required()
                    ->label('vk_link'),
                Forms\Components\TextInput::make('telegram_link')
                    ->required()
                    ->label('telegram_link'),
                Forms\Components\TextInput::make('ok_link')
                    ->required()
                    ->label('ok_link'),
                Forms\Components\TextInput::make('rutube_link')
                    ->required()
                    ->label('rutube_link'),
                Forms\Components\TextInput::make('yandex_link')
                    ->required()
                    ->label('yandex_link'),
                Forms\Components\TextInput::make('working_hours')
                    ->required()
                    ->label('working_hours'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('address')
                    ->label('Адрес'),

                Tables\Columns\TextColumn::make('phone')
                    ->label('Телефон'),

                Tables\Columns\TextColumn::make('email')
                    ->label('Электронная почта'),
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
            'index' => Pages\ListContacts::route('/'),
            'create' => Pages\CreateContact::route('/create'),
            'edit' => Pages\EditContact::route('/{record}/edit'),
        ];
    }
}
