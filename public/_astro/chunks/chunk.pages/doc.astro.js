import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../chunk.astro.js';
import { a as $$BaseLayout } from './Gui.astro.js';
import { $ as $$CategoryList } from './assessment-services.astro.js';
/* empty css            */
const $$Astro$1 = createAstro();
const $$Preview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Preview;
  const { picture } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="preview">
    <div class="preview__main">
        <a${addAttribute(picture.link, "href")} class="preview__title preview__title--main">
            <img${addAttribute(picture.exp, "src")}>
        </a>
        <div class="preview__slider">
            <div class="preview__slide">
                <picture class="preview__picture">
                    <source${addAttribute(picture.mobile, "srcset")} alt="" media="(max-width: 767px)">
                    <source${addAttribute(picture.imageWebp, "srcset")} alt="" media="(min-width: 768px)" type="image/webp">
                    <img${addAttribute(picture.image, "src")} alt="">
                </picture>
            </div>
        </div>
    </div>
</div>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/Preview/Preview.astro", void 0);

const $$Astro = createAstro();
const $$Doc = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Doc;
  const pageTitle = "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B";
  const pageNavigation = "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B";
  const category = {
    text: "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B",
    list: [
      {
        href: "doc.html",
        text: "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B",
        main: true,
        active: true
      },
      {
        href: "registers-conclusions.html",
        text: "\u0420\u0435\u0435\u0441\u0442\u0440\u044B \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0439"
      },
      {
        href: "regulations.html",
        text: "\u0420\u0435\u0433\u043B\u0430\u043C\u0435\u043D\u0442\u044B \u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433"
      },
      {
        href: "reference.html",
        text: "\u041D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u043E-\u043C\u0435\u0442\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0438 \u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B"
      },
      {
        href: "samples.html",
        text: "\u041E\u0431\u0440\u0430\u0437\u0446\u044B \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0443\u0441\u043B\u0443\u0433"
      },
      {
        href: "documents.html",
        text: "\u0423\u0447\u0440\u0435\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u0413\u0410\u0423 \u041C\u041E \xAB\u041C\u043E\u0441\u043E\u0431\u043B\u0433\u043E\u0441\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430\xBB"
      }
    ]
  };
  const picture = {
    link: "javascript:void(0);",
    exp: "images/news/exp.svg",
    imageWebp: "images/doc/image.webp",
    image: "images/doc/image.png",
    mobile: "images/doc/image.png"
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
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/doc.astro", void 0);

const $$file = "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/doc.astro";
const $$url = "/doc.html";

const doc = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Doc,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Preview as $, doc as d };
