import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderSlot, s as spreadAttributes, f as renderHead, u as unescapeHTML } from '../chunk.astro.js';
/* empty css              *//* empty css              *//* empty css                            *//* empty css            *//* empty css                 */
const $$Astro$o = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Icon;
  const { mod, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<i${addAttribute(`icon icon--${mod} icon-${name}`, "class")}></i>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/uikit/Icon/Icon.astro", void 0);

const $$Astro$n = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Navigation;
  const links = [
    {
      title: "\u041E\u0431 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0438",
      href: "content.html"
    },
    {
      title: "\u0423\u0441\u043B\u0443\u0433\u0438",
      href: "services.html"
    },
    {
      title: "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B",
      href: "doc.html"
    },
    {
      title: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
      href: "contacts.html"
    },
    {
      title: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438",
      href: "news.html"
    }
  ];
  const {
    pageNavigation,
    class: className
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "navigation",
    className
  ], "class:list")}>
    <div class="navigation__inner">
        ${links.map(
    (item) => renderTemplate`<div class="navigation__item">
                    <a${addAttribute(`navigation__link ${item.title == pageNavigation ? "navigation__link--active" : ""}`, "class")}${addAttribute(item.href, "href")}${addAttribute(item.title, "title")}>
                        ${item.title}
                        ${renderComponent($$result, "Icon", $$Icon, { "name": "burger-arrow", "mod": "burger-arrow" })}
                    </a>
                </div>`
  )}
    </div>

</div>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/Navigation/Navigation.astro", void 0);

const $$Astro$m = createAstro();
const $$Social = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Social;
  const { social, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["social", `${className}`], "class:list")}>
    ${renderSlot($$result, $$slots["default"])}

    <div class="social__list">
        ${social.map((item) => renderTemplate`<a${addAttribute(item.link, "href")} class="social__link" target="_blank">
                    <img class="social__image"${addAttribute(item.image, "src")} alt="" width="32" height="32">
                </a>`)}
    </div>
</div>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/Social/Social.astro", void 0);

const $$Astro$l = createAstro();
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Logo;
  const {
    Tag = "a",
    class: className,
    src,
    srcset,
    type,
    width,
    height,
    ...rest
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { ...rest, "class:list": [
    "logo",
    className
  ] }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead()}<picture class="logo__picture">
        <source${addAttribute(srcset, "srcset")} media="(min-width: 1648px)">
        <img class="logo__image"${addAttribute(src, "src")} alt="На главную" aria-label="Main"${addAttribute(width ? width : "288", "width")}${addAttribute(height ? height : "100", "height")}>
    </picture>
` })}`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/Logo/Logo.astro", void 0);

const $$Astro$k = createAstro();
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Link;
  const {
    href,
    class: className,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${spreadAttributes(rest)}${addAttribute([
    "link",
    className
  ], "class:list")}>${renderSlot($$result, $$slots["default"])}
</a>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/uikit/Link/Link.astro", void 0);

const $$Astro$j = createAstro();
const $$Input = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Input;
  const {
    className,
    id,
    name,
    placeholder,
    required,
    type,
    value,
    jsClass,
    disabled
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["input", className], "class:list")}>
  <input${addAttribute(["input__input-field", jsClass], "class:list")}${addAttribute(id, "id")}${addAttribute(name, "name")}${addAttribute(placeholder, "placeholder")}${addAttribute(required, "required")}${addAttribute(type, "type")}${addAttribute(value, "value")}${addAttribute(disabled, "disabled")}>
</div>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/uikit/Input/Input.astro", void 0);

const $$Astro$i = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    TagButton = "button",
    class: className,
    ...rest
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "TagButton", TagButton, { ...rest, "class:list": [
    "button",
    className
  ] }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}
` })}`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/uikit/Button/Button.astro", void 0);

const $$Astro$h = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Search;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["search js-search-wrapper", `${className}`], "class:list")}>
    <div class="search__preview js-search-preview">
        ${renderComponent($$result, "Icon", $$Icon, { "name": "search", "mod": "search" })}
        <span class="search__preview-text">Поиск</span>
    </div>
    <form class="search__form">
        ${renderComponent($$result, "Input", $$Input, { "className": "input--search", "id": "search", "name": "search", "type": "search", "placeholder": "\u041F\u043E\u0438\u0441\u043A" })}
        ${renderComponent($$result, "TagButton", $$Button, { "class": "button--bright button--search button--absolute js-button-search" }, { "default": ($$result2) => renderTemplate`
            Найти
        ` })}
    </form>
