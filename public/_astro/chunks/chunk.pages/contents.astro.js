import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunk.astro.js';
import { a as $$BaseLayout } from './Gui.astro.js';
import { $ as $$CategoryList } from './assessment-services.astro.js';
import { $ as $$ContentSlider } from './construction.astro.js';
import 'html-escaper';
/* empty css              *//* empty css              *//* empty css                            *//* empty css            *//* empty css                 *//* empty css                     */
const $$Astro = createAstro();
const $$Contents = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contents;
  const pageTitle = "\u041A\u043E\u043D\u0442\u0435\u043D\u0442\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430";
  const category = {
    text: "\u041E\u0431 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0438",
    list: [
      {
        href: "javascript:void(0);",
        text: "\u041E\u0431 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0438",
        main: true,
        active: true
      },
      {
        href: "javascript:void(0);",
        text: "\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E"
      },
      {
        href: "javascript:void(0);",
        text: "\u041D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0441\u043E\u0432\u0435\u0442"
      },
      {
        href: "javascript:void(0);",
        text: "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430"
      },
      {
        href: "javascript:void(0);",
        pdf: true,
        text: "\u0410\u0442\u0442\u0435\u0441\u0442\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u044B"
      },
      {
        href: "javascript:void(0);",
        text: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F"
      },
      {
        href: "javascript:void(0);",
        text: "\u0423\u0447\u0440\u0435\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B"
      },
      {
        href: "javascript:void(0);",
        pdf: true,
        text: "\u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u0435"
      },
      {
        href: "javascript:void(0);",
        text: "\u041E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442\u044C"
      },
      {
        href: "javascript:void(0);",
        text: "\u0411\u043E\u0440\u044C\u0431\u0430 \u0441 \u043A\u043E\u0440\u0440\u0443\u043F\u0446\u0438\u0435\u0439"
      },
      {
        href: "javascript:void(0);",
        text: "\u0417\u0430\u043A\u0443\u043F\u043A\u0438"
      },
      {
        href: "javascript:void(0);",
        text: "\u041F\u0440\u043E\u0442\u0438\u0432\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0442\u0435\u0440\u0440\u043E\u0440\u0438\u0437\u043C\u0443 \u0438 \u044D\u043A\u0441\u0442\u0440\u0435\u043C\u0438\u0437\u043C\u0443"
      },
      {
        href: "javascript:void(0);",
        text: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432, \u043F\u0440\u043E\u0448\u0435\u0434\u0448\u0438\u0445 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0443 \u0432 \u0413\u0410\u0423 \u041C\u041E \xAB\u041C\u043E\u0441\u043E\u0431\u043B\u0433\u043E\u0441\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430\xBB"
      },
      {
        href: "javascript:void(0);",
        text: "\u0412\u0438\u0434\u0435\u043E\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B"
      }
    ]
  };
  const slider = [
    {
      big: true,
      webp: "images/content/image_3.webp",
      img: "images/content/image_3.jpg"
    },
    {
      small: true,
      webp: "images/content/image_4.webp",
      img: "images/content/image_4.jpg"
    },
    {
      small: true,
      webp: "images/content/image_5.webp",
      img: "images/content/image_5.jpg"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead()}<aside class="aside">
        ${renderComponent($$result2, "CategoryList", $$CategoryList, { "category": category })}
    </aside>
    <div class="container container--small">
        <div class="content">
            <div class="content__left-block">
                <!-- Заголовок (XP_Price) -->
                <div class="article">
                    <h1>Переход на ресурсно-индексный метод</h1>
                    <picture>
                        <source srcset="images/content/image_3.webp">
                        <img src="images/content/image_3.jpg" alt="" width="" height="">
                    </picture>
                    <h3>Управление ценообразования в&nbsp;строительстве является самостоятельным структурным подразделением, входящим в&nbsp;состав ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo;</h3>
                    <div class="article__text article__text--cols">
                        <p>За&nbsp;прошедшее с&nbsp;момента образования годы ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo; стало одним из&nbsp;самых успешных и&nbsp;динамично развивающихся предприятий строительного комплекса Московской области. В&nbsp;настоящее время в&nbsp;учреждении создана структура для выполнения единой государственной экспертизы проектной документации. В&nbsp;государственном учреждении работают 92&nbsp;специалистов-экспертов, занятых проведением государственной экспертизы проектной документации и&nbsp;результатов инженерных изысканий.</p>
                        <p>Ежегодно в&nbsp;ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo; проходят экспертизу около полутора тысяч различных проектов на&nbsp;объекты строительства, возводимые на&nbsp;территории Московской области. С&nbsp;2001 года рассмотрено более 100&nbsp;тыс. проектов.</p>
                        <h4>Основные направления деятельности:</h4>
                        <ul>
                            <li>проведение государственной экспертизы проектной, в&nbsp;том числе сметной документации и&nbsp;результатов инженерных изысканий, выполненных для строительства, реконструкции, капитального ремонта объектов, расположенных на&nbsp;территории Московской области;</li>
                            <li>содействие в&nbsp;проведении государственной политики в&nbsp;сфере ценообразования в&nbsp;строительстве на&nbsp;территории Московской области;</li>
                        </ul>
                        <h4>Приняты решения:</h4>
                        <ol>
                            <li>Рекомендовать органам местного самоуправления Московской области не&nbsp;направлять в&nbsp;государственное автономное учреждение Московской области &laquo;Московская областная государственная экспертиза&raquo; проекты строительства социальных объектов, не&nbsp;обеспеченных финансированием из&nbsp;долгосрочных целевых программ Московской области.</li>
                            <li>Государственному автономному учреждению &laquo;Московская областная государственная экспертиза&raquo; не&nbsp;принимать к&nbsp;рассмотрению проекты строительства социальных объектов, не&nbsp;обеспеченных финансированием из&nbsp;долгосрочных целевых программ Московской области&quot;.</li>
                        </ol>
                    </div>
                    <blockquote>Синяя цитата: В&nbsp;1989 году Управлением государственной вневедомственной экспертизы было рассмотрено и&nbsp;выдано заключений по&nbsp;291&nbsp;проекту. В&nbsp;последующие два года этот показатель уменьшался из-за происходящей в&nbsp;стране перестройки хозяйственного механизма, слома старой плановой системы управления, существенного падения объемов строительства в&nbsp;Московской области</blockquote>
                </div>
            </div>
        </div>

        ${renderComponent($$result2, "ContentSlider", $$ContentSlider, { "slider": slider })}

        <div class="content">
            <div class="content__left-block">
                <div class="article">
                    <h2><span>Реформа управления стройкомплексом:</span>начало 2000-х</h2>
                    <div class="article__text article__text--cols">
                        <p>В&nbsp;начале 2000-х годов происходят большие изменения в&nbsp;системе управления Московской областью и&nbsp;её&nbsp;строительным комплексом. Неуклонно растут бюджет области, ее&nbsp;инвестиционная привлекательность и&nbsp;мощный поток инвестиций в&nbsp;города и&nbsp;районы. Правительство области увидело в&nbsp;строительном комплексе Подмосковья, из&nbsp;года в&nbsp;год увеличивающего свой потенциал за&nbsp;счет реконструкции, модернизации традиционных предприятий и&nbsp;строительства новых, локомотив экономики. Многомиллиардные вложения в&nbsp;стройиндустрию и&nbsp;промышленность обеспечили область всеми необходимыми материалами, конструкциями и&nbsp;изделиями.</p>
                        <p>Выросли объемы работ. На&nbsp;смену типовым проектам пришли индивидуальные, технологически сложные проекты, предусматривавшие применение новых материалов, оборудования, технологий. Московская область стала на&nbsp;многие годы одним из&nbsp;лидеров в&nbsp;Российской Федерации по&nbsp;строительству жилья и&nbsp;социальных объектов.</p>
                        <p>Вместе со&nbsp;строительным комплексом росли и&nbsp;объемы работ по&nbsp;проведению государственной экспертизы строительных проектов. После ликвидации Лицензионно- экспертного управления Московской области Постановлением Правительства Московской области от&nbsp;22.06.2001&nbsp;г. &#8470;&nbsp;188/21 было создано государственное учреждение Московской области &laquo;Центр Государственной вневедомственной экспертизы и&nbsp;ценообразования в&nbsp;строительстве&raquo; (&laquo;Мособлгосэкспертиза&raquo;), директором которого был назначен <strong>Игорь Евгеньевич Горячев,</strong> руководящий им&nbsp;по&nbsp;сей день. В&nbsp;структуре нового учреждения было создано управление государственной вневедомственной экспертизы, которые длительные годы возглавлял <strong>Андрей Александрович Мартынов.</strong></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content__left-block">
                <div class="article">
                    <h3>
                        <mark>Общероссийское совещание на&nbsp;тему:</mark>
                        &laquo;Переход на&nbsp;ресурсно-индексный метод определения сметной стоимости строительства&raquo;
                    </h3>
                    <div class="article__text article__text--cols">
                        <p>В&nbsp;начале 2000-х годов происходят большие изменения в&nbsp;системе управления Московской областью и&nbsp;её&nbsp;строительным комплексом. Неуклонно растут бюджет области, ее&nbsp;инвестиционная привлекательность и&nbsp;мощный поток инвестиций в&nbsp;города и&nbsp;районы. Правительство области увидело в&nbsp;строительном комплексе Подмосковья, из&nbsp;года в&nbsp;год увеличивающего свой потенциал за&nbsp;счет реконструкции, модернизации традиционных предприятий и&nbsp;строительства новых, локомотив экономики. Многомиллиардные вложения в&nbsp;стройиндустрию и&nbsp;промышленность обеспечили область всеми необходимыми материалами, конструкциями и&nbsp;изделиями.</p>
                        <p>Выросли объемы работ. На&nbsp;смену типовым проектам пришли индивидуальные, технологически сложные проекты, предусматривавшие применение новых материалов, оборудования, технологий. Московская область стала на&nbsp;многие годы одним из&nbsp;лидеров в&nbsp;Российской Федерации по&nbsp;строительству жилья и&nbsp;социальных объектов.</p>
                        <p>Вместе со&nbsp;строительным комплексом росли и&nbsp;объемы работ по&nbsp;проведению государственной экспертизы строительных проектов. После ликвидации Лицензионно- экспертного управления Московской области Постановлением Правительства Московской области от&nbsp;22.06.2001&nbsp;г. &#8470;&nbsp;188/21 было создано государственное учреждение Московской области &laquo;Центр Государственной вневедомственной экспертизы и&nbsp;ценообразования в&nbsp;строительстве&raquo; (&laquo;Мособлгосэкспертиза&raquo;), директором которого был назначен <strong>Игорь Евгеньевич Горячев,</strong> руководящий им&nbsp;по&nbsp;сей день. В&nbsp;структуре нового учреждения было создано управление государственной вневедомственной экспертизы, которые длительные годы возглавлял <strong>Андрей Александрович Мартынов.</strong></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">

        </div>









                <!-- //текст 1 (Готовый со страницы content)-->
                <!-- <div class="article"> -->
                    <!-- текст 2 (XP_Audit)-->
                    <!-- <div class="article__text">
                        <p>Государственное автономное учреждение Московской области &laquo;Московская областная государственная экспертиза&raquo; приказом Министерства строительства и&nbsp;жилищно-коммунального хозяйства Российской Федерации от&nbsp;30&nbsp;апреля 2014 года &#8470;&nbsp;221/пр включено в&nbsp;перечень экспертных организаций и&nbsp;физических лиц, которые могут привлекаться к&nbsp;проведению публичного технологического и&nbsp;ценового аудита крупных инвестиционных проектов с&nbsp;государственным участием.</p>
                    </div>
                    <h2>Государственное автономное учреждение Московской области &laquo;Московская областная государственная экспертиза&raquo; (ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo;) создано в&nbsp;соответствии с&nbsp;Постановлением Правительства Московской области от&nbsp;22.06.2001 &#8470;&nbsp;188/21.</h2>
                    <div class="article__text article__text--cols">

                        <p>За&nbsp;прошедшее с&nbsp;момента образования годы ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo; стало одним из&nbsp;самых успешных и&nbsp;динамично развивающихся предприятий строительного комплекса Московской области. В&nbsp;настоящее время в&nbsp;учреждении создана структура для выполнения единой государственной экспертизы проектной документации. В&nbsp;государственном учреждении работают 92&nbsp;специалистов-экспертов, занятых проведением государственной экспертизы проектной документации и&nbsp;результатов инженерных изысканий.</p>

                        <h4>Основные направления деятельности:</h4>
                        <ul>
                            <li>проведение государственной экспертизы проектной, в&nbsp;том числе сметной документации и&nbsp;результатов инженерных изысканий, выполненных для строительства, реконструкции, капитального ремонта объектов, расположенных на&nbsp;территории Московской области;</li>

                        </ul>
                    </div>
                    <blockquote>ЗА&nbsp;ПРОШЕДШЕЕ С&nbsp;МОМЕНТА ОБРАЗОВАНИЯ ГОДЫ ГАУ МО&nbsp;&laquo;МОСОБЛГОСЭКСПЕРТИЗА&raquo; СТАЛО ОДНИМ ИЗ&nbsp;САМЫХ УСПЕШНЫХ И&nbsp;ДИНАМИЧНО РАЗВИВАЮЩИХСЯ ПРЕДПРИЯТИЙ СТРОИТЕЛЬНОГО КОМПЛЕКСА МОСКОВСКОЙ ОБЛАСТИ.</blockquote> -->

                    <!-- Текст 3 (XP_017)-->
                    <!-- <h2>Выписка из&nbsp;Протокола Заседания Градостроительного совета Московской области от&nbsp;13&nbsp;мая 2014 года &#8470;&nbsp;15&nbsp;&laquo;О&nbsp;проведении экспертизы в&nbsp;отношении социальных объектов капитального строительства, финансируемых из&nbsp;долгосрочных целевых программ&raquo;</h2>
                    <div class="article__text article__text--cols">
                        <p>Выписка из&nbsp;Протокола<br>Заседания Градостроительного совета<br>Московской области<br>От&nbsp;13&nbsp;мая 2014 года &#8470;&nbsp;15<br>г. Красногорск</p>
                        <p>&quot;43. О&nbsp;проведении экспертизы в&nbsp;отношении социальных объектов капитального строительства, финансируемых из&nbsp;долгосрочных целевых программ (вопрос вне повестки).</p>
                        <h4>Слушали:</h4>
                        <p>Выступление заместителя Председателя Правительства Московской области Г.В. Елянюшкина.</p>
                        <br>
                        <br>
                        <h4>Приняты решения:</h4>
                        <ol>
                            <li>Рекомендовать органам местного самоуправления Московской области не&nbsp;направлять в&nbsp;государственное автономное учреждение Московской области &laquo;Московская областная государственная экспертиза&raquo; проекты строительства социальных объектов, не&nbsp;обеспеченных финансированием из&nbsp;долгосрочных целевых программ Московской области.</li>
                            <li>Государственному автономному учреждению &laquo;Московская областная государственная экспертиза&raquo; не&nbsp;принимать к&nbsp;рассмотрению проекты строительства социальных объектов, не&nbsp;обеспеченных финансированием из&nbsp;долгосрочных целевых программ Московской области&quot;.</li>
                        </ol>
                    </div>
                </div> -->
                <!-- текст 4 - Разноцветный заголовок под картинкой (XP_Price)-->
                <!-- <div class="article">
                    <h2>
                        <mark>Общероссийское совещание на&nbsp;тему:</mark>
                        &laquo;Переход на&nbsp;ресурсно-индексный метод определения сметной стоимости строительства&raquo;
                        <mark>,
                            <span>г.Красноярск, 16&nbsp;марта 2023&nbsp;года.</span>
                        </mark>
                    </h2>
                </div> -->
                <!-- текст 5 (XP_006)-->
                <!-- <div class="article">
                    <h1><span>Начало истории:</span>1988-1989 годы</h1>
                    <div class="article__text article__text--cols">
                        <p>Основы современной государственной вневедомственной экспертизы проектной документации в&nbsp;Московской области были заложены в&nbsp;конце 1988&nbsp;года, когда было принято решение исполкома Московского областного Совета народных депутатов от&nbsp;15.12.88&nbsp;г. &#8470;&nbsp;1625/36&nbsp;о создании с&nbsp;01.01.1989&nbsp;г. Управления государственной вневедомственной экспертизы при исполкоме Московского областного Совета народных депутатов на&nbsp;базе управления экспертизы Главного управления капитального строительства, с&nbsp;&laquo;двойным&raquo; подчинением: Мособлисполкому и&nbsp;Главному управлению государственной вневедомственной экспертизы при Госстрое РСФСР.
                        <p>Экспертами во&nbsp;вновь созданное управление вневедомственной экспертизы перешли работать такие эксперты-профессионалы с&nbsp;многолетним опытом как <b>Марк Борисович Левин, Владимир Филиппович Папшев, Владимир Николаевич Войденов</b> и&nbsp;другие.</p>
                    </div>
                </div> -->
                <!-- текст 6 (XP_015) -->
                <!-- <div class="article">
                    <h1>закупки</h1>
                    <div class="article__text article__text--cols">
                        <p>ГАУ Московской области &laquo;Мособлгосэкспертиза&raquo; осуществляется закупки товаров и&nbsp;услуг на&nbsp;основании<br>
                            <a href="https://www.consultant.ru/document/cons_doc_LAW_116964/">223-го ФЗ</a>
                            &nbsp;на&nbsp;различных площадках для торгов, в&nbsp;частности
                            <a href="https://www.rts-tender.ru/">&laquo;РТС-Тендер&raquo;.</a></p>
                    </div>
                </div> -->
                <!-- текст 7 (XP_Отчет) -->
                <!-- <h1>ОСНОВНЫЕ РЕЗУЛЬТАТЫ ДЕЯТЕЛЬНОСТИ</h1>
                <h2>государственного автономного учреждения Московской области<br> &laquo;Московская областная государственная экспертиза&raquo; <br>за&nbsp;первое полугодие 2023 года</h2>
                <picture class="content__picture">
                    <source srcset="images/content/image_3.webp">
                    <img src="images/content/image_3.jpg" alt="" width="" height="" />
                </picture>
                <div class="article">
                    <div class="article__text">
                        <h3>I. Государственная экспертиза проектно-сметной документации</h3>
                        <p>Среди наиболее значимых проектов объектов капитального строительства, рассмотренных учреждением за&nbsp;6&nbsp;месяцев 2023&nbsp;года, можно отметить следующие:</p>
                        <ul>
                            <li>строительство школы на&nbsp;2200 мест в&nbsp;микрорайоне Катюшки (север) города Лобня, школы на&nbsp;550 мест в&nbsp;микрорайоне Барыбино городского округа Домодедово, школы на&nbsp;825 мест в&nbsp;городском округе Зарайск, музыкальной школы в&nbsp;микрорайоне Юбилейный города Королева;</li>
                            <li>строительство поликлиники для взрослых и&nbsp;детей на&nbsp;400 посещений в&nbsp;смену микрорайоне Ковровый города Котельники;</li>

                        </ul>
                        <blockquote>В&nbsp;целом за&nbsp;отчетный период специалистами ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo; по&nbsp;данным ЕГРЗ было выдано 1002 заключения государственной экспертизы по&nbsp;проектной документации&nbsp;и (или) результатам инженерных изысканий, из&nbsp;которых 998 положительных и&nbsp;4&nbsp;отрицательных заключения. По&nbsp;сравнению с&nbsp;аналогичным периодом 2022 года (1335&nbsp;заключений) количество выпущенных заключений уменьшилось на&nbsp;24,9%.</blockquote>
                        <p>Среди основных причин, повлиявших на&nbsp;уменьшение общего числа выданных учреждением экспертных заключений, можно отметить следующие. Во-первых, объекты программы по&nbsp;капитальному ремонту многоквартирных жилых домов, финансируемого за&nbsp;счет средств бюджета Московской области, были в&nbsp;основном рассмотрены в&nbsp;2022&nbsp;году.

                        <h3>II. Ценообразование и&nbsp;сметное нормирование в&nbsp;строительстве</h3>
                        <p>В&nbsp;области ценообразования и&nbsp;сметного нормирования в&nbsp;строительстве за&nbsp;6&nbsp;месяцев 2023 года ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo; выполнило комплекс работ по&nbsp;проверке и&nbsp;согласованию сметной документации по&nbsp;комплексному капитальному ремонту и&nbsp;текущему ремонту объектов, финансируемых из&nbsp;бюджетных и&nbsp;внебюджетных источников:</p>
                        <ul>
                            <li>объектов жилого фонда и&nbsp;инженерной инфраструктуры Московской области;</li>
                            <li>объектов жилищно-коммунального хозяйства Московской области;</li>
                            <li>объектов здравоохранения, образования, культуры и&nbsp;социального обеспечения Московской области;</li>
                            <li>дорог и&nbsp;благоустройство городских территорий, парков, скверов.</li>
                        </ul>
                        <h3>III. Основные финансово-экономические показатели</h3>
                        <p>Объем реализации услуг ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo; за&nbsp;6&nbsp;месяцев 2023 года составил 528,0 млн руб.&nbsp;и&nbsp;увеличился по&nbsp;сравнению с&nbsp;аналогичным периодом 2022 года на&nbsp;3,5%, в&nbsp;т.&nbsp;ч.</p>
                        <ul>
                            <li>управление государственной экспертизы&nbsp;&mdash; 392,0 млн руб. увеличение объема услуг на&nbsp;10,4% по&nbsp;сравнению с&nbsp;первым полугодием 2022&nbsp;года;</li>
                            <li>управление ценообразования в&nbsp;строительстве&nbsp;&mdash; 136,0 млн руб. уменьшение объема услуг на&nbsp;12,3&nbsp;% по&nbsp;сравнению с&nbsp;первым полугодием 2022&nbsp;года.</li>
                        </ul>
                    </div>
                </div> -->
            <!-- </div>

        </div> -->
    </div>
` })}`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/contents.astro", void 0);

const $$file = "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/contents.astro";
const $$url = "/contents.html";

export { $$Contents as default, $$file as file, $$url as url };
