import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as addAttribute, e as renderSlot, u as unescapeHTML } from '../chunk.astro.js';
import { b as $$Title, c as $$Button, d as $$Feedback, a as $$BaseLayout } from './Gui.astro.js';
/* empty css                 */import { b as $$Contacts$1 } from './assessment-services.astro.js';
import 'html-escaper';
/* empty css              *//* empty css              *//* empty css                            *//* empty css            */
const $$Astro$4 = createAstro();
const $$TimeTable = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TimeTable;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="time">

    ${renderComponent($$result, "Title", $$Title, { "Tag": "h2", "className": "title title--h2 title--time" }, { "default": ($$result2) => renderTemplate`часы приема` })}

    <table class="timetable timetable--desktop">
        <thead class="timetable__head">
            <th class="timetable__hcell timetable__hcell--name"></th>
            <th class="timetable__hcell">Пн</th>
            <th class="timetable__hcell">Вт</th>
            <th class="timetable__hcell">Ср</th>
            <th class="timetable__hcell">Чт</th>
            <th class="timetable__hcell">Пт</th>
            <th class="timetable__hcell timetable__hcell--bright">Сб</th>
            <th class="timetable__hcell timetable__hcell--bright">Вс</th>
        </thead>
        <tbody class="timetable__body">
            <tr>
                <td class="timetable__cell timetable__cell--name">Отдел приемки документанции и информатизации экспертной деятельности управления государственной экспертизы</td>
                <td rowspan="5" class="timetable__cell timetable__cell--time">
                    09:00 - 12:00
                    <br>
                    12:45 - 17:00
                </td>
                <td rowspan="5" class="timetable__cell timetable__cell--time">
                    09:00 - 12:00
                    <br>
                    12:45 - 17:00
                </td>
                <td rowspan="5" class="timetable__cell timetable__cell--time">
                    09:00 - 12:00
                    <br>
                    12:45 - 17:00
                </td>
                <td rowspan="5" class="timetable__cell timetable__cell--time">
                    09:00 - 12:00
                    <br>
                    12:45 - 17:00
                </td>
                <td rowspan="4" class="timetable__cell timetable__cell--time">
                </td>
                <td class="timetable__cell timetable__cell--time">&nbsp;
                </td>
                <td class="timetable__cell timetable__cell--time">&nbsp;
                </td>
            </tr>
            <tr>
                <td class="timetable__cell timetable__cell--name">Экспертные отделы управления государственной экспертизы</td>
                <td class="timetable__cell timetable__cell--time">&nbsp;
                </td>
                <td class="timetable__cell timetable__cell--time">&nbsp;
                </td>
            </tr>
            <tr>
                <td class="timetable__cell timetable__cell--name">Сметный отдел управления ценообразования в строительстве</td>
                <td class="timetable__cell timetable__cell--time">&nbsp;
                </td>
                <td class="timetable__cell timetable__cell--time">&nbsp;
                </td>
            </tr>
            <tr>
                <td class="timetable__cell timetable__cell--name">Отдел по договорной работе</td>
                <td class="timetable__cell timetable__cell--time">&nbsp;
                </td>
                <td class="timetable__cell timetable__cell--time">&nbsp;
                </td>
            </tr>
            <tr>
                <td class="timetable__cell timetable__cell--name">Другие структурные подразделения учреждения</td>
                <td rowspan="4" class="timetable__cell timetable__cell--time">09:00 - 12:00<br>12:45 - 17:00</td>
                <td class="timetable__cell timetable__cell--time">&nbsp;
                </td>
                <td class="timetable__cell timetable__cell--time">&nbsp;
                </td>
            </tr>
        </tbody>
    </table>

    <table class="timetable timetable--mobile">
        <tbody class="timetable__body">
            <tr>
                <td class="timetable__cell timetable__cell--name">Отдел приемки документанции и информатизации экспертной деятельности управления государственной экспертизы</td>
                <td class="timetable__cell">
                    <span>ПН-чт 09:00 - 17:00</span>
                    <span>(12:00-12:45 перерыв)</span>
                    <span>ПТ, СБ, ВС - выходной</span>
                </td>
            </tr>
            <tr>
                <td class="timetable__cell timetable__cell--name">Экспертные отделы управления государственной экспертизы</td>
                <td class="timetable__cell">
                    <span>ПН-чт 09:00 - 17:00</span>
                    <span>(12:00-12:45 перерыв)</span>
                    <span>ПТ, СБ, ВС - выходной</span>
                </td>
            </tr>
            <tr>
                <td class="timetable__cell timetable__cell--name">Сметный отдел управления ценообразования в строительстве</td>
                <td class="timetable__cell">
                    <span>ПН-чт 09:00 - 17:00</span>
                    <span>(12:00-12:45 перерыв)</span>
                    <span>ПТ, СБ, ВС - выходной</span>
                </td>
            </tr>
            <tr>
                <td class="timetable__cell timetable__cell--name">Отдел по договорной работе</td>
                <td class="timetable__cell">
                    <span>ПН-чт 09:00 - 17:00</span>
                    <span>(12:00-12:45 перерыв)</span>
                    <span>ПТ, СБ, ВС - выходной</span>
                </td>
            </tr>
            <tr>
                <td class="timetable__cell timetable__cell--name">Другие структурные подразделения учреждения</td>
                <td class="timetable__cell">
                    <span>ПН-чт 09:00 - 17:00</span>
                    <span>(12:00-12:45 перерыв)</span>
                    <span>СБ, ВС - выходной</span>
                </td>
            </tr>
        </tbody>
    </table>
