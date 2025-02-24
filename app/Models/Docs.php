<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Docs extends Model
{
    use HasFactory;

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
