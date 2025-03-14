import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunk.astro.js';
import { f as $$People, a as $$BaseLayout } from './Gui.astro.js';
import { $ as $$CategoryList } from './assessment-services.astro.js';
import 'html-escaper';
/* empty css              *//* empty css              *//* empty css                            *//* empty css            *//* empty css                 */
const $$Astro = createAstro();
const $$Supervisor = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Supervisor;
  const pageTitle = "\u041D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0441\u043E\u0432\u0435\u0442";
  const pageNavigation = "\u041E\u0431 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0438";
  const category = {
    text: "\u041D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0441\u043E\u0432\u0435\u0442",
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
        text: "\u041D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0441\u043E\u0432\u0435\u0442",
        active: true,
        opened: true,
        add: [
          {
            text: "\u0420\u0430\u0441\u043F\u043E\u0440\u044F\u0436\u0435\u043D\u0438\u0435 \u043E \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u043D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043E\u0432\u0435\u0442\u0430 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u044F",
            href: "javascript:void(0);",
            pdf: true
          },
          {
            text: "\u0424\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B \u043D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043E\u0432\u0435\u0442\u0430",
            href: "javascript:void(0);",
            pdf: true
          }
        ]
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
        text: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432, \u043F\u0440\u043E\u0448\u0435\u0434\u0448\u0438\u0445 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0443 \u0432 \u0413\u0410\u0423 \u041C\u041E \xAB\u041C\u043E\u0441\u043E\u0431\u043B\u0433\u043E\u0441\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430\xBB"
      }
    ]
  };
  const people = [
    {
      image: "images/supervisor/rectangle184.png",
      name: "\u0421\u0430\u0431\u0438\u0442\u043E\u0432 \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0421\u044F\u0438\u0442\u043E\u0432\u0438\u0447",
      job: "\u043F\u0440\u0435\u0434\u0441\u0435\u0434\u0430\u0442\u0435\u043B\u044C \u041D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043E\u0432\u0435\u0442\u0430 \u0413\u0410\u0423 \u041C\u041E \xAB\u041C\u043E\u0441\u043E\u0431\u043B\u0433\u043E\u0441\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430\xBB, \u0437\u0430\u043C\u0435\u0441\u0442\u0438\u0442\u0435\u043B\u044C \u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0438 \u0438 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438"
    },
    {
      image: "images/supervisor/rectangle198.png",
      name: "\u0410\u043B\u0431\u043E\u0440\u043E\u0432 \u0422\u0430\u043C\u0435\u0440\u043B\u0430\u043D \u041C\u0438\u0445\u0430\u0439\u043B\u043E\u0432\u0438\u0447",
      job: "\u0447\u043B\u0435\u043D \u041D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043E\u0432\u0435\u0442\u0430, \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044C \u041C\u0438\u043D\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438"
    },
    {
      image: "images/supervisor/rectangle199.png",
      name: "\u041A\u0430\u0448\u0438\u0440\u0438\u043D\u0430 \u041E\u043B\u044C\u0433\u0430 \u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440\u043E\u0432\u043D\u0430",
      job: "\u0447\u043B\u0435\u043D \u041D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043E\u0432\u0435\u0442\u0430, \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A \u043F\u043B\u0430\u043D\u043E\u0432\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430 \u0423\u0413\u042D \u0413\u0410\u0423 \u041C\u041E \xAB\u041C\u043E\u0441\u043E\u0431\u043B\u0433\u043E\u0441\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430\xBB"
    },
    {
      image: "images/supervisor/rectangle200.png",
      name: "\u041C\u0430\u0442\u0432\u0435\u0439\u043A\u043E \u0418\u0433\u043E\u0440\u044C \u042E\u0440\u044C\u0435\u0432\u0438\u0447",
      job: "\u0447\u043B\u0435\u043D \u041D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043E\u0432\u0435\u0442\u0430, \u043F\u0440\u0435\u0434\u0441\u0435\u0434\u0430\u0442\u0435\u043B\u044C \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u043D\u043E\u0439 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u041F\u0440\u043E\u0444\u0441\u043E\u044E\u0437\u0430 \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u043E\u0432 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0438 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0420\u043E\u0441\u0441\u0438\u0438"
    },
    {
      image: "images/supervisor/rectangle205.png",
      name: "\u041C\u0438\u043D\u043D\u0443\u0431\u0430\u0435\u0432\u0430 \u0422\u0430\u0442\u044C\u044F\u043D\u0430 \u041C\u0438\u0445\u0430\u0439\u043B\u043E\u0432\u043D\u0430",
      job: "\u0447\u043B\u0435\u043D \u041D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043E\u0432\u0435\u0442\u0430, \u0437\u0430\u043C\u0435\u0441\u0442\u0438\u0442\u0435\u043B\u044C \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A\u0430 \u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0431\u044E\u0434\u0436\u0435\u0442\u043D\u043E\u0433\u043E \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u041C\u0438\u043D\u0438\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0438 \u0438 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438"
    },
    {
      image: "images/supervisor/rectangle201.png",
      name: "\u041C\u0438\u0442\u044E\u0445\u0438\u043D\u0430 \u042E\u043B\u0438\u044F \u0412\u0438\u043A\u0442\u043E\u0440\u043E\u0432\u043D\u0430",
      job: "\u0447\u043B\u0435\u043D \u041D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043E\u0432\u0435\u0442\u0430, \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A \u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0446\u0435\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0432 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0435 \u0413\u0410\u0423 \u041C\u041E \xAB\u041C\u043E\u0441\u043E\u0431\u043B\u0433\u043E\u0441\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430\xBB"
    },
    {
      image: "images/supervisor/rectangle202.png",
      name: "\u041C\u043E\u0441\u043A\u0430\u043B\u0435\u043D\u043A\u043E \u0412\u0438\u0442\u0430\u043B\u0438\u0439 \u0412\u0438\u043A\u0442\u043E\u0440\u043E\u0432\u0438\u0447",
      job: "\u0447\u043B\u0435\u043D \u041D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043E\u0432\u0435\u0442\u0430, \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440 \u041E\u041E\u041E \xAB\u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u043D\u0430\u044F \u043D\u0435\u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430\xBB"
    },
    {
      image: "images/supervisor/rectangle203.png",
      name: "\u041D\u043E\u0432\u043E\u0441\u0451\u043B\u043E\u0432\u0430 \u041E\u043B\u044C\u0433\u0430 \u042E\u0440\u044C\u0435\u0432\u043D\u0430",
      job: "\u0447\u043B\u0435\u043D \u041D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043E\u0432\u0435\u0442\u0430, \u0433\u043B\u0430\u0432\u043D\u044B\u0439 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440 \u2013 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u043E-\u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430 \u0423\u0414 \u0413\u0410\u0423 \u041C\u041E \xAB\u041C\u043E\u0441\u043E\u0431\u043B\u0433\u043E\u0441\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430\xBB"
    },
    {
      image: "images/supervisor/rectangle204.png",
      name: "\u042F\u043D\u0443\u0448\u043A\u0435\u0432\u0438\u0447 \u0413\u0430\u043B\u0438\u043D\u0430 \u041D\u0438\u043A\u043E\u043B\u0430\u0435\u0432\u043D\u0430",
      job: "\u0433\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440 \u041E\u041E\u041E \xAB\u041F\u0440\u043E\u0435\u043A\u0442\u043D\u0430\u044F \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0430\u044F \u042F\u043D\u0443\u0448\u043A\u0435\u0432\u0438\u0447\xBB"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "pageTitle": pageTitle, "pageNavigation": pageNavigation }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead()}<aside class="aside">
        ${renderComponent($$result2, "CategoryList", $$CategoryList, { "category": category })}
    </aside>
    <div class="container container--small">
          ${renderComponent($$result2, "People", $$People, { "people": people, "class": "people--max" })}
    </div>
` })}`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/supervisor.astro", void 0);

const $$file = "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/supervisor.astro";
const $$url = "/supervisor.html";

export { $$Supervisor as default, $$file as file, $$url as url };
