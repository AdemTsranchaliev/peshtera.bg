/**
 * Структура на менюто по официалния сайт www.peshtera.bg
 * (организационни раздели и подстраници за навигация в портала).
 */
export const OFFICIAL_SITE = 'https://www.peshtera.bg/';

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
          { id: 'paper', label: 'в. „Родопска искра“', path: '/razdel/rodopska-iskra' },
          { id: 'radio', label: 'Общинско радио Пещера', path: '/razdel/radio-peshtera' },
          { id: 'chit', label: 'Читалище „Развитие“', path: '/razdel/chitalishte-razvitie' },
          { id: 'per', label: 'Крепост „Перистера“', path: '/razdel/krepost-peristera' },
        ],
      },
      {
        id: 'projects',
        label: 'Проекти',
        path: '/razdel/proekti',
        children: [
          { id: 'ee', label: 'Енергийна ефективност', path: '/razdel/energiyna-efektivnost' },
          { id: 'vee', label: 'Изграждане на нови ВЕИ', path: '/razdel/vei' },
          { id: 'lowc', label: 'Нисковъглеродна икономика', path: '/razdel/niskovagleprodna' },
          { id: 'patr', label: 'Патронажна грижа', path: '/razdel/patronazhna-grizha' },
          { id: 'youth', label: 'Младежки центрове', path: '/razdel/mladezhki-tsentrove' },
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
          { id: 'd35', label: 'По чл. 35 ЗПКОНПИ', path: '/razdel/deklaratsii-35' },
          { id: 'd49', label: 'По чл. 49 ЗПК', path: '/razdel/deklaratsii-49' },
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
        children: [
          { id: 'pk1', label: 'ПК по законност и МСУ', path: '/razdel/os-pk-zakonnost' },
          { id: 'pk2', label: 'ПК по бюджет и финанси', path: '/razdel/os-pk-byudzhet' },
          { id: 'pk3', label: 'ПК по общинска собственост и ЕП', path: '/razdel/os-pk-sobstvenost' },
          { id: 'pk4', label: 'ПК по ТСУ', path: '/razdel/os-pk-tsu' },
          { id: 'pk5', label: 'ПК по здравеопазване и социална политика', path: '/razdel/os-pk-zdrave' },
          { id: 'pk6', label: 'ПК по ОССГ', path: '/razdel/os-pk-ossg' },
          { id: 'pk7', label: 'ПК по просвета, култура, спорт и туризъм', path: '/razdel/os-pk-kultura' },
          { id: 'rec', label: 'Записи на заседания', path: '/razdel/os-zapisi' },
        ],
      },
      {
        id: 'c-sess',
        label: 'Заседания на ОС',
        path: '/razdel/os-zasedaniya',
        children: [
          { id: 'm2327', label: 'Мандат 2023 – 2027', path: '/razdel/os-mandat-2023-2027' },
        ],
      },
      {
        id: 'c-acts',
        label: 'Актове на общинския съвет',
        path: '/razdel/os-akti',
        children: [
          { id: 'res', label: 'Решения', path: '/razdel/os-resheniya' },
          { id: 'prot', label: 'Протоколи', path: '/razdel/os-protokoli' },
          { id: 'nared', label: 'Наредби', path: '/razdel/os-naredbi' },
          { id: 'prav', label: 'Правилници', path: '/razdel/os-pravilnitsi' },
        ],
      },
      { id: 'c-pub', label: 'Публични регистри', path: '/razdel/os-publichni-registri' },
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
          { id: 'u1', label: 'Устройство на територията, строителство, кадастър', path: '/razdel/au-zut' },
          { id: 'u2', label: 'Гражданска регистрация и актосъставяне', path: '/razdel/au-grazhdanska' },
          { id: 'u3', label: 'Търговия, туризъм, транспорт', path: '/razdel/au-targoviya' },
          { id: 'u4', label: 'Селско стопанство, екология, земеползване', path: '/razdel/au-selsko' },
          { id: 'u5', label: 'Общинска собственост', path: '/razdel/au-sobstvenost' },
          { id: 'u6', label: 'Социални дейности', path: '/razdel/au-sotsialni' },
          { id: 'u7', label: 'Местни приходи', path: '/razdel/au-mestni-prihodi' },
        ],
      },
      { id: 'e-serv', label: 'Електронни услуги', path: '/razdel/elektronski-uslugi' },
      { id: 'doi', label: 'Достъп до обществена информация', path: '/razdel/dostap-oi' },
      { id: 'signals', label: 'Сигнали и предложения', path: '/razdel/signal' },
      { id: 'anticorr', label: 'Антикорупция', path: '/razdel/antikoruptsiya' },
      { id: 'buyer', label: 'Профил на купувача', path: '/razdel/profil-kupuvach' },
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
      { id: 'reach', label: 'Връзка с нас', path: '/razdel/vrazka-s-nas' },
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

export const hotline = {
  phones: ['0350 6 22 03', '035062216', '0893532069'],
  address: '4550 гр. Пещера, ул. „Дойранска епопея“ № 17',
  emailNote: 'Официалният имейл е публикуван на www.peshtera.bg',
};

/** Плоски елементи за карта на сайта */
export function flattenNav(items, acc = []) {
  for (const item of items) {
    acc.push({ label: item.label, path: item.path, hash: item.hash });
    if (item.children?.length) flattenNav(item.children, acc);
  }
  return acc;
}

/** Индекс path → възел за breadcrumbs и страници със съдържание */
export const pathToNav = new Map();
(function indexPaths(items) {
  for (const item of items) {
    if (item.path && item.path !== '/' && !item.hash) {
      pathToNav.set(item.path, item);
    }
    if (item.children?.length) indexPaths(item.children);
  }
})(navTree);
