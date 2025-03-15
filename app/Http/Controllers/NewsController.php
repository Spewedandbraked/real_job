<?php

namespace App\Http\Controllers;

use App\Models\News;
use Carbon\Carbon;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index()
    {
        $year = request()->year ?? null;
        $page = request()->page ?? 1;

        ($year == null) ? $news = News::latest() : $news = News::whereYear('created_at', '=', $year)->latest();
        $news = $news->paginate(10, ['*'], 'page', $page);
        return view('news/index', [
            'news' => $news,
            'year' => $year,
            'page' => $news->currentPage()
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
