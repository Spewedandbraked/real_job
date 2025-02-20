@extends('layouts.main')

@section('title','Главная')

@section('content')
    <div class="container">
        <div class="news">
            <div class="news__main swiper mySwiper js-swiper">
                <a href="expertise-main.html" class="news__title news__title--main">
                    <img src="images/news/exp.svg">
                </a>
                <div class="news__slider swiper-wrapper">
                    <a class="news__slide swiper-slide" href="news-detail.html">
                        <picture class="news__picture">
                            <source srcset="images/news/mobile.png" alt="fff" media="(max-width: 767px)">
                            <img src="images/news/news.png" alt="fff">
                        </picture>
                        <div class="news__block">
                            <p class="news__text news__text--main">МОГЭ КООРДИНИРУЕТ ПЕРЕХОД НА РИМ</p>
                            <p class="news__date news__date--main">06.12.2024</p>
                        </div>
                    </a><a class="news__slide swiper-slide" href="news-detail.html">
                        <picture class="news__picture">
                            <source srcset="images/news/img-4.png" alt="fff" media="(max-width: 767px)">
                            <img src="images/news/img-4-b.png" alt="fff">
                        </picture>
                        <div class="news__block">
                            <p class="news__text news__text--main">ПРОЕКТ МКД ПО ПРОГРАММЕ РАССЕЛЕНИЯ АВАРИЙНОГО ФОНДА В
                                ШАТУРСКОМ Г.О.</p>
                            <p class="news__date news__date--main">24.01.2024</p>
                        </div>
                    </a><a class="news__slide swiper-slide" href="news-detail.html">
                        <picture class="news__picture">
                            <source srcset="images/news/img-3.png" alt="fff" media="(max-width: 767px)">
                            <img src="images/news/img-3-b.png" alt="fff">
                        </picture>
                        <div class="news__block">
                            <p class="news__text news__text--main">ЦИМ-КАБИНЕТ МОГЭ СТАЛ ВАЖНЫМ ИНСТРУМЕНТОМ ПОВЫШЕНИЯ
                                ЭФФЕКТИВНОСТИ ЭКСПЕРТИЗЫ ЦИФРОВЫХ МОДЕЛЕЙ</p>
                            <p class="news__date news__date--main">24.01.2024</p>
                        </div>
                    </a>
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
                <div class="news-archive">
                    <ul class="news-archive__list">
                        <li class="news-archive__item">
                            <a href="news-detail.html" class="news-archive__link">
                        <span class="news-archive__title">

                            21.03.2023
                        </span>
                                <span class="news-archive__text">Выпущено положительное заключение к&nbsp;проектной документации на&nbsp;строительство поликлиники смешанного типа</span>
                            </a>
                        </li>
                        <li class="news-archive__item">
                            <a href="news-detail.html" class="news-archive__link">
                        <span class="news-archive__title">

                            07.11.2024
                        </span>
                                <span class="news-archive__text">Информация директора ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo; о&nbsp;сроках завершения оказания услуг в&nbsp;2024 году</span>
                            </a>
                        </li>
                        <li class="news-archive__item">
                            <a href="news-detail.html" class="news-archive__link">
                        <span class="news-archive__title">

                            25.10.2024
                        </span>
                                <span class="news-archive__text">Состоялось очередное заседание Московской областной комиссии по&nbsp;индексации цен и&nbsp;ценообразованию в&nbsp;строительстве</span>
                            </a>
                        </li>
                        <li class="news-archive__item">
                            <a href="news-detail.html" class="news-archive__link">
                        <span class="news-archive__title">

                            21.03.2023
                        </span>
                                <span class="news-archive__text">Опубликована информация по&nbsp;подготовке к&nbsp;переходу на&nbsp;ресурсно-индексный метод определения стоимости строительства</span>
                            </a>
                        </li>
                        <li class="news-archive__item">
                            <a href="news-detail.html" class="news-archive__link">
                        <span class="news-archive__title">
                            <mark>Анонс.</mark>
                            состоится семинар для сметчиков
                        </span>
                                <span class="news-archive__text">Приглашаем всех желающих принять участие в&nbsp;вебинарах, которые проходят еженедельно по&nbsp;пятницам в&nbsp;11.00&nbsp;часов.</span>
                            </a>
                        </li>
                        <li class="news-archive__item">
                            <a href="news-detail.html" class="news-archive__link">
                        <span class="news-archive__title">

                            21.03.2023
                        </span>
                                <span class="news-archive__text">Опубликована информация по&nbsp;подготовке к&nbsp;переходу на&nbsp;ресурсно-индексный метод определения стоимости строительства</span>
                            </a>
                        </li>
                        <li class="news-archive__item">
                            <a href="news-detail.html" class="news-archive__link">
                        <span class="news-archive__title">

                            21.03.2023
                        </span>
                                <span class="news-archive__text">Опубликована информация по&nbsp;подготовке к&nbsp;переходу на&nbsp;ресурсно-индексный метод определения стоимости строительства</span>
                            </a>
                        </li>
                        <li class="news-archive__item">
                            <a href="news.html" class="news-archive__link">
                                Продолжение новостей
                                <i class="icon icon--arrow-nav icon-arrow-nav"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <ul class="service">
            <li class="service__item">
                <a href="expertise-main.html" class="service__link" target="_blank">
                    <i class="icon icon--service icon-menu-main"></i>
                    <span class="service__text">
                        <span class="service__name">ЭКСПЕРТИЗА</span>
                        <span
                            class="service__addition">проектной документации<br>и результатов инженерных изысканий</span>
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
                <a href="javascript:void(0);" class="company__link" target="_blank">
                    <picture class="company__picture">
                        <img class="company__image" src="images/company/img.png" alt width="74" height="74">
                    </picture>
                    <span class="company__name">Правительство Московской области</span>
                </a><a href="javascript:void(0);" class="company__link" target="_blank">
                    <picture class="company__picture">
                        <img class="company__image" src="images/company/img-2.png" alt width="74" height="74">
                    </picture>
                    <span class="company__name">Министерство экономики и финансов Московской области</span>
                </a><a href="javascript:void(0);" class="company__link" target="_blank">
                    <picture class="company__picture">
                        <img class="company__image" src="images/company/img-3.png" alt width="74" height="74">
                    </picture>
                    <span class="company__name">Главгосэкспертиза России</span>
                </a><a href="javascript:void(0);" class="company__link" target="_blank">
                    <picture class="company__picture">
                        <img class="company__image" src="images/company/img-4.png" alt width="74" height="74">
                    </picture>
                    <span class="company__name">Минстрой Московской  области</span>
                </a><a href="javascript:void(0);" class="company__link" target="_blank">
                    <picture class="company__picture">
                        <img class="company__image" src="images/company/img-2.png" alt width="74" height="74">
                    </picture>
                    <span class="company__name">Минжилполитики Московской области</span>
                </a><a href="javascript:void(0);" class="company__link" target="_blank">
                    <picture class="company__picture">
                        <img class="company__image" src="images/company/img-5.png" alt width="74" height="74">
                    </picture>
                    <span class="company__name">Ассоциация экспертиз России</span>
                </a><a href="javascript:void(0);" class="company__link" target="_blank">
                    <picture class="company__picture">
                        <img class="company__image" src="images/company/img-6.png" alt width="74" height="74">
                    </picture>
                    <span class="company__name">Стройнадзор Московской области</span>
                </a><a href="javascript:void(0);" class="company__link" target="_blank">
                    <picture class="company__picture">
                        <img class="company__image" src="images/company/img-7.png" alt width="74" height="74">
                    </picture>
                    <span class="company__name">Мособлархитектура</span>
                </a><a href="javascript:void(0);" class="company__link" target="_blank">
                    <picture class="company__picture">
                        <img class="company__image" src="images/company/img-8.png" alt width="74" height="74">
                    </picture>
                    <span class="company__name">Минтранс Московской области</span>
                </a><a href="javascript:void(0);" class="company__link" target="_blank">
                    <picture class="company__picture">
                        <img class="company__image" src="images/company/img-9.png" alt width="74" height="74">
                    </picture>
                    <span class="company__name">МинЖКХ Московской области</span>
                </a>
            </div>
        </div>
    </div>
@endsection
