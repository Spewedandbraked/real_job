@extends('layouts.main')
@section('title','Услуги')
@section('content')
    <main class="main">

        <aside class="aside">
            <div class="category js-list">
                <button aria-label class="category__text js-button">
                    УСЛУГИ
                    <span>
            <i class="icon icon--undefined icon-arrrow-down"></i>
        </span>
                </button>
                <div class="category__list js-scroll ">
                    <div class="category__line">
                        <a href="services.html" class="category__item category__item--main active" title>
                            УСЛУГИ


                            <i class="icon icon-- icon-arrrow-right"></i>
                        </a>


                    </div><div class="category__line">
                        <a href="examination-services.html" class="category__item  " title>
                            Услуги в области государственной экспертизы


                            <i class="icon icon-- icon-arrrow-right"></i>
                        </a>


                    </div><div class="category__line">
                        <a href="pricing-services.html" class="category__item  " title>
                            Услуги в области ценообразования и сметного нормирования


                            <i class="icon icon-- icon-arrrow-right"></i>
                        </a>


                    </div><div class="category__line">
                        <a href="audit.html" class="category__item  " title>
                            Технологический и ценовой аудит публичных инвестиционных проектов


                            <i class="icon icon-- icon-arrrow-right"></i>
                        </a>


                    </div><div class="category__line">
                        <a href="non-governmental-expertise.html" class="category__item  " title>
                            Негосударственная экспертиза проектной документации  и результатов инженерных изысканий


                            <i class="icon icon-- icon-arrrow-right"></i>
                        </a>


                    </div><div class="category__line">
                        <a href="javascript:void(0);" class="category__item  " title download="true" target="_blank">
                            Порядок  заключения договоров с пользователями услуг


                            <span>pdf</span>
                        </a>


                    </div><div class="category__line">
                        <a href="mobile-app.html" class="category__item  " title>
                            Мобильное приложение для заявителей ИС ГАУ МО "Мособлгосэкспертиза"


                            <i class="icon icon-- icon-arrrow-right"></i>
                        </a>


                    </div>
                </div>
            </div>
        </aside>
        <div class="container container--small">
            <div class="content">
                <div class="preview">
                    <div class="preview__main">
                        <a href="javascript:void(0);" class="preview__title preview__title--main">
                            <img src="images/news/exp.svg">
                        </a>
                        <div class="preview__slider">
                            <div class="preview__slide">
                                <picture class="preview__picture">
                                    <source srcset="images/servises/image_1.jpg" alt media="(max-width: 767px)">
                                    <source srcset="images/servises/image_1.webp" alt media="(min-width: 768px)" type="image/webp">
                                    <img src="images/servises/image_1.jpg" alt>
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
@endsection
