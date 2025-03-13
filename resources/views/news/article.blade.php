@extends('layouts.main')
@section('title', 'Новость')
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
                <picture class="content__picture">
                    <source srcset="{{ asset('storage/' . $article->required_image_path) }}">
                    <img src="{{ asset('storage/' . $article->required_image_path) }}" alt width height>
                </picture>
                <div class="article">
                    <h2><x-news.title :data="$article['title']" /></h2>
                    @foreach ($article['blocks'] as $key => $block)
                        @switch($block['type'])
                            @case('Image')
                                <picture class="content__picture">
                                    <source srcset="{{ asset('storage/' . $block['data']['image_path']) }}">
                                    <img src="{{ asset('storage/' . $block['data']['image_path']) }}" alt width height>
                                </picture>
                            @break

                            @case('Content')
                                <?php $out[0] = $article['blocks'][$key]; ?>
                                <div class="article__text article__text--cols">
                                    <x-news.content :data="$out" />
                                </div>
                            @break

                            @case('Цитата (BlockQuote)')
                                <blockquote>{{ $block['data']['quote'] }}</blockquote>
                            @break

                            @default
                                @dump($block['type'])
                        @endswitch
                    @endforeach
                </div>
            </div>
            <div class="content__right-block">
                <div class="news-archive">
                    <ul class="news-archive__list">
                        @foreach ($news as $article)
                            <li class="news-archive__item">
                                <a href="{{ route('news.article', ['article' => $article['id']]) }}"
                                    class="news-archive__link">
                                    <span class="news-archive__title">
                                        {{ $article['published_at'] }}
                                    </span>
                                    <span class="news-archive__text"><x-news.content :data="$article['blocks']"
                                            :cutter="true" /></span>
                                </a>
                            </li>
                        @endforeach
                        {{-- <li class="news-archive__item">
                            <a href="news-detail.html" class="news-archive__link">
                                <span class="news-archive__title">
                                    <mark>Анонс.</mark>
                                    состоится семинар для сметчиков
                                </span>
                                <span class="news-archive__text">Приглашаем всех желающих принять участие в&nbsp;вебинарах,
                                    которые проходят еженедельно по&nbsp;пятницам в&nbsp;11.00&nbsp;часов.</span>
                            </a>
                        </li> --}}
                        <li class="news-archive__item">
                            <a href="{{ route('news.index') }}" class="news-archive__link">
                                Продолжение новостей
                                <i class="icon icon--arrow-nav icon-arrow-nav"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
@endsection
