import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunk.astro.js';
import { a as $$BaseLayout } from './Gui.astro.js';
import { $ as $$CategoryList } from './assessment-services.astro.js';
import { $ as $$Preview } from './doc.astro.js';
import 'html-escaper';
/* empty css              *//* empty css              *//* empty css                            *//* empty css            *//* empty css                 *//* empty css            */
const $$Astro = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  const pageTitle = "\u0423\u0441\u043B\u0443\u0433\u0438";
  const pageNavigation = "\u0423\u0441\u043B\u0443\u0433\u0438";
  const category = {
    text: "\u0423\u0421\u041B\u0423\u0413\u0418",
    list: [
      {
        href: "services.html",
        text: "\u0423\u0421\u041B\u0423\u0413\u0418",
        main: true,
        active: true
      },
      {
        href: "examination-services.html",
        text: "\u0423\u0441\u043B\u0443\u0433\u0438 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u044B"
      },
      {
        href: "pricing-services.html",
        text: "\u0423\u0441\u043B\u0443\u0433\u0438 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0446\u0435\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0441\u043C\u0435\u0442\u043D\u043E\u0433\u043E \u043D\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F"
      },
      {
        href: "audit.html",
        text: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438 \u0446\u0435\u043D\u043E\u0432\u043E\u0439 \u0430\u0443\u0434\u0438\u0442 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u0445 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432"
      },
      {
        href: "non-governmental-expertise.html",
        text: "\u041D\u0435\u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438  \u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u044B\u0445 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u0439"
      },
      {
        href: "javascript:void(0);",
        text: "\u041F\u043E\u0440\u044F\u0434\u043E\u043A  \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043E\u0432 \u0441 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C\u0438 \u0443\u0441\u043B\u0443\u0433",
        pdf: true
      },
      {
        href: "mobile-app.html",
        text: '\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0437\u0430\u044F\u0432\u0438\u0442\u0435\u043B\u0435\u0439 \u0418\u0421 \u0413\u0410\u0423 \u041C\u041E "\u041C\u043E\u0441\u043E\u0431\u043B\u0433\u043E\u0441\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430"'
      }
    ]
  };
  const picture = {
    link: "javascript:void(0);",
    exp: "images/news/exp.svg",
    imageWebp: "images/servises/image_1.webp",
    image: "images/servises/image_1.jpg",
    mobile: "images/servises/image_1.jpg"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "pageTitle": pageTitle, "pageNavigation": pageNavigation }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead()}<aside class="aside">
        ${renderComponent($$result2, "CategoryList", $$CategoryList, { "category": category })}
    </aside>
    <div class="container container--small">
        <div class="content">
            ${renderComponent($$result2, "Preview", $$Preview, { "picture": picture })}
        </div>
    </div>
` })}`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/services.astro", void 0);

const $$file = "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/services.astro";
const $$url = "/services.html";

export { $$Services as default, $$file as file, $$url as url };
