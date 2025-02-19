import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunk.astro.js';
import { a as $$BaseLayout } from './Gui.astro.js';
import { $ as $$CategoryList } from './assessment-services.astro.js';
import { $ as $$ContentSlider } from './construction.astro.js';
import 'html-escaper';
/* empty css              *//* empty css              *//* empty css                            *//* empty css            *//* empty css                 *//* empty css                     */
const $$Astro = createAstro();
const $$Industry = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Industry;
  const pageTitle = "\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0435/\u0441\u0435\u043B\u044C\u0441\u043A\u043E\u0445\u043E\u0437\u044F\u0439\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u044B";
  const pageNavigation = "\u041E\u0431 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0438";
  const category = {
    text: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432",
    list: [
      {
        href: "content.html",
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
        text: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432, \u043F\u0440\u043E\u0448\u0435\u0434\u0448\u0438\u0445 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0443 \u0432 \u0413\u0410\u0423 \u041C\u041E \xAB\u041C\u043E\u0441\u043E\u0431\u043B\u0433\u043E\u0441\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430\xBB",
        active: true
      }
    ]
  };
  const slider = [
    {
      big: true,
      webp: "images/gallery-image/image_25.webp",
      img: "images/gallery-image/image_25.jpg"
    },
    {
      small: true,
      webp: "images/gallery-image/image_26.webp",
      img: "images/gallery-image/image_26.jpg"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "pageTitle": pageTitle, "pageNavigation": pageNavigation }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead()}<aside class="aside">
        ${renderComponent($$result2, "CategoryList", $$CategoryList, { "category": category })}
    </aside>
    <div class="container container--small">
        <div class="content">
            <div class="content__left-block">
                <div class="article">
                    <h1>Промышленные/сельскохозяйственные объекты</h1>
                    <picture>
                        <source srcset="images/gallery-image/image_20.webp">
                        <img src="images/gallery-image/image_20.jpg" alt="" width="" height="">
                    </picture>
                    <h2><span>ОДОБРЕНО МОГЭ:</span>ПРОЕКТНАЯ ДОКУМЕНТАЦИЯ СТРОИТЕЛЬСТВА ЭКОПРОМЫШЛЕННОГО ПАРКА В&nbsp;ЕГОРЬЕВСКЕ</h2>
                    <div class="article__text article__text--cols">
                        <p>ГАУ Московской области &laquo;Мособлгоэкспертиза&raquo; выдало положительное заключение в&nbsp;отношении проектной документации на&nbsp;строительство Экопромышленного (индустриального) парка в&nbsp;Московской области, который будет создан в&nbsp;городском округе Егорьевск, близ деревни Поцелуево. Это один из&nbsp;восьми экотехнопарков, которые строятся в&nbsp;регионах страны в&nbsp;рамках федерального проекта &laquo;Экономика замкнутого цикла&raquo; по&nbsp;соглашению с&nbsp;ППК &laquo;Российский экологический оператор&raquo;.</p>
                        <p>Экопромышленный парк в&nbsp;Егорьевске&nbsp;&mdash; важный элемент российской высокотехнологичной индустрии переработки отходов, позволяющий перерабатывать отходы без вреда окружающей среде.</p>
                    </div>
                </div>
            </div>
        </div>

        ${renderComponent($$result2, "ContentSlider", $$ContentSlider, { "slider": slider })}

        <div class="content">
            <div class="content__left-block">
                <div class="article">
                    <h2><span>ОДОБРЕНО МОГЭ:</span>СТРОИТЕЛЬСТВО ЖИВОТНОВОДЧЕСКОГО КОМПЛЕКСА &laquo;БОРТНИКОВО&raquo;</h2>
                    <div class="article__text article__text--cols">
                        <p>ГАУ Московской области &laquo;Мособлгосэкспертиза&raquo; выпустило положительное заключение на&nbsp;проектную документацию строительства животноводческого комплекса крупного рогатого скота &laquo;Бортниково&raquo; на&nbsp;3550 коров и&nbsp;площадок для выращивания молодняка КРС молочных пород на&nbsp;5100 голов в&nbsp;деревне Кочкорево городского округа Ступино. Цель создания этого комплекса&nbsp;&mdash; производство высококачественного молока.</p>
                        <p>В&nbsp;основе технологии&nbsp;&mdash; принцип &laquo;холодного содержания&raquo; поголовья. Все процессы максимально механизированы. Расчетная численность работающих&nbsp;&mdash; 84&nbsp;чел. Применяемая технология позволяет содержать высокопродуктивных здоровых коров, получая от&nbsp;них высокие надои, при минимальных капитальных затратах на&nbsp;их&nbsp;содержание. Комплекс обеспечит производство 27 206&nbsp;т молока в&nbsp;год.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
` })}`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/industry.astro", void 0);

const $$file = "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/industry.astro";
const $$url = "/industry.html";

export { $$Industry as default, $$file as file, $$url as url };
