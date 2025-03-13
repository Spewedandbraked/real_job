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
                <?php
                $a = now()->year;
                ?>
                @while ($a > 2016)
                    <form method="POST" action="{{ route('news.date') }}" class="p-1">
                        @csrf
                        <div class="category__line">
                            <input type="hidden" name="date" value="{{ $a }}">
                            <a href="javascript:void(0);" class="category__item {{ $year == $a ? 'active' : null }}" title
                                onclick="this.closest('form').submit();return false;">
                                {{ $a }}
                                <i class="icon icon-- icon-arrrow-right"></i>
                            </a>
                        </div>
                    </form>
                    <?php
                    $a--;
                    ?>
                @endwhile
            </div>
        </div>
    </aside>
    <div class="container container--small">
        @isset($article)
            <div class="content">
                <div class="content__left-block">
                    <picture class="content__picture">
                        <source srcset="{{ asset('storage/' . $article->required_image_path) }}">
                        <img src="{{ asset('storage/' . $article->required_image_path) }}" alt width height>
                    </picture>
                    <div class="article">
                        <h2><x-news.title :data="$article['title']" /></h2>
                        <x-blocks :blocks="$article['blocks']" />
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
        @else
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
                                            <span class="news-block__text"><x-news.content :data="$article['blocks']"
                                                    :cutter="true" /></span>
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
        @endisset
    </div>
@endsection
