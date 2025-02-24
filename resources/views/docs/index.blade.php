@extends('layouts.main')
@section('title','Документы')
@section('content')
    <aside class="aside">
        <div class="category js-list">
            <button aria-label class="category__text js-button">
                Документы
                <span>
            <i class="icon icon--undefined icon-arrrow-down"></i>
        </span>
            </button>
            <div class="category__list js-scroll ">
                <div class="category__line">
                    <a href="doc.html" class="category__item category__item--main active" title>
                        Документы


                        <i class="icon icon-- icon-arrrow-right"></i>
                    </a>


                </div>
                <div class="category__line">
                    <a href="registers-conclusions.html" class="category__item  " title>
                        Реестры заключений


                        <i class="icon icon-- icon-arrrow-right"></i>
                    </a>


                </div>
                <div class="category__line">
                    <a href="regulations.html" class="category__item  " title>
                        Регламенты оказания услуг


                        <i class="icon icon-- icon-arrrow-right"></i>
                    </a>


                </div>
                <div class="category__line">
                    <a href="reference.html" class="category__item  " title>
                        Нормативно-методические и справочные документы


                        <i class="icon icon-- icon-arrrow-right"></i>
                    </a>


                </div>
                <div class="category__line">
                    <a href="samples.html" class="category__item  " title>
                        Образцы документов пользователя услуг


                        <i class="icon icon-- icon-arrrow-right"></i>
                    </a>


                </div>
                <div class="category__line">
                    <a href="documents.html" class="category__item  " title>
                        Учредительные документы ГАУ МО «Мособлгосэкспертиза»


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
                                <source srcset="images/doc/image.png" alt media="(max-width: 767px)">
                                <source srcset="images/doc/image.webp" alt media="(min-width: 768px)" type="image/webp">
                                <img src="images/doc/image.png" alt>
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
