<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index()
    {
        $news = News::paginate(5);
        return view('news/index', [
            'news' => $news,
        ]);
    }
    public function article($id)
    {
        $article = News::where('id', '=', $id)->first();
        return view('news/article', [
            'article' => $article,
        ]);
    }
}
