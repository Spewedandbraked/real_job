import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunk.astro.js';
import { a as $$BaseLayout } from './Gui.astro.js';
import { $ as $$CategoryList } from './assessment-services.astro.js';
import { $ as $$ContentSlider } from './construction.astro.js';
import 'html-escaper';
/* empty css              *//* empty css              *//* empty css                            *//* empty css            *//* empty css                 *//* empty css                     */
const $$Astro = createAstro();
const $$Infrastructure = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Infrastructure;
  const pageTitle = "\u041E\u0431\u044A\u0435\u043A\u0442\u044B \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B";
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
      webp: "images/gallery-image/image_21.webp",
      img: "images/gallery-image/image_21.jpg"
    },
    {
      small: true,
      webp: "images/gallery-image/image_22.webp",
      img: "images/gallery-image/image_22.jpg"
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
                    <h1>Объекты инфраструктуры</h1>
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
                    <h2><span>ОДОБРЕНО МОГЭ:</span>СКЛАДСКОЙ РАСПРЕДЕЛИТЕЛЬНЫЙ КОМПЛЕКС В&nbsp;Г.О. ДОМОДЕДОВО</h2>
                    <div class="article__text article__text--cols">
                        <p>ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo; выпустило положительное заключение на&nbsp;проектную документацию строительства складского распределительного комплекса, расположенного на&nbsp;территории ООО &laquo;Химпол&raquo; в&nbsp;городе Домодедово, микрорайон Центральный, улица Станционная.</p>
                        <p>Проектируемый склад будет мультифункциональным и&nbsp;может работать в&nbsp;качестве распределительного центра на&nbsp;первом этаже с&nbsp;хранением товарного запаса на&nbsp;втором или в&nbsp;качестве склада с&nbsp;хранением товаров на&nbsp;двух этажах.</p>
                        <p>Степень механизации погрузочно-разгрузочных работ и&nbsp;работ по&nbsp;перемещению паллет с&nbsp;грузом по&nbsp;складу составляет 100%, что обеспечивается за&nbsp;счет использования электрифицированного грузоподъемного транспорта на&nbsp;всех этапах перемещения грузов.</p>
                        <p>При вводе в&nbsp;эксплуатацию данного объекта будет создано 408 новых рабочих мест в&nbsp;городе Домодедово, заработает крупный логистический объект, который повысит эффективность транспортных коммуникаций в&nbsp;регионе.</p>
                    </div>
                    <picture>
                        <source srcset="images/gallery-image/image_23.webp">
                        <img src="images/gallery-image/image_23.jpg" alt="" width="" height="">
                    </picture>
                    <h2><span>ОДОБРЕНО МОГЭ:</span>КОММЕРЧЕСКИЙ ЦОД &laquo;ДУБНА-М&raquo;</h2>
                    <div class="article__text article__text--cols">
                        <p>ГАУ Московской области &laquo;Мособлгосэкспертиза&raquo; выпустило положительное заключение к&nbsp;проектной документации на&nbsp;строительство коммерческого Центра обработки данных &laquo;Дубна-М&raquo; на&nbsp;территории ОЭЗ &laquo;Дубна&raquo;.</p>
                        <p>ЦОД&nbsp;&mdash; специализированный технологический объект отрасли информационных технологий, который создается с&nbsp;целью производства (то&nbsp;есть создания, обработки, хранения) информации с&nbsp;наибольшей эффективностью.</p><p>  
                        </p><p>Объемно-пространственная структура здания, принятая на&nbsp;базе принципа максимальной блокировки его функциональных элементов, обеспечивает компактность формирования объема объекта, сокращение периметра ограждающих конструкций.</p>
                        <p>ЦОД предназначен для физического размещения и&nbsp;безопасной эксплуатации по&nbsp;назначению оборудования информационных технологий (ИТ-оборудования), представленного как совокупность комплексов аппаратных, программных и&nbsp;телекоммуникационных средств автоматизированных информационных систем, размещенных в&nbsp;центре обработки данных и&nbsp;обеспечивающих предоставление информационных, вычислительных и&nbsp;телекоммуникационных ресурсов, возможностей и&nbsp;услуг потребителям.</p>
                    </div>
                    <picture>
                        <source srcset="images/gallery-image/image_24.webp">
                        <img src="images/gallery-image/image_24.jpg" alt="" width="" height="">
                    </picture>
                    <h2><span>ОДОБРЕНО МОГЭ:</span>КОТЕЛЬНАЯ В&nbsp;КЛИНСКОМ МИКРОРАЙОНЕ МАЙДАНОВО</h2>
                    <div class="article__text article__text--cols">
                        <p>ГАУ Московской области &laquo;Мособлгосэкспертиза&raquo; выпустило положительное заключение на&nbsp;проектную документацию строительства котельной в&nbsp;микрорайоне Майданово города Клин.</p>
                        <p>Блочно-модульная котельная&nbsp;&mdash; одноэтажное здание, с&nbsp;двухскатной кровлей, прямоугольной формы в&nbsp;плане, состоящее из&nbsp;блок-модулей.</p>
                        <p>В&nbsp;соответствии с&nbsp;техническим заданием, утвержденным заказчиком строительства, котельная в&nbsp;мкр. Майданово строится для теплоснабжения объектов социальной сферы и&nbsp;жилого фонда предусматривается. Она позволит решить проблему теплоснабжения в&nbsp;микрорайоне.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
` })}`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/infrastructure.astro", void 0);

const $$file = "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/infrastructure.astro";
const $$url = "/infrastructure.html";

export { $$Infrastructure as default, $$file as file, $$url as url };
