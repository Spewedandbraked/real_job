import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunk.astro.js';
import { a as $$BaseLayout } from './Gui.astro.js';
import { $ as $$CategoryList } from './assessment-services.astro.js';
import { $ as $$ContentSlider } from './construction.astro.js';
import 'html-escaper';
/* empty css              *//* empty css              *//* empty css                            *//* empty css            *//* empty css                 *//* empty css                     */
const $$Astro = createAstro();
const $$Heritage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Heritage;
  const pageTitle = "\u0420\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0438\u044F/\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u043E\u0433\u043E \u043D\u0430\u0441\u043B\u0435\u0434\u0438\u044F";
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
      webp: "images/gallery-image/image_27.webp",
      img: "images/gallery-image/image_27.jpg"
    },
    {
      small: true,
      webp: "images/gallery-image/image_28.webp",
      img: "images/gallery-image/image_28.jpg"
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
                    <h1>Реставрация/Сохранение культурного наследия</h1>

                    ${renderComponent($$result2, "ContentSlider", $$ContentSlider, { "slider": slider })}
                    
                    <h2><span>ОДОБРЕНО МОГЭ:</span>ПРОЕКТ СОХРАНЕНИЯ ДОМА 1900-Х ГОДОВ В&nbsp;СЕРПУХОВЕ</h2>
                    <div class="article__text article__text--cols">
                        <p>В&nbsp;конце апреля ГАУ Московской области &laquo;Мособлгосэкспертиза&raquo; выпустила положительное заключение на&nbsp;проектную документацию и&nbsp;результаты инженерных изысканий по&nbsp;сохранению объекта культурного наследия регионального значения&nbsp;&mdash; жилого дома 1900-х годов в&nbsp;Серпухове: ул. Чехова, 87.</p>
                        <p>Этот дом&nbsp;&mdash; памятник архитектуры, он&nbsp;включен в&nbsp;единый государственный реестр объектов культурного наследия (памятников истории и&nbsp;культуры) народов Российской Федерации Постановлением Правительства Московской области от&nbsp;15.03.2002 &#8470; 84/9.</p>
                        <p>Здание планируется использовать под культурно-просветительские цели с&nbsp;размещением в&nbsp;нем экспозиции и&nbsp;хранилища Серпуховского историко-художественного музея, кабинетов сотрудников, зоны приема и&nbsp;обслуживания посетителей.</p>
                        <p>Дом станет и&nbsp;живым примером сохранения культурного наследия, и&nbsp;важным компонентом музейной инфраструктуры сохранения других объектов культурного наследия.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
` })}`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/heritage.astro", void 0);

const $$file = "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/heritage.astro";
const $$url = "/heritage.html";

export { $$Heritage as default, $$file as file, $$url as url };
