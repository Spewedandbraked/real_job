import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunk.astro.js';
import { b as $$Title, a as $$BaseLayout } from './Gui.astro.js';
import { $ as $$CategoryList } from './assessment-services.astro.js';
import { $ as $$Materials } from './audit-samples.astro.js';
import 'html-escaper';
/* empty css              *//* empty css              *//* empty css                            *//* empty css            *//* empty css                 *//* empty css                      */
const $$Astro = createAstro();
const $$SoftwarePackage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SoftwarePackage;
  const pageTitle = '\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441  "\u0422\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u043C\u0435\u0442\u043D\u043E-\u043D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u0431\u0430\u0437\u0430 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0422\u0421\u041D\u0411-2001 \u041C\u041E"  (\u0422\u0421\u041D\u0411-2001 \u041C\u041E)';
  const pageNavigation = "\u0423\u0441\u043B\u0443\u0433\u0438";
  const category = {
    text: "\u0423\u0441\u043B\u0443\u0433\u0438 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0446\u0435\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0441\u043C\u0435\u0442\u043D\u043E\u0433\u043E \u043D\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",
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
        active: true,
        opened: true,
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
  const materials = {
    side: true,
    list: [
      {
        text: '\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432, \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u044E\u0449\u0438\u0445\u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435 \u0436\u0438\u0437\u043D\u0435\u043D\u043D\u043E\u0433\u043E \u0446\u0438\u043A\u043B\u0430. \u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 "\u0422\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u043C\u0435\u0442\u043D\u043E-\u043D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u0431\u0430\u0437\u0430 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 (\u0422\u0421\u041D\u0411-2001 \u041C\u041E)"',
        href: "javascript:void(0);",
        pdf: true
      },
      {
        text: '\u0424\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0433\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F  "\u0422\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u043C\u0435\u0442\u043D\u043E-\u043D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u0431\u0430\u0437\u0430 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 (\u0422\u0421\u041D\u0411-2001 \u041C\u041E)"',
        href: "javascript:void(0);",
        pdf: true
      },
      {
        text: '\u0418\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F \u043F\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435 \u0438 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0433\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F "\u0422\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u043C\u0435\u0442\u043D\u043E-\u043D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u0431\u0430\u0437\u0430 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 (\u0422\u0421\u041D\u0411-2001 \u041C\u041E)"',
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
                    <h1>Программный комплекс &laquo;Территориальная сметно-нормативная база Московской области ТСНБ-2001&nbsp;МО&raquo; (ТСНБ-2001&nbsp;МО)</h1>
                    <div class="article__text article__text--cols">
                        <p>Программное обеспечение &laquo;Территориальная сметно-нормативная база Московской области (ТСНБ-2001&nbsp;МО)&raquo;, содержит &laquo;Территориальную сметно-нормативную базу Московской области (ТСНБ-2001&nbsp;МО)&raquo;, далее&nbsp;&mdash; База данных, в&nbsp;которую включены расценки, базовые стоимости строительных ресурсов, технические части к&nbsp;сборниками, позволяющие предприятиям строительного комплекса Московской области составлять проектно-сметные расчеты на&nbsp;специальные строительные, ремонтно-строительные, монтажные и&nbsp;пусконаладочные работы в&nbsp;базовом и&nbsp;текущем уровне цен с&nbsp;применением расчетных индексов пересчета сметной стоимости работ и&nbsp;с&nbsp;использованием различных программных комплексов сметных программ.</p>
                        <p>База данных содержит территориальные сметные цены и&nbsp;единичные расценки, предусмотренные для составления сметной документации и&nbsp;применения на&nbsp;территории Московской области, а&nbsp;также расчетные индексы пересчета и&nbsp;каталоги текущих цен:</p>
                        <p>ТЕР-2001 Московской области (приказы Минстроя России от&nbsp;21.09.2015 &#8470;&nbsp;675/пр, от&nbsp;28.02.2017 &#8470;&#8470;&nbsp;253/пр-264/пр), в&nbsp;том числе:</p>
                        <ul>
                            <li>На&nbsp;строительные и&nbsp;специальные строительные работы (ТЕР 81-02-2001).</li>
                            <li>На&nbsp;ремонтно-строительные работы (ТЕРр 81-04-2001).</li>
                            <li>На&nbsp;монтаж оборудования (ТЕРм 81-03-2001).</li>
                            <li>На&nbsp;пусконаладочные работы (ТЕРп 81-05-2001).</li>
                            <li>На&nbsp;капитальный ремонт оборудования (ТЕРмр 81-06-2001).</li>
                            <li>На&nbsp;материалы, изделия и&nbsp;конструкции, применяемые в&nbsp;строительстве (ТССЦ 81-01-2001).</li>
                            <li>На&nbsp;эксплуатацию строительных машин и&nbsp;автотранспортных средств (ТСЭМ 81-01-2001).</li>
                            <li>На&nbsp;перевозки грузов для строительства (ТССЦпг 81-01-2001).</li>
                        </ul>
                        <p>Дополнения к&nbsp;Территориальным единичным расценкам на&nbsp;строительные, специальные строительные, ремонтно-строительные, монтажные работы для Московской области. ТЭСНПиТЕР-2001&nbsp;МО к&nbsp;Территориальной сметно-нормативной базе для Московской области в&nbsp;редакции 2014&nbsp;г (ТСНБ-2001&nbsp;МО).</p>
                        <ul>
                            <li>Территориальный сборник единичных расценок на&nbsp;эксплуатацию дорог и&nbsp;элементов благоустройства с&nbsp;дополнениями и&nbsp;изменениями ТЭСНПиТЕРэ-01-2001.</li>
                            <li>Каталог текущих цен на&nbsp;материалы, изделия и&nbsp;конструкции, применяемые в&nbsp;строительстве по&nbsp;объектам, расположенным на&nbsp;территории московской области (КТЦ).</li>
                            <li>Каталог текущих цен на&nbsp;оборудование, применяемое в&nbsp;строительстве, реконструкции и&nbsp;капитальном ремонте по&nbsp;объектам, расположенным на&nbsp;территории Московской Области (КТЦО).</li>
                            <li>Каталог текущих цен на&nbsp;мебель, используемую на&nbsp;объектах, расположенных на&nbsp;территории московской области, при строительстве и&nbsp;реконструкции (КТЦ на&nbsp;мебель).</li>
                            <li>Расчетные индексы пересчета стоимости строительных, специальных строительных, ремонтно-строительных, монтажных и&nbsp;пусконаладочных работ для Московской области к&nbsp;ТЕР-2001 Московской области (приказы Минстроя России от&nbsp;21.09.2015 &#8470;&nbsp;675/пр, от&nbsp;28.02.2017 &#8470;&#8470;&nbsp;253/пр-264/пр).</li>
                            <li>Расчетные индексы пересчета средних сметных цен на&nbsp;материалы, изделия и&nbsp;конструкции (к&nbsp;ТССЦ).</li>
                            <li>Расчетные индексы пересчета сметных расценок на&nbsp;эксплуатацию строительных машин и&nbsp;автотранспортных средств (к&nbsp;ТСЭМ).</li>
                            <li>Расчетные индексы пересчета к&nbsp;ТЭСНПиТЕР-2001&nbsp;МО.</li>
                            <li>Расчетные индексы пересчета к&nbsp;ТЭСНПиТЕРэ-01-2001.</li>
                            <li>Укрупненные индексы изменения сметной стоимости строительства по&nbsp;элементам затрат по&nbsp;отдельным объектам строительства для Московской области к&nbsp;ТЕР-2001 Московской области (приказы Минстроя России от&nbsp;21.09.2015 &#8470;&nbsp;675/пр, от&nbsp;28.02.2017 &#8470;&#8470;&nbsp;253/пр-264/пр).</li>
                            <li>Территориальные единичные расценки на&nbsp;проектно-изыскательские работы Московской области ТЕРпир МО.</li>
                            <li>Индексы инфляционного изменения базовой стоимости проектно-изыскательских работ для Московской области, осуществляемых с&nbsp;привлечением средств бюджета Московской области.</li>
                        </ul>
                        <p>База данных&nbsp;МО полностью адаптирована для применения в&nbsp;любом программном комплексе сметных программ, содержит данные в&nbsp;унифицированном формате.</p>
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
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/software-package.astro", void 0);

const $$file = "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/software-package.astro";
const $$url = "/software-package.html";

export { $$SoftwarePackage as default, $$file as file, $$url as url };
