<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = [
        'address',
        'phone',
        'email',
        'vk_link',
        'telegram_link',
        'ok_link',
        'rutube_link',
        'yandex_link',
        'working_hours',
    ];
}
