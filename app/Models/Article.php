<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'content',
        'blocks',
        'image_path',
        'author',
        'published_at',
    ];
    protected $casts = [
        'blocks' => 'array',
    ];
}
