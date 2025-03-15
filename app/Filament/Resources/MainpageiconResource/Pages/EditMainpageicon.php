<?php

namespace App\Filament\Resources\MainpageiconResource\Pages;

use App\Filament\Resources\MainpageiconResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditMainpageicon extends EditRecord
{
    protected static string $resource = MainpageiconResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
