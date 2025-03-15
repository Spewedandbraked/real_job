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
                    <a href="{{ route('news.index') }}" class="category__item category__item--main active" title>
                        Новости


                        <i class="icon icon-- icon-arrrow-right"></i>
                    </a>


                </div>
                <?php
                $a = now()->year;
                ?>
                @while ($a > 2016)
                    <div class="category__line">
                        <input type="hidden" name="date" value="{{ $a }}">
                        <a href="{{ route('news.index', ['year' => $a]) }}"
                            class="category__item {{ ($year ?? null) == $a ? 'active' : null }}" title>
                            {{ $a }}
                            <i class="icon icon-- icon-arrrow-right"></i>
                        </a>
                    </div>
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
                    <x-news-archive-list :news="$news" />
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
                                            <span
                                                class="news-block__date">{{ Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $article->created_at)->format('d.m.Y') }}</span>
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
                            @if ($news->currentPage() > 1)
                                <a href="{{ $news->previousPageUrl() }}" class="pagination__link pagination__link--prev"
                                    title><i class="icon icon--undefined icon-pagination-arrow"></i></a>
                            @endif
                            <?php
                            $b = $c = $news->currentPage();
                            $c += 5;
                            $news->lastPage() == 1 ? ($forbidden = true) : ($forbidden = false);
                            ?>
                            @while ($b <= $news->lastPage() && ($b < $c) & !$forbidden)
                                <a href="{{ route('news.index', ['year' => $year ?? null, 'page' => $b]) }}"
                                    class="pagination__link {{ $news->currentPage() == $b ? 'active' : null }}"
                                    title>{{ $b }}</a>
                                <?php $b++; ?>
                            @endwhile
                            @if ($news->currentPage() < $news->lastPage())
                                <a href="javascript:void(0);" class="pagination__link pagination__link--next" title><i
                                        class="icon icon--undefined icon-pagination-arrow"></i></a>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        @endisset
    </div>
@endsection
