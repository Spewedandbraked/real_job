import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as addAttribute } from '../chunk.astro.js';
import { $ as $$Icon, a as $$BaseLayout } from './Gui.astro.js';
import { $ as $$CategoryList } from './assessment-services.astro.js';
/* empty css                     */
const $$Astro$2 = createAstro();
const $$SliderPagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SliderPagination;
  return renderTemplate`${maybeRenderHead()}<div class="slider-pagination">
    <div class="slider-pagination__prev swiper-button-prev">
        ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-nav", "mod": "prev" })}
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-pagination2"></div>
    <div class="slider-pagination__next swiper-button-next">
        ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-nav", "mod": "next" })}
    </div>
</div>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/SliderPagination/SliderPagination.astro", void 0);

const $$Astro$1 = createAstro();
const $$ContentSlider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContentSlider;
  const { slider } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="content content--slider swiper mySwiper js-content-slider">
    <div class="content-slider swiper-wrapper">
        ${slider.map((item) => renderTemplate`<picture${addAttribute(`content-slider__picture swiper-slide ${item.big ? "content-slider__picture--big" : ""} ${item.small ? "content-slider__picture--small" : ""}`, "class")}>
                    <source${addAttribute(item.webp, "srcset")}>
                    <img${addAttribute(item.img, "src")} alt="" width="" height="">
                </picture>`)}
    </div>

    ${renderComponent($$result, "SliderPagination", $$SliderPagination, {})}
</div>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/ContentSlider/ContentSlider.astro", void 0);

const $$Astro = createAstro();
const $$Construction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Construction;
  const pageTitle = "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432";
  const pageNavigation = "\u041E\u0431 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0438";
  const category = {
    text: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432",
    list: [
      {
        href: "content.html",
        text: "\u041E\u0431 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0438",
        main: true,
        active: true
      },
      {
        href: "leadership.html",
        text: "\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E"
      },
      {
        href: "supervisor.html",
        text: "\u041D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0441\u043E\u0432\u0435\u0442"
      },
      {
        href: "structure.html",
        text: "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430"
      },
      {
        href: "javascript:void(0);",
        pdf: true,
        text: "\u0410\u0442\u0442\u0435\u0441\u0442\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u044B"
      },
      {
        href: "history.html",
        text: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F"
      },
      {
        href: "constituent-documents.html",
        text: "\u0423\u0447\u0440\u0435\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B"
      },
      {
        href: "javascript:void(0);",
        pdf: true,
        text: "\u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u0435"
      },
      {
        href: "reporting.html",
        text: "\u041E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442\u044C"
      },
      {
        href: "corruption.html",
        text: "\u0411\u043E\u0440\u044C\u0431\u0430 \u0441 \u043A\u043E\u0440\u0440\u0443\u043F\u0446\u0438\u0435\u0439"
      },
      {
        href: "purchases.html",
        text: "\u0417\u0430\u043A\u0443\u043F\u043A\u0438"
      },
      {
        href: "counteraction.html",
        text: "\u041F\u0440\u043E\u0442\u0438\u0432\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0442\u0435\u0440\u0440\u043E\u0440\u0438\u0437\u043C\u0443 \u0438 \u044D\u043A\u0441\u0442\u0440\u0435\u043C\u0438\u0437\u043C\u0443"
      },
      {
        href: "gallery.html",
        text: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432, \u043F\u0440\u043E\u0448\u0435\u0434\u0448\u0438\u0445 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0443 \u0432 \u0413\u0410\u0423 \u041C\u041E \xAB\u041C\u043E\u0441\u043E\u0431\u043B\u0433\u043E\u0441\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430\xBB",
        active: true
      }
    ]
  };
  const slider = [
    {
      big: true,
      webp: "images/gallery-image/image_3.webp",
      img: "images/gallery-image/image_3.jpg"
    },
    {
      small: true,
      webp: "images/gallery-image/image_4.webp",
      img: "images/gallery-image/image_4.jpg"
    }
  ];
  const slider1 = [
    {
      big: true,
      webp: "images/gallery-image/image_5.webp",
      img: "images/gallery-image/image_5.jpg"
    },
    {
      small: true,
      webp: "images/gallery-image/image_6.webp",
      img: "images/gallery-image/image_6.jpg"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "pageTitle": pageTitle, "pageNavigation": pageNavigation }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead()}<aside class="aside">
        ${renderComponent($$result2, "CategoryList", $$CategoryList, { "category": category })}
    </aside>
    <div class="container container--small">
        <div class="content">
            <div class="content__left-block">
                <div class="article">
                    <h1>Строительство социальных объектов</h1>
                    <picture>
                        <source srcset="images/gallery-image/image_1.webp">
                        <img src="images/gallery-image/image_1.jpg" alt="" width="" height="">
                    </picture>
                    <h2><span>ОДОБРЕНО МОГЭ:</span>ДЕТСКО-ВЗРОСЛАЯ ПОЛИКЛИНИКА В&nbsp;КОРОЛЁВЕ</h2>
                    <div class="article__text article__text--cols">
                        <p>ГАУ Московской области &laquo;Мособлгосэкспертиза&raquo; выпустило положительное заключение к&nbsp;проектной документации на&nbsp;строительство поликлиники смешанного типа (детско-взрослой) на&nbsp;1000 посещений в&nbsp;городе Королёве, ул. Циолковского, д.&nbsp;24.</p>
                        <p>Проектом предусматривается возведение поликлиники смешанного типа на&nbsp;1000 посещений в&nbsp;смену, из&nbsp;них для взрослого населения поликлиническое отделение&nbsp;&mdash; на&nbsp;500 посещений в&nbsp;смену, детское поликлиническое отделение&nbsp;&mdash; на&nbsp;300 посещений в&nbsp;смену, клинико-диагностический центр&nbsp;&mdash; на&nbsp;200 посещений в&nbsp;смену.</p>
                        <p>Планировочная структура здания обеспечивает поточность(последовательность) технологических процессов, оптимизацию путейдвижения основных потоков персонала, больных, больничных грузов сцелью минимизации их&nbsp;протяженности и&nbsp;удобства больных, посетителей и&nbsp;персонала.</p>
                        <p>Новая поликлиника в&nbsp;Королёве строится в&nbsp;рамках реализации национального проекта &laquo;Здравоохранение&raquo;, она позволит повысить качество медицинской помощи взрослым и&nbsp;детям.</p>
                    </div>
                    <picture>
                        <source srcset="images/gallery-image/image_2.webp">
                        <img src="images/gallery-image/image_2.jpg" alt="" width="" height="">
                    </picture>
                    <h2><span>ОДОБРЕНО МОГЭ:</span>школа НА&nbsp;1150&nbsp;МЕСТ В&nbsp;МНОГОЭТАЖНОЙ ЗАСТРОЙКЕ ПОСЕЛКА БИТЦА</h2>
                    <div class="article__text article__text--cols">
                        <p>ГАУ Московской области &laquo;Мособолгосэкспертиза&raquo; выпустило положительное заключение на&nbsp;проектную документацию строительства Среднего образовательного учреждения (школы) на&nbsp;1150 мест в&nbsp;многоэтажной жилой застройке пос. Битца сельского поселения Булатниковское Ленинского городского округа.</p>
                        <p>Как указано в&nbsp;проектной документации, &laquo;светлые, просторные, широкие рекреации коридорного типа пронизывают планировочную структуру школы по&nbsp;направлению расположения каждой секции здания, притягивая к&nbsp;себе основные учебные помещения, кабинеты, лестницы и&nbsp;основные группы помещений&raquo;.</p>
                        <p>Проектными решениями предусмотрены обособленные помещения начальной школы; основной школы; старшей школы. Учащиеся начальной школы обучаются в&nbsp;закрепленных за&nbsp;каждым классом учебных кабинетах.</p>
                        <p>СОУ в&nbsp;битцевской жилой застройке позволит повысить качество образовательных услуг, доступность качественного школьного образования в&nbsp;этом поселке.</p>
                    </div>
                </div>
            </div>
        </div>

        ${renderComponent($$result2, "ContentSlider", $$ContentSlider, { "slider": slider })}

        <div class="content">
            <div class="content__left-block">
                <div class="article">
                    <h2><span>ОДОБРЕНО МОГЭ:</span>ОБРАЗОВАТЕЛЬНЫЙ ЦЕНТР В&nbsp;КРАСНОЗНАМЕНСКЕ</h2>
                    <div class="article__text article__text--cols">
                        <p>ГАУ Московской области &laquo;Мособлгосэкспертиза&raquo; выпустило положительное заключение к&nbsp;проектной документации на&nbsp;строительство Образовательного центра в&nbsp;городском округе Краснознаменск, включающего школу на&nbsp;550 мест и&nbsp;детский сад на&nbsp;220&nbsp;мест.</p>
                        <p>Здание Общеобразовательного центра будет функционально разделено на&nbsp;два отдельных блока, соединенных переходом в&nbsp;уровне первого этажа: школа на&nbsp;550 мест и&nbsp;детский сад на&nbsp;220&nbsp;мест.</p>
                        <p>Цель проектирования и&nbsp;строительства данного объекта&nbsp;&mdash; создание максимально комфортной и&nbsp;безопасной среды для обеспечения современного уровня обучения и&nbsp;пребывания детей и&nbsp;обучающихся, учитывающей разновозрастные, психологические и&nbsp;технологические особенности общего образовательного процесса.</p>
                        <p>Образовательный центр сыграет важную роль в&nbsp;повышении качества образования в&nbsp;Краснознаменске.</p>
                    </div>
                </div>
            </div>
        </div>

        ${renderComponent($$result2, "ContentSlider", $$ContentSlider, { "slider": slider1 })}

        <div class="content">
            <div class="content__left-block">
                <div class="article">
                    <h2><span>ОДОБРЕНО МОГЭ:</span>ПОЛИКЛИНИКА НА&nbsp;500&nbsp;ПОСЕЩЕНИЙ В&nbsp;СМЕНУ Р.П. ОКТЯБРЬСКИЙ Г.О. ЛЮБЕРЦЫ</h2>
                    <div class="article__text article__text--cols">
                        <p>ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo; выпустило положительное заключение на&nbsp;проектную документацию строительства поликлиники на&nbsp;500 посещений в&nbsp;смену ГБУЗ Московской области &laquo;Люберецкая областная больница&raquo; по&nbsp;адресу: Московская область, г. Люберцы, р.&nbsp;п. Октябрьский.</p>
                        <p>Поликлиника предназначена для оказания полного комплекса специализированной высокотехнологичной медицинской помощи взрослому и&nbsp;детскому населению&nbsp;р.&nbsp;п. Октябрьский. Здание поликлиники по&nbsp;вертикали разделено на&nbsp;два блока с&nbsp;отдельными входами во&nbsp;взрослое и&nbsp;детское отделения.</p>
                        <p>В&nbsp;состав поликлиники входят следующие функциональные зоны: инфекционное, терапевтическое, хирургическое, диагностическое, стоматологическое, физиотерапевтическое отделения и&nbsp;дневной стационар для взрослых и&nbsp;детей, женская консультация, отделение медицинской профилактики, лаборатории, вспомогательные и&nbsp;административные помещения.</p>
                        <p>Новая поликлиника позволит повысить качество медицинской помощи жителям&nbsp;р.&nbsp;п. Октябрьский&nbsp;&mdash; взрослым и&nbsp;детям.</p>
                    </div>
                    <picture>
                        <source srcset="images/gallery-image/image_7.webp">
                        <img src="images/gallery-image/image_7.jpg" alt="" width="" height="">
                    </picture>
                    <h2><span>ОДОБРЕНО МОГЭ:</span>ОБРАЗОВАТЕЛЬНЫЙ ЦЕНТР В&nbsp;КРАСНОЗНАМЕНСКЕ</h2>
                    <div class="article__text article__text--cols">
                        <p>ГАУ Московской области &laquo;Мособлгосэкспертиза&raquo; выпустило положительное заключение к&nbsp;проектной документации на&nbsp;строительство Образовательного центра в&nbsp;городском округе Краснознаменск, включающего школу на&nbsp;550 мест и&nbsp;детский сад на&nbsp;220&nbsp;мест.</p>
                        <p>Здание Общеобразовательного центра будет функционально разделено на&nbsp;два отдельных блока, соединенных переходом в&nbsp;уровне первого этажа: школа на&nbsp;550 мест и&nbsp;детский сад на&nbsp;220&nbsp;мест.</p>
                        <p>Цель проектирования и&nbsp;строительства данного объекта&nbsp;&mdash; создание максимально комфортной и&nbsp;безопасной среды для обеспечения современного уровня обучения и&nbsp;пребывания детей и&nbsp;обучающихся, учитывающей разновозрастные, психологические и&nbsp;технологические особенности общего образовательного процесса.</p>
                        <p>Образовательный центр сыграет важную роль в&nbsp;повышении качества образования в&nbsp;Краснознаменске.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
` })}`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/construction.astro", void 0);

const $$file = "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/construction.astro";
const $$url = "/construction.html";

const construction = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Construction,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ContentSlider as $, $$SliderPagination as a, construction as c };
