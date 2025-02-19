import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunk.astro.js';
import { a as $$BaseLayout } from './Gui.astro.js';
import { $ as $$CategoryList } from './assessment-services.astro.js';
import { $ as $$ContentSlider } from './construction.astro.js';
import 'html-escaper';
/* empty css              *//* empty css              *//* empty css                            *//* empty css            *//* empty css                 *//* empty css                     */
const $$Astro = createAstro();
const $$House = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$House;
  const pageTitle = "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043C\u043D\u043E\u0433\u043E\u043A\u0432\u0430\u0440\u0442\u0438\u0440\u043D\u044B\u0445 \u0436\u0438\u043B\u044B\u0445 \u0434\u043E\u043C\u043E\u0432";
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
      webp: "images/gallery-image/image_15.webp",
      img: "images/gallery-image/image_15.jpg"
    },
    {
      small: true,
      webp: "images/gallery-image/image_16.webp",
      img: "images/gallery-image/image_16.jpg"
    }
  ];
  const slider1 = [
    {
      big: true,
      webp: "images/gallery-image/image_18.webp",
      img: "images/gallery-image/image_18.jpg"
    },
    {
      small: true,
      webp: "images/gallery-image/image_19.webp",
      img: "images/gallery-image/image_19.jpg"
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
                    <h1>Строительство многоквартирных жилых домов</h1>

                    ${renderComponent($$result2, "ContentSlider", $$ContentSlider, { "slider": slider })}

                    <h2><span>ОДОБРЕНО МОГЭ:</span>ДВА МКД В&nbsp;СТАРОЙ КУПАВНЕ ДЛЯ ПЕРЕСЕЛЕНИЯ ИЗ&nbsp;ВЕТХОГО ЖИЛФОНДА</h2>
                    <div class="article__text article__text--cols">
                        <p>ГАУ Московской области &laquo;Мособлгосэкспертиза&raquo; выпустило положительное заключение на&nbsp;проектную документацию строительства двух многоквартирных жилых домов (корпусов) в&nbsp;городском поселении Старая Купавна Богородского городского округа (ул. Кирова) под переселение из&nbsp;непригодного для проживания жилищного фонда.</p>
                        <p>Строительство новых многоквартирных жилых домов позволит снизить остроту проблемы ветхого жилья, обеспечить жителей Старой Купавны современным комфортным жильем.</p>
                        <p>Состав помещений общего пользования и&nbsp;площади квартир приняты в&nbsp;соответствии с&nbsp;заданием на&nbsp;проектирование. Каждая квартира имеет остекленную лоджию или балкон.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="content">
            <div class="content__left-block">
                <div class="article">
                    <picture>
                        <source srcset="images/gallery-image/image_17.webp">
                        <img src="images/gallery-image/image_17.jpg" alt="" width="" height="">
                    </picture>
                    <h2><span>ОДОБРЕНО МОГЭ:</span>МКД В&nbsp;ПОСЕЛКЕ ТУГОЛЕССКИЙ БОР</h2>
                    <div class="article__text article__text--cols">
                        <p>ГАУ Московской области &laquo;Мособлгосэкспертиза&raquo; выпустило положительное заключение на&nbsp;проектную документацию строительства многоквартирного жилого дома по&nbsp;адресу: городской округа Шатура, п. Туголесский Бор.</p>
                        <p>Спроектировано размещение 63&nbsp;машиноместа для постоянного хранения автотранспорта жителей, 12&nbsp;машиномест для гостевого хранения (в&nbsp;том числе семь машиномест для маломобильных групп населения) на&nbsp;открытых автостоянках.</p>
                        <p>Озеленение участка предусматривает устройство газонов, посадку деревьев и&nbsp;кустарников. Будет выполнена установка малых архитектурных форм в&nbsp;виде скамеек, урн, спортивного оборудования, детских игровых комплексов.</p>
                        <p>Современный проект позволит обеспечить жителей Московской области комфортным жильем, улучшить качество жизни</p>
                    </div>
                </div>
            </div>
        </div>

        ${renderComponent($$result2, "ContentSlider", $$ContentSlider, { "slider": slider1 })}

        <div class="content">
            <div class="content__left-block">
                <div class="article">
                    <h2><span>ОДОБРЕНО МОГЭ:</span>МКД В&nbsp;КРАСНОЗАВОДСКЕ</h2>
                    <div class="article__text article__text--cols">
                        <p>ГАУ Московской области &laquo;Мособлгосэкспертиза&raquo; выпустило положительное заключение на&nbsp;проектную документацию строительства многоквартирного жилого дома по&nbsp;адресу: Сергиево-Посадский городской округ, г. Краснозаводск, ул. Строителей, д.&nbsp;9.</p>
                        <p>МКД&nbsp;&mdash; трехэтажный, трехсекционный, Г-образной формы. В&nbsp;доме спроектировано 38&nbsp;квартир (одно, двух и&nbsp;трехкомнатные). Расчетное количество жителей в&nbsp;соответствии с&nbsp;заданием на&nbsp;проектирование, составляет 85&nbsp;человек.</p>
                        <p>Озеленение участка предусматривает устройство газонов, посадку деревьев и&nbsp;кустарников. Будет выполнена установка малых архитектурных форм в&nbsp;виде скамеек, урн, спортивного оборудования, детских игровых комплексов.</p>
                        <p>Современный проект позволит обеспечить жителей Московской области комфортным жильем, улучшить качество жизни</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
` })}`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/house.astro", void 0);

const $$file = "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/house.astro";
const $$url = "/house.html";

export { $$House as default, $$file as file, $$url as url };
