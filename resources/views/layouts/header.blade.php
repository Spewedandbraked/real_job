<header class="header" id="header">
    <a href="/" class="logo logo--header">
        <picture class="logo__picture">
            <source srcset="images/logo-big.png" media="(min-width: 1648px)">
            <img class="logo__image" src="images/logo-min.png" alt="На главную" aria-label="Main" width="482"
                 height="84">
        </picture>
    </a>
    <button class="burger js-burger" aria-label="Открыть меню">
        <span class="burger__line"></span>
    </button>
    <div class="header__burger js-burger-list">
        <button class="button button--burger js-burger" aria-label="Закрыть меню">
            <i class="icon icon--burger icon-close"></i>
        </button>
        <div class="header__inner">
            <a href="javascript:void(0);" class="link link--lk">
                Личный кабинет

                <i class="icon icon--burger-arrow icon-burger-arrow"></i>

            </a>
            <a href="javascript:void(0);" class="link link--eye">
                <i class="icon icon--eye icon-eye"></i>
                <span class="link__inner">Версия для слабовидящих</span>

            </a>
            <div class="search js-search-wrapper search--header">
                <div class="search__preview js-search-preview">
                    <i class="icon icon--search icon-search"></i>
                    <span class="search__preview-text">Поиск</span>
                </div>
                <form class="search__form">
                    <div class="input input--search">
                        <input class="input__input-field" id="search" name="search" placeholder="Поиск" type="search">
                    </div>
                    <button class="button button--bright button--search button--absolute js-button-search">
                        Найти

                    </button>
                </form>
            </div>
            <div class="social social--header">

                <a href="tel:+74953339419" class="link link--phone">+7(495)333-94-19
                </a>


                <div class="social__list">
                    <a href="javascript:void(0);" class="social__link" target="_blank">
                        <img class="social__image" src="images/social/vk.svg" alt width="32" height="32">
                    </a><a href="javascript:void(0);" class="social__link" target="_blank">
                        <img class="social__image" src="images/social/tg.svg" alt width="32" height="32">
                    </a><a href="javascript:void(0);" class="social__link" target="_blank">
                        <img class="social__image" src="images/social/ok.svg" alt width="32" height="32">
                    </a><a href="javascript:void(0);" class="social__link" target="_blank">
                        <img class="social__image" src="images/social/ru.svg" alt width="32" height="32">
                    </a><a href="javascript:void(0);" class="social__link" target="_blank">
                        <img class="social__image" src="images/social/smth.svg" alt width="32" height="32">
                    </a>
                </div>
            </div>
            <div class="navigation">
                <div class="navigation__inner">
                    <div class="navigation__item">
                        <a class="navigation__link " href="{{route('content.index')}}" title="Об учреждении">
                            Об учреждении
                            <i class="icon icon--burger-arrow icon-burger-arrow"></i>
                        </a>
                    </div>
                    <div class="navigation__item">
                        <a class="navigation__link " href="{{route('services.index')}}" title="Услуги">
                            Услуги
                            <i class="icon icon--burger-arrow icon-burger-arrow"></i>
                        </a>
                    </div>
                    <div class="navigation__item">
                        <a class="navigation__link " href="{{route('docs.index')}}" title="Документы">
                            Документы
                            <i class="icon icon--burger-arrow icon-burger-arrow"></i>
                        </a>
                    </div>
                    <div class="navigation__item">
                        <a class="navigation__link " href="{{route('contacts.index')}}" title="Контакты">
                            Контакты
                            <i class="icon icon--burger-arrow icon-burger-arrow"></i>
                        </a>
                    </div>
                    <div class="navigation__item">
                        <a class="navigation__link " href="{{route('news.index')}}" title="Новости">
                            Новости
                            <i class="icon icon--burger-arrow icon-burger-arrow"></i>
                        </a>
                    </div>
                </div>

            </div>
            <a href="javascript:void(0);" class="link link--tech">Техническая поддержка
            </a>
        </div>
    </div>
</header>
