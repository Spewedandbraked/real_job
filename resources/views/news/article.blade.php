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
                    <source srcset="{{ 'storage/' . $article->required_image_path }}">
                    <img src="{{ 'storage/' . $article->required_image_path }}" alt width height>
                </picture>
                <div class="article">
                    <h2><x-news.title :data="$article['title']" /></h2>
                    @foreach ($article['blocks'] as $key => $block)
                        @switch($block['type'])
                            @case('Image')
                                <picture class="content__picture">
                                    <source srcset="{{ 'storage/' . $block['data']['image_path'] }}">
                                    <img src="{{ 'storage/' . $block['data']['image_path'] }}" alt width height>
                                </picture>
                            @break

                            @case('Content')
                                <?php $out[0] = $article['blocks'][$key]; ?>
                                <div class="article__text article__text--cols">
                                    <x-news.content :data="$out" />
                                </div>
                            @break

                            @case('Цитата (BlockQuote)')
                                <blockquote>{{$block['data']['quote']}}</blockquote>
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
                        <li class="news-archive__item">
                            <a href="news-detail.html" class="news-archive__link">
                                <span class="news-archive__title">

                                    21.03.2023
                                </span>
                                <span class="news-archive__text">Выпущено положительное заключение к&nbsp;проектной
                                    документации на&nbsp;строительство поликлиники смешанного типа</span>
                            </a>
                        </li>
                        <li class="news-archive__item">
                            <a href="news-detail.html" class="news-archive__link">
                                <span class="news-archive__title">

                                    07.11.2024
                                </span>
                                <span class="news-archive__text">Информация директора ГАУ
                                    МО&nbsp;&laquo;Мособлгосэкспертиза&raquo; о&nbsp;сроках завершения оказания услуг
                                    в&nbsp;2024 году</span>
                            </a>
                        </li>
                        <li class="news-archive__item">
                            <a href="news-detail.html" class="news-archive__link">
                                <span class="news-archive__title">

                                    25.10.2024
                                </span>
                                <span class="news-archive__text">Состоялось очередное заседание Московской областной
                                    комиссии по&nbsp;индексации цен и&nbsp;ценообразованию в&nbsp;строительстве</span>
                            </a>
                        </li>
                        <li class="news-archive__item">
                            <a href="news-detail.html" class="news-archive__link">
                                <span class="news-archive__title">

                                    21.03.2023
                                </span>
                                <span class="news-archive__text">Опубликована информация по&nbsp;подготовке к&nbsp;переходу
                                    на&nbsp;ресурсно-индексный метод определения стоимости строительства</span>
                            </a>
                        </li>
                        <li class="news-archive__item">
                            <a href="news-detail.html" class="news-archive__link">
                                <span class="news-archive__title">
                                    <mark>Анонс.</mark>
                                    состоится семинар для сметчиков
                                </span>
                                <span class="news-archive__text">Приглашаем всех желающих принять участие в&nbsp;вебинарах,
                                    которые проходят еженедельно по&nbsp;пятницам в&nbsp;11.00&nbsp;часов.</span>
                            </a>
                        </li>
                        <li class="news-archive__item">
                            <a href="news-detail.html" class="news-archive__link">
                                <span class="news-archive__title">

                                    21.03.2023
                                </span>
                                <span class="news-archive__text">Опубликована информация по&nbsp;подготовке к&nbsp;переходу
                                    на&nbsp;ресурсно-индексный метод определения стоимости строительства</span>
                            </a>
                        </li>
                        <li class="news-archive__item">
                            <a href="news-detail.html" class="news-archive__link">
                                <span class="news-archive__title">

                                    21.03.2023
                                </span>
                                <span class="news-archive__text">Опубликована информация по&nbsp;подготовке к&nbsp;переходу
                                    на&nbsp;ресурсно-индексный метод определения стоимости строительства</span>
                            </a>
                        </li>
                        <li class="news-archive__item">
                            <a href="{{ route('news.index')}}" class="news-archive__link">
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
