<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'author',
        'created_at',
        'required_image_path',
        'image_path',
        'blocks',
    ];
    protected $casts = [
        'title' => 'array',
        'blocks' => 'array',
    ];
    
}
