import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunk.astro.js';
import { a as $$BaseLayout } from './Gui.astro.js';
import { $ as $$CategoryList } from './assessment-services.astro.js';
import 'html-escaper';
/* empty css              *//* empty css              *//* empty css                            *//* empty css            *//* empty css                 */
const $$Astro = createAstro();
const $$ExaminationSamples = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ExaminationSamples;
  const pageTitle = "\u041E\u0431\u0440\u0430\u0437\u0446\u044B \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0443\u0441\u043B\u0443\u0433 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u044B";
  const category = {
    text: "\u042D\u041A\u0421\u041F\u0415\u0420\u0422\u0418\u0417\u0410",
    list: [
      {
        href: "expertise-main.html",
        text: "\u042D\u041A\u0421\u041F\u0415\u0420\u0422\u0418\u0417\u0410",
        content: "\u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u044B\u0445 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u0439",
        main: true,
        active: true
      },
      {
        href: "examination-services.html",
        text: "\u0423\u0441\u043B\u0443\u0433\u0438 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u044B"
      },
      {
        href: "regulations.html",
        text: "\u0420\u0435\u0433\u043B\u0430\u043C\u0435\u043D\u0442\u044B \u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u044B"
      },
      {
        href: "examination-samples.html",
        text: "\u041E\u0431\u0440\u0430\u0437\u0446\u044B \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0443\u0441\u043B\u0443\u0433 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u044B",
        active: true,
        opened: true,
        add: [
          {
            href: "sample-results.html",
            text: "\u041E\u0431\u0440\u0430\u0437\u0446\u044B \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0443\u0441\u043B\u0443\u0433\u0438 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u044B \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0439, \u0432&nbsp;\u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u0441\u043C\u0435\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438&nbsp;\u0438 (\u0438\u043B\u0438) \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u044B\u0445 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u0439"
          },
          {
            href: "cost-samples.html",
            text: "\u041E\u0431\u0440\u0430\u0437\u0446\u044B \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0443\u0441\u043B\u0443\u0433 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0441\u043C\u0435\u0442\u043D\u043E\u0439 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438"
          },
          {
            href: "support-samples.html",
            text: "\u041E\u0431\u0440\u0430\u0437\u0446\u044B \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0443\u0441\u043B\u0443\u0433 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u043E\u0433\u043E \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u044F"
          }
        ]
      },
      {
        href: "javascript:void(0);",
        pdf: true,
        text: "\u0421\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438, \u0432 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0438 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0432\u044B\u0434\u0430\u043D\u044B \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u044B"
      },
      {
        href: "expert-opinion.html",
        text: "\u0420\u0435\u0435\u0441\u0442\u0440\u044B \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u044B \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u0438 (\u0438\u043B\u0438) \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u044B\u0445 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u0439, \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u043D\u043E\u0441\u0442\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0441\u043C\u0435\u0442\u043D\u043E\u0439 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438"
      },
      {
        href: "javascript:void(0);",
        text: "\u0410\u0441\u043F\u0435\u043A\u0442\u044B \u043F\u0440\u043E\u0442\u0438\u0432\u043E\u043F\u043E\u0436\u0430\u0440\u043D\u043E\u0439 \u0438 \u0430\u043D\u0442\u0438\u0442\u0435\u0440\u0440\u043E\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u0432 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0435"
      },
      {
        href: "javascript:void(0);",
        text: "\u042D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0430\u0441\u043F\u0435\u043A\u0442\u044B \u0432 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0435"
      },
      {
        href: "javascript:void(0);",
        text: "\u0410\u0441\u043F\u0435\u043A\u0442\u044B \u0441\u043E\u0445\u0440\u0430\u043D\u043D\u043E\u0441\u0442\u0438 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u043E-\u0438\u0441\u0442\u043E\u0440\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043D\u0430\u0441\u043B\u0435\u0434\u0438\u044F \u0432 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0435"
      },
      {
        href: "javascript:void(0);",
        text: "\u0421\u0430\u043D\u0438\u0442\u0430\u0440\u043D\u043E-\u044D\u043F\u0438\u0434\u0435\u043C\u0438\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0430\u0441\u043F\u0435\u043A\u0442\u044B \u0432 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0435"
      },
      {
        href: "non-governmental-expertise.html",
        text: "\u041D\u0435\u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u044B\u0445 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u0439"
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
                <picture class="content__picture">
                    <source srcset="images/expertise/image_2.webp">
                    <img src="images/expertise/image_2.jpg" alt="" width="" height="">
                </picture>
                <div class="article">
                    <div class="article__text article__text--cols">
                        <p>Государственное автономное учреждение Московской области &laquo;Московская областная государственная экспертиза&raquo; проводит экспертизу проектной, в&nbsp;том числе сметной документации и&nbsp;результатов инженерных изысканий, государственную и&nbsp;негосударственную. </p>
                        <p>Наше государственное учреждение старается максимально облегчить каждому заказчику процесс прохождения экспертизы проектной документации, используя современные информационные технологии, сделать все необходимое, чтобы она проводилась оперативно, прозрачно и&nbsp;комфортно для наших клиентов.</p>
                        <p>По&nbsp;всем вопросам, связанным с&nbsp;нашей деятельностью, мы&nbsp;всегда готовы к&nbsp;взаимовыгодному сотрудничеству. В&nbsp;этом на&nbsp;собственном примере сумели убедиться многие организации и&nbsp;предприятия, работающие в&nbsp;сфере градостроительной деятельности на&nbsp;территории Московской области, для которых ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo; стало проверенным и&nbsp;надёжным партнёром.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
` })}`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/examination-samples.astro", void 0);

const $$file = "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/examination-samples.astro";
const $$url = "/examination-samples.html";

export { $$ExaminationSamples as default, $$file as file, $$url as url };
