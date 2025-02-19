import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunk.astro.js';
import { f as $$People, a as $$BaseLayout } from './Gui.astro.js';
import { $ as $$CategoryList } from './assessment-services.astro.js';
import 'html-escaper';
/* empty css              *//* empty css              *//* empty css                            *//* empty css            *//* empty css                 */
const $$Astro = createAstro();
const $$Leadership = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Leadership;
  const pageTitle = "\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E";
  const pageNavigation = "\u041E\u0431 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0438";
  const category = {
    text: "\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E",
    list: [
      {
        href: "content.html",
        text: "\u041E\u0431 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0438",
        main: true,
        active: true
      },
      {
        href: "leadership.html",
        text: "\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E",
        active: true
      },
      {
        href: "supervisor.html",
        text: "\u041D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0441\u043E\u0432\u0435\u0442"
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
  const person = [
    {
      big: true,
      invert: true,
      image: "images/leadership/photo.png",
      name: "\u0413\u043E\u0440\u044F\u0447\u0435\u0432 \u0418\u0433\u043E\u0440\u044C \u0415\u0432\u0433\u0435\u043D\u044C\u0435\u0432\u0438\u0447",
      job: "\u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440"
    }
  ];
  const people = [
    {
      image: "images/leadership/image-0.png",
      name: "\u0414\u0435\u043C\u0438\u0434\u043E\u0432 \u0410\u043D\u0434\u0440\u0435\u0439 \u0413\u0435\u043D\u043D\u0430\u0434\u044C\u0435\u0432\u0438\u0447",
      job: "\u0417\u0430\u043C\u0435\u0441\u0442\u0438\u0442\u0435\u043B\u044C \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0430"
    },
    {
      image: "images/leadership/image-1.png",
      name: "\u0412\u0430\u043B\u043E\u0432 \u041E\u043B\u0435\u0433 \u0413\u0435\u043D\u043D\u0430\u0434\u044C\u0435\u0432\u0438\u0447",
      job: "\u0417\u0430\u043C\u0435\u0441\u0442\u0438\u0442\u0435\u043B\u044C \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0430"
    },
    {
      image: "images/leadership/image-2.png",
      name: "\u042E\u0434\u0438\u043D \u0418\u0433\u043E\u0440\u044C \u0413\u0435\u043D\u043D\u0430\u0434\u044C\u0435\u0432\u0438\u0447",
      job: "\u0417\u0430\u043C\u0435\u0441\u0442\u0438\u0442\u0435\u043B\u044C \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0430"
    },
    {
      image: "images/leadership/image-3.png",
      name: "\u0415\u0440\u0451\u043C\u0438\u043D \u0421\u0435\u0440\u0433\u0435\u0439 \u0415\u0432\u0433\u0435\u043D\u044C\u0435\u0432\u0438\u0447",
      job: "\u0417\u0430\u043C\u0435\u0441\u0442\u0438\u0442\u0435\u043B\u044C \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0430"
    },
    {
      image: "images/leadership/image-4.png",
      name: "\u0421\u0443\u0431\u0431\u043E\u0442\u0438\u043D \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u041D\u0438\u043A\u043E\u043B\u0430\u0435\u0432\u0438\u0447",
      job: "\u043F\u043E\u043C\u043E\u0449\u043D\u0438\u043A \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0430"
    },
    {
      image: "images/leadership/image-5.png",
      name: "\u0413\u0440\u0435\u0431\u0435\u043D\u0449\u0438\u043A\u043E\u0432 \u0412\u0430\u0434\u0438\u043C \u042D\u0434\u0443\u0430\u0440\u0434\u043E\u0432\u0438\u0447",
      job: "\u0441\u043E\u0432\u0435\u0442\u043D\u0438\u043A \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0430"
    },
    {
      image: "images/leadership/image-6.png",
      name: "\u041C\u0438\u0442\u044E\u0445\u0438\u043D\u0430 \u042E\u043B\u0438\u044F \u0412\u0438\u043A\u0442\u043E\u0440\u043E\u0432\u043D\u0430",
      job: "\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0446\u0435\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0432 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0435"
    },
    {
      image: "images/leadership/image-7.png",
      name: "\u0410\u0444\u0430\u043D\u0430\u0441\u044C\u0435\u0432\u0430 \u0413\u0430\u043B\u0438\u043D\u0430 \u0421\u043E\u043B\u043E\u043C\u043E\u043D\u043E\u0432\u043D\u0430",
      job: "\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u044B"
    },
    {
      image: "images/leadership/image-8.png",
      name: "\u041D\u043E\u0432\u043E\u0441\u0451\u043B\u043E\u0432\u0430 \u041E\u043B\u044C\u0433\u0430 \u042E\u0440\u044C\u0435\u0432\u043D\u0430",
      job: "\u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "pageTitle": pageTitle, "pageNavigation": pageNavigation }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead()}<aside class="aside">
        ${renderComponent($$result2, "CategoryList", $$CategoryList, { "category": category })}
    </aside>
    <div class="container container--small">
        <div class="content content--smallgap">
            <div class="content__left-block content__left-block--small">
                ${renderComponent($$result2, "People", $$People, { "people": person, "class": "people--big" })}
            </div>
            <div class="content__right-block content__right-block--cols">
                <article class="article">
                    <div class="article__text article__text--cols">
                        <p>Созданное в&nbsp;2001 году Государственное автономное учреждение Московской области &laquo;Московская областная государственная экспертиза&raquo; успешно развивается уже на&nbsp;протяжении почти четверти века, решая важнейшую для одного из&nbsp;наиболее мощных в&nbsp;России&nbsp;&mdash; строительного комплекса Московской области, задачу&nbsp;&mdash; обеспечение технической и&nbsp;экономической целесообразности, архитектурной выразительности и&nbsp;конструктивной надежности, эксплуатационной безопасности и&nbsp;долговечности возводимых строительных объектов в&nbsp;нашем Подмосковье.</p>
                        <p>Всем известно, что градостроительные ошибки исправить не&nbsp;только трудно и&nbsp;дорого, но&nbsp;и&nbsp;в&nbsp;большинстве случаев просто невозможно. Государственная экспертиза проектной документации и&nbsp;результатов инженерных изысканий и&nbsp;является своего рода &laquo;санитарным кордоном&raquo; для того, чтобы технически неграмотные и&nbsp;опасные для жизни и&nbsp;здоровья граждан проектные решения не&nbsp;были реализованы при строительстве.</p>
                        <p>Сегодня высококвалифицированным коллективом экспертов-профессионалов ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo;, стоящим на&nbsp;страже общественных интересов, ежегодно проводится тщательная экспертиза более двух тысяч проектных решений любой технической и&nbsp;технологической сложности на&nbsp;соответствие установленным техническим регламентам, нормам, правилам и&nbsp;требованиям, обеспечивая при этом высокое качество принимаемых градостроительных и&nbsp;технических решений, экономное использование всех видов ресурсов.</p>
                        <p>Наше государственное учреждение старается максимально облегчить каждому заказчику процесс прохождения экспертизы проектной документации, используя современные информационные технологии, сделать все необходимое, чтобы она проводилась оперативно, прозрачно и&nbsp;комфортно для наших клиентов.
                        </p><p>По&nbsp;всем вопросам, связанным с&nbsp;нашей деятельностью, мы&nbsp;всегда готовы к&nbsp;взаимовыгодному сотрудничеству. В&nbsp;этом на&nbsp;собственном примере сумели убедиться многие организации и&nbsp;предприятия, работающие в&nbsp;сфере градостроительной деятельности на&nbsp;территории Московской области, для которых ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo; стало проверенным и&nbsp;надёжным партнёром.</p>
                        <h4>Директор ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo;<br>
                        ГОРЯЧЕВ Игорь Евгеньевич</h4>

                        <blockquote>ЗА&nbsp;ПРОШЕДШЕЕ С&nbsp;МОМЕНТА ОБРАЗОВАНИЯ ГОДЫ ГАУ МО&nbsp;&laquo;МОСОБЛГОСЭКСПЕРТИЗА&raquo; СТАЛО ОДНИМ ИЗ&nbsp;САМЫХ УСПЕШНЫХ И&nbsp;ДИНАМИЧНО РАЗВИВАЮЩИХСЯ ПРЕДПРИЯТИЙ СТРОИТЕЛЬНОГО КОМПЛЕКСА МОСКОВСКОЙ ОБЛАСТИ. В&nbsp;НАСТОЯЩЕЕ ВРЕМЯ В&nbsp;УЧРЕЖДЕНИИ СОЗДАНА СТРУКТУРА ДЛЯ ВЫПОЛНЕНИЯ ЕДИНОЙ ГОСУДАРСТВЕННОЙ ЭКСПЕРТИЗЫ ПРОЕКТНОЙ ДОКУМЕНТАЦИИ.</blockquote>
                    </div>
                </article>
            </div>
        </div>
        ${renderComponent($$result2, "People", $$People, { "people": people })}
    </div>
` })}`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/leadership.astro", void 0);

const $$file = "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/leadership.astro";
const $$url = "/leadership.html";

export { $$Leadership as default, $$file as file, $$url as url };
