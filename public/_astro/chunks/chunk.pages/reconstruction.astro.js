import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunk.astro.js';
import { a as $$BaseLayout } from './Gui.astro.js';
import { $ as $$CategoryList } from './assessment-services.astro.js';
import { $ as $$ContentSlider } from './construction.astro.js';
import 'html-escaper';
/* empty css              *//* empty css              *//* empty css                            *//* empty css            *//* empty css                 *//* empty css                     */
const $$Astro = createAstro();
const $$Reconstruction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Reconstruction;
  const pageTitle = "\u041A\u0430\u043F\u0438\u0442\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0435\u043C\u043E\u043D\u0442/\u0440\u0435\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F";
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
      webp: "images/gallery-image/image_8.webp",
      img: "images/gallery-image/image_8.jpg"
    },
    {
      small: true,
      webp: "images/gallery-image/image_10.webp",
      img: "images/gallery-image/image_10.jpg"
    },
    {
      small: true,
      webp: "images/gallery-image/image_9.webp",
      img: "images/gallery-image/image_9.jpg"
    }
  ];
  const slider1 = [
    {
      big: true,
      webp: "images/gallery-image/image_11.webp",
      img: "images/gallery-image/image_11.jpg"
    },
    {
      small: true,
      webp: "images/gallery-image/image_12.webp",
      img: "images/gallery-image/image_12.jpg"
    }
  ];
  const slider2 = [
    {
      big: true,
      webp: "images/gallery-image/image_13.webp",
      img: "images/gallery-image/image_13.jpg"
    },
    {
      small: true,
      webp: "images/gallery-image/image_14.webp",
      img: "images/gallery-image/image_14.jpg"
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
                    <h1>Капитальный ремонт/реконструкция</h1>
                
                    ${renderComponent($$result2, "ContentSlider", $$ContentSlider, { "slider": slider })}

                    <h2><span>ОДОБРЕНО МОГЭ:</span>ДОШКОЛЬНОЕ ОТДЕЛЕНИЕ КЛЁМОВСКОЙ СОШ В&nbsp;СЕРЕБРЯНЫХ ПРУДАХ</h2>
                    <div class="article__text article__text--cols">
                        <p>ГАУ Московской области &laquo;Мособлгосэкспертиза&raquo; одобрило документацию на&nbsp;капитальный ремонт дошкольного отделения МБОУ &laquo;Клёмовская СОШ&raquo; г. Серебряные Пруды.</p>
                        <p>Дошкольное отделение Клёмовской СОШ предоставляет педагогические и&nbsp;медицинские услуги детям по&nbsp;воспитанию, обучению, развитию и&nbsp;оздоровлению, уходу и&nbsp;присмотру детей.</p>
                        <p>При оформлении фасадов здания предусмотрены работы по&nbsp;устройству навесной фасадной системы с&nbsp;воздушным зазором PRiMET с&nbsp;облицовкой керамогранитными плитами.</p>
                        <p>Капитальный ремонт дошкольного отделения Клёновской СОШ позволит предоставить дошкольникам Серебряных Прудов качественные образовательные услуги в&nbsp;комфортных условиях.</p>
                    </div>
                </div>
            </div>
        </div>

        ${renderComponent($$result2, "ContentSlider", $$ContentSlider, { "slider": slider1 })}

        <div class="content">
            <div class="content__left-block">
                <div class="article">
                    <h2><span>ОДОБРЕНО МОГЭ:</span>ДОМ ДЕТСКОГО ТВОРЧЕСТВА &laquo;СОЗВЕЗДИЕ&raquo; В&nbsp;ХИМКАХ</h2>
                    <div class="article__text article__text--cols">
                        <p>ГАУ Московской области &laquo;Мособлгосэкспертиза&raquo; выпустило положительное заключение к&nbsp;документации на&nbsp;капитальный ремонт МАУ дополнительного образования городского округа Химки &laquo;Дом детского творчества &laquo;Созвездие&raquo;.</p>
                        <p>ДДТ &laquo;Созвездие&raquo; 1987 года постройки осуществляет образовательную деятельность по&nbsp;программе дополнительного образования по&nbsp;следующим направлениям: художественно- эстетическая, культурологическая, социально-педагогическая и&nbsp;т.&nbsp;п.</p>
                        <p>Проектом предусматривается капитальный ремонт здания с&nbsp;сохранениемобъемно-пространственных и&nbsp;планировочных решений в&nbsp;соответствии с&nbsp;действующими нормами и&nbsp;правилами. Проектом капитального ремонта предусматриваются отделочные работы во&nbsp;всех помещениях.</p>
                        <p>Капитальный ремонт Дома детского творчества &laquo;Созвездие&raquo; позволит дать юным жителям Химок качественное дополнительное образование.</p>
                    </div>
                </div>
            </div>
        </div>

        ${renderComponent($$result2, "ContentSlider", $$ContentSlider, { "slider": slider2 })}

        <div class="content">
            <div class="content__left-block">
                <div class="article">   
                    <h2><span>ОДОБРЕНО МОГЭ:</span>КАПИТАЛЬНЫЙ РЕМОНТ ПРАВДИНСКОЙ Школы</h2>
                    <div class="article__text article__text--cols">
                        <p>ГАУ Московской области &laquo;Мособлгосэкспертиза&raquo; выпустило положительное заключение к&nbsp;проектной документации капитального ремонта МБОУ &laquo;Правдинская СОШ &#8470; 2&raquo;, расположенного в&nbsp;г.&nbsp;о. Пушкинский, городе Пушкине, р.&nbsp;п. Правдинский.</p>
                        <p>Школа была построено и&nbsp;введена в&nbsp;эксплуатацию в&nbsp;1963&nbsp;году. В&nbsp;соответствии с&nbsp;техническим заключением по&nbsp;обследованию здания определено, что существующее здание требует капитального ремонта как внутреннего пространства, так и&nbsp;изменения внешнего облика, с&nbsp;утеплением фасадной части здания.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
` })}`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/reconstruction.astro", void 0);

const $$file = "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/reconstruction.astro";
const $$url = "/reconstruction.html";

export { $$Reconstruction as default, $$file as file, $$url as url };