</section>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/TimeTable/TimeTable.astro", void 0);

const $$Astro$3 = createAstro();
const $$TitleBlock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TitleBlock;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["title-block", className], "class:list")}>
  ${renderSlot($$result, $$slots["default"])}
</section>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/uikit/TitleBlock/TitleBlock.astro", void 0);

const $$Astro$2 = createAstro();
const $$Details = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Details;
  const { details } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="details">
    ${renderComponent($$result, "TitleBlock", $$TitleBlock, { "className": "title-block--columns" }, { "default": ($$result2) => renderTemplate`
        <div class="title-block__part">
            ${renderComponent($$result2, "Title", $$Title, { "Tag": "h2", "className": "title title--h2 title--nomargin" }, { "default": ($$result3) => renderTemplate`Реквизиты` })}
            <p class="title-block__text">Реквизиты ГАУ МО “Мособлгосэкспертиза” (25.10.2023&nbsp;г.)</p>
        </div>
        <div class="title-block__part title-block__part--row">
            ${renderComponent($$result2, "TagButton", $$Button, { "TagButton": "button", "class": "button", "rel": "noopener" }, { "default": ($$result3) => renderTemplate`
                Копировать
            ` })}
            ${renderComponent($$result2, "TagButton", $$Button, { "TagButton": "a", "class": "button--icon", "rel": "noopener" }, { "default": ($$result3) => renderTemplate`
                <span>DOC</span>
            ` })}
        </div>
    ` })}

    <ul class="details__list">
        ${details.map(
    (item) => renderTemplate`<li class="details__item">
                    <span class="details__title">${item.title}</span>
                    <span class="details__info">${unescapeHTML(item.info)}</span>
                </li>`
  )}
    </ul>

</section>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/Details/Details.astro", void 0);

