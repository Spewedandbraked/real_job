<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index()
    {
        return view('index', [
            'news' => News::latest()->paginate(7),
            'slider_news' => News::where('is_active', '=', true)->latest()->paginate(7),
        ]);
    }

    public function contacts()
    {
        return view('contacts');
    }
}
