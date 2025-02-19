import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunk.astro.js';
import { a as $$BaseLayout } from './Gui.astro.js';
import { $ as $$CategoryList } from './assessment-services.astro.js';
import 'html-escaper';
/* empty css              *//* empty css              *//* empty css                            *//* empty css            *//* empty css                 */
const $$Astro = createAstro();
const $$Reporting = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Reporting;
  const pageTitle = "\u041E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442\u044C";
  const pageNavigation = "\u041E\u0431 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0438";
  const category = {
    text: "\u041E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442\u044C",
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
        text: "\u041E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442\u044C",
        active: true,
        opened: true,
        add: [
          {
            text: "\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u044B\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F",
            href: "javascript:void(0);"
          },
          {
            text: "\u0432\u0438\u0434\u0435\u043E\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B",
            href: "video-materials.html"
          }
        ]
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "pageTitle": pageTitle, "pageNavigation": pageNavigation }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead()}<aside class="aside">
        ${renderComponent($$result2, "CategoryList", $$CategoryList, { "category": category })}
    </aside>
    <div class="container container--small">
        <div class="content">
            <div class="content__left-block">
                <div class="article">
                    <h1>ОСНОВНЫЕ РЕЗУЛЬТАТЫ ДЕЯТЕЛЬНОСТИ</h1>
                    <h3>государственного автономного учреждения Московской области «Московская областная государственная экспертиза» за первое полугодие 2023 года</h3>
                    <picture>
                        <source srcset="images/reporting/image_1.webp">
                        <img src="images/reporting/image_1.jpg" alt="" width="" height="">
                    </picture>
                    <h3>I.&nbsp;Государственная экспертиза проектно-сметной документации</h3>
                    <div class="article__text article__text--cols">
                        <p>По&nbsp;состоянию на&nbsp;01&nbsp;июля 2023 года в&nbsp;ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo; фактически работали 156&nbsp;специалистов, занятых в&nbsp;области организации и&nbsp;проведения государственной экспертизы проектной документации и&nbsp;результатов инженерных изысканий, из&nbsp;которых 101, в&nbsp;т.&nbsp;ч.&nbsp;15&nbsp;совместителей, аттестованы на&nbsp;право подготовки заключений государственной экспертизыпроектной документации&nbsp;и (или) экспертизы результатов инженерных изысканий, из&nbsp;них 23&nbsp;эксперта аттестованы по&nbsp;2&nbsp;направлениям деятельности, 5&nbsp;экспертов по&nbsp;3&nbsp;направлениям деятельности и&nbsp;2&nbsp;&mdash; по&nbsp;4&nbsp;направлениям деятельности. С&nbsp;учетом этого учреждение фактически располагает 141 аттестатом экспертов, что на&nbsp;3&nbsp;аттестата больше, чем за&nbsp;аналогичный период2022&nbsp;года. В&nbsp;отчетный период в&nbsp;рамках реализации на&nbsp;территории Московской области программ социально-экономического развития региона проводилась государственная экспертиза объектов социальной, инженерной и&nbsp;транспортной инфраструктуры. Это, в&nbsp;первую очередь, детские дошкольные учреждения, школы, объекты здравоохранения и&nbsp;физкультурно-оздоровительныекомплексы, объекты водоснабжения, очистные сооружения хозяйственно-бытовых и&nbsp;ливневых вод, котельные, газопроводы, магистральные сети и&nbsp;питающие центры электроснабжения, автомобильные дороги, мостовые переходы, строительство, реконструкция и&nbsp;капитальный ремонт которых ведется на&nbsp;всей территории Московской области. </p>
                        <p>Кроме того, были рассмотрены объекты жилищного строительства в&nbsp;комплексе с&nbsp;объектами социального, культурно-бытового назначения, а&nbsp;также объекты строительства, реконструкции и&nbsp;капитального ремонта автодорожной сети Московской области, а&nbsp;также объекты, включенные в&nbsp;программу газификации сельских поселений, модернизации и&nbsp;развития коммунального хозяйства Подмосковья. </p>
                        <p>За&nbsp;6&nbsp;месяцев 2023&nbsp;г. ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo; по&nbsp;Программам завершения строительства домов и&nbsp;жилых комплексов для обманутых дольщиков на&nbsp;территории Московской области рассмотрело проекты по&nbsp;22&nbsp;объектам, в&nbsp;т.ч. &laquo;Дострой+&raquo; по&nbsp;16&nbsp;объектам и&nbsp;ГК&nbsp;&laquo;Урбан Групп&raquo; по&nbsp;6&nbsp;объектам. </p>
                        <p>Среди наиболее значимых проектов объектов капитального строительства, рассмотренных учреждением за&nbsp;6&nbsp;месяцев 2023&nbsp;года, можно отметить следующие:&gt; строительство школы на&nbsp;2200 мест в&nbsp;микрорайоне Катюшки (север) города Лобня, школы на&nbsp;550 мест в&nbsp;микрорайоне Барыбино городского округа Домодедово, школы на&nbsp;825 мест в&nbsp;городском округе Зарайск, музыкальной школы в&nbsp;микрорайоне Юбилейный города Королева; </p>
                        <ul>
                            <li>строительство поликлиники для взрослых и&nbsp;детей на&nbsp;400 посещений в&nbsp;смену микрорайоне Ковровый города Котельники;</li>
                            <li>реконструкция детского сада на&nbsp;330 мест в&nbsp;микрорайоне Старбеево городского округа Химки;</li>
                            <li>строительство Экопромышленного (индустриального) парка в&nbsp;городском округе Егорьевск;</li>
                            <li>реконструкция Долгопрудненского культурно-досугового центра &laquo;Полёт&raquo;.</li>
                        </ul>
                    </div>
                    <blockquote>В&nbsp;целом за&nbsp;отчетный период специалистами ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo; по&nbsp;данным ЕГРЗ было выдано 1002 заключения государственной экспертизы по&nbsp;проектной документации&nbsp;и (или) результатам инженерных изысканий, из&nbsp;которых 998 положительных и&nbsp;4&nbsp;отрицательных заключения. По&nbsp;сравнению с&nbsp;аналогичным периодом 2022 года (1335&nbsp;заключений) количество выпущенных заключений уменьшилось на&nbsp;24,9%.</blockquote>
                    <div class="article__text article__text--cols">
                        <p>Среди основных причин, повлиявших на&nbsp;уменьшение общего числа выданных учреждением экспертных заключений, можно отметить следующие. Во-первых, объекты программы по&nbsp;капитальному ремонту многоквартирных жилых домов, финансируемого за&nbsp;счет средств бюджета Московской области, были в&nbsp;основном рассмотрены в&nbsp;2022&nbsp;году.</p>
                        <p>Во-вторых, после принятия постановления Правительства РФ&nbsp;от&nbsp;04.04.2022&nbsp;г. No&nbsp;579 &laquo;Об&nbsp;установлении особенностей внесения изменений в&nbsp;проектную документацию&raquo;, многие заявители экспертизы воспользовались установленным Постановлением правом неоднократного продления срока проведения государственной экспертизы.</p>
                        <p>В-третьих, согласно пункту 1&nbsp;указанного Постановления по&nbsp;решению застройщика в&nbsp;отношении отдельных изменений, внесенных в&nbsp;проектную документацию, может не&nbsp;проводиться повторная государственная экспертиза.</p>
                        <p>В&nbsp;результате этого общее количество выданных заключений по&nbsp;проведению государственной экспертизы проектной документации&nbsp;и (или) результатов инженерных изысканий на&nbsp;1-го аттестованного эксперта уменьшилось по&nbsp;сравнению с&nbsp;6&nbsp;месяцами 2022 года на&nbsp;27,2&nbsp;% и&nbsp;составило в&nbsp;среднем 10&nbsp;заключений против 14&nbsp;годом ранее. По&nbsp;общему числу выданных заключений по&nbsp;итогам первого полугодия 2023 года ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo; занимает третье место средирегиональных учреждений государственной экспертизы Российской Федерации после ГАУ города Москвы &laquo;Московская государственная экспертиза&raquo; (3098&nbsp;заключений) и&nbsp;&laquo;Управления государственной экспертизы и&nbsp;ценообразования Республики Татарстан&raquo; (1670&nbsp;заключений), а&nbsp;у&nbsp;занимающего четвертое место ГАУ КК&nbsp;&laquo;Краснодаркрайгосэкспертиза&raquo;&nbsp;&mdash; 896&nbsp;заключений.Всего за&nbsp;6&nbsp;месяцев 2023 года учреждением было рассмотрено различной проектно-сметной документации с&nbsp;общей заявленной стоимостью 356,3 млрд руб.&nbsp;в&nbsp;текущем уровне цен.</p>
                        <p>По&nbsp;результатам корректировки проектов, получивших положительное заключение, по&nbsp;замечаниям и&nbsp;предложениям государственной экспертизы удалось добиться экономии бюджетных средств в&nbsp;размере 16,7 млрд руб.&nbsp;в&nbsp;текущем уровне цен, что составляет 4,7% от&nbsp;первоначально заявленной стоимости строительства.</p>
                        <p>В&nbsp;отчетном периоде было выпушено 32&nbsp;заключения по&nbsp;результатам экспертизы проектной документации&nbsp;и (или) результатов инженерных изысканий, подготовленных в&nbsp;форме информационной модели, а&nbsp;также 50&nbsp;заключений по&nbsp;результатам оценки соответствия в&nbsp;рамках экспертного сопровождения, следует учитывать, что годом ранее учреждение таких заключений не&nbsp;выпускало.</p>
                        <p>Средняя стоимость проведения экспертизы результатов инженерных изысканий и&nbsp;экспертизы проектной документации, включая проверку достоверности определения сметной стоимости за&nbsp;первое полугодие 2023 года выросла на&nbsp;28,3% и&nbsp;составила 1572,0&nbsp;тыс. руб. (с&nbsp;учетом НДС).За&nbsp;отчетный период учреждение выпустило 119 таких положительных заключений или 11,9% от&nbsp;общего числа заключений, против 110 заключений годом ранее. </p>
                        <p>Доля выручки от&nbsp;оказания услуг экспертизы проектной документации&nbsp;и (или) экспертизы результатов инженерных изысканий в&nbsp;общем объеме выручки учреждения за&nbsp;6&nbsp;месяцев 2023 года составила 74,2% и&nbsp;увеличилась на&nbsp;6,6% по&nbsp;сравнению с&nbsp;аналогичным периодом 2022&nbsp;года.</p>
                        <p>В&nbsp;целом, можно отметить, что рейтинг учреждения по&nbsp;эффективности и&nbsp;качеству осуществления полномочий в&nbsp;области государственной экспертизы проектной документации и&nbsp;результатов инженерных изысканий, рассчитанный в&nbsp;соответствии с&nbsp;Методикой, утвержденной Приказом Минстроя России от&nbsp;26.04.2022 No327/пр, относится к&nbsp;высокому уровню.</p>
                    </div>
                    <h3>II. Ценообразование и&nbsp;сметное нормирование в&nbsp;строительстве</h3>
                    <div class="article__text article__text--cols">
                        <p>В&nbsp;области ценообразования и&nbsp;сметного нормирования в&nbsp;строительстве за&nbsp;6&nbsp;месяцев 2023 года ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo; выполнило комплекс работ по&nbsp;проверке и&nbsp;согласованию сметной документации по&nbsp;комплексному капитальному ремонту и&nbsp;текущему ремонту объектов, финансируемых из&nbsp;бюджетных и&nbsp;внебюджетных источников:&gt; объектов жилого фонда и&nbsp;инженерной инфраструктуры Московской области;</p>
                        <ul>
                            <li>объектов жилищно-коммунального хозяйства Московской области;</li>
                            <li>объектов здравоохранения, образования, культуры и&nbsp;социального обеспеченияМосковской области;</li>
                            <li>дорог и&nbsp;благоустройство городских территорий, парков, скверов.</li>
                        </ul>
                        <p>За&nbsp;6&nbsp;месяцев 2023 года в&nbsp;учреждение поступило на&nbsp;проверку различной сметной документации на&nbsp;общую заявленную сумму 32,91 млрд руб. По&nbsp;результатам рассмотрения сметной документации подготовлены 821 положительное заключение, рекомендованы к&nbsp;утверждению сметы на&nbsp;общую сумму 30,09 млрд руб. Разница между заявленной и&nbsp;утвержденной стоимостью работ составила 2,82 млрд руб. или 8,6&nbsp;%.</p>
                        <p>По&nbsp;объектам, финансируемым за&nbsp;счет средств муниципальных бюджетов и&nbsp;бюджета Московской области, выпущены 548 положительных заключений, рекомендованы к&nbsp;утверждению сметы на&nbsp;общую сумму 27,67 млрд руб. Разница между заявленной и&nbsp;утвержденной суммой составила 2,67 млрд руб. или 8,7%</p>
                        <p>Основными замечаниями по&nbsp;проверке сметной документации являются неправильное применение расценок, индексов, нормативов лимитированных и&nbsp;прочих затрат, ошибки в&nbsp;подсчетах объемов работ.</p>
                        <p>В&nbsp;течение отчетного периода управлением ценообразования в&nbsp;строительстве были разработаны и&nbsp;выпущены 36&nbsp;выпусков Расчетных индексов пересчета стоимости строительных, специальных строительных, ремонтно-строительных, монтажных и&nbsp;пусконаладочных работ для Московской области, 4&nbsp;выпуска Каталога текущих цен, 20&nbsp;сборников территориальных единичных расценок на&nbsp;проектно-изыскательские работы&quot; в&nbsp;составе Территориальной сметно-нормативной базы Московской области.</p>
                    </div>
                    <blockquote>Для целей индексации проводится работа по&nbsp;ежемесячному мониторингу текущих цен по&nbsp;более чем 6&nbsp;000 наименованиям строительных материалов, изделий и&nbsp;конструкций на&nbsp;основании информации, предоставляемой производителями и&nbsp;поставщиками строительных ресурсов, по&nbsp;запросу специалистов управления ценообразования ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo;.</blockquote>
                    <div class="article__text article__text--cols">
                        <p>В&nbsp;первом полугодии 2023&nbsp;г. специалистами управления ценообразования в&nbsp;строительстве был подготовлен расчет среднемесячного размера оплаты труда рабочего первого разряда, занятого в&nbsp;строительной отрасли, для целей определения сметной стоимости строительства объектов капитального строительства за&nbsp;2022 год в&nbsp;размере 51&nbsp;599&nbsp;руб., который был рассмотрен и&nbsp;согласован ФАУ &laquo;Главгосэкспертиза России&raquo; и&nbsp;утвержден распоряжением &#8470;&nbsp;39&nbsp;от&nbsp;16.02.2023&nbsp;г. Министерства строительного комплекса Московской области.</p>
                        <p>В&nbsp;отчетном периоде в&nbsp;соответствии с&nbsp;&laquo;Правилами мониторинга цен строительных ресурсов&raquo;, утвержденными Постановлением Правительства Российской Федерации от&nbsp;23&nbsp;декабря 2016 года &#8470;&nbsp;1452, специалисты управления ценообразования в&nbsp;строительстве ежеквартально направляли в&nbsp;ФАУ &laquo;Главгосэкспертиза России&raquo; информацию о&nbsp;ценах на&nbsp;строительные ресурсы с&nbsp;обосновывающими документами в&nbsp;соответствии со&nbsp;сводным перечнем строительных ресурсов-представителей, который содержит 1203&nbsp;ресурса. Информация в&nbsp;установленные сроки загружалась в&nbsp;федеральную государственную информационную систему ценообразования в&nbsp;строительстве (ФГИС&nbsp;ЦС) для расчета ежеквартальных федеральных индексов изменения сметной стоимости строительства для Московской области.</p>
                        <p>В&nbsp;первом полугодии 2023г. разрабатывались индивидуальные индексы пересчета сметной стоимости строительства по&nbsp;заявкам организаций строительного комплекса Московской области.</p>
                        <p>Рост цен на&nbsp;строительную продукцию и&nbsp;услуги за&nbsp;6&nbsp;месяцев 2023&nbsp;г.&nbsp;по&nbsp;Московской области составил: &mdash;&nbsp;на&nbsp;основные материалы, изделия и&nbsp;конструкции&nbsp;&mdash; 1,73&nbsp;%,&nbsp;&mdash; средний индекс на&nbsp;СМР&nbsp;&mdash; 2,83&nbsp;%,&nbsp;&mdash; фонд оплаты труда, принятый для расчетов индексов&nbsp;&mdash; 4,07&nbsp;%,&nbsp;&mdash; строительные машины и&nbsp;механизмы&nbsp;&mdash; 0,59&nbsp;%.</p>
                        <p>В&nbsp;отчетный период проведены 6&nbsp;заседаний Московской областной комиссии по&nbsp;индексации цен и&nbsp;ценообразованию в&nbsp;строительстве.</p>
                        <p>В&nbsp;целях исполнения функций регионального центра мониторинга цен строительных ресурсов ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo; осуществляет мониторинг по&nbsp;предоставлению необходимой информации юридическими лицами Московской области, включенными в&nbsp;Перечень юридических лиц, предоставляющих информацию, необходимую для формирования сметных цен строительных ресурсов во&nbsp;ФГИС ЦС.</p>
                    </div>
                    <h3>III. Основные финансово-экономические показатели</h3>
                    <div class="article__text article__text--cols">
                        <p>Объем реализации услуг ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo; за&nbsp;6&nbsp;месяцев 2023 года составил 528,0 млн руб.&nbsp;и&nbsp;увеличился по&nbsp;сравнению с&nbsp;аналогичным периодом 2022 года на&nbsp;3,5%, в&nbsp;т.&nbsp;ч.</p>
                        <ul>
                            <li>управление государственной экспертизы&nbsp;&mdash; 392,0 млн руб. увеличение объема услуг на&nbsp;10,4% по&nbsp;сравнению с&nbsp;первым полугодием 2022&nbsp;года;</li>
                            <li>управление государственной экспертизы&nbsp;&mdash; 392,0 млн руб. увеличение объема услуг на&nbsp;10,4% по&nbsp;сравнению с&nbsp;первым полугодием 2022&nbsp;года;</li>
                            <li>управление ценообразования в&nbsp;строительстве&nbsp;&mdash; 136,0 млн руб. уменьшение объема услуг на&nbsp;12,3&nbsp;% по&nbsp;сравнению с&nbsp;первым полугодием 2022&nbsp;года.</li>
                        </ul>
                        <p>В&nbsp;отчетном периоде средства, полученные от&nbsp;реализации услуг, направлялись в&nbsp;основном на&nbsp;формирование фонда оплаты труда, на&nbsp;осуществление других производственных расходов, предусмотренных Планом финансово-хозяйственной деятельности учреждения на&nbsp;2023&nbsp;год. В&nbsp;целом совокупные расходы учреждения составили за&nbsp;6&nbsp;месяцев 2023 года 521,0 млн рублей и&nbsp;выросли на&nbsp;10,4&nbsp;% по&nbsp;сравнению с&nbsp;первым полугодием 2022&nbsp;года.</p>
                        <p>Среднемесячная заработная плата работника учреждения составила по&nbsp;итогам 6&nbsp;месяцев 2023 года 263&nbsp;819&nbsp;руб.&nbsp;и&nbsp;выросла по&nbsp;сравнению с&nbsp;аналогичным периодом 2022 года на&nbsp;15,1%.</p>
                        <p>В&nbsp;первом полугодии 2023 года учреждением своевременно и&nbsp;в&nbsp;полном объеме производились перечисления в&nbsp;бюджет и&nbsp;фонды всех уровней. Сумма начисленных и&nbsp;уплаченных налоговых выплат и&nbsp;отчислений составила 211,0 млн руб., в&nbsp;т.&nbsp;ч. налоги федеральные&nbsp;&mdash; 119,0 млн руб., налоги региональные и&nbsp;местные&nbsp;&mdash; 92,0 млн руб.</p>
                        <p>В&nbsp;первом полугодии 2023 года учреждением были подготовлены и&nbsp;проведены 364 видеосовещания в&nbsp;формате ВКС, что на&nbsp;6,2% больше, чем за&nbsp;аналогичный период 2022 года по&nbsp;следующим основным направлениям: &gt; объекты Министерства образования Московской области, включенные в&nbsp;федеральную программу капитального ремонта школ и&nbsp;муниципальную программу капитального ремонта колледжей и&nbsp;детских садов;</p>
                        <ul>
                            <li>объекты, включенные в&nbsp;инвестиционный программы Министерства строительного комплекса Московской области. объекты капитального строительства, реконструкции и&nbsp;капитального ремонта объектов транспорта и&nbsp;дорожной инфраструктуры Московской области;</li>
                            <li>объекты капитального ремонта ГКУ МО&nbsp;&laquo;Дирекция единого заказчика&raquo; Министерства здравоохранения Московской области;</li>
                        </ul>
                        <p>В&nbsp;отчетном периоде прошли испытания на&nbsp;тестовом стенде и&nbsp;планируется ввод в&nbsp;промышленную эксплуатацию Сервиса проверки смет представленных на&nbsp;экспертизу в&nbsp;XML-формате, на&nbsp;предмет их&nbsp;соответствия XML-схемам, опубликованным на&nbsp;официальном сайте Минстроя России.</p>
                        <p>Благодаря внедренному сервису планируется наладить контроль за&nbsp;форматом электронных документов, представляемых на&nbsp;экспертизу на&nbsp;предмет их&nbsp;соответствия XML-схеме, размещенной на&nbsp;официальном сайте Минстроя России, чтобы избежать в&nbsp;последующем отказ в&nbsp;приеме документов в&nbsp;Единый государственный реестр заключений, куда направляется окончательная версия рассмотренной документации при получении номера раздела Реестра</p>
                        <p>Проведенные мероприятия позволят повысить качество оказания услуги при проведении Проверки достоверности определения сметной стоимости строительства, реконструкции, капитального ремонта объектов капитального строительства проведения проверки сметной стоимости работ по&nbsp;текущему ремонту зданий и&nbsp;благоустройству муниципальных территорий.</p>
                        <p>В&nbsp;отчетном периоде учреждение активно вело свои аккаунты в&nbsp;социальных сетях &laquo;Вконтакте&raquo;, Telegram, &laquo;Одноклассники&raquo;, &laquo;Яндекс-Дзен&raquo;, там размещалось по&nbsp;четыре информационного материала в&nbsp;месяц, в&nbsp;том числе был видеоматериал по&nbsp;итогам работы ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo; в&nbsp;2022&nbsp;году. Общее число подписчиков &laquo;Вконтакте&raquo; составляет на&nbsp;отчетную дату 457&nbsp;человек.</p>
                        <p>На&nbsp;официальном сайте учреждения постоянно обновляется информация о&nbsp;текущей деятельности учреждения, предоставляемых экспертных и&nbsp;консультационных услугах, публикуются руководящие документы вышестоящих организаций, нормативные документы и&nbsp;разъяснения ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo;.</p>
                        <p>В&nbsp;целях повышения социальной защищенности работникам учреждения предоставлялись все необходимые льготы, выплаты и&nbsp;компенсации, предусмотренные Коллективным договором. За&nbsp;первые шесть месяцев 2023 года работникам учреждения по&nbsp;различным основаниям выплачена материальная помощь в&nbsp;сумме 18,32 млн руб.</p>
                        <p>С&nbsp;01&nbsp;февраля 2023&nbsp;г размеры должностных окладов работников ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo; были проиндексированы в&nbsp;размере 10&nbsp;%.</p>
                        <p>В&nbsp;целом, в&nbsp;первом полугодии 2023&nbsp;года, несмотря на&nbsp;сложную геополитическую обстановку в&nbsp;мире и&nbsp;экономическую ситуацию в&nbsp;стране, ГАУ МО&nbsp;&laquo;Мособлгосэкспертиза&raquo; успешно проводило государственную экспертизу по&nbsp;оценке соответствия проектной документации и&nbsp;результатов инженерных изысканий требованиям технических регламентов, проверку достоверности определения сметной стоимости объектов строительства, реконструкции и&nbsp;капитального ремонта на&nbsp;территории Московской области, финансируемых полностью или частично за&nbsp;счет бюджетных средств и&nbsp;приравненным к&nbsp;ним источников, а&nbsp;также проверку и&nbsp;согласование сметной документации на&nbsp;предмет её&nbsp;соответствия нормативам в&nbsp;области сметного нормирования и&nbsp;ценообразования в&nbsp;строительстве и&nbsp;добилось положительных финансово-экономических результатов своей производственной деятельности.</p>
                    </div>
                </div>
            </div>
            <!-- <div class="content__right-block">
                <Title Tag="h3" className="title title--h3">Материалы</Title>
                <Materials materials={materials} />
            </div> -->
        </div>
    </div>
` })}`;
}, "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/reporting.astro", void 0);

const $$file = "/Users/mellblimm/worksOwn/xpert/the-devs-moge/src/pages/reporting.astro";
const $$url = "/reporting.html";

export { $$Reporting as default, $$file as file, $$url as url };
