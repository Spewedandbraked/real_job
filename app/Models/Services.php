<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Services extends Model
{
    use HasFactory;

    /**
     * Атрибуты, которые можно массово заполнять.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'description',
        'content',
        'blocks',
        'image_path',
    ];
    protected $casts = [
        'blocks' => 'array',
    ];
}