</div>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/uikit/Search/Search.astro", void 0);

const $$Astro$g = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Header;
  const { pageNavigation } = Astro2.props;
  const social = [
    {
      link: "javascript:void(0);",
      image: "images/social/vk.svg"
    },
    {
      link: "javascript:void(0);",
      image: "images/social/tg.svg"
    },
    {
      link: "javascript:void(0);",
      image: "images/social/ok.svg"
    },
    {
      link: "javascript:void(0);",
      image: "images/social/ru.svg"
    },
    {
      link: "javascript:void(0);",
      image: "images/social/smth.svg"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="header" id="header">
    ${renderComponent($$result, "Logo", $$Logo, { "src": "images/logo-min.png", "srcset": "images/logo-big.png", "Tag": "a", "class": "logo--header", "href": "/", "width": "482", "height": "84" })}
    <button class="burger js-burger" aria-label="Открыть меню">
        <span class="burger__line"></span>
    </button>
    <div class="header__burger js-burger-list">
        <button class="button button--burger js-burger" aria-label="Закрыть меню">
            ${renderComponent($$result, "Icon", $$Icon, { "name": "close", "mod": "burger" })}
        </button>
        <div class="header__inner">
            ${renderComponent($$result, "Link", $$Link, { "href": "javascript:void(0);", "class": "link--lk" }, { "default": ($$result2) => renderTemplate`
                Личный кабинет

                ${renderComponent($$result2, "Icon", $$Icon, { "name": "burger-arrow", "mod": "burger-arrow" })}
            ` })}
            ${renderComponent($$result, "Link", $$Link, { "href": "javascript:void(0);", "class": "link--eye" }, { "default": ($$result2) => renderTemplate`
                ${renderComponent($$result2, "Icon", $$Icon, { "name": "eye", "mod": "eye" })}
                <span class="link__inner">Версия для слабовидящих</span>
            ` })}
            ${renderComponent($$result, "Search", $$Search, { "class": "search--header" })}
            ${renderComponent($$result, "Social", $$Social, { "class": "social--header", "social": social }, { "default": ($$result2) => renderTemplate`
                ${renderComponent($$result2, "Link", $$Link, { "href": "tel:+74953339419", "class": "link--phone" }, { "default": ($$result3) => renderTemplate`+7(495)333-94-19` })}
            ` })}
            ${renderComponent($$result, "Navigation", $$Navigation, { "pageNavigation": pageNavigation })}
            ${renderComponent($$result, "Link", $$Link, { "href": "javascript:void(0);", "class": "link--tech" }, { "default": ($$result2) => renderTemplate`Техническая поддержка` })}
        </div>
    </div>
</header>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/Header/Header.astro", void 0);

const $$Astro$f = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Footer;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer class="footer">
    <div class="container container--small">
        <div class="copy">
            <div class="copy__inner">
                <span class="copy__line">Copyright &copy; 2007-2023,</span>
                <span class="copy__line">ГАУ МО «Мособлгосэкспертиза»</span>
            </div>
            ${renderComponent($$result, "Link", $$Link, { "href": "javascript:void(0);", "class": "link--footer-tech" }, { "default": ($$result2) => renderTemplate`Техническая поддержка` })}
        </div>
    </div>

</footer>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/Footer/Footer.astro", void 0);

const $$Astro$e = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, pageDescription, pageKeywords, pageImage, pageNavigation } = Astro2.props;
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimal-ui, user-scalable=no">
    <meta name="skype_toolbar" content="skype_toolbar_parser_compatible">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="google" value="notranslate">
    <meta name="format-detection" content="telephone=no">
    <meta name="format-detection" content="address=no">
    <meta name="format-detection" content="date=no">
    <meta name="format-detection" content="email=no">

    <!-- убрать перед запуском проекта -->
    <meta name="robots" content="noindex">
    <!-- убрать перед запуском проекта -->

    <link rel="icon" type="image/svg+xml" href="/favicon.ico">
    <!-- Import fonts start -->
    <link rel="stylesheet" href="fonts/webfont-icons/icons.css" crossorigin>
    <link rel="stylesheet" href="fonts/fonts.css" crossorigin>
    <!-- Import fonts end -->
    <title>${title}</title>
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <meta name="description"${addAttribute(pageDescription, "content")}>
    <meta name="keywords"${addAttribute(pageKeywords, "content")}>
    <meta property="og:image"${addAttribute(pageImage, "content")}>
    <meta property="og:title"${addAttribute(title, "content")}>
    <meta property="og:type" content="website">
    <meta property="og:url" content="">
    <meta property="og:description"${addAttribute(pageDescription, "content")}>

  ${renderHead()}</head>
  <body class="page-wrapper">
    ${renderComponent($$result, "Header", $$Header, { "pageNavigation": pageNavigation })}
    <main class="main">
      ${renderSlot($$result, $$slots["default"])}
    </main>
    ${renderComponent($$result, "Footer", $$Footer, {})}
  </body></html>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/layouts/BaseLayout.astro", void 0);

const $$Astro$d = createAstro();
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Title;
  const { Tag = "h1", class: className, ...rest } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { ...rest, "class:list": ["title", className] }, { "default": ($$result2) => renderTemplate`
  ${renderSlot($$result2, $$slots["default"])}
` })}`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/uikit/Title/Title.astro", void 0);

const $$Astro$c = createAstro();
const $$Step = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Step;
  const { step, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["step", `${className}`], "class:list")}>
    <ul class="step__list">
        ${step.map((item) => renderTemplate`<li${addAttribute(item.link, "href")} class="step__item">
                    <div class="step__inner">
                        <div class="step__info">
                            <span class="step__num">${item.id}</span>
                            <span class="step__name">${unescapeHTML(item.name)}</span>
                            ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-nav", "mod": `arrow-nav icon--arrow-invert ${item.checked ? "checked" : ""}` })}
                            ${renderComponent($$result, "Icon", $$Icon, { "name": "step-check", "mod": `step-check ${item.checked ? "checked" : ""}` })}
                        </div>
                    </div>
                </li>`)}
    </ul>
</div>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/Step/Step.astro", void 0);

const $$Astro$b = createAstro();
const $$People = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$People;
  const { people, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["people", `${className}`], "class:list")}>
    <div class="people__list">
        ${people.map((item) => renderTemplate`<a${addAttribute(item.link, "href")} class="people__link">
                    <picture${addAttribute(`people__picture ${item.big ? "people__picture--big" : ""}`, "class")}>
                        <img class="people__image"${addAttribute(item.image, "src")} alt="" width="390" height="280">
                    </picture>
                    <span${addAttribute(`people__info ${item.big ? "people__info--invert" : ""}`, "class")}>
                        <span class="people__name">${item.name}
                        </span>
                        ${item.job && renderTemplate`<span class="people__job">${item.job}
                                </span>`}
                    </span>
                </a>`)}
    </div>
</div>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/People/People.astro", void 0);

const $$Astro$a = createAstro();
const $$Textarea = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Textarea;
  const { className, id, name, placeholder, required, jsClass } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["textarea", className], "class:list")}>
  <textarea${addAttribute(["textarea__textarea-field", jsClass], "class:list")}${addAttribute(id, "id")}${addAttribute(name, "name")}${addAttribute(placeholder, "placeholder")}${addAttribute(required, "required")}></textarea>
</div>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/uikit/Textarea/Textarea.astro", void 0);

const $$Astro$9 = createAstro();
const $$Checkbox = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Checkbox;
  const {
    id,
    name,
    count,
    text,
    checked,
    disabled,
    required,
    class: className
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["checkbox", `${className}`], "class:list")}>
  <input class="checkbox__input" type="checkbox"${addAttribute(id, "id")}${addAttribute(name, "name")} autocomplete="off"${addAttribute(checked, "checked")}${addAttribute(disabled, "disabled")}${addAttribute(required, "required")}>
  <label class="checkbox__name"${addAttribute(id, "for")}>
    <span class="checkbox__text">
      ${renderSlot($$result, $$slots["default"])}
    </span>
  </label>
</div>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/uikit/Checkbox/Checkbox.astro", void 0);

const $$Astro$8 = createAstro();
const $$Feedback = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Feedback;
  const { classMod } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<form${addAttribute(`feedback ${classMod ? "feedback--" + classMod : ""} js-form`, "class")} autocomplete="off" novalidate="novalidate">
  ${renderComponent($$result, "Input", $$Input, { "id": `name${classMod ? "-" + classMod : ""}`, "name": "name", "type": "text", "placeholder": "\u0424\u0418\u041E", "required": true, "jsClass": "js-form-name" })}
  <div class="feedback__columns">
    ${renderComponent($$result, "Input", $$Input, { "id": `phone${classMod ? "-" + classMod : ""}`, "name": "phone", "type": "tel", "placeholder": "+7 (999) 999-99-99", "required": true, "className": "input--phone", "jsClass": " js-form-phone" })}
    ${renderComponent($$result, "Input", $$Input, { "id": `mail${classMod ? "-" + classMod : ""}`, "name": "mail", "type": "email", "placeholder": "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430", "required": true, "jsClass": "js-form-mail" })}
  </div>
  ${renderComponent($$result, "Textarea", $$Textarea, { "id": `description${classMod ? "-" + classMod : ""}`, "name": "description", "placeholder": "\u0442\u0435\u043A\u0441\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F", "required": true, "jsClass": "js-form-description" })}

  ${renderComponent($$result, "Checkbox", $$Checkbox, { "id": "check1", "name": "name", "checked": "checked", "class": "" }, { "default": ($$result2) => renderTemplate`
    Нажимая «Отправить», я подтверждаю свое согласие
    <a href="javascript:void(0);" title="">на обработку моих персональных данных</a>
  ` })}
  ${renderComponent($$result, "TagButton", $$Button, { "class": "button button--feedback" }, { "default": ($$result2) => renderTemplate`Отправить` })}
</form>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/Feedback/Feedback.astro", void 0);

const $$Astro$7 = createAstro();
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Pagination;
  return renderTemplate`${maybeRenderHead()}<div class="pagination">
    <a href="javascript:void(0);" class="pagination__link pagination__link--prev" title="">${renderComponent($$result, "Icon", $$Icon, { "name": "pagination-arrow" })}</a>

    <a href="javascript:void(0);" class="pagination__link active" title="">1</a>
    <a href="javascript:void(0);" class="pagination__link" title="">2</a>
    <a href="javascript:void(0);" class="pagination__link" title="">3</a>
    <a href="javascript:void(0);" class="pagination__link" title="">4</a>
    <a href="javascript:void(0);" class="pagination__link" title="">5</a>

    <a href="javascript:void(0);" class="pagination__link pagination__link--next" title="">${renderComponent($$result, "Icon", $$Icon, { "name": "pagination-arrow" })}</a>
