@extends('layouts.main')
@section('title', 'Новости')
@section('content')
    <aside class="aside">
        <div class="category js-list">
            <button aria-label class="category__text js-button">
                Новости
                <span>
                    <i class="icon icon--undefined icon-arrrow-down"></i>
                </span>
            </button>
            <div class="category__list js-scroll category__list--nonum">
                <div class="category__line">
                    <a href="javascript:void(0);" class="category__item category__item--main active" title>
                        Новости


                        <i class="icon icon-- icon-arrrow-right"></i>
                    </a>


                </div>
                <div class="category__line">
                    <a href="javascript:void(0);" class="category__item  " title>
                        2025


                        <i class="icon icon-- icon-arrrow-right"></i>
                    </a>


                </div>
                <div class="category__line">
                    <a href="javascript:void(0);" class="category__item  " title>
                        2024


                        <i class="icon icon-- icon-arrrow-right"></i>
                    </a>


                </div>
                <div class="category__line">
                    <a href="javascript:void(0);" class="category__item  " title>
                        2023


                        <i class="icon icon-- icon-arrrow-right"></i>
                    </a>


                </div>
                <div class="category__line">
                    <a href="javascript:void(0);" class="category__item  " title>
                        2022


                        <i class="icon icon-- icon-arrrow-right"></i>
                    </a>


                </div>
                <div class="category__line">
                    <a href="javascript:void(0);" class="category__item  " title>
                        2021


                        <i class="icon icon-- icon-arrrow-right"></i>
                    </a>


                </div>
                <div class="category__line">
                    <a href="javascript:void(0);" class="category__item  " title>
                        2020


                        <i class="icon icon-- icon-arrrow-right"></i>
                    </a>


                </div>
                <div class="category__line">
                    <a href="javascript:void(0);" class="category__item  " title>
                        2019


                        <i class="icon icon-- icon-arrrow-right"></i>
                    </a>


                </div>
                <div class="category__line">
                    <a href="javascript:void(0);" class="category__item  " title>
                        2018


                        <i class="icon icon-- icon-arrrow-right"></i>
                    </a>


                </div>
                <div class="category__line">
                    <a href="javascript:void(0);" class="category__item  " title>
                        2017


                        <i class="icon icon-- icon-arrrow-right"></i>
                    </a>


                </div>
            </div>
        </div>
    </aside>
    <div class="container container--small">
        <div class="content">
            <div class="content__left-block">
                <div class="news-block">
                    <ul class="news-block__list">
                        @isset($news)
                            @foreach ($news as $article)
                                <li class="news-block__item">
                                    <picture class="news-block__picture">
                                        <img class="news-block__image" src="{{ 'storage/' . $article->required_image_path }}"
                                            alt width="392" height="237">
                                    </picture>
                                    <span class="news-block__info">
                                        <span class="news-block__date">{{ $article->published_at }}</span>
                                        <a href="{{ route('news.article', ['article' => $article['id']]) }}"
                                            class="news-block__title">
                                            <x-news.title :data="$article['title']" />
                                        </a>
                                        <span class="news-block__text"><x-news.content :data="$article['blocks']" :cutter="true" /></span>
                                    </span>
                                </li>
                            @endforeach
                        @else
                            @dump('no news found')
                        @endisset
                    </ul>
                    <div class="pagination">
                        <a href="javascript:void(0);" class="pagination__link pagination__link--prev" title><i
                                class="icon icon--undefined icon-pagination-arrow"></i></a>

                        <a href="javascript:void(0);" class="pagination__link active" title>1</a>
                        <a href="javascript:void(0);" class="pagination__link" title>2</a>
                        <a href="javascript:void(0);" class="pagination__link" title>3</a>
                        <a href="javascript:void(0);" class="pagination__link" title>4</a>
                        <a href="javascript:void(0);" class="pagination__link" title>5</a>

                        <a href="javascript:void(0);" class="pagination__link pagination__link--next" title><i
                                class="icon icon--undefined icon-pagination-arrow"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
