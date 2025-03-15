<?php

namespace App\Filament\Resources\ContactResource\Pages;

use App\Filament\Resources\ContactResource;
use Filament\Resources\Pages\Page;


use Filament\Forms;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Form;

class Contacts extends Page implements HasForms
{
    use InteractsWithForms;

    protected static string $resource = ContactResource::class;

    protected static string $view = 'filament.resources.contact-resource.pages.contacts';

    public $tg, $vk, $ok, $rt, $yd, $phone, $email, $pos, $thingy;

    protected $rules = [];

    protected $objects = [
        'tg' => [
            'Телеграмм' => 'https://t.me/',
        ],
        'vk' => [
            'ВК' => 'https://vk.com/',
        ],
        'ok' => [
            'OK' => 'https://ok.ru/',
        ],
        'rt' => [
            'Rutube' => 'https://rutube.ru/',
        ],
        'yd' => [
            'Яндекс дзен' => 'https://dzen.ru/',
        ],
        'phone' => [
            'Телефон' => '+7-000-000-00-00',
        ],
        'email' => [
            'Электронная почта' => 'moexp_info@mosreg.ru ',
        ],
        'pos' => [
            'Адрес' => 'Россия, 117342, Москва, ул. Обручева, дом 46, к. № 305',
        ],
        'thingy' => [
            'График работы' => 'ПН-ПТ 9:00–17:00',
        ],
    ];

    public function mount(): void
    {
        $contacts = (file_exists('contacts.json')) ? (json_decode(file_get_contents('contacts.json'), true)) : null;
        foreach ($this->objects as $key => $object) {
            $a[$key] = ($contacts[$key] ?? null) ? $contacts[$key] : $object[key($object)];
        };
        $this->form->fill($a);
    }
    public function form(Form $form): Form
    {
        foreach ($this->objects as $key => $object) {
            $a[] = TextInput::make($key)->default($object[key($object)])->label(key($object));
        };
        return $form
            ->schema($a);
    }

    public function submit()
    {
        file_put_contents("contacts.json", json_encode($this->validate()));
        // SAVE THE SETTINGS HERE
    }
}