</div>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/Pagination/Pagination.astro", void 0);

const $$Astro$6 = createAstro();
const $$NewsList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$NewsList;
  const { news } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="news-block">
    <ul class="news-block__list">
        ${news.map((item) => renderTemplate`<li class="news-block__item">
                    <picture class="news-block__picture">
                        <img class="news-block__image"${addAttribute(item.image, "src")} alt="" width="392" height="237">
                    </picture>
                    <span class="news-block__info">
                        <span class="news-block__date">${item.date}</span>
                        <a${addAttribute(item.link, "href")} class="news-block__title">
                            <span class="news-block__part">${item.light}</span>
                            ${item.title}
                        </a>
                        <span class="news-block__text">${unescapeHTML(item.text)}</span>
                    </span>
                </li>`)}
    </ul>
    ${renderComponent($$result, "Pagination", $$Pagination, {})}
</div>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/NewsList/NewsList.astro", void 0);

const $$Astro$5 = createAstro();
const $$Popup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Popup;
  const { data, labelledby } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<dialog class="popup js-popup"${addAttribute(labelledby, "aria-labelledby")}${addAttribute(data, "data-popup")}>
  <div class="popup__content js-popup-content">
    <button class="popup__close-btn js-close-popup" aria-label="Закрыть попап"></button>
    ${renderSlot($$result, $$slots["default"])}
  </div>
