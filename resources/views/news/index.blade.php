@extends('layouts.main')
@section('title','Новости')
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
                        <li class="news-block__item">
                            <picture class="news-block__picture">
                                <img class="news-block__image" src="images/newslist/img-5.png" alt width="392"
                                     height="237">
                            </picture>
                            <span class="news-block__info">
                        <span class="news-block__date">27.11.2024</span>
                        <a href="news-detail.html" class="news-block__title">
                            <span class="news-block__part">ОДОБРЕНО МОГЭ:</span>
                            РЕКОНСТРУКЦИЯ КЛИНСКОЙ ШКОЛЫ ОЛИМПИЙСКОГО РЕЗЕРВА
                        </a>
                        <span class="news-block__text">ГАУ Московской области «Мособлгосэкспертиза» выпустило положительное заключение на проектную документацию по реконструкции Муниципального автономного учреждения городского округа Клин «Клинская спортивная школа олимпийского резерва».</span>
                    </span>
                        </li>
                        <li class="news-block__item">
                            <picture class="news-block__picture">
                                <img class="news-block__image" src="images/newslist/img-6.png" alt width="392"
                                     height="237">
                            </picture>
                            <span class="news-block__info">
                        <span class="news-block__date">27.11.2024</span>
                        <a href="news-detail.html" class="news-block__title">
                            <span class="news-block__part"></span>
                            ПРОЕКТИРОВАНИЕ СОЦИАЛЬНЫХ ОБЪЕКТОВ — ПОД КОНТРОЛЕМ МОСОБЛГОСЭКСПЕРТИЗЫ
                        </a>
                        <span class="news-block__text">7 ноября в ГАУ МO «Мособлгосэкспертиза» под председательством заместителя директора МОГЭ О. Г. Валова прошло совещание «Объекты, включенные в инвестиционные программы Московской области, со сроком сдачи в эксплуатацию в 2024 году и сроком завершения ПИР в 2024 году».</span>
                    </span>
                        </li>
                        <li class="news-block__item">
                            <picture class="news-block__picture">
                                <img class="news-block__image" src="images/newslist/img-7.png" alt width="392"
                                     height="237">
                            </picture>
                            <span class="news-block__info">
                        <span class="news-block__date">27.11.2024</span>
                        <a href="news-detail.html" class="news-block__title">
                            <span class="news-block__part"></span>
                            ПРОЕКТИРОВАНИЕ СОЦИАЛЬНЫХ ОБЪЕКТОВ — ПОД КОНТРОЛЕМ МОСОБЛГОСЭКСПЕРТИЗЫ
                        </a>
                        <span class="news-block__text">7 ноября в ГАУ МO «Мособлгосэкспертиза» под председательством заместителя директора МОГЭ О. Г. Валова прошло совещание «Объекты, включенные в инвестиционные программы Московской области, со сроком сдачи в эксплуатацию в 2024 году и сроком завершения ПИР в 2024 году».</span>
                    </span>
                        </li>
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
