import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunk.astro.js';
import { b as $$Title, a as $$BaseLayout } from './Gui.astro.js';
import { $ as $$CategoryList } from './assessment-services.astro.js';
import { $ as $$Materials } from './audit-samples.astro.js';
import 'html-escaper';
/* empty css              *//* empty css              *//* empty css                            *//* empty css            *//* empty css                 *//* empty css                      */
const $$Astro = createAstro();
const $$ConstituentDocuments = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ConstituentDocuments;
  const pageTitle = "\u0423\u0447\u0440\u0435\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B";
  const pageNavigation = "\u041E\u0431 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0438";
  const category = {
    text: "\u0423\u0447\u0440\u0435\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B",
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
        text: "\u0423\u0447\u0440\u0435\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B",
        active: true
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
        text: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432, \u043F\u0440\u043E\u0448\u0435\u0434\u0448\u0438\u0445 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0443 \u0432 \u0413\u0410\u0423 \u041C\u041E \xAB\u041C\u043E\u0441\u043E\u0431\u043B\u0433\u043E\u0441\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430\xBB"
      }
    ]
  };
  const materials = {
    document: true,
    side: true,
    list: [
      {
        text: "\u0423\u0441\u0442\u0430\u0432",
        href: "javascript:void(0);",
        pdf: true
      },
      {
        href: "javascript:void(0);",
        text: "\u041F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u041F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043E\u0442 26.02.2010 \u2116 99/6",
        pdf: true
      },
      {
        text: "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0442\u0438\u043F\u0430 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u044F",
        href: "javascript:void(0);",
        pdf: true
      },
      {
        text: "\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",
        href: "javascript:void(0);",
        pdf: true
      },
      {
        text: "\u041E\u0413\u0420\u041D",
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
                    <picture>
                        <source srcset="images/constituent-documents/image_1.webp">
                        <img src="images/constituent-documents/image_1.jpg" alt="" width="" height="">
                    </picture>
                    <div class="article__text article__text--cols">
                        <p>В&nbsp;соответствии с&nbsp;частью 4&nbsp;статьи 49&nbsp;Градостроительного кодекса Российской Федерации государственная экспертиза проектной документации и&nbsp;государственная экспертиза результатов инженерных изысканий проводятся федеральным органом исполнительной власти, органом исполнительной власти субъекта Российской Федерации, уполномоченными на&nbsp;проведение государственной экспертизы проектной документации, или подведомственными указанным органам государственными (бюджетными или автономными) учреждениями.</p>
                        <p>В&nbsp;Московской области полномочия по&nbsp;проведению государственной экспертизы проектной документации и&nbsp;результатов инженерных изысканий возложены на&nbsp;государственное автономное учреждение Московской области &laquo;Московская областная государственная экспертиза&raquo; (постановление Правительства Московской области от&nbsp;26.02.2010 &#8470;&nbsp;99/6)</p>
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
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/constituent-documents.astro", void 0);

const $$file = "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/constituent-documents.astro";
const $$url = "/constituent-documents.html";

export { $$ConstituentDocuments as default, $$file as file, $$url as url };