</dialog>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/uikit/Popup/Popup.astro", void 0);

const $$Astro$4 = createAstro();
const $$Radio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Radio;
  const {
    id,
    name,
    text,
    checked,
    disabled,
    required,
    class: className
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["radio", `${className}`], "class:list")}>
  <input class="radio__input" type="radio"${addAttribute(id, "id")}${addAttribute(name, "name")} autocomplete="off"${addAttribute(checked, "checked")}${addAttribute(disabled, "disabled")}${addAttribute(required, "required")}>
  <label class="radio__label"${addAttribute(id, "for")}>
    <span class="radio__text-label">${text}</span>
  </label>
</div>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/uikit/Radio/Radio.astro", void 0);

const $$Astro$3 = createAstro();
const $$Select = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Select;
  const { select, placeholder, class: className, required, jsClass } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["select", `${className}`], "class:list")}>
  <select${addAttribute(["select__hidden js-select", `${jsClass}`], "class:list")}${addAttribute(required, "required")}>
    <option${addAttribute(placeholder, "value")}>${placeholder}</option>
    ${select.map((item) => renderTemplate`<option${addAttribute(item.title, "value")}> ${item.title}</option>`)}
  </select>
</div>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/uikit/Select/Select.astro", void 0);

const $$Astro$2 = createAstro();
const $$Tab = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Tab;
  const { tab, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["tab js-tab-wrap", `${className}`], "class:list")}>
  <ul class="tab__head js-tabs">
    ${tab.map((item, i, row) => {
    if (i + 1 === row.length) {
      return renderTemplate`<li class="tab__item-link">
              <button${addAttribute(item.id, "data-tab-target")} class="active tab__link">
                ${item.title}
              </button>
            </li>`;
    } else {
      return renderTemplate`<li class="tab__item-link">
              <button${addAttribute(item.id, "data-tab-target")} class="tab__link">
                ${item.title}
              </button>
            </li>`;
    }
  })}
  </ul>
  <div class="tab__content js-tab-content">
    ${renderSlot($$result, $$slots["default"])}
  </div>
