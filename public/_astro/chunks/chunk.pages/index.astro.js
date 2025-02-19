import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, u as unescapeHTML } from '../chunk.astro.js';
import { $ as $$Icon, a as $$BaseLayout } from './Gui.astro.js';
/* empty css              */import { a as $$SliderPagination } from './construction.astro.js';

const $$Astro$4 = createAstro();
const $$Service = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Service;
  const { service } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="service">
    ${service.map((item) => renderTemplate`<li class="service__item">
                <a${addAttribute(item.link, "href")} class="service__link" target="_blank">
                    ${renderComponent($$result, "Icon", $$Icon, { "name": "menu-main", "mod": "service" })}
                    <span class="service__text">
                        <span class="service__name">${item.name}</span>
                        <span class="service__addition">${unescapeHTML(item.addition)}</span>
                    </span>
                    ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-nav", "mod": "arrow-nav" })}
                </a>
            </li>`)}
</ul>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/Service/Service.astro", void 0);

const $$Astro$3 = createAstro();
const $$CompanyList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CompanyList;
  const { company } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="company">
    <div class="company__list">
        ${company.map((item) => renderTemplate`<a${addAttribute(item.link, "href")} class="company__link" target="_blank">
                    <picture class="company__picture">
                        <img class="company__image"${addAttribute(item.image, "src")} alt="" width="74" height="74">
                    </picture>
                    <span class="company__name">${item.name}</span>
                </a>`)}
    </div>
</div>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/CompanyList/CompanyList.astro", void 0);

const $$Astro$2 = createAstro();
const $$NewsArchive = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$NewsArchive;
  const { news } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="news-archive">
    <ul class="news-archive__list">
        ${news.map((item) => renderTemplate`<li class="news-archive__item">
                    <a${addAttribute(item.link, "href")} class="news-archive__link">
                        <span class="news-archive__title">
                            ${item.mark && renderTemplate`<mark>${item.mark}</mark>`}
                            ${item.title}
                        </span>
                        <span class="news-archive__text">${unescapeHTML(item.text)}</span>
                    </a>
                </li>`)}
        <li class="news-archive__item">
            <a href="news.html" class="news-archive__link">
                Продолжение новостей
                ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-nav", "mod": "arrow-nav" })}
            </a>
        </li>
    </ul>
</div>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/NewsArchive/NewsArchive.astro", void 0);

