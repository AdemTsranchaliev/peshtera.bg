/**
 * Пълна структура по карта на сайта — www.peshtera.bg (com_xmap).
 * Пътища с много нива: маршрутът в приложението е /razdel/*
 */

function pkChildren(slug, pid) {
  const base = `/razdel/os-pk-${slug}`;
  return [
    {
      id: `${pid}-dr`,
      label: 'Проекти на дневни редове на комисията',
      path: `${base}/dnevni-redove`,
    },
    {
      id: `${pid}-mat`,
      label: 'Материали за предстоящо заседание на комисията',
      path: `${base}/materiali`,
    },
    {
      id: `${pid}-pr`,
      label: 'Протоколи на комисията',
      path: `${base}/protokoli`,
    },
  ];
}

const COMMISSIONS = [
  {
    id: 'pk1',
    slug: 'zakonnost',
    label:
      'ПК по законност, обществен ред, предотвратяване и установяване на конфликт на интереси и развитие на местното самоуправление',
  },
  { id: 'pk2', slug: 'byudzhet', label: 'ПК по бюджет и финанси' },
  { id: 'pk3', slug: 'sobstvenost', label: 'ПК по общинска собственост и европейски програми' },
  { id: 'pk4', slug: 'tsu', label: 'ПК по териториално и селищно устройство' },
  { id: 'pk5', slug: 'zdrave', label: 'ПК по здравеопазване и социална политика' },
  { id: 'pk6', slug: 'ossg', label: 'ПК по опазване на околната среда, селско и горско стопанство' },
  { id: 'pk7', slug: 'kultura', label: 'ПК по просвета, култура, спорт и туризъм' },
];

const mandateRes = (y) => ({
  id: `res-${y}`,
  label: `Мандат ${y.replace('-', ' – ')}`,
  path: `/razdel/os-resheniya/mandat-${y}`,
});

const mandateProt = (y) => ({
  id: `prot-${y}`,
  label: `Мандат ${y.replace('-', ' – ')}`,
  path: `/razdel/os-protokoli/mandat-${y}`,
});

const EE_LOTS = [1, 2, 3, 4, 5].map((n) => ({
  id: `ee-lot-${n}`,
  label: `ЛОТ-${n}`,
  path: `/razdel/ee-lot-${n}`,
}));

const EE_OBJECTS = [
  ['ee-oa', 'Общинска администрация'],
  ['ee-rit', 'Ритуална зала'],
  ['ee-rpu', 'РПУ/РСПБЗН'],
  ['ee-odk', 'ОДК'],
  ['ee-nats', 'Национална програма за енергийна ефективност на многофамилни жилищни сгради'],
  ['ee-peshtera2', 'Пещера-II'],
].map(([id, label]) => ({ id, label, path: `/razdel/${id}` }));

const BG_RRP = ['1339-C01', '1359-C01', '1365-C01', '1386-C01', '1394-C01', '1405-C01', '1376-C01'].map((c) => {
  const slug = c.toLowerCase().replace(/\./g, '');
  return {
    id: `ee-rrp-${slug}`,
    label: `BG-RRP-4.023-${c}`,
    path: `/razdel/ee-bg-rrp-4-023-${slug}`,
  };
});

