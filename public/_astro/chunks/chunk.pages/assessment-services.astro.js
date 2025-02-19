import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as addAttribute, s as spreadAttributes, u as unescapeHTML, F as Fragment } from '../chunk.astro.js';
import { $ as $$Icon, a as $$BaseLayout } from './Gui.astro.js';
/* empty css                            */
const $$Astro$3 = createAstro();
const $$CategoryList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CategoryList;
  const { category } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="category js-list">
    <button aria-label="" class="category__text js-button">
        ${category.text}
        <span>
            ${renderComponent($$result, "Icon", $$Icon, { "name": "arrrow-down" })}
        </span>
    </button>
    <div${addAttribute(`category__list js-scroll ${category.nonum ? "category__list--nonum" : ""}`, "class")}>
        ${category.list.map((item) => renderTemplate`<div class="category__line">
                    <a${addAttribute(item.href, "href")}${addAttribute(`category__item ${item.main ? "category__item--main" : ""} ${item.active ? "active" : ""}`, "class")} title=""${spreadAttributes(item.pdf && { download: item.pdf, target: "_blank" })}>
                        ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(item.text)}` })}

                        ${item.content ? renderTemplate`<span class="category__content">${item.content}</span>` : ""}
                        ${item.pdf ? renderTemplate`<span>pdf</span>` : renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "arrrow-right", "mod": "" })}`}
                    </a>

                    ${item.add && renderTemplate`<ul${addAttribute(`category__inner ${item.opened ? "category__inner--opened" : ""}`, "class")}>
                        ${item.add.map((inner) => renderTemplate`<li class="category__inner-line">
                                        <a${addAttribute(inner.href, "href")}${addAttribute(`category__item category__item--inner ${inner.active ? "active" : ""}`, "class")} title=""${spreadAttributes(inner.pdf && { download: inner.pdf, target: "_blank" })}>
                                            ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(inner.text)}` })}
                                            ${inner.pdf ? renderTemplate`<span>pdf</span>` : ""}
                                        </a>
                                    </li>`)}
                        </ul>`}
                </div>`)}
    </div>
</div>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/CategoryList/CategoryList.astro", void 0);

const $$Astro$2 = createAstro();
const $$Contacts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Contacts;
  const { contacts, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["contacts", className], "class:list")}>
    <ul class="contacts__list">
        ${contacts.map(
    (item) => renderTemplate`<li class="contacts__item">
                    ${renderComponent($$result, "Icon", $$Icon, { "name": item.icon, "mod": item.icon })}
                    <h4 class="contacts__title">${item.title}</h4>
                    ${item.linkHref ? renderTemplate`<a class="contacts__link"${addAttribute(item.linkHref, "href")}${addAttribute(item.linkName, "title")}>
                                ${item.linkName}
                            </a>` : renderTemplate`<span class="contacts__info">${unescapeHTML(item.linkName)}</span>`}
                </li>`
  )}
    </ul>
</section>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/Contacts/Contacts.astro", void 0);

const $$Astro$1 = createAstro();
const $$ServiceLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ServiceLink;
  const { service } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="service-link">
    <ul class="service-link__list">
        ${service.map((item) => renderTemplate`<li class="service-link__item">
                    <a${addAttribute(item.link, "href")} class="service-link__link">
                        <span>${item.name}</span>
                        ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow", "mod": "" })}
                    </a>
                </li>`)}
    </ul>
</div>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/ServiceLink/ServiceLink.astro", void 0);

const $$Astro = createAstro();
const $$AssessmentServices = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AssessmentServices;
  const pageTitle = "\u042D\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u043E-\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u043E \u043E\u0446\u0435\u043D\u043A\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u044B\u0445 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u0439";
  const pageNavigation = "\u0423\u0441\u043B\u0443\u0433\u0438";
  const category = {
    text: "\u0423\u0441\u043B\u0443\u0433\u0438 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u044B",
    list: [
      {
        href: "services.html",
        text: "\u0423\u0421\u041B\u0423\u0413\u0418",
        main: true,
        active: true
      },
      {
        href: "examination-services.html",
        text: "\u0423\u0441\u043B\u0443\u0433\u0438 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u044B",
        active: true,
        opened: true,
        add: [
          {
            href: "documentation-examination.html",
            text: "\u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0439, \u0432&nbsp;\u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u0441\u043C\u0435\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438&nbsp;\u0438 (\u0438\u043B\u0438) \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u044B\u0445 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u0439"
          },
          {
            href: "estimate.html",
            text: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u043D\u043E\u0441\u0442\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0441\u043C\u0435\u0442\u043D\u043E\u0439 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438"
          },
          {
            href: "model-examination.html",
            text: "\u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430 \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0445 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043C\u043E\u0434\u0435\u043B\u0435\u0439"
          },
          {
            href: "expert-support.html",
            text: "\u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u0432&nbsp;\u0444\u043E\u0440\u043C\u0435 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u043E\u0433\u043E \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u044B"
          },
          {
            href: "expert-result.html",
            text: "\u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439, \u0432\u043D\u0435\u0441\u0435\u043D\u043D\u044B\u0445 \u0432&nbsp;\u043F\u0440\u043E\u0435\u043A\u0442\u043D\u0443\u044E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044E \u043F\u043E&nbsp;\u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u043C \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u043E\u0433\u043E \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u044F"
          },
          {
            href: "experts-development.html",
            text: "\u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430 \u0432&nbsp;\u0444\u043E\u0440\u043C\u0435 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u043E\u0433\u043E \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u043D\u0430&nbsp;\u044D\u0442\u0430\u043F\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438"
          },
          {
            href: "assessment-services.html",
            text: "\u042D\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u043E-\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u043E&nbsp;\u043E\u0446\u0435\u043D\u043A\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u0438&nbsp;\u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u044B\u0445 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u0439",
            active: true
          },
          {
            href: "section-evaluation.html",
            text: "\u042D\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u043E-\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u043E&nbsp;\u043E\u0446\u0435\u043D\u043A\u0435 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0445 \u0440\u0430\u0437\u0434\u0435\u043B\u043E\u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438, \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 (\u0421\u0418\u041F)"
          }
        ]
      },
      {
        href: "pricing-services.html",
        text: "\u0423\u0441\u043B\u0443\u0433\u0438 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0446\u0435\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0441\u043C\u0435\u0442\u043D\u043E\u0433\u043E \u043D\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",
        add: [
          {
            href: "repair.html",
            text: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0441\u043C\u0435\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u0440\u0435\u043C\u043E\u043D\u0442\u043D\u044B\u0445 \u0440\u0430\u0431\u043E\u0442, \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0438\u043B\u0438 \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E \u0444\u0438\u043D\u0430\u043D\u0441\u0438\u0440\u0443\u0435\u043C\u044B\u0445 \u0437\u0430&nbsp;\u0441\u0447\u0435\u0442 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0431\u044E\u0434\u0436\u0435\u0442\u0430 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438"
          },
          {
            href: "current-repairs.html",
            text: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0441\u043C\u0435\u0442\u043D\u043E\u0439 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0440\u0430\u0431\u043E\u0442 \u043F\u043E&nbsp;\u0442\u0435\u043A\u0443\u0449\u0435\u043C\u0443 \u0440\u0435\u043C\u043E\u043D\u0442\u0443 \u0437\u0434\u0430\u043D\u0438\u0439, \u0441\u043E\u043E\u0440\u0443\u0436\u0435\u043D\u0438\u0439, \u0432&nbsp;\u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u043B\u0438\u043D\u0435\u0439\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432, \u0440\u0430\u0431\u043E\u0442 \u043F\u043E&nbsp;\u0431\u043B\u0430\u0433\u043E\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0443 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0439 \u043C\u0443\u043D\u0438\u0446\u0438\u043F\u0430\u043B\u044C\u043D\u044B\u0445 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0439 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438, \u0444\u0438\u043D\u0430\u043D\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441&nbsp;\u043F\u0440\u0438\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0435\u043C \u0431\u044E\u0434\u0436\u0435\u0442\u0430 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438"
          },
          {
            href: "regulatory-framework.html",
            text: "\u0422\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u043C\u0435\u0442\u043D\u043E-\u043D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u0431\u0430\u0437\u0430 \u0422\u0421\u041D\u0411-2001 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438"
          },
          {
            href: "catalogs.html",
            text: "\u0418\u043D\u0434\u0435\u043A\u0441\u044B \u0438&nbsp;\u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0438"
          },
          {
            href: "cost-verification.html",
            text: "\u042D\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u043E-\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u043E&nbsp;\u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0435 \u0440\u0430\u0441\u0446\u0435\u043D\u043E\u043A \u0438&nbsp;\u0438\u043D\u0434\u0435\u043A\u0441\u043E\u0432 \u043F\u0435\u0440\u0435\u0441\u0447\u0435\u0442\u0430, \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0435 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E-\u0438\u0437\u044B\u0441\u043A\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445 \u0440\u0430\u0431\u043E\u0442"
          },
          {
            href: "javascript:void(0);",
            text: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u0430 \u0413\u0410\u0423 \u041C\u041E&nbsp;&laquo;\u041C\u043E\u0441\u043E\u0431\u043B\u0433\u043E\u0441\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430&raquo;",
            pdf: true
          }
        ]
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
  const service = [
    {
      link: "javascript:void(0);",
      name: "\u0412 \u041B\u0418\u0427\u041D\u042B\u0419 \u041A\u0410\u0411\u0418\u041D\u0415\u0422"
    },
    {
      link: "javascript:void(0);",
      name: "\u041D\u0410 \u041F\u041E\u0420\u0422\u0410\u041B \u0413\u041E\u0421\u0423\u0421\u041B\u0423\u0413 \u041C\u041E\u0421\u041A\u041E\u0412\u0421\u041A\u041E\u0419 \u041E\u0411\u041B\u0410\u0421\u0422\u0418"
    }
  ];
  const contacts = [
    {
      title: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
      icon: "phone",
      linkName: "+7 (495) 333 9419",
      linkHref: "tel:+74953339419"
    },
    {
      title: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430",
      icon: "mail",
      linkName: "moexp_info@mosreg.ru",
      linkHref: "mailto:moexp_info@mosreg.ru"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "pageTitle": pageTitle, "pageNavigation": pageNavigation }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead()}<aside class="aside">
        ${renderComponent($$result2, "CategoryList", $$CategoryList, { "category": category })}
    </aside>
    <div class="container container--small">
        <div class="content">
            <div class="content__left-block">
                <div class="content__block">
                    <div class="article">
                        <h1>Экспертно-консультационные услуги по&nbsp;оценке соответствия проектной документации и&nbsp;результатов инженерных изысканий</h1>
                        <div class="article__text article__text--cols">
                            Предметом Экспертно-консультационных услуг по&nbsp;оценке соответствия проектной документации и&nbsp;результатов инженерных изысканий является оценка ее&nbsp;соответствия требованиям технических регламентов, в&nbsp;том числе санитарно-эпидемиологическим, экологическим требованиям, требованиям государственной охраны объектов культурного наследия, требованиям пожарной, промышленной, ядерной, радиационной и&nbsp;иной безопасности, в&nbsp;том числе экспертиза применения проектных решений в&nbsp;отдельных разделах проектной документации.
                        </div>
                    </div>
                </div>
                <div class="content__block">
                    <h3>Получить услугу</h3>
                    ${renderComponent($$result2, "ServiceLink", $$ServiceLink, { "service": service })}
                </div>
                <div class="content__block">
                    <h3>Получить консультацию</h3>
                    ${renderComponent($$result2, "Contacts", $$Contacts, { "contacts": contacts, "class": "contacts--content" })}
                </div>
            </div>
        </div>
    </div>
` })}`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/assessment-services.astro", void 0);

const $$file = "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/assessment-services.astro";
const $$url = "/assessment-services.html";

const assessmentServices = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$AssessmentServices,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$CategoryList as $, $$ServiceLink as a, $$Contacts as b, assessmentServices as c };