const $$Astro$1 = createAstro();
const $$News = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$News;
  const { news, newsMain, newsTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="news">
    <div class="news__main swiper mySwiper js-swiper">
        <a href="expertise-main.html" class="news__title news__title--main">
            <img${addAttribute(newsTitle, "src")}>
        </a>
        <div class="news__slider swiper-wrapper">
            ${newsMain.map((item) => renderTemplate`<a class="news__slide swiper-slide"${addAttribute(item.link, "href")}>
                        <picture class="news__picture">
                            <source${addAttribute(item.mobile, "srcset")}${addAttribute(item.title, "alt")} media="(max-width: 767px)">
                            <img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")}>
                        </picture>
                        <div class="news__block">
                            <p class="news__text news__text--main">${item.text}</p>
                            <p class="news__date news__date--main">${item.time}</p>
                        </div>
                    </a>`)}
        </div>
        ${renderComponent($$result, "SliderPagination", $$SliderPagination, {})}
    </div>
    <div class="news__all">
        ${renderComponent($$result, "NewsArchive", $$NewsArchive, { "news": news })}
    </div>
</div>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/News/News.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageTitle = "\u0413\u043B\u0430\u0432\u043D\u0430\u044F";
  const service = [
    {
      link: "expertise-main.html",
      name: "\u042D\u041A\u0421\u041F\u0415\u0420\u0422\u0418\u0417\u0410",
      addition: "\u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438<br />\u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u044B\u0445 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u0439"
    },
    {
      link: "pricing-main.html",
      name: "\u0426\u0415\u041D\u041E\u041E\u0411\u0420\u0410\u0417\u041E\u0412\u0410\u041D\u0418\u0415",
      addition: "\u0438 \u0441\u043C\u0435\u0442\u043D\u043E\u0435 \u043D\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435<br />\u0432 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0435"
    },
    {
      link: "models-main.html",
      name: "\u041C\u041E\u0414\u0415\u041B\u0418",
      addition: "\u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438<br />\u0438 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0435"
    },
    {
      link: "audit-main.html",
      name: "\u0410\u0423\u0414\u0418\u0422",
      addition: "\u0418\u041D\u0412\u0415\u0421\u0422\u0418\u0426\u0418\u041E\u041D\u041D\u042B\u0425<br />\u041F\u0420\u041E\u0415\u041A\u0422\u041E\u0412"
    }
  ];
  const company = [
    {
      link: "javascript:void(0);",
      name: "\u041F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438",
      image: "images/company/img.png"
    },
    {
      link: "javascript:void(0);",
      name: "\u041C\u0438\u043D\u0438\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u043E \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0438 \u0438 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438",
      image: "images/company/img-2.png"
    },
    {
      link: "javascript:void(0);",
      name: "\u0413\u043B\u0430\u0432\u0433\u043E\u0441\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430 \u0420\u043E\u0441\u0441\u0438\u0438",
      image: "images/company/img-3.png"
    },
    {
      link: "javascript:void(0);",
      name: "\u041C\u0438\u043D\u0441\u0442\u0440\u043E\u0439 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439  \u043E\u0431\u043B\u0430\u0441\u0442\u0438",
      image: "images/company/img-4.png"
    },
    {
      link: "javascript:void(0);",
      name: "\u041C\u0438\u043D\u0436\u0438\u043B\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0438 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438",
      image: "images/company/img-2.png"
    },
    {
      link: "javascript:void(0);",
      name: "\u0410\u0441\u0441\u043E\u0446\u0438\u0430\u0446\u0438\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437 \u0420\u043E\u0441\u0441\u0438\u0438",
      image: "images/company/img-5.png"
    },
    {
      link: "javascript:void(0);",
      name: "\u0421\u0442\u0440\u043E\u0439\u043D\u0430\u0434\u0437\u043E\u0440 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438",
      image: "images/company/img-6.png"
    },
    {
      link: "javascript:void(0);",
      name: "\u041C\u043E\u0441\u043E\u0431\u043B\u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430",
      image: "images/company/img-7.png"
    },
    {
      link: "javascript:void(0);",
      name: "\u041C\u0438\u043D\u0442\u0440\u0430\u043D\u0441 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438",
      image: "images/company/img-8.png"
    },
    {
      link: "javascript:void(0);",
      name: "\u041C\u0438\u043D\u0416\u041A\u0425 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438",
      image: "images/company/img-9.png"
    }
  ];
  const newsTitle = "images/news/exp.svg";
  const newsMain = [
    {
      link: "news-detail.html",
      title: "fff",
      text: "\u041C\u041E\u0413\u042D \u041A\u041E\u041E\u0420\u0414\u0418\u041D\u0418\u0420\u0423\u0415\u0422 \u041F\u0415\u0420\u0415\u0425\u041E\u0414 \u041D\u0410 \u0420\u0418\u041C",
      time: "06.12.2024",
      image: "images/news/news.png",
      mobile: "images/news/mobile.png"
    },
    {
      link: "news-detail.html",
      title: "fff",
      text: "\u041F\u0420\u041E\u0415\u041A\u0422 \u041C\u041A\u0414 \u041F\u041E \u041F\u0420\u041E\u0413\u0420\u0410\u041C\u041C\u0415 \u0420\u0410\u0421\u0421\u0415\u041B\u0415\u041D\u0418\u042F \u0410\u0412\u0410\u0420\u0418\u0419\u041D\u041E\u0413\u041E \u0424\u041E\u041D\u0414\u0410 \u0412 \u0428\u0410\u0422\u0423\u0420\u0421\u041A\u041E\u041C \u0413.\u041E.",
      time: "24.01.2024",
      image: "images/news/img-4-b.png",
      mobile: "images/news/img-4.png"
    },
    {
      link: "news-detail.html",
      title: "fff",
      text: "\u0426\u0418\u041C-\u041A\u0410\u0411\u0418\u041D\u0415\u0422 \u041C\u041E\u0413\u042D \u0421\u0422\u0410\u041B \u0412\u0410\u0416\u041D\u042B\u041C \u0418\u041D\u0421\u0422\u0420\u0423\u041C\u0415\u041D\u0422\u041E\u041C \u041F\u041E\u0412\u042B\u0428\u0415\u041D\u0418\u042F \u042D\u0424\u0424\u0415\u041A\u0422\u0418\u0412\u041D\u041E\u0421\u0422\u0418 \u042D\u041A\u0421\u041F\u0415\u0420\u0422\u0418\u0417\u042B \u0426\u0418\u0424\u0420\u041E\u0412\u042B\u0425 \u041C\u041E\u0414\u0415\u041B\u0415\u0419",
      time: "24.01.2024",
      image: "images/news/img-3-b.png",
      mobile: "images/news/img-3.png"
    }
  ];
  const news = [
    {
      link: "news-detail.html",
      title: "21.03.2023",
      text: "\u0412\u044B\u043F\u0443\u0449\u0435\u043D\u043E \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043A&nbsp;\u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043D\u0430&nbsp;\u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043F\u043E\u043B\u0438\u043A\u043B\u0438\u043D\u0438\u043A\u0438 \u0441\u043C\u0435\u0448\u0430\u043D\u043D\u043E\u0433\u043E \u0442\u0438\u043F\u0430"
    },
    {
      link: "news-detail.html",
      title: "07.11.2024",
      text: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0430 \u0413\u0410\u0423 \u041C\u041E&nbsp;&laquo;\u041C\u043E\u0441\u043E\u0431\u043B\u0433\u043E\u0441\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430&raquo; \u043E&nbsp;\u0441\u0440\u043E\u043A\u0430\u0445 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433 \u0432&nbsp;2024 \u0433\u043E\u0434\u0443"
    },
    {
      link: "news-detail.html",
      title: "25.10.2024",
      text: "\u0421\u043E\u0441\u0442\u043E\u044F\u043B\u043E\u0441\u044C \u043E\u0447\u0435\u0440\u0435\u0434\u043D\u043E\u0435 \u0437\u0430\u0441\u0435\u0434\u0430\u043D\u0438\u0435 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u043D\u043E\u0439 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438 \u043F\u043E&nbsp;\u0438\u043D\u0434\u0435\u043A\u0441\u0430\u0446\u0438\u0438 \u0446\u0435\u043D \u0438&nbsp;\u0446\u0435\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044E \u0432&nbsp;\u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0435"
    },
    {
      link: "news-detail.html",
      title: "21.03.2023",
      text: "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u043E&nbsp;\u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0435 \u043A&nbsp;\u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0443 \u043D\u0430&nbsp;\u0440\u0435\u0441\u0443\u0440\u0441\u043D\u043E-\u0438\u043D\u0434\u0435\u043A\u0441\u043D\u044B\u0439 \u043C\u0435\u0442\u043E\u0434 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430"
    },
    {
      link: "news-detail.html",
      mark: "\u0410\u043D\u043E\u043D\u0441.",
      title: "\u0441\u043E\u0441\u0442\u043E\u0438\u0442\u0441\u044F \u0441\u0435\u043C\u0438\u043D\u0430\u0440 \u0434\u043B\u044F \u0441\u043C\u0435\u0442\u0447\u0438\u043A\u043E\u0432",
      text: "\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u0435\u043C \u0432\u0441\u0435\u0445 \u0436\u0435\u043B\u0430\u044E\u0449\u0438\u0445 \u043F\u0440\u0438\u043D\u044F\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432&nbsp;\u0432\u0435\u0431\u0438\u043D\u0430\u0440\u0430\u0445, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u043E\u0445\u043E\u0434\u044F\u0442 \u0435\u0436\u0435\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u043E \u043F\u043E&nbsp;\u043F\u044F\u0442\u043D\u0438\u0446\u0430\u043C \u0432&nbsp;11.00&nbsp;\u0447\u0430\u0441\u043E\u0432."
    },
    {
      link: "news-detail.html",
      title: "21.03.2023",
      text: "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u043E&nbsp;\u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0435 \u043A&nbsp;\u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0443 \u043D\u0430&nbsp;\u0440\u0435\u0441\u0443\u0440\u0441\u043D\u043E-\u0438\u043D\u0434\u0435\u043A\u0441\u043D\u044B\u0439 \u043C\u0435\u0442\u043E\u0434 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430"
    },
    {
      link: "news-detail.html",
      title: "21.03.2023",
      text: "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u043E&nbsp;\u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0435 \u043A&nbsp;\u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0443 \u043D\u0430&nbsp;\u0440\u0435\u0441\u0443\u0440\u0441\u043D\u043E-\u0438\u043D\u0434\u0435\u043A\u0441\u043D\u044B\u0439 \u043C\u0435\u0442\u043E\u0434 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead()}<div class="container">
        ${renderComponent($$result2, "News", $$News, { "newsTitle": newsTitle, "newsMain": newsMain, "news": news })}
        ${renderComponent($$result2, "Service", $$Service, { "service": service })}
        ${renderComponent($$result2, "CompanyList", $$CompanyList, { "company": company })}
    </div>
` })}`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/index.astro", void 0);

const $$file = "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$NewsArchive as $, index as i };
