import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunk.astro.js';
import { b as $$Title, a as $$BaseLayout } from './Gui.astro.js';
import { $ as $$CategoryList, a as $$ServiceLink, b as $$Contacts } from './assessment-services.astro.js';
import { $ as $$Materials } from './audit-samples.astro.js';
import 'html-escaper';
/* empty css              *//* empty css              *//* empty css                            *//* empty css            *//* empty css                 *//* empty css                      */
const $$Astro = createAstro();
const $$ExpertResult = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ExpertResult;
  const pageTitle = "\u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439, \u0432\u043D\u0435\u0441\u0435\u043D\u043D\u044B\u0445 \u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u0443\u044E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044E \u043F\u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u043C \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u043E\u0433\u043E \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u044F";
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
            text: "\u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439, \u0432\u043D\u0435\u0441\u0435\u043D\u043D\u044B\u0445 \u0432&nbsp;\u043F\u0440\u043E\u0435\u043A\u0442\u043D\u0443\u044E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044E \u043F\u043E&nbsp;\u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u043C \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u043E\u0433\u043E \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u044F",
            active: true
          },
          {
            href: "experts-development.html",
            text: "\u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430 \u0432&nbsp;\u0444\u043E\u0440\u043C\u0435 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u043E\u0433\u043E \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u043D\u0430&nbsp;\u044D\u0442\u0430\u043F\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438"
          },
          {
            href: "assessment-services.html",
            text: "\u042D\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u043E-\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u043E&nbsp;\u043E\u0446\u0435\u043D\u043A\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u0438&nbsp;\u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u044B\u0445 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u0439"
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
  const materials = {
    document: true,
    side: true,
    list: [
      {
        text: "\u0417\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u043E\u0431 \u043E\u0446\u0435\u043D\u043A\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439, \u0432\u043D\u0435\u0441\u0435\u043D\u043D\u044B\u0445 \u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u0443\u044E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044E, \u043F\u043E\u043B\u0443\u0447\u0438\u0432\u0448\u0443\u044E \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u044B, \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u043E\u0433\u043E \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u044F",
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
                <div class="content__block">
                    <div class="article">
                        <h1>Государственная экспертиза изменений, внесенных в&nbsp;проектную документацию по&nbsp;результатам экспертного сопровождения</h1>
                        <div class="article__text article__text--cols">
                            <p>&quot;Экспертное сопровождение&nbsp;&mdash; это оценка соответствия изменений, внесенных в&nbsp;проектную документацию, получившую положительное заключение экспертизы, требованиям технических регламентов, санитарно-эпидемиологическим требованиям, требованиям в&nbsp;области охраны окружающей среды, требованиям государственной охраны объектов культурного наследия, требованиям к&nbsp;безопасному использованию атомной энергии, требованиям промышленной безопасности, требованиям к&nbsp;обеспечению надежности и&nbsp;безопасности электроэнергетических систем и&nbsp;объектов электроэнергетики, требованиям антитеррористической защищенности объекта, заданию застройщика или технического заказчика на&nbsp;проектирование, результатам инженерных изысканий, включая оценку совместимости изменений, внесенных в&nbsp;проектную документацию, с&nbsp;частью проектной документацией, в&nbsp;которую указанные изменения не&nbsp;вносились.</p>
                            <p>Экспертное сопровождение осуществляется по&nbsp;решению застройщика или технического заказчика и&nbsp;проводится органом исполнительной власти или организацией, проводившими экспертизу проектной документации, которые подтверждают соответствие внесенных в&nbsp;проектную документацию изменений установленным требованиям.&quot;</p>
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
            <div class="content__right-block">
                ${renderComponent($$result2, "Title", $$Title, { "Tag": "h3", "className": "title title--h3" }, { "default": ($$result3) => renderTemplate`Материалы` })}
                ${renderComponent($$result2, "Materials", $$Materials, { "materials": materials })}
            </div>
        </div>
    </div>
` })}`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/expert-result.astro", void 0);

const $$file = "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/expert-result.astro";
const $$url = "/expert-result.html";

export { $$ExpertResult as default, $$file as file, $$url as url };
