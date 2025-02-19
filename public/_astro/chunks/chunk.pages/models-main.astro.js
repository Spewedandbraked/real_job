import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunk.astro.js';
import { a as $$BaseLayout } from './Gui.astro.js';
import { $ as $$CategoryList } from './assessment-services.astro.js';
import 'html-escaper';
/* empty css              *//* empty css              *//* empty css                            *//* empty css            *//* empty css                 */
const $$Astro = createAstro();
const $$ModelsMain = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ModelsMain;
  const pageTitle = "\u041C\u041E\u0414\u0415\u041B\u0418";
  const category = {
    text: "\u041C\u041E\u0414\u0415\u041B\u0418",
    list: [
      {
        href: "models-main.html",
        text: "\u041C\u041E\u0414\u0415\u041B\u0418",
        content: "\u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 \u0438 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0435",
        main: true,
        active: true
      },
      {
        href: "reference-models.html",
        text: "\u041D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u043E-\u043C\u0435\u0442\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0445 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043C\u043E\u0434\u0435\u043B\u0435\u0439"
      },
      {
        href: "model-examination.html",
        text: "\u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430 \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0445 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043C\u043E\u0434\u0435\u043B\u0435\u0439"
      },
      {
        href: "javascript:void(0);",
        text: "\u041C\u0435\u0442\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B"
      },
      {
        href: "javascript:void(0);",
        text: "\u0426\u0418\u041C-\u043F\u0440\u043E\u0435\u043A\u0442\u044B, \u043F\u0440\u043E\u0448\u0435\u0434\u0448\u0438\u0435 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0443"
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead()}<aside class="aside">
        ${renderComponent($$result2, "CategoryList", $$CategoryList, { "category": category })}
    </aside>
    <div class="container container--small">
        <div class="content">
            <div class="content__left-block">
                <picture class="content__picture">
                    <source srcset="images/models/image_1.webp">
                    <img src="images/models/image_1.jpg" alt="" width="" height="">
                </picture>
                <div class="article">
                    <div class="article__text article__text--cols">
                        <p>Государственное автономное учреждение Московской области &laquo;Мособлгосэкспертиза&raquo;&nbsp;&mdash; один из&nbsp;лидеров среди организаций строительной экспертизы по&nbsp;количеству цифровых информационных моделей (ЦИМ), прошедших проверку в&nbsp;составе проектной документации, а&nbsp;также в&nbsp;выработке методологии проектирования ЦИМ.</p>
                        <p>В&nbsp;структуре учреждения создано отдельное подразделение для экспертизы ЦИМ, эксперты ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo; обладают высокой квалификацией работы с&nbsp;ЦИМ и&nbsp;делятся знаниями с&nbsp;проектировщиками.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
` })}`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/models-main.astro", void 0);

const $$file = "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/models-main.astro";
const $$url = "/models-main.html";

export { $$ModelsMain as default, $$file as file, $$url as url };
