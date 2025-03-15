@extends('layouts.main')

@section('title', 'Главная')

@section('content')
    <div class="container">
        <div class="news">
            <div class="news__main swiper mySwiper js-swiper">
                <a href="expertise-main.html" class="news__title news__title--main">
                    <img src="images/news/exp.svg">
                </a>
                <div class="news__slider swiper-wrapper">
                    @foreach ($slider_news as $article)
                        <a class="news__slide swiper-slide" href="{{ route('news.article', ['article' => $article['id']]) }}">
                            <picture class="news__picture">
                                <source srcset="{{ 'storage/' . $article->required_image_path }}" alt="fff"
                                    media="(max-width: 767px)">
                                <img src="{{ 'storage/' . $article->required_image_path }}" alt="fff">
                            </picture>
                            <div class="news__block">
                                <x-news.title :data="$article['title']" />
                                <p class="news__date news__date--main">
                                    {{ Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $article->created_at)->format('d.m.Y') }}
                                </p>
                            </div>
                        </a>
                    @endforeach
                </div>
                <div class="slider-pagination">
                    <div class="slider-pagination__prev swiper-button-prev">
                        <i class="icon icon--prev icon-arrow-nav"></i>
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-pagination2"></div>
                    <div class="slider-pagination__next swiper-button-next">
                        <i class="icon icon--next icon-arrow-nav"></i>
                    </div>
                </div>
            </div>
            <div class="news__all">
                <x-news-archive-list :news="$news" />
            </div>
        </div>
        <ul class="service">
            <li class="service__item">
                <a href="expertise-main.html" class="service__link" target="_blank">
                    <i class="icon icon--service icon-menu-main"></i>
                    <span class="service__text">
                        <span class="service__name">ЭКСПЕРТИЗА</span>
                        <span class="service__addition">проектной документации<br>и результатов инженерных изысканий</span>
                    </span>
                    <i class="icon icon--arrow-nav icon-arrow-nav"></i>
                </a>
            </li>
            <li class="service__item">
                <a href="pricing-main.html" class="service__link" target="_blank">
                    <i class="icon icon--service icon-menu-main"></i>
                    <span class="service__text">
                        <span class="service__name">ЦЕНООБРАЗОВАНИЕ</span>
                        <span class="service__addition">и сметное нормирование<br>в строительстве</span>
                    </span>
                    <i class="icon icon--arrow-nav icon-arrow-nav"></i>
                </a>
            </li>
            <li class="service__item">
                <a href="models-main.html" class="service__link" target="_blank">
                    <i class="icon icon--service icon-menu-main"></i>
                    <span class="service__text">
                        <span class="service__name">МОДЕЛИ</span>
                        <span class="service__addition">информации в проектировании<br>и строительстве</span>
                    </span>
                    <i class="icon icon--arrow-nav icon-arrow-nav"></i>
                </a>
            </li>
            <li class="service__item">
                <a href="audit-main.html" class="service__link" target="_blank">
                    <i class="icon icon--service icon-menu-main"></i>
                    <span class="service__text">
                        <span class="service__name">АУДИТ</span>
                        <span class="service__addition">ИНВЕСТИЦИОННЫХ<br>ПРОЕКТОВ</span>
                    </span>
                    <i class="icon icon--arrow-nav icon-arrow-nav"></i>
                </a>
            </li>
        </ul>
        <div class="company">
            <div class="company__list">
                @foreach ($icons as $icon)
                    <a href="{{$icon->link}}" class="company__link" target="_blank">
                        <picture class="company__picture">
                            <img class="company__image" src="{{ 'storage/' . $icon->image }}" alt width="74" height="74">
                        </picture>
                        <span class="company__name">{{$icon->title}}</span>
                    </a>
                @endforeach
            </div>
        </div>
    </div>
@endsection
