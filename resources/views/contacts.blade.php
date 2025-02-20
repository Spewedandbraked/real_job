@extends('layouts.main')
@section('title','Контакты')
@section('content')
    <div class="container container--small">
        <section class="contacts">
            <ul class="contacts__list">
                <li class="contacts__item">
                    <i class="icon icon--phone icon-phone"></i>
                    <h4 class="contacts__title">Телефон</h4>
                    <a class="contacts__link" href="tel:+74953339419" title="+7 (495) 333 9419">
                        +7 (495) 333 9419
                    </a>
                </li>
                <li class="contacts__item">
                    <i class="icon icon--mail icon-mail"></i>
                    <h4 class="contacts__title">Электронная почта</h4>
                    <a class="contacts__link" href="mailto:moexp_info@mosreg.ru" title="moexp_info@mosreg.ru">
                        moexp_info@mosreg.ru
                    </a>
                </li>
                <li class="contacts__item">
                    <i class="icon icon--pin icon-pin"></i>
                    <h4 class="contacts__title">адрес</h4>
                    <span class="contacts__info">Россия, 117342, Москва, ул.&nbsp;Обручева, дом&nbsp;46, к.&nbsp;&#8470;&nbsp;305</span>
                </li>
                <li class="contacts__item">
                    <i class="icon icon--clock icon-clock"></i>
                    <h4 class="contacts__title">График работы</h4>
                    <span class="contacts__info">ПН-ПТ 9:00–17:00</span>
                </li>
            </ul>
        </section>
        <div class="content">
            <div class="content__left-block">
                <h2 class="title title--h2">
                    Как проехать
                </h2>
                <div class="map">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa9130efdb0c04d3a2543e4f403c50782a22e969c45b9e02245a02da7242c7f97&source=constructor"
                        width="500" height="500" frameborder="0"></iframe>
                </div>
            </div>
            <div class="content__right-block content__right-block--feedback">
                <h2 class="title title--h2">
                    Задать вопрос
                </h2>
                <form class="feedback  js-form" autocomplete="off" novalidate="novalidate">
                    <div class="input">
                        <input class="input__input-field js-form-name" id="name" name="name" placeholder="ФИО" required
                               type="text">
                    </div>
                    <div class="feedback__columns">
                        <div class="input input--phone">
                            <input class="input__input-field js-form-phone" id="phone" name="phone"
                                   placeholder="+7 (999) 999-99-99" required type="tel">
                        </div>
                        <div class="input">
                            <input class="input__input-field js-form-mail" id="mail" name="mail"
                                   placeholder="Электронная почта" required type="email">
                        </div>
                    </div>
                    <div class="textarea">
                        <textarea class="textarea__textarea-field js-form-description" id="description"
                                  name="description" placeholder="текст сообщения" required></textarea>
                    </div>

                    <div class="checkbox">
                        <input class="checkbox__input" type="checkbox" id="check1" name="name" autocomplete="off"
                               checked="checked">
                        <label class="checkbox__name" for="check1">
    <span class="checkbox__text">

    Нажимая «Отправить», я подтверждаю свое согласие
    <a href="javascript:void(0);" title>на обработку моих персональных данных</a>

    </span>
                        </label>
                    </div>
                    <button class="button button--feedback">Отправить
                    </button>
                </form>
            </div>
        </div>
        <section class="time">

            <h2 class="title title--h2 title--time">
                часы приема
            </h2>

            <table class="timetable timetable--desktop">
                <thead class="timetable__head">
                <th class="timetable__hcell timetable__hcell--name"></th>
                <th class="timetable__hcell">Пн</th>
                <th class="timetable__hcell">Вт</th>
                <th class="timetable__hcell">Ср</th>
                <th class="timetable__hcell">Чт</th>
                <th class="timetable__hcell">Пт</th>
                <th class="timetable__hcell timetable__hcell--bright">Сб</th>
                <th class="timetable__hcell timetable__hcell--bright">Вс</th>
                </thead>
                <tbody class="timetable__body">
                <tr>
                    <td class="timetable__cell timetable__cell--name">Отдел приемки документанции и информатизации
                        экспертной деятельности управления государственной экспертизы
                    </td>
                    <td rowspan="5" class="timetable__cell timetable__cell--time">
                        09:00 - 12:00
                        <br>
                        12:45 - 17:00
                    </td>
                    <td rowspan="5" class="timetable__cell timetable__cell--time">
                        09:00 - 12:00
                        <br>
                        12:45 - 17:00
                    </td>
                    <td rowspan="5" class="timetable__cell timetable__cell--time">
                        09:00 - 12:00
                        <br>
                        12:45 - 17:00
                    </td>
                    <td rowspan="5" class="timetable__cell timetable__cell--time">
                        09:00 - 12:00
                        <br>
                        12:45 - 17:00
                    </td>
                    <td rowspan="4" class="timetable__cell timetable__cell--time">
                    </td>
                    <td class="timetable__cell timetable__cell--time">&nbsp;
                    </td>
                    <td class="timetable__cell timetable__cell--time">&nbsp;
                    </td>
                </tr>
                <tr>
                    <td class="timetable__cell timetable__cell--name">Экспертные отделы управления государственной
                        экспертизы
                    </td>
                    <td class="timetable__cell timetable__cell--time">&nbsp;
                    </td>
                    <td class="timetable__cell timetable__cell--time">&nbsp;
                    </td>
                </tr>
                <tr>
                    <td class="timetable__cell timetable__cell--name">Сметный отдел управления ценообразования в
                        строительстве
                    </td>
                    <td class="timetable__cell timetable__cell--time">&nbsp;
                    </td>
                    <td class="timetable__cell timetable__cell--time">&nbsp;
                    </td>
                </tr>
                <tr>
                    <td class="timetable__cell timetable__cell--name">Отдел по договорной работе</td>
                    <td class="timetable__cell timetable__cell--time">&nbsp;
                    </td>
                    <td class="timetable__cell timetable__cell--time">&nbsp;
                    </td>
                </tr>
                <tr>
                    <td class="timetable__cell timetable__cell--name">Другие структурные подразделения учреждения</td>
                    <td rowspan="4" class="timetable__cell timetable__cell--time">09:00 - 12:00<br>12:45 - 17:00</td>
                    <td class="timetable__cell timetable__cell--time">&nbsp;
                    </td>
                    <td class="timetable__cell timetable__cell--time">&nbsp;
                    </td>
                </tr>
                </tbody>
            </table>

            <table class="timetable timetable--mobile">
                <tbody class="timetable__body">
                <tr>
                    <td class="timetable__cell timetable__cell--name">Отдел приемки документанции и информатизации
                        экспертной деятельности управления государственной экспертизы
                    </td>
                    <td class="timetable__cell">
                        <span>ПН-чт 09:00 - 17:00</span>
                        <span>(12:00-12:45 перерыв)</span>
                        <span>ПТ, СБ, ВС - выходной</span>
                    </td>
                </tr>
                <tr>
                    <td class="timetable__cell timetable__cell--name">Экспертные отделы управления государственной
                        экспертизы
                    </td>
                    <td class="timetable__cell">
                        <span>ПН-чт 09:00 - 17:00</span>
                        <span>(12:00-12:45 перерыв)</span>
                        <span>ПТ, СБ, ВС - выходной</span>
                    </td>
                </tr>
                <tr>
                    <td class="timetable__cell timetable__cell--name">Сметный отдел управления ценообразования в
                        строительстве
                    </td>
                    <td class="timetable__cell">
                        <span>ПН-чт 09:00 - 17:00</span>
                        <span>(12:00-12:45 перерыв)</span>
                        <span>ПТ, СБ, ВС - выходной</span>
                    </td>
                </tr>
                <tr>
                    <td class="timetable__cell timetable__cell--name">Отдел по договорной работе</td>
                    <td class="timetable__cell">
                        <span>ПН-чт 09:00 - 17:00</span>
                        <span>(12:00-12:45 перерыв)</span>
                        <span>ПТ, СБ, ВС - выходной</span>
                    </td>
                </tr>
                <tr>
                    <td class="timetable__cell timetable__cell--name">Другие структурные подразделения учреждения</td>
                    <td class="timetable__cell">
                        <span>ПН-чт 09:00 - 17:00</span>
                        <span>(12:00-12:45 перерыв)</span>
                        <span>СБ, ВС - выходной</span>
                    </td>
                </tr>
                </tbody>
            </table>
        </section>
        <section class="title-block">

            <h2 class="title title--h2 title--nomargin">
                Аттестованные эксперты
            </h2>
            <a rel="noopener" class="button button--icon">
                <span>PDF</span>

            </a>

        </section>
        <section class="details">
            <section class="title-block title-block--columns">

                <div class="title-block__part">
                    <h2 class="title title--h2 title--nomargin">
                        Реквизиты
                    </h2>
                    <p class="title-block__text">Реквизиты ГАУ МО “Мособлгосэкспертиза” (25.10.2023&nbsp;г.)</p>
                </div>
                <div class="title-block__part title-block__part--row">
                    <button rel="noopener" class="button">
                        Копировать

                    </button>
                    <a rel="noopener" class="button button--icon">
                        <span>DOC</span>

                    </a>
                </div>

            </section>

            <ul class="details__list">
                <li class="details__item">
                    <span class="details__title">Полное наименование</span>
                    <span class="details__info">Государственное автономное учреждение Московской области «Московская областная государственная экспертиза»</span>
                </li>
                <li class="details__item">
                    <span class="details__title">Код отрасли по ОКОНХ</span>
                    <span class="details__info">69000</span>
                </li>
                <li class="details__item">
                    <span class="details__title">Сокращенное наименование</span>
                    <span class="details__info">ГАУ МО «Мособлогсэкспертиза»</span>
                </li>
                <li class="details__item">
                    <span class="details__title">Код организации по ОКПО</span>
                    <span class="details__info">55028505</span>
                </li>
                <li class="details__item">
                    <span class="details__title">Адрес места нахождения (юридический адрес)</span>
                    <span
                        class="details__info">143403, Московская область, г. Красногорск, ул. Речная, д. 25А, офис 35Б</span>
                </li>
                <li class="details__item">
                    <span class="details__title">Банк получателя</span>
                    <span class="details__info">ГУ Банка Росси по ЦФО/УФК по Московской области г. Москва</span>
                </li>
                <li class="details__item">
                    <span class="details__title">Фактический адрес</span>
                    <span class="details__info">117342, Москва, ул. Обручева, д. 46</span>
                </li>
                <li class="details__item">
                    <span class="details__title">БИК</span>
                    <span class="details__info">004525987</span>
                </li>
                <li class="details__item">
                    <span class="details__title">Телефон/факс</span>
                    <span class="details__info">+7 (495) 333 94 19</span>
                </li>
                <li class="details__item">
                    <span class="details__title">Номер счета получателя средств</span>
                    <span class="details__info">03224643460000004800</span>
                </li>
                <li class="details__item">
                    <span class="details__title">ИНН / КПП</span>
                    <span class="details__info">5041020693 / 502401001</span>
                </li>
                <li class="details__item">
                    <span class="details__title">Получатель</span>
                    <span class="details__info">Министерство экономики и&nbsp;финансов Московской области (МЭФ&nbsp;МО) (л/с 30008LШЩ440&nbsp;ГАУ МО &laquo;Мособлогэкспертиза&raquo;)</span>
                </li>
                <li class="details__item">
                    <span class="details__title">ОГРН</span>
                    <span class="details__info">1025005243340</span>
                </li>
                <li class="details__item">
                    <span class="details__title">Единый казначейский счет</span>
                    <span class="details__info">40102810845370000004</span>
                </li>
            </ul>

        </section>
    </div>
@endsection
