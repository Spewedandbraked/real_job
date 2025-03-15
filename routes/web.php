<?php

use App\Http\Controllers\ContentController;
use App\Http\Controllers\DocsController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ServicesController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PageController::class, 'index']);

Route::get('/contacts', [PageController::class, 'contacts'])->name('contacts.index');

Route::get('/services', [ServicesController::class, 'index'])->name('services.index');

Route::get('/content', [ContentController::class, 'index'])->name('content.index');
Route::get('/content/{article}', [ContentController::class, 'article'])->name('content.article');

Route::get('/docs', [DocsController::class, 'index'])->name('docs.index');

Route::get('/news{params?}', [NewsController::class, 'index'])->name('news.index');
Route::get('/news/{article}', [NewsController::class, 'article'])->name('news.article');
