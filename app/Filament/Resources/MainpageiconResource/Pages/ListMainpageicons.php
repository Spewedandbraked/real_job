<?php

namespace App\Filament\Resources\MainpageiconResource\Pages;

use App\Filament\Resources\MainpageiconResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListMainpageicons extends ListRecords
{
    protected static string $resource = MainpageiconResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