</div>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/uikit/Tab/Tab.astro", void 0);

const $$Astro$1 = createAstro();
const $$Accordion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Accordion;
  const { accordion, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["accordion", `${className}`], "class:list")}>
  <ul class="accordion__list">
    ${accordion.map((item) => renderTemplate`<li class="accordion__item">
          <button class="accordion__toggle js-accordion-toggle">
            ${" "}
            ${item.title}
            ${renderComponent($$result, "Icon", $$Icon, { "name": "glass", "mod": "glass accordion__icon" })}
          </button>
          <div class="accordion__content js-accordion-content">${item.text}</div>
        </li>`)}
  </ul>
</div>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/uikit/Accordion/Accordion.astro", void 0);

const $$Astro = createAstro();
const $$Gui = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Gui;
  const pageTitle = "Gui";
  const selectFirst = [
    {
      title: "1Lorem"
    },
    {
      title: "1Ipsum"
    },
    {
      title: "1Old"
    }
  ];
  const selectSecond = [
    {
      title: "2Lorem"
    },
    {
      title: "2Ipsum"
    },
    {
      title: "2Old"
    }
  ];
  const tab = [
    {
      id: "home",
      title: "2Lorem"
    },
    {
      id: "pricing",
      title: "2Ipsum"
    },
    {
      id: "about",
      title: "2Old"
    },
    {
      id: "news",
      title: "2Old"
    }
  ];
  const accordion = [
    {
      title: "2Lorem",
      text: "home2"
    },
    {
      title: "2Ipsum",
      text: "pricing"
    },
    {
      title: "2Old",
      text: "about"
    },
    {
      title: "2Old",
      text: "news"
    }
  ];
  const person = [
    {
      big: true,
      invert: true,
      image: "images/people/people1.png",
      name: "\u0421\u0430\u0431\u0438\u0442\u043E\u0432 \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0421\u044F\u0438\u0442\u043E\u0432\u0438\u0447",
      job: "\u043F\u0440\u0435\u0434\u0441\u0435\u0434\u0430\u0442\u0435\u043B\u044C \u041D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043E\u0432\u0435\u0442\u0430 \u0413\u0410\u0423 \u041C\u041E \xAB\u041C\u043E\u0441\u043E\u0431\u043B\u0433\u043E\u0441\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430\xBB, \u0437\u0430\u043C\u0435\u0441\u0442\u0438\u0442\u0435\u043B\u044C \u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0438 \u0438 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438"
    }
  ];
  const people = [
    {
      image: "images/people/people1.png",
      name: "\u0421\u0430\u0431\u0438\u0442\u043E\u0432 \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0421\u044F\u0438\u0442\u043E\u0432\u0438\u0447,",
      job: "\u043F\u0440\u0435\u0434\u0441\u0435\u0434\u0430\u0442\u0435\u043B\u044C \u041D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043E\u0432\u0435\u0442\u0430 \u0413\u0410\u0423 \u041C\u041E \xAB\u041C\u043E\u0441\u043E\u0431\u043B\u0433\u043E\u0441\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430\xBB, \u0437\u0430\u043C\u0435\u0441\u0442\u0438\u0442\u0435\u043B\u044C \u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0438 \u0438 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438"
    },
    {
      image: "images/people/people1.png",
      name: "\u0410\u043B\u0431\u043E\u0440\u043E\u0432 \u0422\u0430\u043C\u0435\u0440\u043B\u0430\u043D \u041C\u0438\u0445\u0430\u0439\u043B\u043E\u0432\u0438\u0447",
      job: "\u0447\u043B\u0435\u043D \u041D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043E\u0432\u0435\u0442\u0430, \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044C \u041C\u0438\u043D\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438"
    },
    {
      image: "images/people/people1.png",
      name: "\u041A\u0430\u0448\u0438\u0440\u0438\u043D\u0430 \u041E\u043B\u044C\u0433\u0430 \u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440\u043E\u0432\u043D\u0430",
      job: "\u0447\u043B\u0435\u043D \u041D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043E\u0432\u0435\u0442\u0430, \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A \u043F\u043B\u0430\u043D\u043E\u0432\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430 \u0423\u0413\u042D \u0413\u0410\u0423 \u041C\u041E \xAB\u041C\u043E\u0441\u043E\u0431\u043B\u0433\u043E\u0441\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430\xBB"
    },
    {
      image: "images/people/people1.png",
      name: "\u041C\u0430\u0442\u0432\u0435\u0439\u043A\u043E \u0418\u0433\u043E\u0440\u044C \u042E\u0440\u044C\u0435\u0432\u0438\u0447",
      job: "\u0447\u043B\u0435\u043D \u041D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043E\u0432\u0435\u0442\u0430, \u043F\u0440\u0435\u0434\u0441\u0435\u0434\u0430\u0442\u0435\u043B\u044C \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u043D\u043E\u0439 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u041F\u0440\u043E\u0444\u0441\u043E\u044E\u0437\u0430 \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u043E\u0432 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0438 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0420\u043E\u0441\u0441\u0438\u0438"
    }
  ];
  const step = [
    {
      id: "01",
      name: "\u041F\u043E\u0434\u0430\u0447\u0430 \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u044F",
      checked: true
    },
    {
      id: "02",
      name: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u043D\u043E\u0441\u0442\u0438",
      checked: true
    },
    {
      id: "03",
      name: "\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430",
      checked: true
    },
    {
      id: "04",
      name: "\u041E\u043F\u043B\u0430\u0442\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430",
      checked: true
    },
    {
      id: "05",
      name: "\u0420\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438",
      checked: true
    },
    {
      id: "06",
      name: "\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F",
      checked: true
    },
    {
      id: "07",
      name: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0432&nbsp;\u0415\u0413\u0420\u0417",
      checked: true
    },
    {
      id: "08",
      name: "\u0423\u0441\u043B\u0443\u0433\u0430 \u043E\u043A\u0430\u0437\u0430\u043D\u0430",
      checked: false
    }
  ];
  const news = [
    {
      image: "images/people/people1.png",
      date: "27.11.2024",
      light: "\u041E\u0414\u041E\u0411\u0420\u0415\u041D\u041E \u041C\u041E\u0413\u042D:",
      title: "\u0420\u0415\u041A\u041E\u041D\u0421\u0422\u0420\u0423\u041A\u0426\u0418\u042F \u041A\u041B\u0418\u041D\u0421\u041A\u041E\u0419 \u0428\u041A\u041E\u041B\u042B \u041E\u041B\u0418\u041C\u041F\u0418\u0419\u0421\u041A\u041E\u0413\u041E \u0420\u0415\u0417\u0415\u0420\u0412\u0410",
      text: "\u0413\u0410\u0423 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \xAB\u041C\u043E\u0441\u043E\u0431\u043B\u0433\u043E\u0441\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430\xBB \u0432\u044B\u043F\u0443\u0441\u0442\u0438\u043B\u043E \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u0443\u044E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044E \u043F\u043E \u0440\u0435\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u041C\u0443\u043D\u0438\u0446\u0438\u043F\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0433\u043E \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u044F \u0433\u043E\u0440\u043E\u0434\u0441\u043A\u043E\u0433\u043E \u043E\u043A\u0440\u0443\u0433\u0430 \u041A\u043B\u0438\u043D \xAB\u041A\u043B\u0438\u043D\u0441\u043A\u0430\u044F \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0430\u044F \u0448\u043A\u043E\u043B\u0430 \u043E\u043B\u0438\u043C\u043F\u0438\u0439\u0441\u043A\u043E\u0433\u043E \u0440\u0435\u0437\u0435\u0440\u0432\u0430\xBB."
    },
    {
      image: "images/people/people1.png",
      date: "27.11.2024",
      title: "\u041F\u0420\u041E\u0415\u041A\u0422\u0418\u0420\u041E\u0412\u0410\u041D\u0418\u0415 \u0421\u041E\u0426\u0418\u0410\u041B\u042C\u041D\u042B\u0425 \u041E\u0411\u042A\u0415\u041A\u0422\u041E\u0412 \u2014 \u041F\u041E\u0414 \u041A\u041E\u041D\u0422\u0420\u041E\u041B\u0415\u041C \u041C\u041E\u0421\u041E\u0411\u041B\u0413\u041E\u0421\u042D\u041A\u0421\u041F\u0415\u0420\u0422\u0418\u0417\u042B",
      text: "7 \u043D\u043E\u044F\u0431\u0440\u044F \u0432 \u0413\u0410\u0423 \u041CO \xAB\u041C\u043E\u0441\u043E\u0431\u043B\u0433\u043E\u0441\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430\xBB \u043F\u043E\u0434 \u043F\u0440\u0435\u0434\u0441\u0435\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u0437\u0430\u043C\u0435\u0441\u0442\u0438\u0442\u0435\u043B\u044F \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0430 \u041C\u041E\u0413\u042D \u041E. \u0413. \u0412\u0430\u043B\u043E\u0432\u0430 \u043F\u0440\u043E\u0448\u043B\u043E \u0441\u043E\u0432\u0435\u0449\u0430\u043D\u0438\u0435 \xAB\u041E\u0431\u044A\u0435\u043A\u0442\u044B, \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044B\u0435 \u0432 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438, \u0441\u043E \u0441\u0440\u043E\u043A\u043E\u043C \u0441\u0434\u0430\u0447\u0438 \u0432 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u044E \u0432 2024 \u0433\u043E\u0434\u0443 \u0438 \u0441\u0440\u043E\u043A\u043E\u043C \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u041F\u0418\u0420 \u0432 2024 \u0433\u043E\u0434\u0443\xBB."
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<aside class="aside">
    Левый блок
  </aside>
  <div class="container container--small">
    Контейнер

    <hr>
    <br>
    <h2>Кнопки</h2>
    <br>


    ${renderComponent($$result2, "TagButton", $$Button, { "TagButton": "button", "class": "", "rel": "noopener" }, { "default": ($$result3) => renderTemplate`
      Кнопка
    ` })}
    ${renderComponent($$result2, "TagButton", $$Button, { "TagButton": "button", "class": "button--search", "rel": "noopener" }, { "default": ($$result3) => renderTemplate`
      Поиск
    ` })}
    ${renderComponent($$result2, "TagButton", $$Button, { "TagButton": "button", "class": "button--light", "rel": "noopener" }, { "default": ($$result3) => renderTemplate`
      Скачать
    ` })}
    ${renderComponent($$result2, "TagButton", $$Button, { "TagButton": "a", "class": "button--icon", "rel": "noopener" }, { "default": ($$result3) => renderTemplate`
      <span>PDF</span>
    ` })}

    <hr>
    <br>
    ${renderComponent($$result2, "NewsList", $$NewsList, { "news": news })}
    <br>
    <hr>
    <br>
    ${renderComponent($$result2, "Step", $$Step, { "step": step })}
    <br>
    <hr>
    <br>
    ${renderComponent($$result2, "People", $$People, { "people": person })}
    <br>
    ${renderComponent($$result2, "People", $$People, { "people": people })}
    <br>
    <hr>
    <br>
    <br>
    <h2>Заголовки</h2>
    <br>
    <!-- <Title Tag="h3" className='title title--h3'>
            <Fragment set:html="Заголовок H3"/>
        </Title> -->

    ${renderComponent($$result2, "Title", $$Title, { "Tag": "h1", "className": "title title--h1" }, { "default": ($$result3) => renderTemplate` Заголовок H1 ` })}

    ${renderComponent($$result2, "Title", $$Title, { "Tag": "h2", "className": "title title--h2" }, { "default": ($$result3) => renderTemplate` Заголовок H2 ` })}

    ${renderComponent($$result2, "Title", $$Title, { "Tag": "h3", "className": "title title--h3" }, { "default": ($$result3) => renderTemplate` Заголовок H3 ` })}

    <hr>
    <br>
    <h2>Ссылки</h2>
    <br>

    ${renderComponent($$result2, "Link", $$Link, { "href": "javascript:void(0);", "class": "flex gap-1 items-center justify-center", "rel": "noopener" }, { "default": ($$result3) => renderTemplate`
      Ссылка
    ` })}

    <hr>
    <br>
    <h2>Попап</h2>
    <br>

    ${renderComponent($$result2, "TagButton", $$Button, { "data-popup": "testpopup", "class": "js-open-popup" }, { "default": ($$result3) => renderTemplate`Попап` })}

    <hr>
    <br>
    <h2>Иконки</h2>
    <br>

    ${renderComponent($$result2, "Icon", $$Icon, { "name": "glass", "mod": "glass" })}

    ${renderComponent($$result2, "Icon", $$Icon, { "name": "burger", "mod": "burger" })}

    <hr>
    <br>
    <h2>Форма, инпуты, textarea</h2>
    <br>
    ${renderComponent($$result2, "Feedback", $$Feedback, {})}
    <hr>
    <br>
    <h2>Checkbox</h2>
    <br>

    ${renderComponent($$result2, "Checkbox", $$Checkbox, { "id": "check1", "name": "name", "count": "", "text": "1", "checked": "checked", "class": "" })}

    ${renderComponent($$result2, "Checkbox", $$Checkbox, { "id": "check2", "name": "name2", "count": "", "text": "2", "disabled": "disabled", "class": "select--modification" })}

    <hr>
    <br>
    <h2>Radio</h2>
    <br>

    ${renderComponent($$result2, "Radio", $$Radio, { "id": "radio1", "name": "radio", "count": "", "text": "1", "checked": "checked", "class": "", "required": "required" })}

    ${renderComponent($$result2, "Radio", $$Radio, { "id": "radio2", "name": "radio", "count": "", "text": "2", "disabled": "disabled", "class": "radio--modification" })}

    <hr>
    <br>
    <h2>Select</h2>
    <br>

    ${renderComponent($$result2, "Select", $$Select, { "select": selectFirst, "placeholder": "\u0422\u0435\u0441\u0442\u043E\u0432\u044B\u0439 \u0442\u0435\u043A\u0441\u0442", "class": "select--modification", "required": "required" })}

    ${renderComponent($$result2, "Select", $$Select, { "select": selectSecond, "placeholder": "\u0422\u0435\u0441\u0442\u043E\u0432\u044B\u0439 \u0442\u0435\u043A\u0441\u0442", "class": "" })}
    <hr>
    <br>
    <h2>Tab</h2>
    <br>
    ${renderComponent($$result2, "Tab", $$Tab, { "tab": tab, "class": "" }, { "default": ($$result3) => renderTemplate`
      <div id="home2" data-tab-content class="tab__item active">
        <h1>Home</h1>
        <p>This is the home</p>
      </div>
      <div id="pricing2" data-tab-content class="tab__item">
        <h1>Pricing</h1>
        <p>Some information on pricing</p>
      </div>
      <div id="about2" data-tab-content class="tab__item">
        <h1>About</h1>
        <p>Let me tell you about me</p>
      </div>
      <div id="news2" data-tab-content class="tab__item">
        <h1>News</h1>
        <p>News is great.</p>
      </div>
    ` })}
    <hr>
    <br>
    <h2>Accordion</h2>
    <br>
    ${renderComponent($$result2, "Accordion", $$Accordion, { "accordion": accordion, "class": "" })}
    <hr>
    <br>
  </div>
` })}
${renderComponent($$result, "Popup", $$Popup, { "data": "testpopup", "labelledby": "testpopup" }, { "default": ($$result2) => renderTemplate`
  <h2>Заголовок попапа</h2>
` })}`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/Gui.astro", void 0);

const $$file = "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/Gui.astro";
const $$url = "/Gui.html";

const Gui = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gui,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Icon as $, Gui as G, $$BaseLayout as a, $$Title as b, $$Button as c, $$Feedback as d, $$Step as e, $$People as f, $$NewsList as g };