const $$Astro$1 = createAstro();
const $$Map = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Map;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="map">
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa9130efdb0c04d3a2543e4f403c50782a22e969c45b9e02245a02da7242c7f97&source=constructor" width="500" height="500" frameborder="0"></iframe>
</div>`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/components/Map/Map.astro", void 0);

const $$Astro = createAstro();
const $$Contacts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contacts;
  const pageTitle = "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B";
  const pageNavigation = "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B";
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
    },
    {
      title: "\u0430\u0434\u0440\u0435\u0441",
      icon: "pin",
      linkName: "\u0420\u043E\u0441\u0441\u0438\u044F, 117342, \u041C\u043E\u0441\u043A\u0432\u0430, \u0443\u043B.&nbsp;\u041E\u0431\u0440\u0443\u0447\u0435\u0432\u0430, \u0434\u043E\u043C&nbsp;46, \u043A.&nbsp;&#8470;&nbsp;305"
    },
    {
      title: "\u0413\u0440\u0430\u0444\u0438\u043A \u0440\u0430\u0431\u043E\u0442\u044B",
      icon: "clock",
      linkName: "\u041F\u041D-\u041F\u0422 9:00\u201317:00"
    }
  ];
  const timeMob = [
    {
      title: "\u041E\u0442\u0434\u0435\u043B \u043F\u0440\u0438\u0435\u043C\u043A\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u043D\u0446\u0438\u0438 \u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u044B",
      timeMob: [
        { time: "\u041F\u041D-\u0447\u0442 09:00 - 17:00" },
        { time: "(12:00-12:45 \u043F\u0435\u0440\u0435\u0440\u044B\u0432)" },
        { time: "\u041F\u0422, \u0421\u0411, \u0412\u0421 - \u0432\u044B\u0445\u043E\u0434\u043D\u043E\u0439" }
      ]
    },
    {
      title: "\u042D\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u044B\u0435 \u043E\u0442\u0434\u0435\u043B\u044B \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u044B",
      timeMob: [
        { time: "\u041F\u041D-\u0447\u0442 09:00 - 17:00" },
        { time: "(12:00-12:45 \u043F\u0435\u0440\u0435\u0440\u044B\u0432)" },
        { time: "\u041F\u0422, \u0421\u0411, \u0412\u0421 - \u0432\u044B\u0445\u043E\u0434\u043D\u043E\u0439" }
      ]
    },
    {
      title: "\u0421\u043C\u0435\u0442\u043D\u044B\u0439 \u043E\u0442\u0434\u0435\u043B \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0446\u0435\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0432 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0435",
      timeMob: [
        { time: "\u041F\u041D-\u0447\u0442 09:00 - 17:00" },
        { time: "(12:00-12:45 \u043F\u0435\u0440\u0435\u0440\u044B\u0432)" },
        { time: "\u041F\u0422, \u0421\u0411, \u0412\u0421 - \u0432\u044B\u0445\u043E\u0434\u043D\u043E\u0439" }
      ]
    },
    {
      title: "\u041E\u0442\u0434\u0435\u043B \u043F\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u0435",
      timeMob: [
        { time: "\u041F\u041D-\u0447\u0442 09:00 - 17:00" },
        { time: "(12:00-12:45 \u043F\u0435\u0440\u0435\u0440\u044B\u0432)" },
        { time: "\u041F\u0422, \u0421\u0411, \u0412\u0421 - \u0432\u044B\u0445\u043E\u0434\u043D\u043E\u0439" }
      ]
    },
    {
      title: "\u0414\u0440\u0443\u0433\u0438\u0435 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u043D\u044B\u0435 \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u044F",
      timeMob: [
        { time: "\u041F\u041D-\u043F\u0442 09:00 - 17:00" },
        { time: "(12:00-12:45 \u043F\u0435\u0440\u0435\u0440\u044B\u0432)" },
        { time: "\u0421\u0411, \u0412\u0421 - \u0432\u044B\u0445\u043E\u0434\u043D\u043E\u0439" }
      ]
    }
  ];
  const details = [
    {
      title: "\u041F\u043E\u043B\u043D\u043E\u0435 \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435",
      info: "\u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0435 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \xAB\u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u043D\u0430\u044F \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430\xBB"
    },
    {
      title: "\u041A\u043E\u0434 \u043E\u0442\u0440\u0430\u0441\u043B\u0438 \u043F\u043E \u041E\u041A\u041E\u041D\u0425",
      info: "69000"
    },
    {
      title: "\u0421\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u043E\u0435 \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435",
      info: "\u0413\u0410\u0423 \u041C\u041E \xAB\u041C\u043E\u0441\u043E\u0431\u043B\u043E\u0433\u0441\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430\xBB"
    },
    {
      title: "\u041A\u043E\u0434 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u043F\u043E \u041E\u041A\u041F\u041E",
      info: "55028505"
    },
    {
      title: "\u0410\u0434\u0440\u0435\u0441 \u043C\u0435\u0441\u0442\u0430 \u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F (\u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0434\u0440\u0435\u0441)",
      info: "143403, \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0433. \u041A\u0440\u0430\u0441\u043D\u043E\u0433\u043E\u0440\u0441\u043A, \u0443\u043B. \u0420\u0435\u0447\u043D\u0430\u044F, \u0434. 25\u0410, \u043E\u0444\u0438\u0441 35\u0411"
    },
    {
      title: "\u0411\u0430\u043D\u043A \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F",
      info: "\u0413\u0423 \u0411\u0430\u043D\u043A\u0430 \u0420\u043E\u0441\u0441\u0438 \u043F\u043E \u0426\u0424\u041E/\u0423\u0424\u041A \u043F\u043E \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0433. \u041C\u043E\u0441\u043A\u0432\u0430"
    },
    {
      title: "\u0424\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0434\u0440\u0435\u0441",
      info: "117342, \u041C\u043E\u0441\u043A\u0432\u0430, \u0443\u043B. \u041E\u0431\u0440\u0443\u0447\u0435\u0432\u0430, \u0434. 46"
    },
    {
      title: "\u0411\u0418\u041A",
      info: "004525987"
    },
    {
      title: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D/\u0444\u0430\u043A\u0441",
      info: "+7 (495) 333 94 19"
    },
    {
      title: "\u041D\u043E\u043C\u0435\u0440 \u0441\u0447\u0435\u0442\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F \u0441\u0440\u0435\u0434\u0441\u0442\u0432",
      info: "03224643460000004800"
    },
    {
      title: "\u0418\u041D\u041D / \u041A\u041F\u041F",
      info: "5041020693 / 502401001"
    },
    {
      title: "\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C",
      info: "\u041C\u0438\u043D\u0438\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u043E \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0438 \u0438&nbsp;\u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 (\u041C\u042D\u0424&nbsp;\u041C\u041E) (\u043B/\u0441 30008L\u0428\u0429440&nbsp;\u0413\u0410\u0423 \u041C\u041E &laquo;\u041C\u043E\u0441\u043E\u0431\u043B\u043E\u0433\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430&raquo;)"
    },
    {
      title: "\u041E\u0413\u0420\u041D",
      info: "1025005243340"
    },
    {
      title: "\u0415\u0434\u0438\u043D\u044B\u0439 \u043A\u0430\u0437\u043D\u0430\u0447\u0435\u0439\u0441\u043A\u0438\u0439 \u0441\u0447\u0435\u0442",
      info: "40102810845370000004"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "pageTitle": pageTitle, "pageNavigation": pageNavigation }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead()}<div class="container container--small">
        ${renderComponent($$result2, "Contacts", $$Contacts$1, { "contacts": contacts })}

        <div class="content">
            <div class="content__left-block">
                ${renderComponent($$result2, "Title", $$Title, { "Tag": "h2", "className": "title title--h2" }, { "default": ($$result3) => renderTemplate`Как проехать` })}
                ${renderComponent($$result2, "Map", $$Map, {})}
            </div>
            <div class="content__right-block content__right-block--feedback">
                ${renderComponent($$result2, "Title", $$Title, { "Tag": "h2", "className": "title title--h2" }, { "default": ($$result3) => renderTemplate`Задать вопрос` })}
                ${renderComponent($$result2, "Feedback", $$Feedback, {})}
            </div>
        </div>

        ${renderComponent($$result2, "TimeTable", $$TimeTable, { "timeMob": timeMob })}
        ${renderComponent($$result2, "TitleBlock", $$TitleBlock, {}, { "default": ($$result3) => renderTemplate`
            ${renderComponent($$result3, "Title", $$Title, { "Tag": "h2", "className": "title title--h2 title--nomargin" }, { "default": ($$result4) => renderTemplate`Аттестованные эксперты` })}
            ${renderComponent($$result3, "TagButton", $$Button, { "TagButton": "a", "class": "button--icon", "rel": "noopener" }, { "default": ($$result4) => renderTemplate`
                <span>PDF</span>
            ` })}
        ` })}
        ${renderComponent($$result2, "Details", $$Details, { "details": details })}
    </div>
` })}`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/contacts.astro", void 0);

const $$file = "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/contacts.astro";
const $$url = "/contacts.html";

export { $$Contacts as default, $$file as file, $$url as url };
