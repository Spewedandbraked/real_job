import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunk.astro.js';
import { b as $$Title, a as $$BaseLayout } from './Gui.astro.js';
import { $ as $$CategoryList } from './assessment-services.astro.js';
import { $ as $$Materials } from './audit-samples.astro.js';
import 'html-escaper';
/* empty css              *//* empty css              *//* empty css                            *//* empty css            *//* empty css                 *//* empty css                      */
const $$Astro = createAstro();
const $$Corruption = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Corruption;
  const pageTitle = "\u0411\u043E\u0440\u044C\u0431\u0430 \u0441 \u043A\u043E\u0440\u0440\u0443\u043F\u0446\u0438\u0435\u0439";
  const pageNavigation = "\u041E\u0431 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0438";
  const category = {
    text: "\u0411\u043E\u0440\u044C\u0431\u0430 \u0441 \u043A\u043E\u0440\u0440\u0443\u043F\u0446\u0438\u0435\u0439",
    list: [
      {
        href: "content.html",
        text: "\u041E\u0431 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0438",
        main: true,
        active: true
      },
      {
        href: "leadership.html",
        text: "\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E",
        active: true
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
        text: "\u0411\u043E\u0440\u044C\u0431\u0430 \u0441 \u043A\u043E\u0440\u0440\u0443\u043F\u0446\u0438\u0435\u0439",
        active: true
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
        text: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432, \u043F\u0440\u043E\u0448\u0435\u0434\u0448\u0438\u0445 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0443 \u0432 \u0413\u0410\u0423 \u041C\u041E \xAB\u041C\u043E\u0441\u043E\u0431\u043B\u0433\u043E\u0441\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430\xBB"
      }
    ]
  };
  const materials = {
    document: true,
    side: true,
    list: [
      {
        text: "\u0424\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u0437\u0430\u043A\u043E\u043D \u043E\u0442 3 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 2012 \u0433\u043E\u0434\u0430 \u2116 230-\u0424\u0417 \xAB\u041E \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0435 \u0437\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435\u043C \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432 \u043B\u0438\u0446, \u0437\u0430\u043C\u0435\u0449\u0430\u044E\u0449\u0438\u0445 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438, \u0438 \u0438\u043D\u044B\u0445 \u043B\u0438\u0446 \u0438\u0445 \u0434\u043E\u0445\u043E\u0434\u0430\u043C",
        href: "javascript:void(0);",
        pdf: true
      },
      {
        href: "javascript:void(0);",
        text: "\u0424\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u0437\u0430\u043A\u043E\u043D \u043E\u0442 17 \u0438\u044E\u043B\u044F 2009 \u0433\u043E\u0434\u0430  \u2116 172-\u0424\u0417 \xAB\u041E\u0431 \u0430\u043D\u0442\u0438\u043A\u043E\u0440\u0440\u0443\u043F\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0435 \u043D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u043F\u0440\u0430\u0432\u043E\u0432\u044B\u0445 \u0430\u043A\u0442\u043E\u0432 \u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u043D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u043F\u0440\u0430\u0432\u043E\u0432\u044B\u0445 \u0430\u043A\u0442\u043E\u0432",
        pdf: true
      },
      {
        text: "\u0424\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u0437\u0430\u043A\u043E\u043D \u043E\u0442 25 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 2008 \u0433\u043E\u0434\u0430 \u2116 273-\u0424\u0417 \xAB\u041E \u043F\u0440\u043E\u0442\u0438\u0432\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0438 \u043A\u043E\u0440\u0440\u0443\u043F\u0446\u0438\u0438\xBB",
        href: "javascript:void(0);",
        pdf: true
      },
      {
        text: "\u0424\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u0437\u0430\u043A\u043E\u043D \u043E\u0442 25 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 2008 \u0433\u043E\u0434\u0430 \u2116 280 \xAB\u041E \u0432\u043D\u0435\u0441\u0435\u043D\u0438\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439 \u0432 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0430\u043A\u0442\u044B \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438 \u0432 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0440\u0430\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0435\u0439 \u041A\u043E\u043D\u0432\u0435\u043D\u0446\u0438\u0438 \u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u043D\u044B\u0445 \u041D\u0430\u0446\u0438\u0439 \u043F\u0440\u043E\u0442\u0438\u0432 \u043A\u043E\u0440\u0440\u0443\u043F\u0446\u0438\u0438 \u043E\u0442 31 \u043E\u043A\u0442\u044F\u0431\u0440\u044F 2003 \u0433\u043E\u0434\u0430 \u0438 \u041A\u043E\u043D\u0432\u0435\u043D\u0446\u0438\u0438 \u043E\u0431 \u0443\u0433\u043E\u043B\u043E\u0432\u043D\u043E\u0439 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0437\u0430 \u043A\u043E\u0440\u0440\u0443\u043F\u0446\u0438\u044E \u043E\u0442 27 \u044F\u043D\u0432\u0430\u0440\u044F 1999 \u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u043D\u044F\u0442\u0438\u0435\u043C \u0424\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0437\u0430\u043A\u043E\u043D\u0430 \xAB\u041E \u043F\u0440\u043E\u0442\u0438\u0432\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0438 \u043A\u043E\u0440\u0440\u0443\u043F\u0446\u0438\u0438",
        href: "javascript:void(0);",
        pdf: true
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "pageTitle": pageTitle, "pageNavigation": pageNavigation }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead()}<aside class="aside">
        ${renderComponent($$result2, "CategoryList", $$CategoryList, { "category": category })}
    </aside>
    <div class="container container--small">
        <div class="content">
            <div class="content__left-block">
                <div class="article">
                    <h1>Борьба с&nbsp;коррупцией</h1>
                    <div class="article__text article__text--cols">
                        <p>За&nbsp;консультациями по&nbsp;вопросам противодействия коррупции в&nbsp;ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo; можно обращаться устно по&nbsp;телефону&nbsp;+7 (495) 333 94 19.</p>
                        <p>Консультирование осуществляется каждый четверг с&nbsp;9.00 до&nbsp;13.00.</p>
                        <p>Также за&nbsp;разъяснениями по&nbsp;вопросам противодействия коррупции в&nbsp;ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo; можно обращаться письменно путём направления запроса на&nbsp;электронную почту:
                            <a href="mailto:moexp_info@mosreg.ru">moexp_info@mosreg.ru</a>.</p>
                    </div>
                </div>
            </div>
            <div class="content__right-block">
                ${renderComponent($$result2, "Title", $$Title, { "Tag": "h3", "className": "title title--h3" }, { "default": ($$result3) => renderTemplate`Материалы` })}
                ${renderComponent($$result2, "Materials", $$Materials, { "materials": materials })}
            </div>
        </div>
    </div>
` })}`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/corruption.astro", void 0);

const $$file = "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/corruption.astro";
const $$url = "/corruption.html";

export { $$Corruption as default, $$file as file, $$url as url };
