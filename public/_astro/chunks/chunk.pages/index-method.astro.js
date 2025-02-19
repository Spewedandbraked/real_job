import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../chunk.astro.js';
import { $ as $$Icon, b as $$Title, a as $$BaseLayout } from './Gui.astro.js';
import { $ as $$CategoryList } from './assessment-services.astro.js';
import { $ as $$Materials } from './audit-samples.astro.js';
/* empty css                     */
const $$Astro$2 = createAstro();
const $$CalculatedIndexes = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CalculatedIndexes;
  const { \u0441alculations } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="сalculations">
    <ul class="сalculations__list">
        ${\u0441alculations.map((item) => renderTemplate`<li class="сalculations__item">
                    <picture class="сalculations__picture">
                        <source${addAttribute(item.sourceWebp, "srcset")}>
                        <img${addAttribute(item.img, "src")} alt="" width="" height="">
                    </picture>
                    <p>${item.text}</p>
                </li>`)}
    </ul>
</div>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/CalculatedIndexes/CalculatedIndexes.astro", void 0);

const $$Astro$1 = createAstro();
const $$Video = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Video;
  const { video } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="video">
    <div class="video__player">
        <iframe class="video__video"${addAttribute(video.src + "?title=0&portrait=0&byline=0", "src")}${addAttribute(video.width, "width")}${addAttribute(video.height, "height")} webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
    <div class="video__cover">
        <picture>
            <source${addAttribute(video.srcset, "srcset")}>
            <img class="video__img"${addAttribute(video.img, "src")} alt="" width="" height="">
        </picture>
        <button${addAttribute(`video__button ${video.small ? "video__button--small" : ""}`, "class")}>
            ${renderComponent($$result, "Icon", $$Icon, { "name": "play" })}
        </button>
    </div>
</div>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/uikit/Video/Video.astro", void 0);

