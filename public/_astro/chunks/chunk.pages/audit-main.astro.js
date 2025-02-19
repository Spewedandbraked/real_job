import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunk.astro.js';
import { a as $$BaseLayout } from './Gui.astro.js';
import { $ as $$CategoryList } from './assessment-services.astro.js';
import 'html-escaper';
/* empty css              *//* empty css              *//* empty css                            *//* empty css            *//* empty css                 */
const $$Astro = createAstro();
const $$AuditMain = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AuditMain;
  const pageTitle = "\u0410\u0423\u0414\u0418\u0422";
  const category = {
    text: "\u0410\u0423\u0414\u0418\u0422",
    list: [
      {
        href: "models-main.html",
        text: "\u0410\u0423\u0414\u0418\u0422",
        content: "\u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432",
        main: true,
        active: true
      },
      {
        href: "audit.html",
        text: "\u0423\u0421\u041B\u0423\u0413\u0410 \u0422\u0415\u0425\u041D\u041E\u041B\u041E\u0413\u0418\u0427\u0415\u0421\u041A\u041E\u0413\u041E \u0418 \u0426\u0415\u041D\u041E\u0412\u041E\u0413\u041E \u0410\u0423\u0414\u0418\u0422\u0410 \u041F\u0423\u0411\u041B\u0418\u0427\u041D\u042B\u0425 \u0418\u041D\u0412\u0415\u0421\u0422\u0418\u0426\u0418\u041E\u041D\u041D\u042B\u0425 \u041F\u0420\u041E\u0415\u041A\u0422\u041E\u0412"
      },
      // {
      //     href: 'audit.html',
      //     text: 'Технологический и ценовой аудит публичных инвестиционных проектов',
      // },
      {
        href: "audit-samples.html",
        text: "\u041E\u0431\u0440\u0430\u0437\u0446\u044B \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0443\u0441\u043B\u0443\u0433\u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0438 \u0446\u0435\u043D\u043E\u0432\u043E\u0433\u043E \u0430\u0443\u0434\u0438\u0442\u0430 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u0445 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432"
      },
      {
        href: "javascript:void(0);",
        text: "\u041F\u0440\u043E\u0435\u043A\u0442\u044B, \u043F\u0440\u043E\u0448\u0435\u0434\u0448\u0438\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438 \u0446\u0435\u043D\u043E\u0432\u043E\u0439 \u0430\u0443\u0434\u0438\u0442"
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
                    <source srcset="images/audit/image_1.webp">
                    <img src="images/expeauditrtise/image_1.jpg" alt="" width="" height="">
                </picture>
                <div class="article">
                    <div class="article__text article__text--cols">
                        Государственное автономное учреждение Московской области &laquo;Московская областная государственная экспертиза&raquo; приказом Министерства строительства и&nbsp;жилищно-коммунального хозяйства Российской Федерации от&nbsp;30&nbsp;апреля 2014 года &#8470;&nbsp;221/пр включено в&nbsp;перечень экспертных организаций и&nbsp;физических лиц, которые могут привлекаться к&nbsp;проведению публичного технологического и&nbsp;ценового аудита крупных инвестиционных проектов с&nbsp;государственным участием.
                    </div>
                </div>
            </div>
        </div>
    </div>
` })}`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/audit-main.astro", void 0);

const $$file = "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/audit-main.astro";
const $$url = "/audit-main.html";

export { $$AuditMain as default, $$file as file, $$url as url };
