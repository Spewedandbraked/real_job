import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunk.astro.js';
import { a as $$BaseLayout } from './Gui.astro.js';
import { $ as $$CategoryList } from './assessment-services.astro.js';
import { $ as $$Materials } from './audit-samples.astro.js';
import 'html-escaper';
/* empty css              *//* empty css              *//* empty css                            *//* empty css            *//* empty css                 *//* empty css                      */
const $$Astro = createAstro();
const $$CollectionIndexes = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CollectionIndexes;
  const pageTitle = "\u0421\u0431\u043E\u0440\u043D\u0438\u043A\u0438 \u0440\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0445 \u0438\u043D\u0434\u0435\u043A\u0441\u043E\u0432 \u043F\u0435\u0440\u0435\u0441\u0447\u0435\u0442\u0430 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438";
  const pageNavigation = "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B";
  const category = {
    text: "\u041D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u043E-\u043C\u0435\u0442\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0438 \u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B",
    list: [
      {
        href: "doc.html",
        text: "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B",
        main: true,
        active: true
      },
      {
        href: "registers-conclusions.html",
        text: "\u0420\u0435\u0435\u0441\u0442\u0440\u044B \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0439",
        add: [
          {
            href: "javascript:void(0);",
            text: "\u0421\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E&nbsp;\u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438, \u0432&nbsp;\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0438 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0432\u044B\u0434\u0430\u043D\u044B \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u044B",
            pdf: true
          },
          {
            href: "expert-opinion.html",
            text: "\u0420\u0435\u0435\u0441\u0442\u0440\u044B \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u044B \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438&nbsp;\u0438 (\u0438\u043B\u0438) \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u044B\u0445 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u0439, \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u043D\u043E\u0441\u0442\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0441\u043C\u0435\u0442\u043D\u043E\u0439 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438"
          },
          {
            href: "documentation-conclusion.html",
            text: "\u0420\u0435\u0435\u0441\u0442\u0440\u044B \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0439 \u043F\u043E&nbsp;\u0441\u043C\u0435\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043D\u0430&nbsp;\u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438 \u0440\u0435\u043C\u043E\u043D\u0442\u043D\u044B\u0445 \u0440\u0430\u0431\u043E\u0442, \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0438\u043B\u0438 \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E \u0444\u0438\u043D\u0430\u043D\u0441\u0438\u0440\u0443\u0435\u043C\u044B\u0445 \u0438\u0437&nbsp;\u0431\u044E\u0434\u0436\u0435\u0442\u0430 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438",
            active: true
          },
          {
            href: "cost-conclusion.html",
            text: "\u0420\u0435\u0435\u0441\u0442\u0440\u044B \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0439 \u0441\u043C\u0435\u0442\u043D\u043E\u0439 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0440\u0430\u0431\u043E\u0442 \u043F\u043E&nbsp;\u0442\u0435\u043A\u0443\u0449\u0435\u043C\u0443 \u0440\u0435\u043C\u043E\u043D\u0442\u0443 \u0437\u0434\u0430\u043D\u0438\u0439, \u0441\u043E\u043E\u0440\u0443\u0436\u0435\u043D\u0438\u0439, \u0432&nbsp;\u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u043B\u0438\u043D\u0435\u0439\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432, \u0440\u0430\u0431\u043E\u0442 \u043F\u043E&nbsp;\u0431\u043B\u0430\u0433\u043E\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0443 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0439 \u043C\u0443\u043D\u0438\u0446\u0438\u043F\u0430\u043B\u044C\u043D\u044B\u0445 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0439 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438, \u0444\u0438\u043D\u0430\u043D\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441&nbsp;\u043F\u0440\u0438\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0435\u043C \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0431\u044E\u0434\u0436\u0435\u0442\u0430 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438"
          }
        ]
      },
      {
        href: "regulations.html",
        text: "\u0420\u0435\u0433\u043B\u0430\u043C\u0435\u043D\u0442\u044B \u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433",
        add: [
          {
            href: "javascript:void(0);",
            text: "\u0420\u0435\u0433\u043B\u0430\u043C\u0435\u043D\u0442 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433\u0438 &quot;\u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438&nbsp;\u0438 (\u0438\u043B\u0438) \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u044B\u0445 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u0439 \u0432&nbsp;\u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438",
            pdf: true
          },
          {
            href: "javascript:void(0);",
            text: "\u0420\u0435\u0433\u043B\u0430\u043C\u0435\u043D\u0442 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433\u0438 &quot;\u041F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0441\u043C\u0435\u0442\u043D\u043E\u0439 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0440\u0430\u0431\u043E\u0442 \u043F\u043E&nbsp;\u0442\u0435\u043A\u0443\u0449\u0435\u043C\u0443 \u0440\u0435\u043C\u043E\u043D\u0442\u0443 \u0437\u0434\u0430\u043D\u0438\u0439, \u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0439, \u0441\u043E\u043E\u0440\u0443\u0436\u0435\u043D\u0438\u0439, \u0432&nbsp;\u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u043B\u0438\u043D\u0435\u0439\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432, \u0440\u0430\u0431\u043E\u0442 \u043F\u043E&nbsp;\u0431\u043B\u0430\u0433\u043E\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0443 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0439 \u043C\u0443\u043D\u0438\u0446\u0438\u043F\u0430\u043B\u044C\u043D\u044B\u0445 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0439&nbsp;\u041C\u043E, \u0444\u0438\u043D\u0430\u043D\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441&nbsp;\u043F\u0440\u0438\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0435\u043C \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0431\u044E\u0434\u0436\u0435\u0442\u0430 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438",
            pdf: true
          },
          {
            href: "javascript:void(0);",
            text: "\u0412\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u044B \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u0438&nbsp;\u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u044B\u0445 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u0439 \u0432&nbsp;\u0433\u0430\u0443 \u041C\u043E&nbsp;&laquo;\u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u043D\u0430\u044F \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430&raquo;",
            pdf: true
          },
          {
            href: "javascript:void(0);",
            text: "\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0441\u043C\u0435\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043F\u043E&nbsp;\u0440\u0435\u043C\u043E\u043D\u0442\u0443 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0432&nbsp;\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0446\u0435\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0432&nbsp;\u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0435 \u0413\u0410\u0423 \u041C\u041E&nbsp;&laquo;\u041C\u043E\u0441\u043E\u0431\u043B\u0433\u043E\u0441\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430&raquo;",
            pdf: true
          },
          {
            href: "javascript:void(0);",
            text: "\u0420\u0435\u0433\u043B\u0430\u043C\u0435\u043D\u0442 \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0433\u0430\u0443 \u041C\u043E&nbsp;&laquo;\u041C\u043E\u0441\u043E\u0431\u043B\u0433\u043E\u0441\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430&raquo; \u043D\u0435\u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u044B \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438&nbsp;\u0438 (\u0438\u043B\u0438) \u043D\u0435\u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u044B \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u044B\u0445 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u0439",
            pdf: true
          }
        ]
      },
      {
        href: "reference.html",
        text: "\u041D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u043E-\u043C\u0435\u0442\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0438 \u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B",
        opened: true,
        active: true,
        add: [
          {
            href: "documentation.html",
            text: "\u041D\u041E\u0420\u041C\u0410\u0422\u0418\u0412\u041D\u041E-\u041C\u0415\u0422\u041E\u0414\u0418\u0427\u0415\u0421\u041A\u0418\u0415 \u0414\u041E\u041A\u0423\u041C\u0415\u041D\u0422\u042B \u041F\u041E \u0413\u041E\u0421\u0423\u0414\u0410\u0420\u0421\u0422\u0412\u0415\u041D\u041D\u041E\u0419 \u042D\u041A\u0421\u041F\u0415\u0420\u0422\u0418\u0417\u0415"
          },
          {
            href: "reference-rationing.html",
            text: "\u041D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u043E-\u043C\u0435\u0442\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0438&nbsp;\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u043F\u043E&nbsp;\u0446\u0435\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044E \u0438&nbsp;\u0441\u043C\u0435\u0442\u043D\u043E\u043C\u0443 \u043D\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E",
            active: true
          },
          {
            href: "reference-models.html",
            text: "\u041D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u043E-\u043C\u0435\u0442\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u043F\u043E&nbsp;\u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0445 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043C\u043E\u0434\u0435\u043B\u0435\u0439"
          },
          {
            href: "reference-audit.html",
            text: "\u041D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u043E&nbsp;\u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0438&nbsp;\u0446\u0435\u043D\u043E\u0432\u043E\u0433\u043E \u0430\u0443\u0434\u0438\u0442\u0430 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u0445 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432"
          }
        ]
      },
      {
        href: "samples.html",
        text: "\u041E\u0431\u0440\u0430\u0437\u0446\u044B \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0443\u0441\u043B\u0443\u0433",
        add: [
          {
            href: "sample-results.html",
            text: "\u041E\u0431\u0440\u0430\u0437\u0446\u044B \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0443\u0441\u043B\u0443\u0433 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u044B \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0439, \u0432&nbsp;\u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u0441\u043C\u0435\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438&nbsp;\u0438 (\u0438\u043B\u0438) \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u044B\u0445 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u0439"
          },
          {
            href: "cost-samples.html",
            text: "\u041E\u0431\u0440\u0430\u0437\u0446\u044B \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0443\u0441\u043B\u0443\u0433 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0441\u043C\u0435\u0442\u043D\u043E\u0439 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438"
          },
          {
            href: "support-samples.html",
            text: "\u041E\u0431\u0440\u0430\u0437\u0446\u044B \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0443\u0441\u043B\u0443\u0433 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u043E\u0433\u043E \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u044F"
          },
          {
            href: "samples-rationing.html",
            text: "\u041E\u0431\u0440\u0430\u0437\u0446\u044B \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u0437\u0430\u044F\u0432\u0438\u0442\u0435\u043B\u0435\u0439 \u0443\u0441\u043B\u0443\u0433 \u0432&nbsp;\u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0446\u0435\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0438&nbsp;\u0441\u043C\u0435\u0442\u043D\u043E\u0433\u043E \u043D\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F"
          },
          {
            href: "audit-samples.html",
            text: "\u041E\u0431\u0440\u0430\u0437\u0446\u044B \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0443\u0441\u043B\u0443\u0433\u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0438&nbsp;\u0446\u0435\u043D\u043E\u0432\u043E\u0433\u043E \u0430\u0443\u0434\u0438\u0442\u0430 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u0445 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432"
          },
          {
            href: "research-samples.html",
            text: "\u041E\u0431\u0440\u0430\u0437\u0446\u044B \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0443\u0441\u043B\u0443\u0433\u0438 \u043D\u0435\u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u044B \u0438&nbsp;\u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u044B\u0445 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u0439"
          }
        ]
      },
      {
        href: "documents.html",
        text: "\u0423\u0447\u0440\u0435\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u0413\u0410\u0423 \u041C\u041E \xAB\u041C\u043E\u0441\u043E\u0431\u043B\u0433\u043E\u0441\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430\xBB",
        add: [
          {
            href: "javascript:void(0);",
            text: "\u0423\u0441\u0442\u0430\u0432",
            pdf: true
          },
          {
            href: "javascript:void(0);",
            text: "\u041F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u041F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043E\u0442&nbsp;26.02.2010 &#8470;&nbsp;99/6",
            pdf: true
          },
          {
            href: "javascript:void(0);",
            text: "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u044F \u0438&nbsp;\u0442\u0438\u043F\u0430 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u044F",
            pdf: true
          },
          {
            href: "javascript:void(0);",
            text: "\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E&nbsp;\u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",
            pdf: true
          },
          {
            href: "javascript:void(0);",
            text: "\u041E\u0413\u0420\u041D",
            pdf: true
          }
        ]
      }
    ]
  };
  const materials = {
    list: [
      {
        text: "\u0441\u0431\u043E\u0440\u043D\u0438\u043A \u0437\u0430 2024 \u0433.",
        href: "javascript:void(0);",
        pdf: true
      },
      {
        text: "\u0441\u0431\u043E\u0440\u043D\u0438\u043A \u0437\u0430 2023 \u0433.",
        href: "javascript:void(0);",
        pdf: true
      },
      {
        text: "\u0441\u0431\u043E\u0440\u043D\u0438\u043A \u0437\u0430 2022 \u0433.",
        href: "javascript:void(0);",
        pdf: true
      },
      {
        text: "\u0441\u0431\u043E\u0440\u043D\u0438\u043A \u0437\u0430 2021 \u0433.",
        href: "javascript:void(0);",
        pdf: true
      },
      {
        text: "\u0441\u0431\u043E\u0440\u043D\u0438\u043A \u0437\u0430 2020 \u0433.",
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
                    <h1>Сборники расчетных индексов пересчета стоимости</h1>
                </div>
                <div class="content__block content__block--cols">
                    ${renderComponent($$result2, "Materials", $$Materials, { "materials": materials })}
                </div>
            </div>
        </div>
    </div>
` })}`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/collection-indexes.astro", void 0);

const $$file = "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/collection-indexes.astro";
const $$url = "/collection-indexes.html";

export { $$CollectionIndexes as default, $$file as file, $$url as url };
