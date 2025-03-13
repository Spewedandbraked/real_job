<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;

class ContentController extends Controller
{
    public function index()
    {
        $menus = Menu::all();
        return view('content/index', [
            'menus' => $menus,
        ]);
    }
    public function article($id)
    {
        $article = Menu::where('id', '=', $id)->first();
        $menus = Menu::all();
        return view('content/index', [
            'menus' => $menus,
            'article' => $article,
        ]);
    }
}
