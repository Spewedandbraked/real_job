<?php

namespace App\Filament\Resources;

use App\Filament\Resources\MenuResource\Pages;
use App\Filament\Resources\MenuResource\RelationManagers;
use App\Models\Menu;
use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\BooleanColumn;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Filament\Forms\Components\Builder;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class MenuResource extends Resource
{

    public static function getLabel(): string
    {
        return 'Меню';
    }
    public static function getPluralLabel(): string
    {
        return 'Меню';
    }

    protected static ?string $model = Menu::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')
                    ->label('Название')
                    ->required(),
                TextInput::make('slug')
                    ->label('Ссылка')
                    ->required()
                    ->unique(),
                Select::make('section')
                    ->label('')
                    ->label('Секция')
                    ->options([
                        'aboutUs' => 'Об учреждении',
                        'news' => 'Новости',
                        'services' => 'Услуги',
                        'contacts' => 'Контакты',
                    ])
                    ->required(),
                Select::make('parent_id')
                    ->label('Родительское меню')
                    ->relationship('parent', 'title')
                    ->nullable()
                    ->helperText('Выберите, если это подменю'),

                TextInput::make('order')
                    ->label('Порядок')
                    ->default(0)
                    ->numeric(),

                Select::make('is_active')
                    ->label('Активность')
                    ->options([
                        1 => 'Активно',
                        0 => 'Не активно',
                    ])
                    ->default(1),
                BlockDefinition::BlockElement('blocks')
                    ->minItems(1)
                    ->maxItems(35),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')
                    ->label('Название')
                    ->sortable()
                    ->formatStateUsing(function ($state, $record) {
                        return str_repeat('— ', $record->parent_id ? 1 : 0) . $state;
                    }),
                TextColumn::make('slug')->label('Ссылка'),
                TextColumn::make('section')->label('Раздел'),
                TextColumn::make('parent.title')->label('Родительское меню'),
                TextColumn::make('order')->label('Порядок')->sortable(),
                IconColumn::make('is_active')
                    ->label('Активность')
                    ->boolean()
                    ->trueIcon('heroicon-o-check-circle')
                    ->falseIcon('heroicon-o-x-circle'),
            ])
            ->filters([
                SelectFilter::make('section')
                    ->label('Раздел')
                    ->options([
                        'news' => 'Новости',
                        'services' => 'Услуги',
                        'contacts' => 'Контакты',
                    ]),
            ])
            ->actions([
                Tables\Actions\EditAction::make()->label('Редактировать'),
                Tables\Actions\DeleteAction::make()->label('Удалить'),
                Tables\Actions\ViewAction::make()->label('Просмотр'),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make()->label('Удалить выбранные'),
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
            'index' => Pages\ListMenus::route('/'),
            'create' => Pages\CreateMenu::route('/create'),
            'edit' => Pages\EditMenu::route('/{record}/edit'),
        ];
    }
}