const $$Astro = createAstro();
const $$IndexMethod = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$IndexMethod;
  const pageTitle = "\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u043D\u0430 \u0440\u0435\u0441\u0443\u0440\u0441\u043D\u043E-\u0438\u043D\u0434\u0435\u043A\u0441\u043D\u044B\u0439 \u043C\u0435\u0442\u043E\u0434";
  const category = {
    text: "\u0426\u0415\u041D\u041E\u041E\u0411\u0420\u0410\u0417\u041E\u0412\u0410\u041D\u0418\u0415",
    list: [
      {
        href: "expertise-main.html",
        text: "\u0426\u0415\u041D\u041E\u041E\u0411\u0420\u0410\u0417\u041E\u0412\u0410\u041D\u0418\u0415",
        content: "\u0438 \u0441\u043C\u0435\u0442\u043D\u043E\u0435 \u043D\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0432 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0435",
        main: true,
        active: true
      },
      {
        href: "javascript:void(0);",
        text: "\u0420\u0435\u0433\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0446\u0435\u043D\u0442\u0440 \u0446\u0435\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F"
      },
      {
        href: "indexing-commission.html",
        text: "\u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u044F \u043F\u043E \u0438\u043D\u0434\u0435\u043A\u0441\u0430\u0446\u0438\u0438 \u0446\u0435\u043D \u0438 \u0446\u0435\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044E \u0432 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0435"
      },
      {
        href: "javascript:void(0);",
        text: "\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u0446\u0435\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0441\u043C\u0435\u0442\u043D\u043E\u0433\u043E \u043D\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0432 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0435 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 (\u041F\u0426\u0421\u041D 2022 \u041C\u041E)",
        pdf: true
      },
      {
        href: "javascript:void(0);",
        text: '\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0432 \u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0442\u0435\u043A\u0443\u0449\u0438\u0445 \u0446\u0435\u043D \u0438 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u043A \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044E \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u0442\u0435\u043A\u0443\u0449\u0438\u0445 \u0446\u0435\u043D \u043D\u0430 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u0413\u0410\u0423 \u041C\u041E "\u041C\u043E\u0441\u043E\u0431\u043B\u0433\u043E\u0441\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430"',
        pdf: true
      },
      {
        href: "pricing-services.html",
        text: "\u0423\u0441\u043B\u0443\u0433\u0438 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0446\u0435\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0441\u043C\u0435\u0442\u043D\u043E\u0433\u043E \u043D\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F"
      },
      {
        href: "javascript:void(0);",
        text: "\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0441\u043C\u0435\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043F\u043E \u0440\u0435\u043C\u043E\u043D\u0442\u0443 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0432 \u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0446\u0435\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0432 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0435 \u0413\u0410\u0423 \u041C\u041E \xAB\u041C\u043E\u0441\u043E\u0431\u043B\u0433\u043E\u0441\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430\xBB",
        pdf: true
      },
      {
        href: "samples-rationing.html",
        text: "\u041E\u0431\u0440\u0430\u0437\u0446\u044B \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u0437\u0430\u044F\u0432\u0438\u0442\u0435\u043B\u0435\u0439 \u0443\u0441\u043B\u0443\u0433 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0446\u0435\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0441\u043C\u0435\u0442\u043D\u043E\u0433\u043E \u043D\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F"
      },
      {
        href: "reference-rationing.html",
        text: "\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u043F\u043E \u0446\u0435\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044E \u0438 \u0441\u043C\u0435\u0442\u043D\u043E\u043C\u0443 \u043D\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E"
      },
      {
        href: "index-method.html",
        text: "\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u043D\u0430 \u0440\u0435\u0441\u0443\u0440\u0441\u043D\u043E-\u0438\u043D\u0434\u0435\u043A\u0441\u043D\u044B\u0439 \u043C\u0435\u0442\u043E\u0434",
        active: true
      },
      {
        href: "documentation-conclusion.html",
        text: "\u0420\u0435\u0435\u0441\u0442\u0440\u044B \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0439 \u043F\u043E \u0441\u043C\u0435\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043D\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438 \u0440\u0435\u043C\u043E\u043D\u0442\u043D\u044B\u0445 \u0440\u0430\u0431\u043E\u0442, \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0438\u043B\u0438 \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E \u0444\u0438\u043D\u0430\u043D\u0441\u0438\u0440\u0443\u0435\u043C\u044B\u0445 \u0438\u0437 \u0431\u044E\u0434\u0436\u0435\u0442\u0430 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438"
      },
      {
        href: "cost-conclusion.html",
        text: "\u0420\u0435\u0435\u0441\u0442\u0440\u044B \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0439 \u0441\u043C\u0435\u0442\u043D\u043E\u0439 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0440\u0430\u0431\u043E\u0442 \u043F\u043E \u0442\u0435\u043A\u0443\u0449\u0435\u043C\u0443 \u0440\u0435\u043C\u043E\u043D\u0442\u0443 \u0437\u0434\u0430\u043D\u0438\u0439,  \u0441\u043E\u043E\u0440\u0443\u0436\u0435\u043D\u0438\u0439, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u043B\u0438\u043D\u0435\u0439\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432, \u0440\u0430\u0431\u043E\u0442 \u043F\u043E \u0431\u043B\u0430\u0433\u043E\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0443 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0439  \u043C\u0443\u043D\u0438\u0446\u0438\u043F\u0430\u043B\u044C\u043D\u044B\u0445 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0439 \u041C\u043E, \u0444\u0438\u043D\u0430\u043D\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u0442\u043E\u0440\u044B\u0445  \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441 \u043F\u0440\u0438\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0435\u043C \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0431\u044E\u0434\u0436\u0435\u0442\u0430 \u041C\u043E"
      }
    ]
  };
  const video = {
    className: "video--full",
    src: "https://vkvideo.ru/video_ext.php?oid=-40549685&id=456246540&hd=2&",
    width: "930",
    height: "520",
    srcset: "images/pricing/image_3.webp",
    img: "images/pricing/image_3.jpg"
  };
  const \u0441alculations = [
    {
      sourceWebp: "images/pricing/image_4.webp",
      img: "images/pricing/image_4.jpg",
      text: "\u041F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u044F \xAB\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043D\u0430 \u0440\u0435\u0441\u0443\u0440\u0441\u043D\u043E-\u0438\u043D\u0434\u0435\u043A\u0441\u043D\u044B\u0439 \u043C\u0435\u0442\u043E\u0434 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0441\u043C\u0435\u0442\u043D\u043E\u0439 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430\xBB"
    },
    {
      sourceWebp: "images/pricing/image_5.webp",
      img: "images/pricing/image_5.jpg",
      text: "\u041F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u044F \xAB\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043D\u0430 \u0440\u0435\u0441\u0443\u0440\u0441\u043D\u043E-\u0438\u043D\u0434\u0435\u043A\u0441\u043D\u044B\u0439 \u043C\u0435\u0442\u043E\u0434 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0441\u043C\u0435\u0442\u043D\u043E\u0439 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430\xBB"
    },
    {
      sourceWebp: "images/pricing/image_6.webp",
      img: "images/pricing/image_6.jpg",
      text: "\u041F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u044F \xAB\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043D\u0430 \u0440\u0435\u0441\u0443\u0440\u0441\u043D\u043E-\u0438\u043D\u0434\u0435\u043A\u0441\u043D\u044B\u0439 \u043C\u0435\u0442\u043E\u0434 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0441\u043C\u0435\u0442\u043D\u043E\u0439 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430\xBB"
    },
    {
      sourceWebp: "images/pricing/image_7.webp",
      img: "images/pricing/image_7.jpg",
      text: "\u041F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u044F \xAB\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043D\u0430 \u0440\u0435\u0441\u0443\u0440\u0441\u043D\u043E-\u0438\u043D\u0434\u0435\u043A\u0441\u043D\u044B\u0439 \u043C\u0435\u0442\u043E\u0434 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0441\u043C\u0435\u0442\u043D\u043E\u0439 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430\xBB"
    }
  ];
  const materials = {
    document: true,
    side: true,
    list: [
      {
        text: "\u0421\u043C\u0435\u0442\u044B \u0414\u041E\u0423 \xAB\u0418\u043B\u044C\u0438\u043D\u0441\u043A\u0438\u0439 \u0442\u0443\u043F\u0438\u043A\xBB \u0426\u0418\u041C-\u0420\u0418\u041C",
        href: "javascript:void(0);",
        zip: true
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
                ${renderComponent($$result2, "Title", $$Title, { "Tag": "h1", "className": "title title--h1" }, { "default": ($$result3) => renderTemplate`Переход на&nbsp;ресурсно-индексный метод` })}
                <div class="content__block">
                    ${renderComponent($$result2, "Video", $$Video, { "video": video })}
                    <h3>
                        <mark>Общероссийское совещание на&nbsp;тему:</mark>
                        &laquo;Переход на&nbsp;ресурсно-индексный метод определения сметной стоимости строительства&raquo;
                        <mark>,
                            <span>г.Красноярск, 16&nbsp;марта 2023&nbsp;года.</span>
                        </mark>
                    </h3>
                </div>
                <div class="content__block">
                    ${renderComponent($$result2, "CalculatedIndexes", $$CalculatedIndexes, { "\u0441alculations": \u0441alculations })}
                </div>
            </div>
            <div class="content__right-block">
                ${renderComponent($$result2, "Title", $$Title, { "Tag": "h3", "className": "title title--h3" }, { "default": ($$result3) => renderTemplate`Материалы` })}
                ${renderComponent($$result2, "Materials", $$Materials, { "materials": materials })}
            </div>
        </div>
    </div>
` })}`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/index-method.astro", void 0);

const $$file = "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/index-method.astro";
const $$url = "/index-method.html";

const indexMethod = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$IndexMethod,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$CalculatedIndexes as $, $$Video as a, indexMethod as i };
