import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../chunk.astro.js';
import { a as $$BaseLayout } from './Gui.astro.js';
import { $ as $$CategoryList } from './assessment-services.astro.js';
/* empty css                */import 'html-escaper';
/* empty css              *//* empty css              *//* empty css                            *//* empty css            *//* empty css                 */
const $$Astro$1 = createAstro();
const $$Logos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Logos;
  const { logos } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="logos">
    ${logos.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="logos__item" target="_blank" title="">
                <picture class="logos__picture">
                    <img${addAttribute(item.src, "src")} alt="" width="" height="">
                </picture>
                <span class="logos__text">${item.text}</span>
            </a>`)}
</div>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/Logos/Logos.astro", void 0);

const $$Astro = createAstro();
const $$Content = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Content;
  const pageTitle = "\u041E\u0431 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0438";
  const pageNavigation = "\u041E\u0431 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0438";
  const category = {
    text: "\u041E\u0431 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0438",
    list: [
      {
        href: "javascript:void(0);",
        text: "\u041E\u0431 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0438",
        main: true,
        active: true
      },
      {
        href: "leadership.html",
        text: "\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E"
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
  const logos = [
    {
      href: "javascript:void(0);'",
      src: "images/content/image_1.png",
      text: "\u041C\u0438\u043D\u0438\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u043E \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0438 \u0438 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438"
    },
    {
      href: "javascript:void(0);'",
      src: "images/content/image_2.png",
      text: "\u041F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "pageTitle": pageTitle, "pageNavigation": pageNavigation }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead()}<aside class="aside">
        ${renderComponent($$result2, "CategoryList", $$CategoryList, { "category": category })}
    </aside>
    <div class="container container--small">
        <div class="content">
            <div class="content__left-block">
                <picture class="content__picture">
                    <source srcset="images/content/image_3.webp">
                    <img src="images/content/image_3.jpg" alt="" width="" height="">
                </picture>
                <div class="article">
                    <h2>Государственное автономное учреждение Московской области &laquo;Московская областная государственная экспертиза&raquo; (ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo;) создано в&nbsp;соответствии с&nbsp;Постановлением Правительства Московской области от&nbsp;22.06.2001 &#8470;&nbsp;188/21.<br>Учредитель&nbsp;&mdash; Московская область.<br>Учреждение подведомственно Министерству экономики и&nbsp;финансов Московской области.</h2>
                    <div class="article__text article__text--cols">

                        <p>За&nbsp;прошедшее с&nbsp;момента образования годы ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo; стало одним из&nbsp;самых успешных и&nbsp;динамично развивающихся предприятий строительного комплекса Московской области. В&nbsp;настоящее время в&nbsp;учреждении создана структура для выполнения единой государственной экспертизы проектной документации. В&nbsp;государственном учреждении работают 92&nbsp;специалистов-экспертов, занятых проведением государственной экспертизы проектной документации и&nbsp;результатов инженерных изысканий.</p>
                        <p>Ежегодно в&nbsp;ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo; проходят экспертизу около полутора тысяч различных проектов на&nbsp;объекты строительства, возводимые на&nbsp;территории Московской области. С&nbsp;2001 года рассмотрено более 100&nbsp;тыс. проектов.</p>
                        <p>По&nbsp;заданиям Правительства Московской области, министерств и&nbsp;ведомств Московской области учреждением выполняется значительный объем работ по&nbsp;проверке сметной документации по&nbsp;объектам, финансируемым из&nbsp;областного бюджета и&nbsp;бюджетов муниципальных образований, на&nbsp;предмет обоснованности и&nbsp;достоверности использования средств, соответствия нормативам в&nbsp;области сметного нормирования и&nbsp;ценообразования.</p>
                        <p>Значителен вклад, который ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo; вносит в&nbsp;экономику Московской области. В&nbsp;результате корректировки проектной документации по&nbsp;замечаниям и&nbsp;предложениям государственной экспертизы экономия бюджетных средств составляет несколько миллиардов рублей в&nbsp;год. Экономия средств бюджета Московской области с&nbsp;2001 года благодаря деятельности учреждения составила более 500 млн рублей.</p>
                        <p>ГАУ Московской области &laquo;Мособлгосэкспертиза&raquo; является активным участником Ассоциации экспертиз России (АЭР), директор учреждения Игорь Горячев&nbsp;&mdash; член правления АЭР.</p>

                        <h4>Основные направления деятельности:</h4>
                        <ul>
                            <li>проведение государственной экспертизы проектной, в&nbsp;том числе сметной документации и&nbsp;результатов инженерных изысканий, выполненных для строительства, реконструкции, капитального ремонта объектов, расположенных на&nbsp;территории Московской области;</li>
                            <li>содействие в&nbsp;проведении государственной политики в&nbsp;сфере ценообразования в&nbsp;строительстве на&nbsp;территории Московской области;</li>
                            <li>проведение проверки сметной стоимости объектов строительства, реконструкции, капитального ремонта в&nbsp;Московской области на&nbsp;предмет эффективности, экономии, обоснованности и&nbsp;достоверности использования бюджетных средств;</li>
                            <li>развитие цифрового информационного моделирования (ЦИМ) в&nbsp;проектировании и&nbsp;строительстве;</li>
                            <li>проведение негосударственной экспертизы проектной документации и&nbsp;результатов инженерных изысканий;</li>
                            <li>технологический и&nbsp;ценовой аудит публичных инвестиционных проектов;</li>
                            <li>консультирование в&nbsp;области разработки проектной документации и&nbsp;проведения инженерных изысканий; ценообразования и&nbsp;сметного нормирования в&nbsp;проектировании и&nbsp;строительстве.</li>
                        </ul>
                    </div>
                    <blockquote>ЗА&nbsp;ПРОШЕДШЕЕ С&nbsp;МОМЕНТА ОБРАЗОВАНИЯ ГОДЫ ГАУ МО&nbsp;&laquo;МОСОБЛГОСЭКСПЕРТИЗА&raquo; СТАЛО ОДНИМ ИЗ&nbsp;САМЫХ УСПЕШНЫХ И&nbsp;ДИНАМИЧНО РАЗВИВАЮЩИХСЯ ПРЕДПРИЯТИЙ СТРОИТЕЛЬНОГО КОМПЛЕКСА МОСКОВСКОЙ ОБЛАСТИ. В&nbsp;НАСТОЯЩЕЕ ВРЕМЯ В&nbsp;УЧРЕЖДЕНИИ СОЗДАНА СТРУКТУРА ДЛЯ ВЫПОЛНЕНИЯ ЕДИНОЙ ГОСУДАРСТВЕННОЙ ЭКСПЕРТИЗЫ ПРОЕКТНОЙ ДОКУМЕНТАЦИИ. В&nbsp;ГОСУДАРСТВЕННОМ УЧРЕЖДЕНИИ РАБОТАЮТ 92&nbsp;СПЕЦИАЛИСТОВ-ЭКСПЕРТОВ, ЗАНЯТЫХ ПРОВЕДЕНИЕМ ГОСУДАРСТВЕННОЙ ЭКСПЕРТИЗЫ ПРОЕКТНОЙ ДОКУМЕНТАЦИИ И&nbsp;РЕЗУЛЬТАТОВ ИНЖЕНЕРНЫХ ИЗЫСКАНИЙ.</blockquote>
                </div>
            </div>
            <div class="content__right-block">
                ${renderComponent($$result2, "Logos", $$Logos, { "logos": logos })}
            </div>
        </div>
    </div>
` })}`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/content.astro", void 0);

const $$file = "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/content.astro";
const $$url = "/content.html";

export { $$Content as default, $$file as file, $$url as url };
