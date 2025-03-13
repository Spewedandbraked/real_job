<?php

namespace App\Http\Controllers;

use App\Models\News;
use Carbon\Carbon;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index(Request $year)
    {
        $year['date'] == null ? $news = News::latest()->paginate(5) : $news = News::whereYear('created_at', '=', $year['date'])->paginate(5);
        return view('news/index', [
            'news' => $news,
            'year' => $year['date'] ?? null,
        ]);
    }
    public function article($id)
    {
        $article = News::where('id', '=', $id)->first();
        $news = News::latest()->take(5)->get();
        return view('news/index', [
            'news' => $news,
            'article' => $article,
        ]);
    }
}