export const navTree = [
  {
    id: 'home',
    label: 'Начало',
    path: '/',
    children: [
      { id: 'news-archive', label: 'Архив новини', path: '/novini' },
      { id: 'elections', label: 'Избори', path: '/razdel/izbori' },
    ],
  },
  {
    id: 'municipality',
    label: 'Община Пещера',
    path: '/razdel/obshtina-peshtera',
    children: [
      {
        id: 'ref',
        label: 'Справочна информация',
        path: '/razdel/spravochna-informatsiya',
        children: [
          { id: 'loc', label: 'Местоположение', path: '/razdel/mestopolozhenie' },
          { id: 'hist', label: 'История', path: '/razdel/istoriya' },
          { id: 'cult', label: 'Култура', path: '/razdel/kultura' },
          { id: 'edu', label: 'Образование', path: '/razdel/obrazovanie' },
          { id: 'tour', label: 'Туризъм', path: '/razdel/turizam' },
        ],
      },
      { id: 'tenders', label: 'Търгове и конкурси', path: '/razdel/targove-konkursi' },
      {
        id: 'strat',
        label: 'Стратегически документи',
        path: '/razdel/strategicheski-dokumenti',
        children: [
          { id: 'pl', label: 'Общински планове', path: '/razdel/obshtinski-planove' },
          { id: 'st', label: 'Общински стратегии', path: '/razdel/obshtinski-strategii' },
          { id: 'pr', label: 'Общински програми', path: '/razdel/obshtinski-programi' },
        ],
      },
      { id: 'budget', label: 'Общински бюджет', path: '/razdel/obshtinski-byudzhet' },
      {
        id: 'useful',
        label: 'Полезно',
        path: '/razdel/polezno',
        children: [
          { id: 'links', label: 'Полезни връзки', path: '/razdel/polezni-vrazki' },
          { id: 'links-p', label: 'Полезни връзки — Пещера', path: '/razdel/polezni-vrazki-peshtera' },
          { id: 'links-o', label: 'Други връзки', path: '/razdel/drugi-vrazki' },
          { id: 'paper', label: 'в. „Родопска искра“', path: '/razdel/rodopska-iskra' },
          { id: 'radio', label: 'Общинско радио Пещера', path: '/razdel/radio-peshtera' },
          { id: 'chit', label: 'Читалище „Развитие“ — видео', path: '/razdel/chitalishte-razvitie' },
          { id: 'per', label: 'Крепост „Перистера“', path: '/razdel/krepost-peristera' },
        ],
      },
      {
        id: 'projects',
        label: 'Проекти',
        path: '/razdel/proekti',
        children: [
          {
            id: 'ee',
            label: 'Енергийна ефективност',
            path: '/razdel/energiyna-efektivnost',
            children: [...EE_LOTS, ...EE_OBJECTS, ...BG_RRP],
          },
          {
            id: 'ee-mf',
            label: 'Енергийно обновяване на многофамилна жилищна сграда',
            path: '/razdel/ee-mnogofamilni-zhilishtni',
            children: BG_RRP.map((x) => ({
              ...x,
              id: `mf-${x.id}`,
              path: x.path.replace('/ee-bg-rrp-', '/ee-mf-bg-rrp-'),
            })),
          },
          { id: 'vee', label: 'Изграждане на нови ВЕИ', path: '/razdel/vei' },
          { id: 'lowc', label: 'Нисковъглеродна икономика', path: '/razdel/niskovagleprodna' },
          { id: 'patr', label: 'Патронажна грижа', path: '/razdel/patronazhna-grizha' },
          { id: 'bg16', label: 'BG16RFOP001-8.006', path: '/razdel/proekt-bg16rfop001-8-006' },
          { id: 'bg06', label: 'BG06RDNP001-19.610-0060', path: '/razdel/proekt-bg06rdnp001' },
          { id: 'youth', label: 'Младежки центрове', path: '/razdel/mladezhki-tsentrove' },
          { id: 'foto', label: 'Фотоволтаична инсталация — ДЦДМУ', path: '/razdel/fotovoltaichna-dtsdmu' },
          { id: 'innov', label: 'Иновативни здравно-социални услуги', path: '/razdel/inovativni-uslugi' },
        ],
      },
      { id: 'gdpr', label: 'Защита на лични данни', path: '/razdel/zashtita-lichni-danni' },
    ],
  },
  {
    id: 'admin',
    label: 'Общинска администрация',
    path: '/razdel/obshtinska-administratsiya',
    children: [
      { id: 'mayor', label: 'Кмет', path: '/razdel/kmet' },
      { id: 'dep', label: 'Заместник-кметове', path: '/razdel/zam-kmetove' },
      { id: 'sec', label: 'Секретар', path: '/razdel/sekretar' },
      { id: 'mayors', label: 'Кметове на кметства', path: '/razdel/kmetove-kmetstva' },
      { id: 'struct', label: 'Структура', path: '/razdel/struktura-administratsiya' },
      {
        id: 'dec-adm',
        label: 'Декларации',
        path: '/razdel/deklaratsii-admin',
        children: [
          { id: 'd35', label: 'Декларации по чл. 35 ЗПКОНПИ', path: '/razdel/deklaratsii-35' },
          { id: 'd49', label: 'Декларации по чл. 49 ЗПК', path: '/razdel/deklaratsii-49' },
        ],
      },
      {
        id: 'prog',
        label: 'Програма и отчети на кмета',
        path: '/razdel/programa-otcheti-kmet',
        children: [
          { id: 'prog1', label: 'Програма', path: '/razdel/programa-kmet' },
          { id: 'rep', label: 'Отчети', path: '/razdel/otcheti-kmet' },
        ],
      },
      { id: 'conc', label: 'Конкурси', path: '/razdel/konkursi-admin' },
    ],
  },
  {
    id: 'council',
    label: 'Общински съвет',
    path: '/razdel/obshtinski-savet',
    children: [
      { id: 'c-info', label: 'Обща информация', path: '/razdel/os-obshta-informatsiya' },
      { id: 'c-chair', label: 'Председател', path: '/razdel/os-predsedatel' },
      { id: 'c-mem', label: 'Общински съветници', path: '/razdel/os-savetnitsi' },
      {
        id: 'c-comm',
        label: 'Комисии',
        path: '/razdel/os-komisii',
        children: COMMISSIONS.map((c) => ({
          id: c.id,
          label: c.label,
          path: `/razdel/os-pk-${c.slug}`,
          children: pkChildren(c.slug, c.id),
        })),
      },
      { id: 'rec', label: 'Записи на заседания', path: '/razdel/os-zapisi' },
      {
        id: 'c-sess',
        label: 'Заседания на ОС',
        path: '/razdel/os-zasedaniya',
        children: [
          {
            id: 'm2327',
            label: 'Мандат 2023 – 2027',
            path: '/razdel/os-mandat-2023-2027',
            children: [
              {
                id: 'zap-2327',
                label: 'Записи от заседания на Общинския съвет',
                path: '/razdel/os-mandat-2023-2027/zapisi-zasedaniya',
              },
            ],
          },
        ],
      },
      {
        id: 'c-acts',
        label: 'Актове на общинския съвет',
        path: '/razdel/os-akti',
        children: [
          {
            id: 'res',
            label: 'Решения',
            path: '/razdel/os-resheniya',
            children: [
              mandateRes('2003-2007'),
              mandateRes('2007-2011'),
              mandateRes('2011-2015'),
              mandateRes('2015-2019'),
              mandateRes('2019-2023'),
              mandateRes('2023-2027'),
            ],
          },
          {
            id: 'prot',
            label: 'Протоколи',
            path: '/razdel/os-protokoli',
            children: [mandateProt('2015-2019'), mandateProt('2019-2023'), mandateProt('2023-2027')],
          },
          { id: 'nared', label: 'Наредби', path: '/razdel/os-naredbi' },
          { id: 'prav', label: 'Правилници', path: '/razdel/os-pravilnitsi' },
        ],
      },
      {
        id: 'c-dec',
        label: 'Декларации',
        path: '/razdel/os-deklaratsii',
        children: [
          { id: 'os-d35', label: 'Декларации по чл. 35 ЗПКОНПИ', path: '/razdel/os-deklaratsii-35-zpkonpi' },
          { id: 'os-d49', label: 'Декларация по чл. 49 ЗПК', path: '/razdel/os-deklaratsii-49-zpk' },
        ],
      },
      { id: 'c-norm', label: 'Проекти на нормативни документи', path: '/razdel/os-proekti-norm-dokumenti' },
      { id: 'c-obiav', label: 'Обявления на общинския съвет', path: '/razdel/os-obyavleniya' },
      { id: 'c-act-info', label: 'Актуална информация', path: '/razdel/os-aktualna-informatsiya' },
      { id: 'c-pub', label: 'Публични регистри', path: '/razdel/os-publichni-registri' },
      { id: 'c-regp', label: 'Регистърна питания', path: '/razdel/os-registarna-pitaniya' },
      { id: 'c-live', label: 'На живо', path: '/razdel/os-na-zhivo' },
    ],
  },
  {
    id: 'e-muni',
    label: 'е-Община',
    path: '/razdel/e-obshtina',
    children: [
      { id: 'charter', label: 'Харта на клиента и удовлетвореност', path: '/razdel/harta-klient' },
      { id: 'rules', label: 'Вътрешни правила', path: '/razdel/vatreshni-pravila' },
      {
        id: 'adm-serv',
        label: 'Административни услуги',
        path: '/razdel/admin-uslugi',
        children: [
          { id: 'u1', label: 'По устройство на територията, контрол по строителството и кадастъра', path: '/razdel/au-zut' },
          { id: 'u2', label: 'По гражданска регистрация и актосъставяне', path: '/razdel/au-grazhdanska' },
          { id: 'u3', label: 'По търговия, туризъм, транспорт', path: '/razdel/au-targoviya' },
          { id: 'u4', label: 'По селско стопанство, екология и земеползване', path: '/razdel/au-selsko' },
          { id: 'u5', label: 'По общинска собственост', path: '/razdel/au-sobstvenost' },
          { id: 'u6', label: 'По социални дейности', path: '/razdel/au-sotsialni' },
          { id: 'u7', label: 'По други закони и кодекси', path: '/razdel/au-drugi-zakoni' },
          { id: 'u8', label: 'По местни приходи', path: '/razdel/au-mestni-prihodi' },
        ],
      },
      { id: 'e-serv', label: 'Електронни услуги', path: '/razdel/elektronski-uslugi' },
      { id: 'doi', label: 'Достъп до обществена информация', path: '/razdel/dostap-oi' },
      { id: 'signals', label: 'Сигнали и предложения', path: '/razdel/signal' },
      { id: 'anticorr', label: 'Антикорупция', path: '/razdel/antikoruptsiya' },
      { id: 'e-pub', label: 'Публични общински регистри', path: '/razdel/e-publichni-registri' },
      { id: 'delov', label: 'Деловодна справка', path: '/razdel/delovodna-spravka' },
      {
        id: 'buyer',
        label: 'Профил на купувача',
        path: '/razdel/profil-kupuvach',
        children: [
          { id: 'buy-pre', label: 'Преди м. юни 2020 г.', path: '/razdel/profil-kupuvach/do-yuni-2020' },
          { id: 'buy-post', label: 'След м. юни 2020 г.', path: '/razdel/profil-kupuvach/sled-yuni-2020' },
        ],
      },
      { id: 'mdt', label: 'Справка за задължения МДТ', path: '/razdel/mdt' },
    ],
  },
  {
    id: 'contacts',
    label: 'Контакти',
    path: '/kontakti',
    children: [
      { id: 'addr', label: 'Адрес', path: '/kontakti', hash: 'adres' },
      { id: 'bank', label: 'Банкови сметки', path: '/razdel/bankovi-smetki' },
      { id: 'hours', label: 'Работно време', path: '/kontakti', hash: 'rabotno-vreme' },
      {
        id: 'reach',
        label: 'Връзка с нас',
        path: '/razdel/vrazka-s-nas',
        children: [
          { id: 'vr-oa', label: 'Общинска администрация', path: '/razdel/vrazka-obshtinska-administratsiya' },
          { id: 'vr-uch', label: 'Училища и детски градини', path: '/razdel/vrazka-uchilishta-dg' },
          { id: 'vr-pred', label: 'Общински предприятия', path: '/razdel/vrazka-obshtinski-predpriyatiya' },
        ],
      },
      { id: 'hot', label: 'Горещ телефон', path: '/kontakti', hash: 'goresht-telefon' },
    ],
  },
  {
    id: 'gallery',
    label: 'Галерия',
    path: '/razdel/galeriya',
    children: [
      { id: 'ph', label: 'Фото галерия', path: '/razdel/foto-galeriya' },
      { id: 'vid', label: 'Видео', path: '/razdel/video' },
      { id: 'aud', label: 'Аудио', path: '/razdel/audio' },
    ],
  },
  { id: 'sitemap', label: 'Карта на сайта', path: '/karta-na-saita' },
];
