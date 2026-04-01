import { useEffect, useMemo, useState } from 'react';
import { Box, Button, Chip, CircularProgress, Container, Dialog, DialogContent, Divider, IconButton, Link, MenuItem, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { Link as RouterLink, useLocation, Navigate } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import { pathToNav } from '../data/navigation';
import { getPageContent } from '../data/siteContent';
import municipalityMirrorPaths from '../data/municipalityMirrorPaths.js';
import declarations35Data from '../data/declarations35.json';
import administrationContacts from '../data/administrationContacts.js';
import { tenders2025 } from '../data/tenders2025.js';

const mirrorSx = {
  '& .componentheading': {
    fontFamily: '"Exo 2", sans-serif',
    fontWeight: 700,
    fontSize: '1.25rem',
    mb: 2,
  },
  '& table': { maxWidth: '100%' },
  '& img': { maxWidth: '100%', height: 'auto' },
  '& a': { wordBreak: 'break-word' },
  '& .contentheading': { fontWeight: 700 },
  '& p': { lineHeight: 1.75, mb: 1.5 },
  '& .blog': { width: '100%' },
};

export default function ContentPage() {
  const { pathname } = useLocation();
  const asset = (file) => `${import.meta.env.BASE_URL}${file}`;
  const electionsPages = [
    {
      slug: 'chastichni-mestni-izbori-2025-kapitan-dimitrievo',
      title: 'Частични местни избори 2025 - с.Капитан Димитриево',
      articleCount: 5,
      category: 'izbori',
      summary: 'Информация, график и съобщения за частичните местни избори през 2025 г. за с. Капитан Димитриево.',
    },
    {
      slug: 'izbori-ns-19-april-2026',
      title: 'Избори за Народно събрание 19 април 2026 г',
      articleCount: 6,
      category: 'izbori',
      summary: 'Всички материали, срокове и административни указания за изборите за Народно събрание на 19.04.2026 г.',
    },
  ];
  const electionSlugMatch = pathname.match(/^\/razdel\/izbori\/([^/]+)$/);
  const electionSlug = electionSlugMatch?.[1];
  const electionDetail = electionSlug ? electionsPages.find((e) => e.slug === electionSlug) : null;
  const electronicHelpVideos = [
    'Вход в "Моето пространство" с Мобилен КЕП Евротръст',
    'Вход в "Моето пространство" с Мобилен КЕП Борика',
    '"Моето пространство" през мобилно устройство',
    'Регистрация в "Моето пространство" на Egov.bg на физическо лице',
    'Как да използваме електронни административни услуги',
    'Инструкция за регистрация на юридическо лице в Системата за сигурно е-връчване (ССЕВ)',
    'Как се извършват плащания за електронни услуги през "Моето пространство" на Egov.bg',
  ];
  const electronicServicesRows = [
    ['Гражданска регистрация и актосъставяне', '1', '1997', 'Издаване на удостоверение за настоящ адрес при вече регистриран настоящ адрес', 'Ниво IV', 'високо'],
    ['Гражданска регистрация и актосъставяне', '2', '2000', 'Издаване на многоезично извлечение от акт за гражданско състояние', 'Ниво IV', 'високо'],
    ['Гражданска регистрация и актосъставяне', '3', '2016', 'Издаване на удостоверение за наследници', 'Ниво IV', 'високо'],
    ['Гражданска регистрация и актосъставяне', '4', '2017', 'Издаване на удостоверение за сключване на брак от български гражданин в чужбина', 'Ниво IV', 'високо'],
    ['Гражданска регистрация и актосъставяне', '5', '2020', 'Издаване на заверен препис или копие от личен регистрационен картон или страница от семейния регистър на населението', 'Ниво III', 'високо'],
    ['Гражданска регистрация и актосъставяне', '6', '2033', 'Възстановяване или промяна на име', 'Ниво III', 'високо'],
    ['Гражданска регистрация и актосъставяне', '7', '2034', 'Издаване на препис-извлечение от акт за смърт за втори и следващ път', 'Ниво IV', 'значително'],
    ['Гражданска регистрация и актосъставяне', '8', '2036', 'Издаване на удостоверение за съпруг/а и родствени връзки', 'Ниво IV', 'високо'],
    ['Гражданска регистрация и актосъставяне', '9', '2037', 'Издаване на удостоверение за сключен граждански брак - дубликат', 'Ниво IV', 'високо'],
    ['Гражданска регистрация и актосъставяне', '10', '2038', 'Издаване на удостоверение за липса на съставен акт за гражданско състояние (акт за раждане, акт за смърт)', 'Ниво IV', 'високо'],
    ['Зелена система', '33', '1996', 'Издаване на разрешение за отсичане на над 5 броя дървета и на лозя над 1 декар', '', 'ниско'],
    ['Зелена система', '34', '2031', 'Издаване на разрешение за отсичане на дълготрайни декоративни дървета и дървета с историческо значение', 'Ниво IV', 'ниско'],
    ['Избори', '38', '3303', 'Вписване в избирателния списък по настоящ адрес', '', 'ниско'],
    ['Избори', '39', '3304', 'Вписване в списъка за гласуване с подвижна избирателна кутия', '', 'ниско'],
    ['Избори', '40', '3305', 'Вписване в избирателния списък', '', 'високо'],
    ['Избори', '41', '3306', 'Отстраняване на непълноти и грешки в избирателния списък', '', 'високо'],
    ['Избори', '42', '3307', 'Изключване от Списъка на заличените лица', '', 'високо'],
    ['Избори', '43', '3308', 'Изключване от Списъка на заличените лица на избирател, заявил, че ще гласува извън страната', '', 'високо'],
    ['Кадастър', '44', '2099', 'Справки (устни и писмени) от кадастралните планове и разписните списъци към тях', 'Ниво I', 'ниско'],
    ['Местни данъци и такси', '51', '1998', 'Издаване на удостоверение за наличие или липса на задължения по Закона за местните данъци и такси', 'Ниво IV', 'високо'],
    ['Местни данъци и такси', '61', '9401', 'Данъчна декларация по чл.14 от ЗМДТ за облагане с данък върху недвижимите имоти', '', 'значително'],
    ['Общинска собственост', '78', '1988', 'Издаване на удостоверение за отписване на имот от актовите книги за имотите - общинска собственост', 'Ниво IV', 'значително'],
    ['Реклама', '91', '2100', 'Издаване на разрешение за поставяне на рекламно-информационни елементи', 'Ниво IV', 'ниско'],
    ['Селско стопанство и екология', '92', '2006', 'Измерване, кубиране и маркиране на дървесина, добита извън горския фонд', 'Ниво III', 'ниско'],
    ['Транспорт', '99', '2012', 'Издаване на карта за безплатно паркиране на МПС, обслужващо хора с трайни увреждания', 'Ниво II', 'значително'],
    ['Търговия, туризъм, транспорт', '102', '357', 'Прекратяване на правата, произтичащи от удостоверение за регистрация за извършване на таксиметров превоз на пътници', '', 'високо'],
    ['Услуги предоставяни от всички администрации', '121', '2', 'Предоставяне на достъп до обществена информация', 'Ниво IV', ''],
    ['Устройство на територията', '124', '1986', 'Разрешаване изработването на план-извадка от подробен устройствен план', 'Ниво IV', 'значително'],
    ['Устройство на територията', '155', '2519', 'Издаване на заверен препис от решение на Общински експертен съвет', 'Ниво I', 'ниско'],
  ];
  const energyContracts = [
    ['Договор № BG16RFOP001-2.001-0010-C01 - „Повишаване на енергийна ефективност на жилищни сгради в гр. Пещера – ЛОТ 1“', 'https://www.peshtera.bg/index.php?option=com_content&view=category&layout=blog&id=47&Itemid=176'],
    ['Договор № BG16RFOP001-2.001-0114-С01 - „Повишаване на енергийна ефективност на жилищни сгради в гр. Пещера - ЛОТ 2“', 'https://www.peshtera.bg/index.php?option=com_content&view=category&layout=blog&id=49&Itemid=176'],
    ['Договор № BG16RFOP001-2.001-0134-C01 - „Повишаване на енергийна ефективност на жилищни сгради в гр. Пещера – ЛОТ 3“', 'https://www.peshtera.bg/index.php?option=com_content&view=category&layout=blog&id=50&Itemid=176'],
    ['Договор № BG16RFOP001-2.001-0124-C01 - „Повишаване на енергийна ефективност на жилищни сгради в гр. Пещера – ЛОТ 4“', 'https://www.peshtera.bg/index.php?option=com_content&view=category&layout=blog&id=51&Itemid=176'],
    ['Договор № BG16RFOP001-2.001-0139-C01 - „Повишаване на енергийна ефективност на жилищни сгради в гр. Пещера – ЛОТ 5“', 'https://www.peshtera.bg/index.php?option=com_content&view=category&layout=blog&id=52&Itemid=176'],
    ['Договор № BG16RFOP001-2.001-0004-C01 - „Повишаване на енергийна ефективност на публична общинска сграда: Общинска администрация гр. Пещера“', 'https://www.peshtera.bg/index.php?option=com_content&view=category&layout=blog&id=53&Itemid=176'],
    ['Договор № BG16RFOP001-2.001-0111-C01 - „Повишаване на енергийна ефективност на общинска публична сграда: Ритуална зала, гр. Пещера“', 'https://www.peshtera.bg/index.php?option=com_content&view=category&layout=blog&id=55&Itemid=176'],
    ['Договор № BG16RFOP001-2.001-0005-C01 - „Повишаване на енергийна ефективност на публично държавна сграда: РСПБЗН и РПУ в гр. Пещера“', 'https://www.peshtera.bg/index.php?option=com_content&view=category&layout=blog&id=56&Itemid=176'],
    ['Договор № BG16RFOP001-2.001-0007-C01 - „Повишаване на енергийна ефективност на публично общинска сграда: Общински детски комплекс“', 'https://www.peshtera.bg/index.php?option=com_content&view=category&layout=blog&id=54&Itemid=176'],
    ['Договор № BG16RFOP001-2.002-0028-C01 - „Повишаване на енергийната ефективност на социални и жилищни сгради, находящи се в гр. Пещера - II“', 'https://www.peshtera.bg/index.php?option=com_content&view=section&id=11&Itemid=176'],
  ];
  const energyReports = [
    ['Годишен отчет - Възобновяеми източници и биогорива (ОПНИЕВИБГ)', 'https://www.peshtera.bg/index.php?option=com_content&view=article&id=7018:-2023&catid=145:opnievibg&Itemid=176'],
    ['Годишен отчет - изпълнение на плановете по чл.12 от ЗЕЕ', 'https://www.peshtera.bg/index.php?option=com_content&view=article&id=5281:2019-11-14-13-36-47&catid=146:zee&Itemid=176'],
  ];
  const energyDownloads = [
    ['Регистрационен формуляр.сключени договори.doc', 'https://www.peshtera.bg/attachments/article/4048/Регистрационен формуляр.сключени договори.doc', '166 KB'],
    ['Прессъобщение (press.doc)', 'https://www.peshtera.bg/attachments/article/3987/press.doc', '169 KB'],
    ['Прессъобщение (press1.doc)', 'https://www.peshtera.bg/attachments/article/3988/press1.doc', '179 KB'],
    ['Прессъобщение (press2.doc)', 'https://www.peshtera.bg/attachments/article/3989/press2.doc', '164 KB'],
    ['Прессъобщение (press3_20161101.doc)', 'https://www.peshtera.bg/attachments/article/3999/press3_20161101.doc', '173 KB'],
  ];
  const tenderSlugMatch = pathname.match(/^\/razdel\/targove-konkursi\/([^/]+)$/);
  const tenderSlug = tenderSlugMatch?.[1];
  const tenderDetail = tenderSlug ? tenders2025.find((t) => t.slug === tenderSlug) : null;
  const node =
    pathToNav.get(pathname) ??
    (tenderDetail ? pathToNav.get('/razdel/targove-konkursi') : null) ??
    (electionDetail ? pathToNav.get('/razdel/izbori') : null);
  const [mirrorEntry, setMirrorEntry] = useState(undefined);
  const [declarationsSearch, setDeclarationsSearch] = useState('');
  const [copyFeedback, setCopyFeedback] = useState('');
  const [adminContactsSearch, setAdminContactsSearch] = useState('');
  const [tendersSearch, setTendersSearch] = useState('');
  const [tendersYear, setTendersYear] = useState('all');
  const [galleryLightbox, setGalleryLightbox] = useState(null);
  const [galleryFilter, setGalleryFilter] = useState('all');

  useEffect(() => {
    let cancelled = false;
    if (!municipalityMirrorPaths.has(pathname)) {
      setMirrorEntry(null);
      return undefined;
    }
    setMirrorEntry(undefined);
    import('../data/municipalityMirror.json')
      .then((mod) => {
        if (!cancelled) setMirrorEntry(mod.default[pathname] ?? null);
      })
      .catch(() => {
        if (!cancelled) setMirrorEntry(null);
      });
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  if (!node) {
    return <Navigate to="/" replace />;
  }

  if (tenderSlug && !tenderDetail) {
    return <Navigate to="/razdel/targove-konkursi" replace />;
  }
  if (electionSlug && !electionDetail) {
    return <Navigate to="/razdel/izbori" replace />;
  }

  const isTenderDetailPage = Boolean(tenderDetail);
  const isElectionDetailPage = Boolean(electionDetail);
  let { title, paragraphs, bullets } = getPageContent(pathname, node);
  if (isTenderDetailPage && tenderDetail) {
    title = tenderDetail.title;
  } else if (isElectionDetailPage && electionDetail) {
    title = electionDetail.title;
  }
  const showMirror = mirrorEntry?.html;
  const mirrorLoading = mirrorEntry === undefined;
  const isMayorPage = pathname === '/razdel/kmet';
  const isCouncilChairPage = pathname === '/razdel/os-predsedatel';
  const isDeputyPage = pathname === '/razdel/zam-kmetove';
  const isSecretaryPage = pathname === '/razdel/sekretar';
  const isVillagePage = pathname === '/razdel/kmetove-kmetstva';
  const isStructurePage = pathname === '/razdel/struktura-administratsiya';
  const isCouncilGeneralPage = pathname === '/razdel/os-obshta-informatsiya';
  const isCouncilMembersPage = pathname === '/razdel/os-savetnitsi';
  const isBankAccountsPage = pathname === '/razdel/bankovi-smetki';
  const isAdminContactsPage = pathname === '/razdel/vrazka-obshtinska-administratsiya';
  const isSchoolsContactsPage = pathname === '/razdel/vrazka-uchilishta-dg';
  const isMunicipalEnterprisesPage = pathname === '/razdel/vrazka-obshtinski-predpriyatiya';
  const isGeoLocationPage = pathname === '/razdel/mestopolozhenie';
  const isHistoryPage = pathname === '/razdel/istoriya';
  const isCulturePage = pathname === '/razdel/kultura';
  const isGalleryPage = pathname === '/razdel/galeriya';
  const isEducationPage = pathname === '/razdel/obrazovanie';
  const isTourismPage = pathname === '/razdel/turizam';
  const isEnergyEfficiencyPage = pathname === '/razdel/energiyna-efektivnost';
  const isTendersPage = pathname === '/razdel/targove-konkursi';
  const isElectionsPage = pathname === '/razdel/izbori';
  const isElectronicServicesPage = pathname === '/razdel/elektronski-uslugi';
  const isPublicRegistersPage = pathname === '/razdel/os-publichni-registri';
  const isMunicipalPlansPage = pathname === '/razdel/obshtinski-planove';
  const isDeclarations35Page = pathname === '/razdel/deklaratsii-35';
  const isDeclarations49Page = pathname === '/razdel/deklaratsii-49';
  const isProgramPage = pathname === '/razdel/programa-kmet';
  const hasCustomLayout =
    isMayorPage ||
    isCouncilChairPage ||
    isDeputyPage ||
    isSecretaryPage ||
    isVillagePage ||
    isStructurePage ||
    isCouncilGeneralPage ||
    isCouncilMembersPage ||
    isBankAccountsPage ||
    isAdminContactsPage ||
    isSchoolsContactsPage ||
    isMunicipalEnterprisesPage ||
    isGeoLocationPage ||
    isHistoryPage ||
    isCulturePage ||
    isGalleryPage ||
    isEducationPage ||
    isTourismPage ||
    isEnergyEfficiencyPage ||
    isTendersPage ||
    isElectionsPage ||
    isElectronicServicesPage ||
    isPublicRegistersPage ||
    isMunicipalPlansPage ||
    isTenderDetailPage ||
    isElectionDetailPage ||
    isDeclarations35Page ||
    isDeclarations49Page ||
    isProgramPage;
  const mayor = {
    name: 'Йордан Стоянов Младенов',
    title: 'Кмет на Община Пещера',
    office: 'Община Пещера, стая 7, ет. 1',
    phones: ['0350/6-22-01'],
    emails: ['y.mladenov@peshtera.bg', 'mayor@peshtera.bg'],
    reception: 'Всеки понеделник, 14:00 - 17:00',
  };
  const councilChair = {
    name: 'Васил Филев',
    title: 'Председател на Общински съвет - Пещера',
    office: 'Общински съвет - Пещера',
    phoneFax: '0350 62206',
    email: 'chairman@peshtera.bg',
    image: asset('vf-chairman.png'),
    electionInfo:
      'Общинският съвет избира от своя състав председател на съвета. Изборът се провежда с тайно гласуване. За избран се смята кандидатът, който е получил повече от половината от гласовете от общия брой на съветниците.',
    deputiesInfo:
      'Общинският съвет може да избере един или повече заместник-председатели на съвета. Условията и редът за избиране и правомощията на заместник-председателя се уреждат в правилника по чл. 21, ал. 3.',
    earlyTerminationIntro: 'Правомощията на председателя на общинския съвет се прекратяват предсрочно при:',
    earlyTerminationBullets: [
      'подаване на оставка;',
      'трайна невъзможност или системно неизпълнение на задълженията си като председател за повече от три месеца с решение на общинския съвет, взето по реда на ал. 1.',
    ],
    replacementInfo:
      'При предсрочно прекратяване на правомощията на председателя, при негово отсъствие, както и при обсъждане на дейността му, заседанието на съвета се председателства от избран съветник или от заместник-председател, ако има избран такъв.',
    duties: [
      'свиква съвета на заседание;',
      'ръководи подготовката на заседанията на съвета;',
      'ръководи заседанията на съвета;',
      'координира работата на постоянните комисии;',
      'подпомага съветниците в тяхната дейност;',
      'представлява съвета пред външни лица и организации.',
    ],
    laborInfo:
      'Общинският съвет определя възнаграждението на председателя в зависимост от обема на работата, която извършва, но в размер, не по-голям от възнаграждението на кмета на общината. Председателят на общинския съвет има всички права по трудово правоотношение освен тези, които противоречат или са несъвместими с неговото правно положение.',
  };
  const councilMembers = [
    'Али Неждет Мюмюнов',
    'Ангел Томов Жилев',
    'Апостол Ангелов Мадин',
    'Атанас Александров Янев',
    'Борис Трайчев Гаджев',
    'Валентина Атанасова Станкова',
    'Васил Тодоров Филев',
    'Георги Димитров Стоилов',
    'Димитър Николов Батаклиев',
    'Димитър Тодоров Бакалов',
    'Зехра Мустафа Алиш',
    'Иван Георгиев Гълев',
    'Илиян Тодоров Петров',
    'Кристина Георгиева Диманина',
    'Михаил Янков Фолев',
    'Младен Венциславов Манов',
    'Неделчо Атанасов Рядков',
    'Николай Йорданов Пенев',
    'Николай Нешков Рядков',
    'Стоян Георгиев Радин',
    'Теодора Борисова Илиева',
  ];
  const copyToClipboard = async (value, label) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopyFeedback(`Копирано: ${label}`);
      window.setTimeout(() => setCopyFeedback(''), 2000);
    } catch {
      setCopyFeedback('Неуспешно копиране. Маркирайте и копирайте ръчно.');
    }
  };
  const deputyMayors = [
    {
      name: 'Гълъбина Карамитрева',
      office: 'Община Пещера, стая 14, ет.1',
      email: 'g.karamitreva@peshtera.bg',
      reception: 'всяка сряда от 14.30 часа до 17.00 часа',
      scope:
        'Заместник-кмет: финанси и човешки ресурси, европейски фондове и обществени поръчки, МКБППМН, Общинско предприятие „Обредни дейности”, трудова заетост и подпомагане, Клубове на инвалида и Клуб на пенсионера), звено Крепост „Перистера”, координация с органите на полицията и съдебната система. Ръководи, координира и контролира дейността на екипите за управление на проекти.',
      image: asset('galabina-karamitreva.png'),
    },
    {
      name: 'Заместник-кмет (териториално и селищно устройство)',
      office: 'Община Пещера, стая 16, ет. 1',
      email: null,
      reception: 'Всеки вторник, 14:30 - 17:00',
      scope:
        'Териториално и селищно устройство и общинска собственост, ОП «Чистота и поддържане на общинската инфраструктура», ОП «Паркинги и пазари», общинско търговско дружество «ВКС» ЕООД - Пещера, отбранителна и мобилизационна подготовка. Ръководи, координира и контролира дейността на екипите за управление на проекти.',
      image: null,
    },
    {
      name: 'Заместник-кмет (образование и социални дейности)',
      office: 'Община Пещера, стая 13, ет. 1',
      email: null,
      reception: 'Всеки четвъртък, 14:30 - 17:00',
      scope:
        'Образование, култура, младежки и социални дейности, програми за трудова заетост, социални услуги в общността (Домашен социален патронаж, Дневен център за деца и младежи с увреждания, Дневен център за пълнолетни лица с увреждания, Център за настаняване от семеен тип за деца без увреждания, Кризисен център за лица и деца, пострадали от насилие), етнически и демографски въпроси, спорт и туризъм, функция „Здравеопазване“. Ръководи, координира и контролира дейността на екипите за управление на проекти.',
      image: null,
    },
  ];
  const secretary = {
    name: 'Галина Стоянова',
    title: 'Секретар на Община Пещера',
    office: 'Община Пещера, стая 4, ет.1',
    email: 'secretary@peshtera.bg',
    reception: 'всеки петък от 14.30 часа до 17.00 часа',
    scope:
      'дейността на общинската администрация, условията на работа на служителите и информационно-техническото обезпечаване на дейността им, деловодното обслужване, документооборота и общинския архив, дейността на звената по гражданска регистрация и административно обслужване, разгласяването и обнародването на актовете на общинския съвет и на кмета на общината, работата с молбите, жалбите, сигналите и предложенията на гражданите и юридическите лица, организационно-техническата подготовка и провеждането на изборите и местните референдуми, обществен ред и сигурност, гражданска защита, регистрация на местните поделения на вероизповеданията, настойничество и попечителство, образование, култура, младежки и социални дейности, програми за трудова заетост, социални услуги в общността (Домашен социален патронаж, Дневен център за деца и младежи с увреждания, Дневен център за пълнолетни лица с увреждания, Център за настаняване от семеен тип за деца без увреждания, Кризисен център за лица и деца пострадали от насилие), етнически и демографски въпроси, спорт и туризъм, функция - здравеопазване. Ръководи, координира и контролира дейността на екипите за управление на проекти.',
  };
  const villageLeaders = [
    {
      name: 'Димитър Данчев',
      role: 'Кмет на с. Радилово',
      address: 'ул. Георги Ангелиев 41',
      phone: '035562221',
      email: 'kmetstvo_radilovo@abv.bg',
      image: null,
    },
    {
      name: 'Нанси Тодорова',
      role: 'Кмет на с. Капитан Димитриево',
      address: 'ул. Георги Димитров 33',
      phone: '035592327',
      email: 'n.todorova@peshtera.bg',
      image: asset('nansi-todorova.png'),
    },
    {
      name: 'Кметски наместник на с. Свети Константин',
      role: 'Кметски наместник',
      address: '',
      phone: '0897000656',
      email: 'sv.konstantion@peshtera.bg',
      image: null,
    },
  ];
  const villageMayorFunctions = [
    'изпълнява бюджета на общината в частта му за района или кметството;',
    'организира провеждането на благоустройствени, комунални и други мероприятия;',
    'отговаря за стопанисването на определени от общинския съвет обекти на общинската собственост;',
    'назначава и освобождава служителите от общинската администрация в района или кметството, които подпомагат неговата дейност, в съответствие с утвърдената численост и структура;',
    'приема мерки за подобряване и възстановяване на околната среда и организира охраната на полските имоти;',
    'води регистрите на населението и за гражданското състояние и изпраща актуализационни съобщения до ЕСГРАОН;',
    'осигурява извършването на административни услуги на физически и юридически лица;',
    'осигурява спазването на обществения ред; има правомощията по чл. 61, 63, 68, 69, 71, 72 и 74 от Закона за Министерството на вътрешните работи, на съответната територия до пристигане на полицейския орган;',
    'организира и ръководи защитата на населението при бедствия и аварии;',
    'представлява района или кметството пред населението, пред обществени и политически организации и пред други райони или кметства.',
  ];
  const deputyVicarFunctions = [
    'Изпълнява бюджета на общината в частта му за населеното място;',
    'Организира провеждането на благоустройствени, комунални и други мероприятия;',
    'Отговаря за стопанисването на определени от общинския съвет обекти на общинската собственост;',
    'Приема мерки за подобряване и възстановяване на околната среда и организира охраната на полските имоти;',
    'Води регистрите на населението и за гражданското състояние и изпраща актуализационни съобщения до ЕСГРАОН;',
    'Осигурява спазването на обществения ред; има правомощията по чл.70, 72, 80, 81, 83, 85 и 87 от Закона за Министерството на вътрешните работи, на съответната територия до пристигането на полицейския орган;',
    'Осигурява извършването на административни услуги на физически и юридически лица;',
    'Организира и ръководи защитата на населението при бедствия и аварии;',
    'Организира изпълнението на актовете на общинския съвет и на кмета на общината, отнасящи се до територията на наместничеството;',
    'Изпълнява функции, възложени му от кмета на общината.',
  ];
  const structure = {
    image: asset('struktura-admin.png'),
    regulationTitle: 'УСТРОЙСТВЕН ПРАВИЛНИК НА ОБЩИНСКА АДМИНИСТРАЦИЯ',
    ethicsPdf: 'https://www.peshtera.bg/attachments/article/4/etichen%20kodeks.pdf',
  };
  const declarations35 = declarations35Data;
  const filteredDeclarations35 = useMemo(() => {
    const q = declarationsSearch.trim().toLowerCase();
    if (!q) return declarations35;
    return declarations35.filter(({ name, role, idx }) => `${idx} ${name} ${role}`.toLowerCase().includes(q));
  }, [declarations35, declarationsSearch]);
  const declarations49t2 = [
    { idx: '1', incoming: '4/8.12.2023', declaration: 'Декларация по чл.49 ал.1 т.2', declarationLink: 'https://www.peshtera.bg/images/Deklaracii/Ob_Peshtera/49_t2/a.dechev_t2.pdf', name: 'Ангел Георгиев Дечев', role: 'Специалист шофьор, куриер, снабдител' },
    { idx: '2', incoming: '6/22.12.2023', declaration: 'Декларация по чл.49 ал.1 т.2', declarationLink: 'https://www.peshtera.bg/images/Deklaracii/Ob_Peshtera/49_t2/d.slavova_t2.pdf', name: 'Димитрина Зафирова Славова', role: 'Мл. Експерт Европейски фондове' },
    { idx: '3', incoming: '7/02.01.2024', declaration: 'Декларация по чл.49 ал.1 т.2', declarationLink: 'https://www.peshtera.bg/images/Deklaracii/Ob_Peshtera/49/SValkova2.pdf', name: 'Сашка Георгиева Вълкова', role: 'Счетоводител' },
    { idx: '4', incoming: '81/03.06.2024', declaration: 'Декларация по чл.49 ал.1 т.2', declarationLink: 'https://www.peshtera.bg/images/Deklaracii/Ob_Peshtera/49_t2/49_1_2svrubvheva.pdf', name: 'Силвия Георгиева Връбчева', role: 'Началник отдел ОКСМД' },
    { idx: '5', incoming: '13/01.04.2024', declaration: 'Декларация по чл.49 ал.1 т.2', declarationLink: null, name: 'Екатерина Сотирова Семерджиева', role: 'Специалист "Туризъм и Младежки политики"' },
    { idx: '6', incoming: '30/25.04.2024', declaration: 'Декларация по чл.49 ал.1 т.2', declarationLink: null, name: 'Фани Петкова Достинова', role: 'Мл. Експерт "СГВСЕ"' },
    { idx: '7', incoming: '66/14.05.2024', declaration: 'Декларация по чл.49 ал.1 т.2', declarationLink: null, name: 'Стоян Василев Йовчев', role: 'Началник отдел "ЕМГ"' },
    { idx: '8', incoming: '86/01.10.2024', declaration: 'Декларация по чл.49 ал.1 т.2', declarationLink: null, name: 'Весела Гаврилова Хамамджиева', role: 'Гл. Спец "СРГРАОН"' },
    { idx: '9', incoming: '83/15.07.2024', declaration: 'Декларация по чл.49 ал.1 т.2', declarationLink: null, name: 'Мария Василева Семерджиева', role: 'Мл. Експерт "ОПАППОП"' },
  ];
  const declarations49t13 = [
    { idx: '1', incoming: '1/16.11.2023', declaration: 'Декларация по чл.49 ал.1 т.1', declarationLink: 'https://www.peshtera.bg/images/Deklaracii/Ob_Peshtera/49/a.dechev_49.pdf', name: 'Ангел Георгиев Дечев', role: 'Специалист шофьор, куриер, снабдител' },
    { idx: '2', incoming: '2/24.11.2023', declaration: 'Декларация по чл.49 ал.1 т.1', declarationLink: 'https://www.peshtera.bg/images/Deklaracii/Ob_Peshtera/49/d.slavova_49.pdf', name: 'Димитрина Зафирова Славова', role: 'Мл. Експерт Европейски фондове' },
    { idx: '3', incoming: '7/02.01.2024', declaration: 'Декларация по чл.49 ал.1 т.1', declarationLink: 'https://www.peshtera.bg/images/Deklaracii/Ob_Peshtera/49_t2/S.Valkova.pdf', name: 'Сашка Георгиева Вълкова', role: 'Счетоводител' },
    { idx: '4', incoming: '8/08.01.2024', declaration: 'Декларация по чл.49 ал.1 т.1', declarationLink: 'https://www.peshtera.bg/images/Deklaracii/Ob_Peshtera/49_t2/K.Tankov.pdf', name: 'Кръстьо Танков', role: 'Главен Архитект' },
    { idx: '5', incoming: '80/03.06.2024', declaration: 'Декларация по чл.49 ал.1 т.1', declarationLink: 'https://www.peshtera.bg/images/Deklaracii/Ob_Peshtera/49/49_1_1_svrubcheva.pdf', name: 'Силвия Георгиева Връбчева', role: 'Началник отдел "ОКСМД"' },
    { idx: '6', incoming: '12/01.04.2024', declaration: 'Декларация по чл.49 ал.1 т.1', declarationLink: 'https://www.peshtera.bg/images/Deklaracii/Ob_Peshtera/49/49_1_1_esemerdjieva.pdf', name: 'Екатерина Сотирова Семерджиева', role: 'Специалист "Туризъм и Младежки политики"' },
    { idx: '7', incoming: '10/01.03.2024', declaration: 'Декларация по чл.49 ал.1 т.1', declarationLink: 'https://www.peshtera.bg/images/Deklaracii/Ob_Peshtera/49/49_1_1_fdostinova.pdf', name: 'Фани Петкова Достинова', role: 'Мл. Експерт "СГВСЕ"' },
    { idx: '8', incoming: '79/03.06.2024', declaration: 'Декларация по чл.49 ал.1 т.1', declarationLink: 'https://www.peshtera.bg/images/Deklaracii/Ob_Peshtera/49/49_1_1_sjowchev.pdf', name: 'Стоян Василев Йовчев', role: 'Началник отдел "ЕМГ"' },
    { idx: '9', incoming: '86/01.10.2024', declaration: 'Декларация по чл.49 ал.1 т.1', declarationLink: 'https://www.peshtera.bg/images/Deklaracii/Ob_Peshtera/49/49_1_1_vhamamdjieva.pdf', name: 'Весела Гаврилова Хамамджиева', role: 'Гл. Спец "СРГРАОН"' },
    { idx: '10', incoming: '82/15.07.2024', declaration: 'Декларация по чл.49 ал.1 т.1', declarationLink: 'https://www.peshtera.bg/images/Deklaracii/Ob_Peshtera/49/49_1_1_msemerdjieva.pdf', name: 'Мария Василева Семерджиева', role: 'Мл. Експерт "ОПАППОП"' },
  ];
  const filter49 = (rows) => {
    const q = declarationsSearch.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((r) => `${r.idx} ${r.incoming} ${r.name} ${r.role} ${r.declaration}`.toLowerCase().includes(q));
  };
  const filtered49t2 = filter49(declarations49t2);
  const filtered49t13 = filter49(declarations49t13);
  const filteredAdminContacts = useMemo(() => {
    const q = adminContactsSearch.trim().toLowerCase();
    if (!q) return administrationContacts;
    return administrationContacts.filter((r) => `${r.idx} ${r.name} ${r.role} ${r.email} ${r.phone}`.toLowerCase().includes(q));
  }, [adminContactsSearch]);
  const schoolsAndKindergartens = [
    { idx: 1, name: 'СОУ “Св.Климент Охридски”', phone: '0350/63641' },
    { idx: 2, name: 'ОУ “Петко Рачов Славейков”', phone: '0350/62133' },
    { idx: 3, name: 'ОУ “Св. Патриарх Евтимий”', phone: '0350/62337' },
    { idx: 4, name: 'ОУ “Любен Каравелов”', phone: '0350/66045' },
    { idx: 5, name: 'НУ “Михаил Каролиди”', phone: '0350/62138' },
    { idx: 6, name: 'НУ “Михаил Куманов”', phone: '0350/62142' },
    { idx: 7, name: 'ОУ "Паисий Хилендарски” с.Радилово', phone: '03556/2232' },
    { idx: 8, name: 'ОДЗ “Изгрев”', phone: '0350/63920' },
    { idx: 9, name: 'ЦДГ “Слънчо”', phone: '0350/62223' },
    { idx: 10, name: 'ОДЗ "Иглика”', phone: '0350/90717' },
    { idx: 11, name: 'ЦДГ “Сокола”', phone: '0350/66294' },
    { idx: 12, name: 'ОДЗ “Деница”', phone: '0350/63962' },
    { idx: 13, name: 'ПГ ЛПМ “Васил Левски”', phone: '0350/63968' },
    { idx: 14, name: 'ПГ ХВТ “Атанас Ченгелев”', phone: '0350/63652' },
  ];
  const municipalEnterprises = [
    { idx: 1, name: 'ОП “Чистота и поддържане на общинската инфраструктура”', phone: '0350/62291' },
    { idx: 2, name: 'ОП “Паркинги и пазари”', phone: '0350/65684' },
    { idx: 3, name: 'ОП “Обредни дейности”', phone: '0350/65684' },
    { idx: 4, name: '“ВКС“ ЕООД', phone: '0350/62131' },
  ];
  const geoSections = [
    {
      title: 'Обща характеристика',
      text: 'Община Пещера (17 472 ха) е разположена в Западнородопската част на Осоговско-Родопската зона. В нея попадат части от Бесапарските, Къркарските и Баташките ридове, между които е врязана долината на Стара река и нейните притоци. Град Пещера (н.в. 450 м) се намира в предпланината, на границата с Горнотракийската низина.',
    },
    {
      title: 'Транспортна свързаност',
      text: 'По дефилето на река "Стара река" минава пътят, който свързва общината на изток със селата Бяга, Исперихово, Ново село и град Пловдив, на югоизток с град Брацигово, а на запад с градовете Батак, Велинград и Доспат и язовирите "Батак", "Беглика", "Широка поляна", "Доспат".',
    },
    {
      title: 'Разстояния и достъп',
      text: 'На 1 км от града в североизточна посока се отделя пътят за областния център, чрез който се осъществява пряка транспортна връзка със селищата от общината - с. Радилово и с. Капитан Димитриево. Град Пещера се намира на 20 км от Пазарджик, 40 км от Пловдив и на 125 км от София.',
    },
    {
      title: 'Туристически потенциал',
      text: 'На 16 км от Пещера се намира летовище "Свети Константин", известно със своя благоприятен климат и красива природа. Построените там ски-влекове създават условия за развитие на зимните спортове, а близкият язовир "Батак" - за летен плаж и риболов.',
    },
    {
      title: 'Почви и стопанство',
      text: 'Преобладаващите типове почви в общината са канелено-горски и алувиално-ливадни, което благоприятства развитието на зеленчукопроизводството, овощарството, лозарството, тютюнопроизводството и животновъдството.',
    },
    {
      title: 'Горски фонд',
      text: 'От общата територия на Община Пещера около 40% е заета с гори, което се отразява благоприятно върху екологията и способства за развитието на дърводобива, дървопреработването и ловния туризъм.',
    },
  ];
  const historySections = [
    {
      title: 'Най-ранни следи',
      text: 'Град Пещера е селище с твърде стара и интересна история. Най-ранните човешки следи датират от епохата на неолита. В продължение на хилядолетия този край е обитаван от тракийското племе беси, изпитало влиянието на македонци, римляни и византийци.',
    },
    {
      title: 'Възникване и културни пластове',
      text: 'Възникването на селището в пещерската котловина е станало през втората половина на IV век пр.н.е. Най-трайно е взаимодействието по-късно на трите етноса: траки, прабългари и славяни. Свидетелство за това са откритите останки в околностите от хилядолетна култура - кюпове с обгорено жито, строителни материали, оръжия, оръдия на труда, монети, накити, култови предмети, саркофази, останки от калдаръмени пътища, мостове и крепости.',
    },
    {
      title: 'Име на града',
      text: 'Няколко са предположенията за името на Пещера, но надделява това от пещерите в околностите.',
    },
    {
      title: 'Възрожденско строителство',
      text: 'Във възрожденската епоха е извършено огромно строителство на църкви, мостове, чешми, къщи и училища от майсторите на пещерската архитектурно-строителна школа. Тяхно дело са монументалните църкви "Св. Димитър", "Св. Петка" и "Св. Богородица" в Пещера, "Св. Марина" в Пловдив, "Св. Богородица" в Пазарджик и часовниковата кула в Пещера.',
    },
  ];
  const cultureGallery = [
    { src: asset('culture-chitalishte-razvitie.png'), title: 'Читалище „Развитие“' },
    { src: asset('culture-sv-dimitar-front.png'), title: 'Църквата „Св. Димитър“ (екстериор)' },
    { src: asset('culture-sv-dimitar-interior.png'), title: 'Църквата „Св. Димитър“ (интериор)' },
    { src: asset('culture-museum-yard.png'), title: 'Музеен комплекс (метохът на „Св. Петка“)' },
  ];
  const portalGallery = [
    { src: asset('hero-peshtera-monument.png'), title: 'Паметен монумент „Пещера“', category: 'Забележителности' },
    { src: asset('hero-peristera.png'), title: 'Крепост Перистера', category: 'Забележителности' },
    { src: asset('culture-hero-town.png'), title: 'Панорама на град Пещера', category: 'Пейзажи' },
    { src: asset('culture-chitalishte-razvitie.png'), title: 'Читалище „Развитие“', category: 'Култура' },
    { src: asset('culture-sv-dimitar-front.png'), title: 'Църква „Св. Димитър“', category: 'Култура' },
    { src: asset('culture-sv-dimitar-interior.png'), title: 'Интериор на „Св. Димитър“', category: 'Култура' },
    { src: asset('culture-museum-yard.png'), title: 'Музеен комплекс', category: 'Култура' },
    { src: asset('logo-peshtera.png'), title: 'Символ на общината', category: 'Символи' },
  ];
  const educationInfra = [
    { idx: 1, type: 'ОДЗ', count: 3 },
    { idx: 2, type: 'ЦДГ', count: 4 },
    { idx: 3, type: 'Начални училища 1-4 клас', count: 2 },
    { idx: 4, type: 'Основни училища 1-8 клас', count: 4 },
    { idx: 5, type: 'СОУ 1-12 клас', count: 1 },
    { idx: 6, type: 'ПГ ХВТ “Атанас Ченгелев“', count: 1 },
    { idx: 7, type: 'ПГ ЛПМ “Васил Левски”', count: 1 },
    { idx: 8, type: 'ОДК - гр. Пещера', count: 1 },
    { idx: 9, type: 'Друго', count: '—' },
  ];
  const educationTeachers = [
    { edu: 'Висше бакалавър/магистър', qualification: 'С педагогическа квалификация', count: 161 },
    { edu: 'Висше бакалавър/магистър', qualification: 'Без педагогическа квалификация', count: '—' },
    { edu: 'Висше бакалавър/магистър', qualification: 'Детски учители', count: 39 },
    { edu: 'Висше бакалавър/магистър', qualification: 'Начални учители', count: 51 },
    { edu: 'Висше бакалавър/магистър', qualification: 'Прогимназиални', count: 61 },
    { edu: 'Висше бакалавър/магистър', qualification: 'Гимназиални', count: 10 },
    { edu: 'Специалист', qualification: 'С педагогическа квалификация', count: 35 },
    { edu: 'Специалист', qualification: 'Без педагогическа квалификация', count: '—' },
    { edu: 'Специалист', qualification: 'Детски учители', count: 12 },
    { edu: 'Специалист', qualification: 'Начални учители', count: 10 },
    { edu: 'Специалист', qualification: 'Прогимназиални учители', count: 13 },
    { edu: 'Специалист', qualification: 'Учители по практика', count: 0 },
  ];
  const educationStudents = [
    { idx: 1, school: 'Начални училища 1-4 клас', count: 425 },
    { idx: 2, school: 'Основни училища 1-8 клас', count: 987 },
    { idx: 3, school: 'СОУ 1-12 клас', count: 336 },
    { idx: 4, school: 'Професионални гимназии', count: 349 },
  ];
  const availableTenderYears = Array.from(new Set(tenders2025.map((t) => String(t.year)))).sort((a, b) => Number(b) - Number(a));
  const defaultTenderStructured = tenders2025.find((t) => t.slug === 'zapoved-925-2025')?.structured;
  const activeTenderStructured = tenderDetail?.structured ?? defaultTenderStructured;
  const isPlaceholderTenderText = Boolean(tenderDetail && !tenderDetail.structured && defaultTenderStructured);
  const filteredTenders = useMemo(() => {
    const q = tendersSearch.trim().toLowerCase();
    return tenders2025.filter((t) => {
      const byYear = tendersYear === 'all' || String(t.year) === tendersYear;
      const byQuery = !q || `${t.idx} ${t.title} ${t.publishedAt}`.toLowerCase().includes(q);
      return byYear && byQuery;
    });
  }, [tendersSearch, tendersYear]);
  const galleryFilters = ['all', ...Array.from(new Set(portalGallery.map((img) => img.category)))];
  const displayedGallery = galleryFilter === 'all' ? portalGallery : portalGallery.filter((img) => img.category === galleryFilter);
  const galleryActiveIndex = galleryLightbox ? displayedGallery.findIndex((img) => img.src === galleryLightbox.src) : -1;
  const openGalleryAt = (idx) => setGalleryLightbox(displayedGallery[idx]);
  const prevGalleryImage = () => {
    if (galleryActiveIndex < 0) return;
    const nextIdx = (galleryActiveIndex - 1 + displayedGallery.length) % displayedGallery.length;
    openGalleryAt(nextIdx);
  };
  const nextGalleryImage = () => {
    if (galleryActiveIndex < 0) return;
    const nextIdx = (galleryActiveIndex + 1) % displayedGallery.length;
    openGalleryAt(nextIdx);
  };
  useEffect(() => {
    if (!galleryLightbox) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevGalleryImage();
      if (e.key === 'ArrowRight') nextGalleryImage();
      if (e.key === 'Escape') setGalleryLightbox(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [galleryLightbox, galleryActiveIndex, displayedGallery.length]);
  const getAssuranceChipColor = (value) => {
    if (value === 'високо') return { bg: '#dcfce7', color: '#166534' };
    if (value === 'значително' || value === 'Съществено') return { bg: '#fef3c7', color: '#92400e' };
    if (value === 'ниско') return { bg: '#dbeafe', color: '#1e40af' };
    return { bg: '#e5e7eb', color: '#374151' };
  };
  const managementProgramText = `ПРОГРАМА ЗА УПРАВЛЕНИЕ НА ОБЩИНА ПЕЩЕРА 2023-2027г.
ПРОГРАМА ЗА УПРАВЛЕНИЕ НА ОБЩИНА ПЕЩЕРА ЗА
MАНДАТ 2023-2027г.

ВЪВЕДЕНИЕ

С реализация на поставените цели и приоритети от Програмата за управление на община Пещера за мандат 2019 -2023г., община Пещера видимо се промени - изпълнени бяха редица значими за общността проекти, с които населените места на общината станаха по-чисти, зелени и светли, с реновирани сгради и нови пътища, съвременни училища и детски градини, красив център и квартали. Като цяло се подобри средата за живот и се създадоха по-добри условия за работа на бизнеса.

Настоящата Програма за управление е естествено продължение на процесите на растеж и динамично съвременно развитие, заложени в предходния стратегически документ за управление на Община Пещера. Гаранция за постигане на устойчивост на изпълнените до момента резултати е продължаване на последователната работа по изпълнение на редица значими за общността ни проекти, които вече започнаха и от които обществото ни изпитва необходимост.

През следващите четири години, работата на Общинска администрация ще е съобразена с основните европейски, национални и общински стратегически документи на европейско, национално и местно ниво.

Програмата, нейните цели и приоритетите на управление са съобразени с капацитета, правомощията и задълженията на местната власт и на критериите за постижимост, реалистичност, времева и ресурсна обезпеченост.

Програмата за управление съдържа основните управленски принципи, цели и приоритети за срок от четири години. Основа за нейното разработване е предизборната програма на Кмета на Община Пещера - Йордан Младенов, като в нея са включени поетите пред гражданите на община Пещера ангажименти.

ВОДЕЩИ ПРИНЦИПИ

Върховенство на закона;
Ефективно управление;
Прозрачност при вземането на решения;
Диалог и партньорство с гражданите;
Отчетност при изразходването на публичните средства и разпореждането с публични ресурси;
Отговорност към правата, сигурността и просперитета на жителите на общината;
Ефективност на инвестициите.

ЦЕЛ НА ПРОГРАМАТА

Продължаване на политиките за балансирано и устойчиво развитие на община Пещера, което гарантира развитие на инфраструктурата, разширен достъп до социални услуги за деца и възрастни хора, въвеждане на иновации в образованието, добра бизнес среда, развитие на културно-историческото наследство и младежките политики.

За изпълнение на основната цел на Програмата, ще бъде приложен модел на интелигентно управление, което осигурява изпълнението на следните подцели:

- повишаване на социалната ангажираност, икономически растеж и подобряване на жизнения стандарт на населението;
- продължаване модернизацията на инфраструктурата в населените места;
- въвеждане на иновации в образованието;
- провеждане на активни младежки политики, съобразени с потребностите на обществото;
- развитие и надграждане на социалните услуги за деца и възрастни хора;
- чиста околна среда;
- насърчаване на малкия и средния бизнес, стимулиране на инвестиционните интереси;
- осигуряване на качествени административни услуги;
- развитие на културно-историческото наследство и туристическия потенциал на населените места;
- диалогично, прозрачно и ориентирано към хората управление;

ПРИОРИТЕТИ:
Открито управление, бюджет, администрация
Инфраструктура, проекти, среда за бизнеса
Екология, градска среда и населени места
Социални дейности и младежки политики
Образование и здравеопазване
Култура, спорт и туризъм

ПРИОРИТЕТ 1: ОТКРИТО УПРАВЛЕНИЕ, БЮДЖЕТ, АДМИНИСТРАЦИЯ
Дейност 1.1.Като част от откритото управление продължаваме активната работа с бизнес, институции, неправителствен сектор и граждани на общината за устойчиво развитие на Обществения съвет към Кмета на Община Пещера. В тази връзка ще бъде разгърната работата на Обществения съвет по ресори - образование, култура, спорт и включени специалисти от съответните направления.
Срок: 2024г.
Очаквани резултати: Ръководният екип на Общинска администрация е подпомогнат при формиране и разработване на общински политики в сферата на образованието.

Дейност 1.2. Създаване на механизми от местната власт за по-ефективно участие на гражданите в местното самоуправление. Широко обсъждане и предварителна оценка на въздействието, провеждане на публични дебати и обществени обсъждания.
Срок: постоянен.
Очаквани резултати: По-ефективно участие на гражданите в местното самоуправление. Организиране на публични дебати и обществени обсъждания.

Дейност 1.3.Постигане на добро финансово управление и контрол чрез спазване на принципите за законосъобразност, икономичност, ефективност и ефикасност на дейностите.
Срок: постоянен.
Очаквани резултати: Упражнен контрол и финансово управление съобразно принципите за законосъобразност, икономичност, ефективност и ефикасност на дейностите.

Дейност 1.4.Ефективно управление на общинската собственост, общинските предприятия и дружества, гарантиращо законосъобразно и целесъобразно разпореждане с общинско имущество. Устойчиво развитие на общинските предприятия и дружества с ефективен мениджмънт и финансова дисциплина за постигане на стабилен икономически растеж.
Срок: постоянен.
Очаквани резултати: Устойчиво развитие на общинските предприятия и дружества с ефективен мениджмънт и финансова дисциплина.

Дейност 1.5. Поддържане на социално приемливи нива на местните данъци и такси. Повишаване на неданъчните приходи в бюджета на общината, базирани на собствените ресурси, което ще позволи по-високи приходи при приемливи данъчни ставки за населението и за бизнеса.
Срок: постоянен.
Очаквани резултати: Повишени неданъчните приходи в бюджета на общината, базирани на собствените ресурси.

Дейност 1.6. Продължаване на политиките за устойчивост на общинския бюджет чрез ограничаване на несъбраните вземания и увеличаване на приходите чрез селекция на просрочените задължения, издаване на актове за установяване на задължения по декларации за просрочени задължения с цел спиране на давностните срокове, предаване на невнесените задължения на частни съдебни изпълнители и НАП за принудително изпълнение, проверки за спазване на разпоредбите на ЗМДТ и отразяването им в облагаемата основа.
Срок: постоянен.
Очаквани резултати: Устойчивост на общинския бюджет чрез ограничаване на несъбраните вземания и увеличаване на приходите чрез селекция на просрочените задължения, издаване на актове за установяване на задължения по декларации за просрочени задължения с цел спиране на давностните срокове, предаване на невнесените задължения на частни съдебни изпълнители и НАП за принудително изпълнение, проверки за спазване на разпоредбите на ЗМДТ и отразяването им в облагаемата основа.

Дейност 1.7. Разширяване обема на административните услуги за по-пълно и качествено административно обслужване.
Срок: постоянен.
Очаквани резултати: Увеличен брой на административните услуги за повишаване на качеството на административното обслужване.

Дейност 1.8.Кандидатстване за присъждане на Европейски етикет за иновации и добро управление на местно ниво - сертификат за качество на цялостно управление.
Срок: 2024г.
Очаквани резултати: Сертификат за качество на цялостно управление на Община Пещера.

Дейност 1.9. Реализиране на проект за широкомащабно разгръщане на цифровата инфраструктура на територията на община Пещера.
Срок: 2023-2027г.
Очаквани резултати: Изградена цифровата инфраструктура на територията на община Пещера.

Дейност 1.10.Участия във въвеждащи и надграждащи обучени за повишаване на професионалната квалификация на служителите на Общинска администрация.
Срок: постоянен.
Очаквани резултати: Повишена професионална квалификация на служителите.

ПРИОРИТЕТ 2: ИНФРАСТРУКТУРА, ПРОЕКТИ, СРЕДА ЗА БИЗНЕСА
Дейност 2.1. Благоустрояване на централната градска част на Пещера и други публични пространства.
Срок: 2024г. - за централна градска част. През целия период ще се благоустрояват публични пространства.
Очаквани резултати: Модернизирана градска среда.

Дейност 2.2. Реконструкция и реновиране на Пазара в град Пещера.
Срок: 2023-2027г.
Очаквани резултати: Реновирани пространства на Общински пазар.

Дейност 2.3.Основен ремонт на водопровод и пътна част на ул. „Симон Налбант“ и ул.„Петър Горанов“. Основен ремонт на ВиК мрежи на ул.“Хан Пресиян“, „Освобождение“, ул. „Радецки“, ул. „Родопа“, ул. „Иван Цвеев“, ул.„Орешака“.
Срок: 2024г. - за ул.„Симон Налбант“ и ул.„Петър Горанов“.
2026г. - за ул. “Хан Пресиян“, „Освобождение“, ул. „Радецки“, ул. „Родопа“, ул. „Иван Цвеев“, ул.„Орешака“.
Очаквани резултати: Основен ремонт на улици в гр.Пещера.

Дейност 2.4. Благоустрояване на район„Изгрев“.
Срок: 2024г.
Очаквани резултати: Реновирани пространства в район„Изгрев“.

Дейност2.5. Изграждане на Многофункционална спортна зала в гр.Пещера. Изграждане на плувен басейн с прилежаща инфраструктура.
Срок: 2024г. - 2025г.
Очаквани резултати: Изградена нова спортна инфраструктура.

Дейност 2.6.Изграждане на Младежки център - средище за младежки дейности, разработване на интересни идеи и инициативи.
Срок: 2024г. - 2025г. изграждане на Младежки център.
През 2025г. - 2027г. - функциониранена центъра.
Очаквани резултати: Функциониране на Младежки център - средище за младежки дейности.

Дейност 2.7.Подмяна на довеждащия водопровод от каптаж „Новомахленски“ до утаител.
Срок: 2025г.
Очаквани резултати: Подмяна на довеждащия водопровод от каптаж „Новомахленски“ до утаител.

Дейност 2.8. Ремонт и реконструкция на общински път Радилово-Капитан Димитриево.
Срок: 2026г.
Очаквани резултати: Извършени ремонт и реконструкция на общински път Радилово-Капитан Димитриево.

Дейност 2.9. Преасфалтиране на улици в лошо състояние.
Срок: постоянен.
Очаквани резултати: Обновени улици в населените места.

Дейност 2.10. Ремонт и обновяване на улици в селата Радилово и Капитан Димитриево.
Срок: постоянен.
Очаквани резултати: Обновени улици в селата Радилово и Капитан Димитриево.

Дейност 2.11. Междуобщинско сътрудничество за повече инициативи и инвестиции в сферата на транспорта, логистика, конкурентни производства и развитие на споделени услуги.
Срок: 2023-2027г.
Очаквани резултати: Създадени нови междуобщински сътрудничества за инвестиции и нови инициативи.

Дейност 2.12.Реализиране на интегрирани териториални инвестиции.
Срок: 2023-2027г.
Очаквани резултати: Изпълнение на проекти за интегрирани териториални инвестиции.

Дейност 2.13.Изпълнение на Стратегията за местно развитие - инструмент за развитие на региона Пещера-Брацигово.
Срок: 2023-2027г.
Очаквани резултати: Финансирани проекти в изпълнение на Стратегия за местно развитие.

Дейност 2.14.Разработване на програма за обмен на практики с побратимените градове.
Срок: 2025г.
Очаквани резултати: Програма за обмен на практики с побратимени градове.

Дейност 2.15.Изпълнение на мерки за адаптиране към изменението на климата и управление на риска от наводнения.
Срок: 2023-2027г.
Очаквани резултати: Изпълнение на проекти с мерки за адаптиране към изменението на климата и управление на риска от наводнения.

ПРИОРИТЕТ 3 ЕКОЛОГИЯ, ГРАДСКА СРЕДА И НАСЕЛЕНИ МЕСТА
Дейност 3.1. Постигане на модерна визия на градския парк и други паркови пространства, за да запазят привлекателността си на места за отдих, спорт и културни прояви.
Срок: 2023-2027г.
Очаквани резултати: Модерна визия на градската среда.

Дейност 3.2. Подмяна на уличното осветление със светодиодно (LED) - технологично обновление и модернизиране на системите за външно изкуствено осветление, собственост на Община Пещера.
Срок: 2024г.
Очаквани резултати: Технологично обновление и модернизиране на системите за външно изкуствено осветление, собственост на Община Пещера.

Дейност 3.3.Продължаване на дейностите по гарантиране на безопасността на движение в града и селата, чрез оптимизиране на организацията на движение, изграждане на повдигнати пешеходни пътеки, подобряване на знаковото стопанство и др.
Срок: 2023-2027г.
Очаквани резултати: Непрекъснато наблюдение на знаковото стопанство, изпълнение на дейностите по гарантиране на безопасността на движение в града и селата чрез дейността на Общинската комисия за безопасност на движение по пътищата.

Дейност 3.4. Благоустрояване на междублокови пространства.
Срок: 2024-2027г.
Очаквани резултати: Благоустроени междублокови пространства.

Дейност 3.5. Изпълнение на мерки за енергийно обновяване на жилищни сгради в гр.Пещера.
Срок: 2024-2025г.
Очаквани резултати: Енергийно обновени жилищни сгради в гр.Пещера.

Дейност 3.6.Изграждане на открит параклис в с.Свети Консатнтин. Възстановяване на параклис „Света Марина“.
Срок: 2024г. - 2025г.
Очаквани резултати: Изграждане на открит параклис в с.Свети Консатнтин. Възстановяване на параклис „Света Марина“.

Дейност 3.7. Развитие на транспортната свързаност със съседни областни центрове - Пазарджик и Пловдив.
Срок: 2023-2027г.
Очаквани резултати: Осигуряване на транспортна свързаност със съседни областни центрове.

Дейност 3.8. Изготвяне и въвеждане на Генерален план за организацията на движението. Изграждане на велоалея.
Срок: 2024г.
Очаквани резултати: Изготвен Генерален план за организацията на движението с въведени мерки. Изградена велоалея.

Дейност 3.9.Провеждане на устойчиви политики за намаляване на емисиите на парникови газове и адаптация към очакваните неблагоприятни последици от изменението на климата с изпълнение на проект за повишаване капацитета на общините Пещера, Садово, Батак и Стрелча.
Срок: 2024г.
Очаквани резултати: Повишен капацитета на общините Пещера, Садово, Батак и Стрелча.

Дейност 3.10.Изпълнение на проект за извършване на целеви дейности за повишаване осведомеността за енергийна бедност през летния сезон, чиято цел е да се стимулира понижение на енергийното потребление по време на летния сезон.
Срок: 2023-2024г.
Очаквани резултати: Обучени домакинства и такива, които участват в проектните дейности - общо 500.

Дейност 3.11.Организиране на информационни и разяснителни кампании за повишаване осведомеността на населението за управлението на отпадъците.
Срок: 2024-2027г.
Очаквани резултати: Повишена осведоменост на населението за управлението на отпадъците.

Дейност 3.12.Повишаване дела на разделното събраните отпадъци от количеството смесени битови отпадъци при източника на генериране.
Срок: 2023-2027г.
Очаквани резултати: Повишен дял на разделното събраните отпадъци от бита.

Дейност 3.13.Оптимизиране на сметосъбирането и сметоизвозването. Поддържане на чистота на обществените места, зацветяване и озеленяване на зелени площи. Непрекъснато обновяване на автопарка на Общинско предприятие „Чистота и поддържане на общинската инфраструктура“.
Срок: постоянен.
Очаквани резултати: Поддържане на чистота на обществени места, зацветяване и озеленяване на зелени площи. Оптимизиране на сметосъбирането и сметоизвозването.

Дейност 3.14. Изграждане на общински приют за изпълнение на мерки за овладяване популацията на безстопанствени кучета.
Срок: 2024г.
Очаквани резултати: Изграден общински приют за изпълнение на мерки за овладяване популацията на безстопанствени кучета.

Дейност 3.15. Продължаване на активното подпомагане на земеделските производители и животновъди, чрез отдаване под аренда или наем на земи от общинския поземлен фонд.
Срок: постоянен.
Очаквани резултати: Брой подкрепени земеделски производители.

Дейност 3.16.Запазване качеството на атмосферния въздух - картотекиране на съществуващата растителност.
Срок: постоянен.
Очаквани резултати: Картотекиране на съществуващата декоративна растителност.

Дейност 3.17. Укрепване на идентифицираните свлачища.
Срок: постоянен
Очаквани резултати: Брой укрепени свлачища.

ПРИОРИТЕТ 4: СОЦИАЛНИ ДЕЙНОСТИ И МЛАДЕЖКИ ПОЛИТИКИ
Дейност 4.1.Продължаване на модела за предоставяне на грижи в домашна среда на възрастни хора и хора с увреждания.
Срок: 2023-2027г.
Очаквани резултати: Предоставяне на грижи в домашна среда на възрастни хора и хора с увреждания.

Дейност 4.2. Изпълнение на правомощия и задължения по Закона за социалните услуги, Закона за хората с увреждания и Закона за лична помощ от Община Пещера чрез изпълнение на функции по административно обслужване на ползватели на социални услуги.
Срок: 2023-2027г.
Очаквани резултати: Административно обслужване на ползватели на социални услуги.

Дейност 4.3.Продължаване предоставянето на социалната услуга „топъл обяд“ - ежедневно предоставяне на топъл обяд на 400 уязвими жители, които живеят в крайна бедност, социална изолация, бедност и в затруднение сами да осигурят прехраната си.
Срок: 2025г.
Очаквани резултати: Ежедневно предоставяне на топъл обяд на 400 уязвими жители, които живеят в крайна бедност, социална изолация, бедност и в затруднение сами да осигурят прехраната си.

Дейност 4.4.Закупуване на нов лекотоварен автомобил за разнос на храна за нуждите на Домашен социален патронаж в гр. Пещера.
Срок: 2023г.
Очаквани резултати: Закупен е нов лекотоварен автомобил за разнос на храна за нуждите на Домашен социален патронаж в гр. Пещера.

Дейност 4.5.Надграждане на дейността за подкрепа на децата с изявени дарби.
Срок: 2023-2027г.
Очаквани резултати: Оказана подкрепа на деца с изявени дарби.

Дейност 4.6. Въвеждане на интегрирани мерки в подкрепа на ромското включване в община Пещера.
Срок: 2023-2027г.
Очаквани резултати: Въведени интегрирани мерки в подкрепа на ромското включване.

Дейност 4.7.Осигуряване на трудова заетост на жители на общината в уязвимо социално положение и неравнопоставени на пазара на труда.
Срок: 2023-2027г.
Очаквани резултати: Осигурена трудова заетост на жители на общината в уязвимо социално положение и неравнопоставени на пазара на труда.

Дейност 4.8.Непрекъснато развитие и надграждане на качеството на социалните услуги, предоставяни от Дневен център за пълнолетни лица с увреждания, Дневен център за деца и младежи с увреждания, Кризисен център за лица и деца, пострадали от насилие, Център за настаняване от семеен тип за деца без увреждания, Домашен социален патронаж, Асистентска подкрепа и Механизъм „Лична помощ“.
Срок: 2023-2027г.
Очаквани резултати: Предоставяне на качествени социални услуги за жителите на община Пещера.

Дейност 4.9.Разкриване на Общностен център за ранно детско развитие - информиране, консултиране и обучение за реализиране на социални права и развиване на умения, мобилна превантивна общностна работа, с капацитет 70 потребители.
Срок: 2023г.-2027г.
Очаквани резултати: Разкрит Общностен център. Предоставяне на социални услуги от консултативен тип за деца и семейства.

Дейност 4.10. Продължаване изпълнението на услугата детска кухня за деца от 6-месечна възраст до 2 години.
Срок: 2023г.-2027г.
Очаквани резултати: Оказана подкрепа на семейства с деца от 6-месечна възраст до 2 години.

Дейност 4.11.Разширяване кръга на социалните услуги с изграждане и функциониране на:
- Резидентна грижа за пълнолетни лица с психични разстройства - 1 брой, с капацитет 20 потребители;
- Резидентна грижа за пълнолетни лица с физически увреждания - 3 броя, всяка с капацитет 30 потребители - общо 90 потребители;
- Резидентна грижа за лица в надтрудоспособна възраст без увреждания - 1 брой, с капацитет 40 потребители;
- Интегрирани здравно-социални услуги за резидентна грижа за пълнолетни лица с трайни увреждания с потребност от постоянни медицински грижи - 1 брой, с капацитет 10 потребители;
- Интегрирани здравно-социални услуги за резидентна грижа за възрастни хора с трайни увреждания с потребност от постоянни медицински грижи - 2 броя, един с капацитет 9 потребители и един с капацитет 8 потребители - общо 17 потребители;
- Увеличаване капацитета на Кризисен център за пълнолетни лица и деца, пострадали от насилие и жертви на трафик - от 12 потребители на 20 потребители;
- Създаване на Комплекс за социални услуги в общността, с предоставяне на общностни и специализирани услуги;
- Разкриване на Общностен център за деца и семейства - делегирана от държавата дейност.
Срок: 2024-2027г.
Очаквани резултати: Разкриване на 6 нови социални услуги.

Дейност 4.12. Изпълнение на проекти за споделяне на добри практики за младежка заетост и повишаване компетенциите на младежите.
Срок: 2023-2027г.
Очаквани резултати: Брой изпълнени проекти, брой младежи с осигурена заетост и повишени компетенции.

ПРИОРИТЕТ 5: ОБРАЗОВАНИЕ И ЗДРАВЕОПАЗВАНЕ
Дейност 5.1.Създаване на модерна и съвременна образователна инфраструктура.
Срок: 2023-2027г.
Очаквани резултати: Своевременно отстраняване на възникнали проблеми по материалната база на училища и детски градини. Изпълнени проекти за подобряване и осъвременяване на наличната образователна инфраструктура.

Дейност 5.2.Широко използване на информационни и комуникационни технологии в професионалното обучение.
Срок: 2024-2027г.
Очаквани резултати: Осигурена възможност за достъп на всички ученици от паралелките с професионална насоченост до използване на съвременни информационни технологии, във всички институции с професионални или профилирани паралелки, чрез които да се осигури ефективно професионално обучение.

Дейност 5.3. Привличане и подкрепа на млади учители в професионалното образование; осигуряване на висококачествени услуги по кариерно ориентиране и разширяване на достъпа до пазара на труда и разработване на система за проследяване на реализацията на завършващите.
Срок: 2024-2027г.
Очаквани резултати: Привлечени млади учители за работа в професионалните училища в общината. Налична възможност за допълнителна квалификация в областта на професионалното образование на млади преподаватели, в институциите в община Пещера. Организирани форуми по професионално ориентиране от страна на ПГХВТ ,,Атанас Ченгелев”, ОУ,,Любен Каравелов” и СУ,,Св.Климент Охридски”, съвместно с общинска администрация и работодатели, осигуряващи дуално обучение, за успешно развитие на пазара на труда в общината. Съобразно разпоредбите на МОН, разработена система за проследяване на професионалната реализация на завършилите професионално обучение в общината.

Дейност 5.4. Модернизация и въвеждане на енергоспестяващи мерки и достъпна среда в училищните сгради на Средно училище „Св. Климент Охридски“, Обединено училище „Любен Каравелов“, Професионална гимназия за хранително-вкусови технологии „Ат. Ченгелев“ и детска градина „Изгрев“.
Срок: 2024г.-2025г. - за Средно училище „Св. Климент Охридски“, Обединено училище „Любен Каравелов“;
2025г.-2026г. - за Професионална гимназия за хранително-вкусови технологии „Ат. Ченгелев“ и детска градина „Изгрев“.
Очаквани резултати: Модернизирана образователна инфраструктура с въведени енергоспестяващи мерки и достъпна среда.

Дейност 5.5.Провеждане на квалификационни курсове на педагогическите специалисти на общинско ниво, включително и за преподаване на интегрирани уроци, преподаване в STEM среда и други.
Срок: 2024-2027г., според потребностите на образователните институции;
Очаквани резултати: Организирани квалификационни курсове за педагогически специалисти от училища, детски градини и ЦПЛР-ОДК по актуални теми в областта на образованието.

Дейност 5.6.Изграждане на STEM кабинети във всички училища.
Срок: 2024-2027г.-съобразно сроковете на МОН
Очаквани резултати: В изпълнение на дейностите по Плана за възстановяване и устойчивост към МОН, изградени STEM кабинети във всички училища в община Пещера.

Дейност 5.7.Ранно оценяване на потребностите от подкрепа за личностно развитие на децата от детските градини, като се прилага диференцирана грижа и подход, съобразени с възрастовите и социалните промени, превенция на образователни и когнитивни затруднения, навременно систематизиране на налична информация, за да се прилагат политики на организиран образователен процес.
Срок: ежегодно за периода 2024-2027г.
Очаквани резултати: Ранно оценяване на потребностите от подкрепа за личностно развитие на всички постъпващи деца в детските градини на общината за избор на правилен, индивидуален подход за обща и/или допълнителна подкрепа на личностно развитие на всяко дете. Ежегодно систематизиране на информацията от оценяването от директорите на всички детски градини.

Дейност 5.8.Продължаване на политиката за подкрепа на училищата и детските градини.
Срок: постоянен
Очаквани резултати: Осигурени условия за провеждане на ефективен образователен процес във всички образователни институции. Подкрепа за обхват на всички деца и ученици подлежащи на задължителна предучилищна и училищна подготовка. Поддържане в отлично състояние на материално-техническата инфраструктура на институциите. Осигурено здравно обслужване на децата и учениците. Осигурен безплатен транспорт на пътуващите ученици и учители. Осигурени условия за детско и ученическо хранене, отдих и спорт. Осигурена финансова подкрепа на делегираните от държавата дейности и на местните дейности по образование, други дейности съобразно изискванията на ЗПУО.

Дейност 5.9.Създаване на родителски клубове за развитие на социални умения за родителство, грижа, възпитание и укрепване на ценностите. Родителите - партньори в грижата за децата.
Срок: ежегодно, 2024-2027г.
Очаквани резултати: Участие на родителите на всички деца и ученици в дейността на детските градини и училищата. Включване на родителите в обучения и дейности на клубовете по интереси към образователните институциите в общината. Участие на родители в обществените съвети на училищата и детските градини. Създаване на родителски клубове за развитие на социални умения за родителство, грижа, възпитание, които да подпомагат дейностите за приобщаване на децата към детските градини и училищата.

Дейност 5.10. Предоставяне на безплатна рехабилитация на комуникативните нарушения от специалисти (логопеди) във всички детски градини.
Срок: постоянен
Очаквани резултати: Продължаване на дейността на ЦПЛР-ОДК гр.Пещера по обследване и обхващане на всички деца и ученици с комуникативни нарушения. Предоставяне на безплатна рехабилитация от логопеди и ресурсни учители.

Дейност 5.11.Подкрепа и приобщаване за родителите на децата със специални образователни потребности, деца/ученици в риск и деца/ученици с хронични заболявания - организиране на дейности, тържества и спортни празници.
Срок: постоянен
Очаквани резултати: Оказана подкрепа на родители на деца със специални образователни потребности, деца/ученици в риск и деца/ученици с хронични заболявания от страна на детските градини, училищата и ЦПЛР-ОДК гр.Пещера. Приобщаване на родителите към дейностите на клубовете по интереси, към спортни и културни събития организирани на общинско и училищно ниво, в които да участват заедно с техните деца.

Дейност 5.12.Продължаване и непрекъснато усъвършенстване на общинската нормативна уредба в областта на образованието.
Срок: постоянен
Очаквани резултати: Бързо обновяване и усъвършенстване на общинската нормативна уредба за привеждане в съответствие с настъпили промени в законите и наредбите в областта на образованието.

Дейност 5.13. Превенция на отпадането от училище и реинтеграция на отпадналите ученици.
Срок: постоянен
Очаквани резултати: Участие на екипа на община Пещера в обходи по Механизма за съвместна работа на институциите по обхващане, включване и предотвратяване на отпадането от образователната система на деца и ученици в задължителна предучилищна и училищна възраст. Съставяне на АУАН на родители, чиито деца, подлежащи на задължително обучение, но не посещават училище или детска градина. Оказване на съдействие на директорите на институции за организиране на съвместни дейности с Дирекция ,,Социално подпомогане” и РУ на МВР за превенция на отпадането и обратна реинтеграция на отпаднали деца, срещи с родители на деца в риск от отпадане.

ПРИОРИТЕТ 6: КУЛТУРА, СПОРТ И ТУРИЗЪМ
Дейност 6.1. Подкрепа на младите творци - писатели, композитори, хореографи, художници и др. да покажат творчеството си.
Срок: 2023г.-2027г.
Очаквани резултати: Подкрепени млади творци от община Пещера.

Дейност 6.2.Актуализация на списъка на архитектурните паметници на културата в община Пещера.
Срок: 2024г.
Очаквани резултати: Актуализиран списък на архитектурните паметници на културата в община Пещера.

Дейност 6.3.Изграждане на парк „Неолитни жилища от селищна могила в с.Капитан Димитриево“.
Срок: 2025-2027г.
Очаквани резултати: Изграден нов обект, представящ културно-историческото наследство на общината.

Дейност 6.4.Изработване на туристически бранд „Дестинация: Пещера“.
Срок: 2025г.
Очаквани резултати: Изработен туристически бранд „Дестинация: Пещера“.

Дейност 6.5.Устойчива подкрепа, включително и финансова, за развитието на масовия детско-юношески спорт в различните възрастови групи.
Срок: постоянен.
Очаквани резултати: Осигурена устойчива подкрепа за развитието на масовия детско-юношески спорт в различните възрастови групи.

Дейност 6.6. Изграждане на нови детски площадки. Реновиране на съществуващата спортна площадка на ул. „Георги Димитров“.
Срок: 2024-2027г.
Очаквани резултати: Изградени нови детски площадки. Реновирана съществуваща спортна площадка на ул. „Георги Димитров“.

Дейност 6.7.Създаване на туристически информационен център /предприятие/, където ще бъдат изработени туристически маршрути в общината - за еднодневен и двудневен престой, в пряка връзка с хотелиерите и музея.
Срок: 2026г.
Очаквани резултати: Създаден туристически информационен център /предприятие/ за туристически маршрути в общината - за еднодневен и двудневен престой, в пряка връзка с хотелиерите и музея.

Дейност 6.8.Изграждане на аткрактивни екопътеки и осигурени подготвени водачи за тях, които да запознаят туристите с най-красивата част от природата и историята на община Пещера.
Срок: 2024-2027г.
Очаквани резултати: Изградени аткрактивни екопътеки и осигурени подготвени водачи за тях.

Дейност 6.9. Издаване на туристически пътеводител на община Пещера.
Срок: 2026г.
Очаквани резултати: Издаден туристически пътеводител на община Пещера.

Програмата за управление на община Пещера за мандат 2023-2027г. е приета с Решение №22/25.01.2024 год. на Общински съвет - Пещера.

Copyright © 2004 - 2026 Община Пещера - Официален сайт. Designed and support by Administrator`;
  const councilCouncilorsCountBullets = bullets?.filter((b) => /^\d+\.\s+при население/.test(b)) ?? [];
  const powersStart = bullets?.findIndex((b) => b === 'Общинският съвет:') ?? -1;
  const powersEnd = bullets?.findIndex((b) => b === 'Общинският съвет се свиква на заседание от неговия председател:') ?? -1;
  const callStart = powersEnd;
  const callEnd = bullets?.findIndex((b) => b === 'Председателят на съвета:') ?? -1;
  const chairStart = callEnd;
  const councilPowersBullets =
    powersStart >= 0 && powersEnd > powersStart
      ? (bullets ?? []).slice(powersStart + 1, powersEnd).filter((b) => /^\d+\./.test(b))
      : [];
  const councilCallBullets =
    callStart >= 0 && callEnd > callStart ? (bullets ?? []).slice(callStart + 1, callEnd).filter((b) => /^\d+\./.test(b)) : [];
  const councilChairBullets = chairStart >= 0 ? (bullets ?? []).slice(chairStart + 1).filter((b) => /^\d+\./.test(b)) : [];
  const councilPowersLeft = councilPowersBullets.slice(0, Math.ceil(councilPowersBullets.length / 2));
  const councilPowersRight = councilPowersBullets.slice(Math.ceil(councilPowersBullets.length / 2));

  return (
    <Container maxWidth="md" sx={{ py: 1 }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
        {title}
      </Typography>

      {mirrorLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <CircularProgress aria-label="Зареждане на съдържание" />
        </Box>
      ) : showMirror && !hasCustomLayout ? (
        <>
          <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 2 }}>
            По-долу е възпроизведено съдържанието от съответната страница.
          </Typography>
          <Box
            className="municipality-mirror"
            sx={mirrorSx}
            dangerouslySetInnerHTML={{ __html: mirrorEntry.html }}
          />
        </>
      ) : isCouncilGeneralPage ? (
        <Stack spacing={2}>
          <Box
            sx={{
              border: '1px solid #d8dee8',
              borderRadius: 2,
              p: { xs: 2, md: 2.5 },
              bgcolor: '#f8fafc',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
            }}
          >
            <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 0.6 }}>
              Обща информация
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
              Общински съвет - Пещера
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
              {paragraphs[0]}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mt: 1 }}>
              {paragraphs[1]}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 2,
            }}
          >
            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: { xs: 2, md: 2.5 }, bgcolor: 'background.paper' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.25 }}>
                Брой общински съветници според населението
              </Typography>
              <Box component="ol" sx={{ m: 0, pl: 3, '& li': { mb: 0.6, color: 'text.secondary' } }}>
                {councilCouncilorsCountBullets.map((item, i) => (
                  <Typography key={i} component="li" variant="body2" sx={{ lineHeight: 1.7 }}>
                    {item.replace(/^\d+\.\s*/, '')}
                  </Typography>
                ))}
              </Box>
            </Box>

            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: { xs: 2, md: 2.5 }, bgcolor: 'background.paper' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.25 }}>
                Свикване на заседания
              </Typography>
              <Box component="ol" sx={{ m: 0, pl: 3, '& li': { mb: 0.6, color: 'text.secondary' } }}>
                {councilCallBullets.map((item, i) => (
                  <Typography key={i} component="li" variant="body2" sx={{ lineHeight: 1.7 }}>
                    {item.replace(/^\d+\.\s*/, '')}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: { xs: 2, md: 2.5 }, bgcolor: 'background.paper' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.25 }}>
              Основни правомощия на Общинския съвет
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 2 }}>
              <Box
                component="ol"
                sx={{
                  m: 0,
                  pl: 3,
                  '& li': { mb: 0.6, color: 'text.secondary' },
                  '& li::marker': { fontWeight: 700, color: 'text.primary' },
                }}
              >
                {councilPowersLeft.map((item, i) => (
                  <Typography key={i} component="li" variant="body2" sx={{ lineHeight: 1.7 }}>
                    {item.replace(/^\d+\.\s*/, '')}
                  </Typography>
                ))}
              </Box>
              <Box
                component="ol"
                start={councilPowersLeft.length + 1}
                sx={{
                  m: 0,
                  pl: 3,
                  '& li': { mb: 0.6, color: 'text.secondary' },
                  '& li::marker': { fontWeight: 700, color: 'text.primary' },
                }}
              >
                {councilPowersRight.map((item, i) => (
                  <Typography key={i} component="li" variant="body2" sx={{ lineHeight: 1.7 }}>
                    {item.replace(/^\d+\.\s*/, '')}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: { xs: 2, md: 2.5 }, bgcolor: 'background.paper' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.25 }}>
              Председател на Общинския съвет
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1.25 }}>
              {paragraphs.find((p) => p.startsWith('Общинският съвет избира от своя състав председател'))}
            </Typography>
            <Box component="ol" sx={{ m: 0, pl: 3, '& li': { mb: 0.6, color: 'text.secondary' }, '& li::marker': { fontWeight: 700 } }}>
              {councilChairBullets.map((item, i) => (
                <Typography key={i} component="li" variant="body2" sx={{ lineHeight: 1.7 }}>
                  {item.replace(/^\d+\.\s*/, '')}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: { xs: 2, md: 2.5 }, bgcolor: 'background.paper' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.25 }}>
              Публичност, актове и достъп
            </Typography>
            {paragraphs
              .filter(
                (p) =>
                  p.includes('В изпълнение на правомощията си') ||
                  p.includes('Общинският съвет приема правилник') ||
                  p.includes('обществен посредник') ||
                  p.includes('Актовете на общинския съвет') ||
                  p.includes('Кметът на общината определя подходящо помещение') ||
                  p.includes('За нарушаване на наредбите') ||
                  p.includes('Наказателните постановления') ||
                  p.includes('Административнонаказателното производство') ||
                  p.includes('Заседанията на общинския съвет') ||
                  p.includes('За всяко заседание на общинския съвет') ||
                  p.includes('няма самостоятелен щат'),
              )
              .map((text, i) => (
                <Typography key={i} variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.75, mb: 1.1 }}>
                  {text}
                </Typography>
              ))}
          </Box>
        </Stack>
      ) : isCouncilChairPage ? (
        <Box
          sx={{
            border: '1px solid #d8dee8',
            borderRadius: 2,
            overflow: 'hidden',
            bgcolor: 'background.paper',
            boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
          }}
        >
          <Stack direction={{ xs: 'column', md: 'row' }}>
            <Box sx={{ p: 2.5, minWidth: { md: 300 }, maxWidth: { md: 340 }, bgcolor: '#f8fafc' }}>
              {councilChair.image ? (
                <Box
                  component="img"
                  src={councilChair.image}
                  alt={councilChair.name}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                    display: 'block',
                    mb: 2,
                    border: '1px solid #e2e8f0',
                  }}
                />
              ) : (
                <Box
                  sx={{
                    width: 92,
                    height: 92,
                    borderRadius: '50%',
                    bgcolor: '#e2e8f0',
                    color: '#334155',
                    display: 'grid',
                    placeItems: 'center',
                    fontWeight: 800,
                    fontSize: '1.15rem',
                    mb: 2,
                    border: '1px solid #cbd5e1',
                  }}
                >
                  ПР
                </Box>
              )}
              <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.3 }}>
                {councilChair.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {councilChair.title}
              </Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />
            <Divider sx={{ display: { xs: 'block', md: 'none' } }} />
            <Box sx={{ p: 2.5, flex: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Контакти
              </Typography>
              <Stack spacing={1.25}>
                <Box sx={{ p: 1.5, border: '1px solid #e2e8f0', borderRadius: 1.5 }}>
                  <Typography variant="caption" color="text.secondary">
                    Институция
                  </Typography>
                  <Typography variant="body1">{councilChair.office}</Typography>
                </Box>
                <Box sx={{ p: 1.5, border: '1px solid #e2e8f0', borderRadius: 1.5 }}>
                  <Typography variant="caption" color="text.secondary">
                    Телефон/факс
                  </Typography>
                  <Link href={`tel:${councilChair.phoneFax.replace(/[^\d+]/g, '')}`} underline="hover" sx={{ fontWeight: 600 }}>
                    {councilChair.phoneFax}
                  </Link>
                </Box>
                <Box sx={{ p: 1.5, border: '1px solid #e2e8f0', borderRadius: 1.5 }}>
                  <Typography variant="caption" color="text.secondary">
                    Електронна поща
                  </Typography>
                  <Link href={`mailto:${councilChair.email}`} underline="hover" sx={{ fontWeight: 600 }}>
                    {councilChair.email}
                  </Link>
                </Box>
              </Stack>
            </Box>
          </Stack>
          <Divider />
          <Box sx={{ p: 2.5 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
              Функции на председателя на Общинския съвет
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.75 }}>
              {councilChair.electionInfo}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.75 }}>
              {councilChair.deputiesInfo}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 0.8 }}>
              {councilChair.earlyTerminationIntro}
            </Typography>
            <Box component="ol" sx={{ m: 0, pl: 3, '& li': { mb: 0.7, color: 'text.secondary' }, '& li::marker': { fontWeight: 700 } }}>
              {councilChair.earlyTerminationBullets.map((item, i) => (
                <Typography key={i} component="li" variant="body2" sx={{ lineHeight: 1.75 }}>
                  {item}
                </Typography>
              ))}
            </Box>
            <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.75, mt: 1.5 }}>
              {councilChair.replacementInfo}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.8 }}>
              Председателят на съвета:
            </Typography>
            <Box component="ol" sx={{ m: 0, pl: 3, '& li': { mb: 0.7, color: 'text.secondary' }, '& li::marker': { fontWeight: 700 } }}>
              {councilChair.duties.map((item, i) => (
                <Typography key={i} component="li" variant="body2" sx={{ lineHeight: 1.75 }}>
                  {item}
                </Typography>
              ))}
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mt: 1.5 }}>
              {councilChair.laborInfo}
            </Typography>
          </Box>
        </Box>
      ) : isCouncilMembersPage ? (
        <Stack spacing={2}>
          <Box
            sx={{
              border: '1px solid #d8dee8',
              borderRadius: 2,
              p: { xs: 2, md: 2.5 },
              background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
            }}
          >
            <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 0.9 }}>
              Общински съвет - Пещера
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.75 }}>
              Списък на съветниците
            </Typography>
            <Box
              component="span"
              sx={{
                display: 'inline-flex',
                px: 1.25,
                py: 0.4,
                borderRadius: 999,
                bgcolor: '#e2e8f0',
                color: '#0f172a',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: 0.2,
              }}
            >
              Мандат 2023-2027 г.
            </Box>
          </Box>

          <Box
            sx={{
              border: '1px solid #d8dee8',
              borderRadius: 2,
              p: { xs: 2, md: 2.5 },
              bgcolor: 'background.paper',
              boxShadow: '0 6px 20px rgba(15, 23, 42, 0.04)',
            }}
          >
            <Box
              component="ol"
              sx={{
                m: 0,
                pl: 3,
                columns: { xs: 1, md: 2 },
                columnGap: 4,
                '& li': { mb: 0.95, breakInside: 'avoid', color: 'text.primary' },
                '& li::marker': { fontWeight: 700, color: 'text.primary' },
              }}
            >
              {councilMembers.map((name, i) => (
                <Typography key={i} component="li" variant="body1" sx={{ lineHeight: 1.7, fontWeight: 500 }}>
                  {name}
                </Typography>
              ))}
            </Box>
          </Box>
        </Stack>
      ) : isAdminContactsPage ? (
        <Stack spacing={2}>
          <Box
            sx={{
              border: '1px solid #d8dee8',
              borderRadius: 2,
              p: { xs: 2, md: 2.5 },
              bgcolor: '#f8fafc',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
            }}
          >
            <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 0.7 }}>
              Общинска администрация - Пещера
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.75 }}>
              Контакти на администрацията
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Телефони за контакт: 6-22-03 / 6-22-08 / 6-22-14 / 6-22-31
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Телефонен код на гр. Пещера: 0350
            </Typography>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper' }}>
            <Box sx={{ p: 1.5, borderBottom: '1px solid #e2e8f0' }}>
              <TextField
                size="small"
                fullWidth
                label="Търсене по №, име, длъжност, е-поща или телефон"
                value={adminContactsSearch}
                onChange={(e) => setAdminContactsSearch(e.target.value)}
              />
            </Box>
            <Box sx={{ overflowX: 'auto' }}>
              <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse', minWidth: 980 }}>
                <Box component="thead" sx={{ bgcolor: '#f8fafc' }}>
                  <Box component="tr">
                    <Box component="th" sx={{ p: 1.25, borderBottom: '1px solid #e2e8f0', textAlign: 'left', width: 60 }}>
                      №
                    </Box>
                    <Box component="th" sx={{ p: 1.25, borderBottom: '1px solid #e2e8f0', textAlign: 'left', width: 220 }}>
                      Име
                    </Box>
                    <Box component="th" sx={{ p: 1.25, borderBottom: '1px solid #e2e8f0', textAlign: 'left' }}>
                      Длъжност
                    </Box>
                    <Box component="th" sx={{ p: 1.25, borderBottom: '1px solid #e2e8f0', textAlign: 'left', width: 220 }}>
                      Е-поща
                    </Box>
                    <Box component="th" sx={{ p: 1.25, borderBottom: '1px solid #e2e8f0', textAlign: 'left', width: 150 }}>
                      Телефон
                    </Box>
                    <Box component="th" sx={{ p: 1.25, borderBottom: '1px solid #e2e8f0', textAlign: 'left', width: 90 }}>
                      Факс
                    </Box>
                  </Box>
                </Box>
                <Box component="tbody">
                  {filteredAdminContacts.map((r) => (
                    <Box component="tr" key={r.idx}>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9', verticalAlign: 'top' }}>
                        {r.idx}
                      </Box>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9', verticalAlign: 'top' }}>
                        {r.name}
                      </Box>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9', verticalAlign: 'top' }}>
                        {r.role}
                      </Box>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9', verticalAlign: 'top' }}>
                        {r.email ? (
                          <Link href={`mailto:${r.email}`} underline="hover" sx={{ fontWeight: 600 }}>
                            {r.email}
                          </Link>
                        ) : (
                          '—'
                        )}
                      </Box>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9', verticalAlign: 'top' }}>
                        {r.phone}
                      </Box>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9', verticalAlign: 'top' }}>
                        {r.fax || '—'}
                      </Box>
                    </Box>
                  ))}
                  {filteredAdminContacts.length === 0 ? (
                    <Box component="tr">
                      <Box component="td" colSpan={6} sx={{ p: 2, textAlign: 'center', color: 'text.secondary' }}>
                        Няма резултати за търсенето.
                      </Box>
                    </Box>
                  ) : null}
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      ) : isSchoolsContactsPage ? (
        <Stack spacing={2}>
          <Box
            sx={{
              border: '1px solid #d8dee8',
              borderRadius: 2,
              p: { xs: 2, md: 2.5 },
              bgcolor: '#f8fafc',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
            }}
          >
            <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 0.7 }}>
              Контакти → Връзка с нас
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.5 }}>
              Училища и ДГ
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ТЕЛЕФОНЕН УКАЗАТЕЛ на Общинските и Държавни учебните и детски заведения в община Пещера
            </Typography>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper' }}>
            <Box sx={{ overflowX: 'auto' }}>
              <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
                <Box component="thead" sx={{ bgcolor: '#f8fafc' }}>
                  <Box component="tr">
                    <Box component="th" sx={{ p: 1.25, borderBottom: '1px solid #e2e8f0', textAlign: 'left', width: 70 }}>
                      №
                    </Box>
                    <Box component="th" sx={{ p: 1.25, borderBottom: '1px solid #e2e8f0', textAlign: 'left' }}>
                      Учебно / детско заведение
                    </Box>
                    <Box component="th" sx={{ p: 1.25, borderBottom: '1px solid #e2e8f0', textAlign: 'left', width: 180 }}>
                      Телефон
                    </Box>
                  </Box>
                </Box>
                <Box component="tbody">
                  {schoolsAndKindergartens.map((row) => (
                    <Box component="tr" key={row.idx}>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9', verticalAlign: 'top' }}>
                        {row.idx}
                      </Box>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9', verticalAlign: 'top' }}>
                        {row.name}
                      </Box>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9', verticalAlign: 'top' }}>
                        <Link href={`tel:${row.phone.replace(/[^\d+]/g, '')}`} underline="hover" sx={{ fontWeight: 600 }}>
                          {row.phone}
                        </Link>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      ) : isEducationPage ? (
        <Stack spacing={2}>
          <Box
            sx={{
              border: '1px solid #d8dee8',
              borderRadius: 2,
              p: { xs: 2, md: 2.5 },
              background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
            }}
          >
            <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 0.7 }}>
              Община Пещера
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5 }}>
              Образование
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
              Образователната система на община Пещера се състои от 7 детски заведения и 7 общински, 2 държавни
              училища и 1 ОДК.
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 1.5 }}>
            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 1.5, p: 1.25, bgcolor: '#f8fafc' }}>
              <Typography variant="caption" color="text.secondary">
                Общо звена
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                17
              </Typography>
            </Box>
            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 1.5, p: 1.25, bgcolor: '#f8fafc' }}>
              <Typography variant="caption" color="text.secondary">
                Учители (2011)
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                196
              </Typography>
            </Box>
            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 1.5, p: 1.25, bgcolor: '#f8fafc' }}>
              <Typography variant="caption" color="text.secondary">
                Ученици (общо, 2011)
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                2097
              </Typography>
            </Box>
            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 1.5, p: 1.25, bgcolor: '#f8fafc' }}>
              <Typography variant="caption" color="text.secondary">
                Детски градини
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                7
              </Typography>
            </Box>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: { xs: 2, md: 2.5 }, bgcolor: 'background.paper', borderLeft: '4px solid #0ea5e9' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Мисия и цели
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 0.8 }}>
              Изграждането на гражданското общество и развитието на демократичните процеси поставят като актуален
              проблем съхраняването и обогатяването на традициите, както и търсенето на иновационни модели за дейността
              на училището.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 0.8 }}>
              Главната цел на училищата в община Пещера е формиране и развитие на личността чрез гъвкава и непрекъснато
              обновяваща се система от дейности с висока адаптивност към възрастовите и индивидуалните възможности на
              учениците.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
              Училището следва да бъде катализатор на образователните, социалните и културните процеси в местната
              общност и да подпомага устойчивото развитие на общината.
            </Typography>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper' }}>
            <Box sx={{ p: 1.5, borderBottom: '1px solid #e2e8f0', bgcolor: '#f8fafc' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                Инфраструктура на образованието (2011 г.)
              </Typography>
            </Box>
            <Box sx={{ overflowX: 'auto' }}>
              <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
                <Box component="thead">
                  <Box component="tr">
                    <Box component="th" sx={{ p: 1.1, borderBottom: '1px solid #e2e8f0', textAlign: 'left', width: 60 }}>№</Box>
                    <Box component="th" sx={{ p: 1.1, borderBottom: '1px solid #e2e8f0', textAlign: 'left' }}>Вид на учебното заведение</Box>
                    <Box component="th" sx={{ p: 1.1, borderBottom: '1px solid #e2e8f0', textAlign: 'left', width: 90 }}>Брой</Box>
                  </Box>
                </Box>
                <Box component="tbody">
                  {educationInfra.map((row) => (
                    <Box component="tr" key={`infra-${row.idx}`}>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9' }}>{row.idx}</Box>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9' }}>{row.type}</Box>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9' }}>{row.count}</Box>
                    </Box>
                  ))}
                  <Box component="tr">
                    <Box component="td" />
                    <Box component="td" sx={{ p: 1.1, borderTop: '1px solid #e2e8f0', fontWeight: 700 }}>ВСИЧКО</Box>
                    <Box component="td" sx={{ p: 1.1, borderTop: '1px solid #e2e8f0', fontWeight: 700 }}>17</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper' }}>
            <Box sx={{ p: 1.5, borderBottom: '1px solid #e2e8f0', bgcolor: '#f8fafc' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                Разпределение на учителите по квалификация (2011 г.)
              </Typography>
            </Box>
            <Box sx={{ overflowX: 'auto' }}>
              <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse', minWidth: 760 }}>
                <Box component="thead">
                  <Box component="tr">
                    <Box component="th" sx={{ p: 1.1, borderBottom: '1px solid #e2e8f0', textAlign: 'left', width: 220 }}>Образование</Box>
                    <Box component="th" sx={{ p: 1.1, borderBottom: '1px solid #e2e8f0', textAlign: 'left' }}>Квалификация</Box>
                    <Box component="th" sx={{ p: 1.1, borderBottom: '1px solid #e2e8f0', textAlign: 'left', width: 100 }}>Брой</Box>
                  </Box>
                </Box>
                <Box component="tbody">
                  {educationTeachers.map((row, i) => (
                    <Box component="tr" key={`t-${i}`}>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9' }}>{row.edu}</Box>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9' }}>{row.qualification}</Box>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9' }}>{row.count}</Box>
                    </Box>
                  ))}
                  <Box component="tr">
                    <Box component="td" />
                    <Box component="td" sx={{ p: 1.1, borderTop: '1px solid #e2e8f0', fontWeight: 700 }}>ВСИЧКО</Box>
                    <Box component="td" sx={{ p: 1.1, borderTop: '1px solid #e2e8f0', fontWeight: 700 }}>196</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper' }}>
            <Box sx={{ p: 1.5, borderBottom: '1px solid #e2e8f0', bgcolor: '#f8fafc' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                Разпределение на учениците по училища (2011 г.)
              </Typography>
            </Box>
            <Box sx={{ overflowX: 'auto' }}>
              <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
                <Box component="thead">
                  <Box component="tr">
                    <Box component="th" sx={{ p: 1.1, borderBottom: '1px solid #e2e8f0', textAlign: 'left', width: 60 }}>№</Box>
                    <Box component="th" sx={{ p: 1.1, borderBottom: '1px solid #e2e8f0', textAlign: 'left' }}>Учебно заведение</Box>
                    <Box component="th" sx={{ p: 1.1, borderBottom: '1px solid #e2e8f0', textAlign: 'left', width: 120 }}>Брой ученици</Box>
                  </Box>
                </Box>
                <Box component="tbody">
                  {educationStudents.map((row) => (
                    <Box component="tr" key={`s-${row.idx}`}>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9' }}>{row.idx}</Box>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9' }}>{row.school}</Box>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9' }}>{row.count}</Box>
                    </Box>
                  ))}
                  <Box component="tr">
                    <Box component="td" />
                    <Box component="td" sx={{ p: 1.1, borderTop: '1px solid #e2e8f0', fontWeight: 700 }}>ВСИЧКО</Box>
                    <Box component="td" sx={{ p: 1.1, borderTop: '1px solid #e2e8f0', fontWeight: 700 }}>2097</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2, bgcolor: 'background.paper', borderLeft: '4px solid #22c55e' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.8 }}>
                Предучилищно възпитание и обучение
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                Предучилищното възпитание се осъществява в 7 детски градини. В тях се работи за емоционалното и
                естетическо развитие на детето чрез съчетаване на общообразователни и възпитателни взаимодействия за
                утвърждаване на детската индивидуалност.
              </Typography>
            </Box>
            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2, bgcolor: 'background.paper', borderLeft: '4px solid #0ea5e9' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.8 }}>
                Начално и основно образование
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                Началното образование се осъществява в две начални училища, четири основни и едно средно училище.
                Основното образование се провежда в 5 училища, от които 4 основни и 1 СОУ, включително училище в с.
                Радилово.
              </Typography>
            </Box>
            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2, bgcolor: 'background.paper', borderLeft: '4px solid #8b5cf6' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.8 }}>
                Средно образование
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                СОУ „Свети Климент Охридски“ съчетава традиции и съвременни профили. От 9 до 12 клас предлага
                „Технологичен“ профил с направления „Туризъм“, „Информационни технологии“ и „Предприемачество и бизнес“.
              </Typography>
            </Box>
            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2, bgcolor: 'background.paper', borderLeft: '4px solid #f59e0b' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.8 }}>
                Професионални гимназии
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                ПГ „Васил Левски“ и ПГХВТ „Атанас Ченгелев“ осигуряват професионална подготовка, силна материална база,
                практика в реална среда и възможности за последваща реализация и обучение във ВУЗ.
              </Typography>
            </Box>
          </Box>
        </Stack>
      ) : isTenderDetailPage ? (
        <Stack spacing={2}>
          <Button component={RouterLink} to="/razdel/targove-konkursi" variant="outlined" size="small" sx={{ alignSelf: 'flex-start' }}>
            ← Назад към търгове и конкурси
          </Button>
          <Box
            sx={{
              border: '1px solid #d8dee8',
              borderRadius: 2,
              p: { xs: 2, md: 2.5 },
              bgcolor: 'background.paper',
              boxShadow: '0 6px 20px rgba(15, 23, 42, 0.04)',
            }}
          >
            <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700, display: 'block', mb: 0.5 }}>
              № {tenderDetail.idx} · {tenderDetail.publishedAt}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
              Прегледи: <strong>{tenderDetail.views}</strong>
            </Typography>
            {activeTenderStructured ? (
              <Stack spacing={2}>
                {isPlaceholderTenderText ? (
                  <Typography
                    variant="overline"
                    color="text.secondary"
                    sx={{ fontWeight: 700, letterSpacing: 0.6 }}
                  >
                    Примерен текст (плейсхолдър)
                  </Typography>
                ) : null}
                <Typography variant="h5" sx={{ fontWeight: 700, lineHeight: 1.35 }}>
                  {activeTenderStructured.heading}
                </Typography>
                <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 1.6, bgcolor: 'background.default' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.8 }}>
                    Правно основание
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.75 }}>
                    {activeTenderStructured.legalBasis}
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5 }}>
                  НАРЕЖДАМ:
                </Typography>
                <Stack spacing={1.2}>
                  {activeTenderStructured.points.map((point) => (
                    <Box key={point.id} sx={{ borderLeft: '3px solid #d8dee8', pl: 1.25 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.35 }}>
                        Точка {point.id}
                      </Typography>
                      <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                        {point.text}
                      </Typography>
                      {point.subpoints?.length ? (
                        <Box component="ul" sx={{ mt: 0.8, mb: 0, pl: 2.5 }}>
                          {point.subpoints.map((subpoint) => (
                            <Box component="li" key={subpoint} sx={{ mb: 0.4 }}>
                              <Typography variant="body2" sx={{ lineHeight: 1.7, color: 'text.primary' }}>
                                {subpoint}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      ) : null}
                    </Box>
                  ))}
                </Stack>
                <Divider />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.6 }}>
                    Подпис
                  </Typography>
                  {activeTenderStructured.signature.map((line) => (
                    <Typography key={line} variant="body2" sx={{ lineHeight: 1.7, fontWeight: 600 }}>
                      {line}
                    </Typography>
                  ))}
                </Box>
              </Stack>
            ) : tenderDetail.body ? (
              <Typography
                component="div"
                variant="body2"
                sx={{ whiteSpace: 'pre-wrap', lineHeight: 1.75, color: 'text.primary' }}
              >
                {tenderDetail.body}
              </Typography>
            ) : (
              <Box sx={{ border: '1px dashed #cbd5e1', borderRadius: 2, p: 2, bgcolor: '#f8fafc' }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                  Плейсхолдър за съдържание на заповед
                </Typography>
                <Stack spacing={1}>
                  <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                    <strong>Правно основание:</strong> [Добавете текста за правното основание и препратките към
                    съответните нормативни актове.]
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                    <strong>Предмет на търга:</strong> [Опишете обекта/предмета на търга, количества и начални цени.]
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                    <strong>Дата, място и час:</strong> [Добавете дата, място и начален час за провеждане.]
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                    <strong>Документи за участие:</strong> [Избройте изискуемите документи и приложения.]
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                    <strong>Срокове и депозит:</strong> [Добавете краен срок за подаване, депозит и банкова сметка.]
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                    <strong>Допълнителни условия:</strong> [Добавете стъпка за наддаване, оглед, комисия и ред за
                    обявяване.]
                  </Typography>
                </Stack>
              </Box>
            )}
          </Box>
        </Stack>
      ) : isElectionDetailPage ? (
        <Stack spacing={2}>
          <Button component={RouterLink} to="/razdel/izbori" variant="outlined" size="small" sx={{ alignSelf: 'flex-start' }}>
            ← Назад към Избори
          </Button>
          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: { xs: 2, md: 2.5 }, bgcolor: 'background.paper' }}>
            <Typography variant="overline" color="text.secondary">
              Категория: {electionDetail.category}
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 700, mt: 0.5, mb: 1 }}>
              {electionDetail.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1.25 }}>
              Статии: {electionDetail.articleCount}
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              {electionDetail.summary}
            </Typography>
          </Box>
        </Stack>
      ) : isPublicRegistersPage ? (
        <Stack spacing={2}>
          <Box
            sx={{
              border: '1px solid #d8dee8',
              borderRadius: 2,
              p: { xs: 2, md: 2.5 },
              background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
            }}
          >
            <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 0.7 }}>
              Общински съвет - Публични регистри
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5 }}>
              Публичен регистър на предложенията за провеждане на местен референдум
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Вторник, 21 Април 2020г. 15:51ч.
            </Typography>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: { xs: 2, md: 2.5 }, bgcolor: 'background.paper' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.2 }}>
              ПУБЛИЧЕН РЕГИСТЪР НА ПРЕДЛОЖЕНИЯТА ЗА ПРОВЕЖДАНЕ НА МЕСТЕН РЕФЕРЕНДУМ
            </Typography>

            <TableContainer sx={{ overflowX: 'auto', border: '1px solid #e2e8f0', borderRadius: 1.5 }}>
              <Table size="small" sx={{ minWidth: 1120, '& .MuiTableCell-root': { verticalAlign: 'top' } }}>
                <TableHead sx={{ bgcolor: '#f8fafc' }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700, width: 52 }}>№</TableCell>
                    <TableCell sx={{ fontWeight: 700, width: 130 }}>Дата на въвеждане</TableCell>
                    <TableCell sx={{ fontWeight: 700, width: 105 }}>Актуалност</TableCell>
                    <TableCell sx={{ fontWeight: 700, width: 140 }}>Регистрация</TableCell>
                    <TableCell sx={{ fontWeight: 700, minWidth: 280 }}>Инициатива за произвеждане</TableCell>
                    <TableCell sx={{ fontWeight: 700, minWidth: 340 }}>Основни въпроси</TableCell>
                    <TableCell sx={{ fontWeight: 700, width: 170 }}>Номер на решение</TableCell>
                    <TableCell sx={{ fontWeight: 700, width: 130 }}>Насрочен за дата</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow hover>
                    <TableCell>1</TableCell>
                    <TableCell>21.04.2020г.</TableCell>
                    <TableCell>активен</TableCell>
                    <TableCell>К-ОБС-99 / 21.04.2020г.</TableCell>
                    <TableCell>
                      Инициативен комитет за иницииране на подписка за произвеждане на местен референдум против
                      инвестиционно предложение на „Грийнбърн“ ЕООД за изграждане на депо за опасни отпадъци към
                      инсталация за изгаряне на отпадъци на „Грийнбърн“ ЕООД.
                    </TableCell>
                    <TableCell>
                      <Box component="ol" sx={{ m: 0, pl: 2.1 }}>
                        <Typography component="li" variant="body2" sx={{ lineHeight: 1.6, mb: 0.6 }}>
                          Против ли сте да бъде изградено депо за опасни отпадъци от „Грийнбърн“ ЕООД към инсталация
                          за изгаряне на опасни отпадъци на „Грийнбърн“ ЕООД гр. Пещера или друга компания с идентично
                          инвестиционно предложение?
                        </Typography>
                        <Typography component="li" variant="body2" sx={{ lineHeight: 1.6, mb: 0.6 }}>
                          Против ли сте функционирането на вече изградената инсталация за изгаряне на отпадъци на
                          „Грийнбърн“ ЕООД?
                        </Typography>
                        <Typography component="li" variant="body2" sx={{ lineHeight: 1.6 }}>
                          Подкрепяте ли Кмета на Община Пещера и Председателя на Общински съвет - Пещера да инициират
                          процедура и да извършат необходимите правни и организационни действия, съобразно своята
                          компетентност така, че да не бъде допуснато изграждане на депо за опасни отпадъци?
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>№91/09.06.2020год. на ОбС</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Stack>
      ) : isElectronicServicesPage ? (
        <Stack spacing={2}>
          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: { xs: 2, md: 2.5 }, background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)', boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)' }}>
            <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 0.7 }}>
              Общинска Администрация - е-Община
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.6 }}>
              Електронни услуги
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Клип електронни услуги, условия за идентификация и регистър на предоставяните ЕАУ.
            </Typography>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2, bgcolor: 'background.paper' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Начини за идентификация</Typography>
            <Box component="ul" sx={{ mt: 0, mb: 1, pl: 2.3 }}>
              {['Квалифициран електронен подпис - КЕП', 'Мобилен КЕП "Борика"', 'Мобилен КЕП "Евротръст"', 'ПИК на НАП', 'ПИК на НОИ'].map((m) => (
                <Box key={m} component="li"><Typography variant="body2">{m}</Typography></Box>
              ))}
            </Box>
            <Typography variant="body2" sx={{ lineHeight: 1.75 }}>
              При електронна автентикация с квалифициран електронен подпис е необходимо подписът да съдържа ЕГН на
              автора, съгласно § 1, т.22 от допълнителните разпоредби на Закона за електронното управление и § 5 от
              Наредбата за общите изисквания към информационните системи, регистрите и електронните административни услуги.
            </Typography>
            <Box component="ul" sx={{ mt: 1, mb: 0, pl: 2.3 }}>
              <Box component="li"><Typography variant="body2">Ниво „високо“ - КЕП;</Typography></Box>
              <Box component="li"><Typography variant="body2">Ниво „значително“ - ПИК на НАП/НОИ/УКД на НЗОК + еднократна парола;</Typography></Box>
              <Box component="li"><Typography variant="body2">Ниво „ниско“ - ПИК на НАП/НОИ/УКД на НЗОК.</Typography></Box>
            </Box>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2, bgcolor: 'background.paper' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Помощни видеоматериали за заявяване на ЕАУ</Typography>
            <Stack spacing={1}>
              {electronicHelpVideos.map((v) => (
                <Box
                  key={v}
                  sx={{
                    border: '1px solid #e2e8f0',
                    borderRadius: 1.5,
                    p: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 1,
                    bgcolor: '#f8fafc',
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {v}
                  </Typography>
                  <Button
                    component="a"
                    href={`https://www.youtube.com/results?search_query=${encodeURIComponent(v)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    variant="outlined"
                  >
                    Гледай
                  </Button>
                </Box>
              ))}
            </Stack>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2, bgcolor: 'background.paper' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Раздел · УРИ · Услуга · Нива</Typography>
            <TableContainer sx={{ overflowX: 'auto', border: '1px solid #e2e8f0', borderRadius: 1.5 }}>
              <Table size="small" sx={{ minWidth: 1120 }}>
                <TableHead sx={{ bgcolor: '#f8fafc' }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Раздел</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>№</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>УРИ</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Услуга</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Ниво на предоставяне на ЕАУ</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Ниво на осигуреност</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {electronicServicesRows.map(([section, idx, uri, service, level, assurance], rowIndex) => {
                    const sectionChanged = rowIndex === 0 || electronicServicesRows[rowIndex - 1][0] !== section;
                    const assuranceChip = getAssuranceChipColor(assurance);
                    return (
                    <TableRow key={`${section}-${idx}`} hover sx={sectionChanged ? { '& td': { borderTop: '2px solid #cbd5e1' } } : undefined}>
                      <TableCell>
                        <Chip
                          label={section}
                          size="small"
                          sx={{ bgcolor: sectionChanged ? '#e0f2fe' : '#f1f5f9', color: '#0f172a', fontWeight: 700 }}
                        />
                      </TableCell>
                      <TableCell>{idx}</TableCell>
                      <TableCell>
                        <Link href={`https://egov.bg/`} target="_blank" rel="noopener noreferrer" underline="hover" sx={{ fontWeight: 700 }}>
                          {uri}
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Link href={`https://egov.bg/`} target="_blank" rel="noopener noreferrer" underline="hover" sx={{ fontWeight: 500 }}>
                          {service}
                        </Link>
                      </TableCell>
                      <TableCell>
                        {level ? <Chip label={level} size="small" variant="outlined" /> : '-'}
                      </TableCell>
                      <TableCell>
                        {assurance ? (
                          <Chip
                            label={assurance}
                            size="small"
                            sx={{ bgcolor: assuranceChip.bg, color: assuranceChip.color, fontWeight: 700 }}
                          />
                        ) : (
                          '-'
                        )}
                      </TableCell>
                    </TableRow>
                  )})}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Stack>
      ) : isElectionsPage ? (
        <Stack spacing={2}>
          <Box
            sx={{
              border: '1px solid #d8dee8',
              borderRadius: 2,
              p: { xs: 2, md: 2.5 },
              background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
            }}
          >
            <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 0.7 }}>
              Община Пещера
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5 }}>
              Избори
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
              Актуална информация за изборни процедури, срокове и електронни услуги.
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 1.3 }}>
              <Box component="span" sx={{ px: 1, py: 0.35, borderRadius: 999, bgcolor: '#ecfeff', color: '#155e75', fontSize: '0.75rem', fontWeight: 700 }}>
                Срокове
              </Box>
              <Box component="span" sx={{ px: 1, py: 0.35, borderRadius: 999, bgcolor: '#f0fdf4', color: '#166534', fontSize: '0.75rem', fontWeight: 700 }}>
                Избирателни списъци
              </Box>
              <Box component="span" sx={{ px: 1, py: 0.35, borderRadius: 999, bgcolor: '#eff6ff', color: '#1d4ed8', fontSize: '0.75rem', fontWeight: 700 }}>
                Електронни услуги
              </Box>
            </Stack>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2, bgcolor: 'background.paper' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
              УВАЖАЕМИ СЪГРАЖДАНИ,
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.75, mb: 1 }}>
              Тук може да се информирате за:
            </Typography>
            <Box component="ul" sx={{ mt: 0, mb: 0, pl: 2.3 }}>
              {[
                'Важни дати и срокове за избирателите при провеждане на избори;',
                'Места за поставяне на агитационни материали;',
                'Централна избирателна комисия и Общинска избирателна комисия - електронен адрес и данни за контакт;',
                'Предварителни избирателни списъци;',
                'Информация за провеждане на консултации;',
                'Справки и подаване на заявления за корекции и промени в избирателните списъци, в съответствие с разпоредбите на Изборния кодекс.',
              ].map((item) => (
                <Box component="li" key={item} sx={{ mb: 0.45 }}>
                  <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2, bgcolor: 'background.paper' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
              Електронни услуги за избори
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.75, mb: 1 }}>
              За ваше улеснение прилагаме услугите, които са вписани в регистъра на услугите и техния адрес в портала
              за електронни услуги.
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.75, mb: 1 }}>
              За да ползвате услугата е необходимо да използвате един от следните начини за идентификация:
            </Typography>
            <Box component="ul" sx={{ mt: 0, mb: 1.3, pl: 2.3 }}>
              {['Квалифициран електронен подпис - КЕП;', 'Мобилен КЕП "Борика";', 'Мобилен КЕП "Евротръст";', 'ПИК на НАП;', 'ПИК на НОИ;'].map((method) => (
                <Box component="li" key={method}>
                  <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                    {method}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Typography variant="body2" sx={{ lineHeight: 1.75, mb: 1 }}>
              При електронна автентикация с квалифициран електронен подпис е необходимо същия да съдържа информация
              за ЕГН на автора на подписа, в съответствие с § 1, т.22 от допълнителните разпоредби на Закона за
              електронното управление при условията на § 5 от Наредбата за общите изисквания към информационните
              системи, регистрите и електронните адм. услуги.
            </Typography>
            <Button component="a" href="https://egov.bg/" target="_blank" rel="noopener noreferrer" variant="contained" size="small" sx={{ mb: 1 }}>
              Отвори egov.bg
            </Button>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.8 }}>
              Услугите са валидни за Избори за Народно събрание на 19.04.2026 г.
            </Typography>
            <Stack spacing={0.8}>
              {[
                ['3303', 'Вписване в избирателния списък по настоящ адрес'],
                ['3304', 'Вписване в списъка за гласуване с подвижна избирателна кутия'],
                ['3305', 'Вписване в избирателния списък'],
                ['3306', 'Отстраняване на непълноти и грешки в избирателния списък'],
                ['3307', 'Изключване от Списъка на заличените лица'],
                ['3308', 'Изключване от Списъка на заличените лица на избирател, заявил, че ще гласува извън страната'],
              ].map(([code, label]) => (
                <Box
                  key={code}
                  sx={{
                    border: '1px solid #e2e8f0',
                    borderRadius: 1.5,
                    p: 1,
                    bgcolor: '#f8fafc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 1,
                  }}
                >
                  <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                    <strong>{code}</strong> {label}
                  </Typography>
                  <Button component="a" href="https://egov.bg/" target="_blank" rel="noopener noreferrer" size="small" variant="outlined">
                    Отвори
                  </Button>
                </Box>
              ))}
            </Stack>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2, bgcolor: 'background.paper' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
              Архив и кампании
            </Typography>
            <Stack spacing={1.1}>
              {electionsPages.map((campaign) => (
                <Box key={campaign.slug} sx={{ p: 1.2, borderRadius: 1.5, bgcolor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <Typography
                    component={RouterLink}
                    to={`/razdel/izbori/${campaign.slug}`}
                    variant="body1"
                    sx={{ fontWeight: 700, color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                  >
                    {campaign.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {campaign.articleCount} статии · {campaign.category}
                  </Typography>
                  <Box sx={{ mt: 0.8 }}>
                    <Button component={RouterLink} to={`/razdel/izbori/${campaign.slug}`} size="small" variant="outlined">
                      Виж подробности
                    </Button>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
        </Stack>
      ) : isMunicipalPlansPage ? (
        <Stack spacing={2}>
          <Box
            sx={{
              border: '1px solid #d8dee8',
              borderRadius: 2,
              p: { xs: 2, md: 2.5 },
              background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
            }}
          >
            <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 0.7 }}>
              Стратегически документи
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5 }}>
              Общински планове
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
              Община Пещера - Стратегически документи
            </Typography>
          </Box>

          <Stack spacing={1.5}>
            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2, bgcolor: 'background.paper' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.6 }}>
                ПЛАН ЗА УСТОЙЧИВА ГРАДСКА МОБИЛНОСТ НА ОБЩИНА ПЕЩЕРА
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                За периода 2023-2030
              </Typography>
            </Box>

            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2, bgcolor: 'background.paper' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.6 }}>
                ДОКЛАД
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                ЗА РЕЗУЛТАТИТЕ ОТ МЕЖДИННА ОЦЕНКА ЗА ИЗПЪЛНЕНИЕ НА ПЛАН ЗА ИНТЕГРИРАНО РАЗВИТИЕ НА ОБЩИНА ПЕЩЕРА
                2021-2027г.
              </Typography>
            </Box>

            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2, bgcolor: 'background.paper' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.8 }}>
                ПЛАН ЗА ИНТЕГРИРАНО РАЗВИТИЕ НА ОБЩИНА ПЕЩЕРА
              </Typography>
              <Stack spacing={0.4}>
                <Typography variant="body1">За периода 2021-2027г.</Typography>
                <Typography variant="body1">За периода 2014 -2020г.</Typography>
              </Stack>
            </Box>

            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2, bgcolor: 'background.paper' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.8 }}>
                ОБЩИНСКИ ГОДИШЕН ПЛАН ЗА СОЦИАЛНИТЕ УСЛУГИ НА ТЕРИТОРИЯТА НА ОБЩИНА ПЕЩЕРА
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                ОБЩИНСКИ ГОДИШЕН ПЛАН ЗА СОЦИАЛНИТЕ УСЛУГИ ПРЕЗ 2026 г. НА ТЕРИТОРИЯТА НА ОБЩИНА ПЕЩЕРА
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.7 }}>
                Приет с Решение №281/31.07.2025г. на Общински съвет Пещера
              </Typography>
            </Box>

            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2, bgcolor: 'background.paper' }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                ПЛАН ЗА ДЕЙСТВИЕ НА ОБЩИНСКИТЕ КОНЦЕСИИ НА ОБЩИНА ПЕЩЕРА
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.6 }}>
                за периода 2022-2027 г.
              </Typography>
            </Box>

            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2, bgcolor: 'background.paper' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.8 }}>
                ГОДИШЕН ПЛАН ЗА ПАША ЗА ЗЕМЛИЩАТА НА ОБЩИНА ПЕЩЕРА
              </Typography>
              <Stack spacing={0.4}>
                <Typography variant="body1">За стопанската 2023г. - 2024г.</Typography>
                <Typography variant="body1">За стопанската 2022г.- 2023г.</Typography>
                <Typography variant="body1">За стопанската 2021г.- 2022г.</Typography>
              </Stack>
            </Box>

            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2, bgcolor: 'background.paper' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.6 }}>
                Актуализаран План за действие на Община Пещера /2014-2017 г./ за изпълнение на Стратегия за
                интегриране на ромите в Област Пазарджик 2012 – 2020
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Приет с Решение № 255/28,02,2017г. на Общински съвет - Пещера
              </Typography>
            </Box>

            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2, bgcolor: 'background.paper' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.8 }}>
                Общински план за развитие на Община Пещера
              </Typography>
              <Stack spacing={0.4}>
                <Typography variant="body1">Програма за реализация</Typography>
                <Typography variant="body1">Предварителна оценка</Typography>
              </Stack>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.7 }}>
                Приет с Решение № 642/15.07.2014г. на Общински съвет - Пещера
              </Typography>
            </Box>

            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2, bgcolor: 'background.paper' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.6 }}>
                ОБЩИНСКИ ПЛАН ЗА ДЕЙСТВИЕ за изпълнение на Стратегията за образователна интеграция на децата и
                учениците от етническите малцинства 2010 – 2015 година в ОБЩИНА ПЕЩЕРА
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Приет с Решение №579/31.08.2010г. на ОбС-Пещера
              </Typography>
            </Box>
          </Stack>
        </Stack>
      ) : isTendersPage ? (
        <Stack spacing={2}>
          <Box
            sx={{
              border: '1px solid #d8dee8',
              borderRadius: 2,
              p: { xs: 2, md: 2.5 },
              background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
            }}
          >
            <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 0.7 }}>
              Община Пещера
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5 }}>
              Търгове и конкурси
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Архив на заповеди с филтриране по заглавие и година.
            </Typography>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 1.5, bgcolor: 'background.paper' }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 1.25 }}>
              <TextField
                size="small"
                label="Филтриране по заглавие"
                value={tendersSearch}
                onChange={(e) => setTendersSearch(e.target.value)}
                fullWidth
              />
              <TextField
                size="small"
                select
                label="Филтър по година"
                value={tendersYear}
                onChange={(e) => setTendersYear(e.target.value)}
                fullWidth
              >
                <MenuItem value="all">Всички години</MenuItem>
                {availableTenderYears.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Box>

          {filteredTenders.length === 0 ? (
            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2, bgcolor: 'background.paper', textAlign: 'center', color: 'text.secondary' }}>
              Няма резултати за избраните филтри.
            </Box>
          ) : (
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr', gap: 1.5 }}>
              {filteredTenders.map((row) => (
                <Box
                  key={row.idx}
                  sx={{
                    border: '1px solid #d8dee8',
                    borderRadius: 2,
                    p: 1.6,
                    bgcolor: 'background.paper',
                    boxShadow: '0 6px 20px rgba(15, 23, 42, 0.04)',
                  }}
                >
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 0.8 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
                      № {row.idx}
                    </Typography>
                    <Box
                      component="span"
                      sx={{
                        px: 1,
                        py: 0.25,
                        borderRadius: 999,
                        bgcolor: '#f1f5f9',
                        color: '#0f172a',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                      }}
                    >
                      {row.year}
                    </Box>
                  </Stack>
                  <Typography
                    component={RouterLink}
                    to={`/razdel/targove-konkursi/${row.slug}`}
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      lineHeight: 1.4,
                      mb: 0.8,
                      display: 'block',
                      color: 'primary.main',
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    {row.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                    {row.publishedAt}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.8 }}>
                    Прегледи: <strong>{row.views}</strong>
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
        </Stack>
      ) : isEnergyEfficiencyPage ? (
        <Stack spacing={2}>
          <Box
            sx={{
              border: '1px solid #d8dee8',
              borderRadius: 2,
              p: { xs: 2, md: 2.5 },
              background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
            }}
          >
            <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 0.7 }}>
              Община Пещера · Проекти
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5 }}>
              Енергийна ефективност
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Договори, отчети, новини и файлове за изтегляне.
            </Typography>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2, bgcolor: 'background.paper' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Договори по проекти
            </Typography>
            <Stack spacing={0.8}>
              {energyContracts.map(([label, href]) => (
                <Link key={label} href={href} target="_blank" rel="noopener noreferrer" underline="hover" sx={{ fontWeight: 500 }}>
                  {label}
                </Link>
              ))}
            </Stack>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2, bgcolor: 'background.paper' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Годишни отчети
            </Typography>
            <Stack spacing={0.8}>
              {energyReports.map(([label, href]) => (
                <Link key={label} href={href} target="_blank" rel="noopener noreferrer" underline="hover">
                  {label}
                </Link>
              ))}
            </Stack>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2, bgcolor: 'background.paper' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Новини
            </Typography>
            <Stack spacing={1}>
              <Box sx={{ p: 1.25, borderRadius: 1.5, border: '1px solid #e2e8f0', bgcolor: '#f8fafc' }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.4 }}>
                  Регистър на подадени заявления за интерес и финансова помощ
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Процедура BG16RFOP001-2.001 „Енергийна ефективност в периферните райони“.
                </Typography>
              </Box>
              <Box sx={{ p: 1.25, borderRadius: 1.5, border: '1px solid #e2e8f0', bgcolor: '#f8fafc' }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.4 }}>
                  Информация и прессъобщения
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Краткорезюме на процедурата, важни съобщения и прессъобщения по договорите.
                </Typography>
              </Box>
            </Stack>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2, bgcolor: 'background.paper' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Файлове за изтегляне
            </Typography>
            <TableContainer sx={{ overflowX: 'auto', border: '1px solid #e2e8f0', borderRadius: 1.5 }}>
              <Table size="small">
                <TableHead sx={{ bgcolor: '#f8fafc' }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Файл</TableCell>
                    <TableCell sx={{ fontWeight: 700, width: 120 }}>Размер</TableCell>
                    <TableCell sx={{ fontWeight: 700, width: 140 }}>Действие</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {energyDownloads.map(([name, href, size]) => (
                    <TableRow key={name} hover>
                      <TableCell>
                        <Link href={href} target="_blank" rel="noopener noreferrer" underline="hover">
                          {name}
                        </Link>
                      </TableCell>
                      <TableCell>{size}</TableCell>
                      <TableCell>
                        <Button component="a" href={href} target="_blank" rel="noopener noreferrer" size="small" variant="outlined">
                          Изтегли
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Stack>
      ) : isTourismPage ? (
        <Stack spacing={2}>
          <Box
            sx={{
              border: '1px solid #d8dee8',
              borderRadius: 2,
              p: { xs: 2, md: 2.5 },
              background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
            }}
          >
            <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 0.7 }}>
              Община Пещера
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.6 }}>
              Туризъм
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
              Едно малко кътче от земния рай наречен България е община Пещера, простираща се от изток на запад в полите
              на Родопите на надморска височина от 450 до 1350 метра.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mt: 1 }}>
              В този загадъчен край безспорно ви очакват вълнуващи преживявания. Общината граничи на север и
              северозапад с община Пазарджик, на запад с община Ракитово, на юг и югозапад с община Батак, а на изток с
              община Брацигово. Разстоянието до София е 140 км, а до Пловдив - 45 км.
            </Typography>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2, bgcolor: 'background.paper' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
              Съдържание
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {[
                ['#tourism', 'Туризъм'],
                ['#anthro', 'Антропогенни ресурси'],
                ['#arch', 'Архитектурни обекти'],
                ['#churches', 'Църкви и параклиси'],
                ['#museums', 'Музеи'],
                ['#roads', 'Пътна мрежа и достъп'],
                ['#health', 'Здравно обслужване'],
                ['#caves', 'Пещери'],
                ['#reserves', 'Резервати'],
                ['#hotels', 'Хотели'],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  underline="none"
                  sx={{
                    px: 1.2,
                    py: 0.45,
                    borderRadius: 999,
                    border: '1px solid #cbd5e1',
                    bgcolor: '#f8fafc',
                    color: 'text.primary',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                  }}
                >
                  {label}
                </Link>
              ))}
            </Stack>
          </Box>

          <Box id="tourism" sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2.5, bgcolor: 'background.paper', scrollMarginTop: 96 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Туризъм
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 0.8 }}>
              На територията на общината уникално са съчетани климат, природни феномени, географско разположение,
              животински видове, историческо наследство и природни забележителности.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
              Условията и климатът са изключително благоприятни за климатолечение, възстановяване, зимни спортове,
              екотуризъм, лов, риболов и спелеология. Да дойдете в магическата планина и да се отдадете на изкушението!
              Това е вашият избор!
            </Typography>
          </Box>

          <Box id="anthro" sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2.5, bgcolor: 'background.paper', scrollMarginTop: 96 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Антропогенни ресурси
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 0.8 }}>
              В културните пластове в околностите на Пещера са намерени остатъци от хилядолетна култура: кюпове,
              саркофази, фрагменти от керамика, строителни материали, монети, накити, култови предмети, пътища, мостове,
              крепости и др.
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
              {[
                'Крепостта “Св. Петка” - разположена на едноименен хълм.',
                'Селищна могила “Банята” - на 1,5 км западно от с. Капитан Димитриево.',
                'Тракийските крепости “Киево кале”, “Перун”, “Тъмбра”, “Св. Никола”, “Гагово дере” са разкрити за проучване през 1973 г.',
                'В пещера “Снежанка” са проучени находки от живота на тракийското племе беси - бронзова игла, глинени съдове и др.',
              ].map((item) => (
                <Typography key={item} component="li" variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 0.5 }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box id="arch" sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2.5, bgcolor: 'background.paper', scrollMarginTop: 96 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Архитектурни обекти
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 0.8 }}>
              В града има 40 архитектурни обекта, обявени от НИПКИ и Министерството на културата за архитектурни
              паметници с местно значение.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 0.8 }}>
              През 2002 г. храмът “Св. Димитър” (1825-1831 г.) е утвърден за архитектурен паметник на културата от
              национално значение.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
              Часовниковата кула, построена между 1650 и 1710 г., е втората по възраст в България след кулата на “Сахат
              тепе” в Пловдив.
            </Typography>
          </Box>

          <Box id="churches" sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2.5, bgcolor: 'background.paper', scrollMarginTop: 96 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Църкви и параклиси
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 0.8 }}>
              Далеч в древността селището е било с десет махали около оброчища, станали след покръстването на траките
              християнски параклиси: “Св. Марена”, “Св. Атанас”, “Св. Неделя”, “Св. Никола”, “Св. Спас”, “Св. Димитър”,
              “Св. Петка”, “Св. Варвара”, “Св. Георги”, “Св. Елена и Константин”.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 0.8 }}>
              Във Възрожденска Пещера се издигат “Св. Петка” (около 1710 г.), “Св. Димитър” (1825-1831 г.) и “Св.
              Богородица” (1864-1865 г.).
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
              Със средства от дарителство са ремонтирани параклисите “Св. Георги”, “Св. Спас”, “Св. Елена и Константин”,
              “Св. Илия”, “Св. Варвара” и “Св. Неделя”. В града има две джамии.
            </Typography>
          </Box>

          <Box id="museums" sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2.5, bgcolor: 'background.paper', scrollMarginTop: 96 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Музеи
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 0.8 }}>
              Общински исторически музей е основан на 22.06.1969 г. със статут на музейна сбирка. Експозицията е в пет
              зали - археология, възраждане, националноосвободително движение и нова история.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 0.8 }}>
              С пет уникални предмета от праисторията музеят участва в изложбата "Златна Тракия" в Брюксел (03.03.2002
              г.), с което Пещера заема своето място в културната история на Европа.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
              Музейна сбирка функционира и в с. Радилово, отразяваща историята на селото и участието му в Априлското
              въстание (1876 г.).
            </Typography>
          </Box>

          <Box id="roads" sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2.5, bgcolor: 'background.paper', scrollMarginTop: 96 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Пътна мрежа и достъп
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
              Състоянието на пътищата и пътната маркировка на територията на общината се поддържат целогодишно в много
              добро състояние. Достъпността се осигурява от редовни автобусни линии от Пазарджик, София, Пловдив и
              съседни общини, а за Пещера - и с влак от Пловдив.
            </Typography>
          </Box>

          <Box id="health" sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2.5, bgcolor: 'background.paper', scrollMarginTop: 96 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Здравно обслужване
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
              В общинския център функционират многопрофилна болница за активно лечение, спешна медицинска помощ, три
              медицински центъра и частни стоматологични кабинети.
            </Typography>
          </Box>

          <Box id="caves" sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2.5, bgcolor: 'background.paper', scrollMarginTop: 96 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Пещери
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 0.8 }}>
              Най-голям интерес предизвикват "Снежанка" и "Юбилейна".
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 0.8 }}>
              Пещера "Снежанка" е една от седемте най-големи благоустроени пещери в България. Открита е на 3 януари 1961
              г., дълга е 220 м, с площ 3130 кв.м и над 600 000 сталактити. Намира се на 5 км югозападно от Пещера.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 0.8 }}>
              Пещера "Юбилейна" е открита на 12 февруари 1974 г., с дължина около 1000 м и разнообразни карстови
              образувания.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
              Изследванията показват, че човекът от бронзовата епоха е познавал "Снежанка" и "Юбилейна" и е търсил в тях
              подслон, сигурност и вода.
            </Typography>
          </Box>

          <Box id="reserves" sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2.5, bgcolor: 'background.paper', scrollMarginTop: 96 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Резервати
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.4 }}>
              Резерват “Купена”
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 0.9 }}>
              Обявен през 1961 г. за биосферен резерват със световно значение под закрилата на ЮНЕСКО. В него има
              дендрариум и разнообразни дървесни видове, включително защитени птици.
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.4 }}>
              Резерват “Сокола”
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
              Обявен през 1973 г., с площ 127.2 ха. Намира се на 8 км западно от Пещера и южно от летовище “Св.
              Константин”. От “Соколската скала” се открива панорама към Пещера и при ясно време - до Пловдив.
            </Typography>
          </Box>

          <Box id="hotels" sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2.5, bgcolor: 'background.paper', scrollMarginTop: 96 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Хотели
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>
              Хотели в гр. Пещера
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2.5, mb: 1.2 }}>
              {[
                'Хотел Домейн Пещера - ул. Михаил Такев 177 Е, резервации: +359 895 525626 / +359 895 525627, e-mail: hotel@domainepeshtera.com',
                'Комплекс “HEAT” - ул. Михаил Такев №56, моб.: +359 888 334333 / +359 836 626267 / +359 896 626264, стац.: +359 350 6 55 55',
                'Хотел “НАГИ” - ул. М. Такев 168, телефон: 0350 64051',
                'Мотел “Синия кайнак” - ул. Михаил Такев №149, телефон: 0886 847 371',
              ].map((item) => (
                <Typography key={item} component="li" variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 0.45 }}>
                  {item}
                </Typography>
              ))}
            </Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>
              Хотели на летовище “Св. Константин”
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
              {[
                'Хотел “ДАФ ТРАНС” - резервации: 0350/6 41 74, 6 57 85',
                'Хотелски комплекс “Вили” - телефон: 0350/6 37 54, 048871991, 0887575025',
                'Хижа “Румен” към ТД “Купена” - пет модерно обзаведени бунгала със самостоятелен санитарен възел.',
              ].map((item) => (
                <Typography key={item} component="li" variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 0.45 }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: { xs: 2, md: 2.5 }, bgcolor: 'background.paper', borderLeft: '4px solid #0ea5e9' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Допълнителна туристическа информация
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
              Към момента в гр. Пещера има 60 категоризирани туристически обекти. Преобладават малките заведения тип
              кафе-аперитив, има четири ресторанта и една пицария. Сред атрактивните места е комплекс “Нептун”.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mt: 1 }}>
              Пълният списък с туристически обекти, маршрути и места за настаняване се поддържа в общинските
              информационни раздели.
            </Typography>
          </Box>
        </Stack>
      ) : isGalleryPage ? (
        <Stack spacing={2}>
          <Box
            sx={{
              border: '1px solid #d8dee8',
              borderRadius: 2,
              p: { xs: 2, md: 2.5 },
              background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
            }}
          >
            <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 0.7 }}>
              Община Пещера
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.6 }}>
              Галерия
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
              Фото галерия с подбрани кадри от Пещера, културни обекти и символи на общината.
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 1.2 }}>
              <Chip size="small" label={`${displayedGallery.length} снимки`} sx={{ bgcolor: '#e0f2fe', color: '#0c4a6e', fontWeight: 700 }} />
              <Chip size="small" label="Клик за уголемяване" sx={{ bgcolor: '#f1f5f9', color: '#0f172a', fontWeight: 700 }} />
              {galleryFilters.map((f) => (
                <Chip
                  key={f}
                  size="small"
                  clickable
                  label={f === 'all' ? 'Всички' : f}
                  onClick={() => setGalleryFilter(f)}
                  sx={{
                    bgcolor: galleryFilter === f ? '#0f172a' : '#eef2ff',
                    color: galleryFilter === f ? '#fff' : '#3730a3',
                    fontWeight: 700,
                  }}
                />
              ))}
            </Stack>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(12, 1fr)' }, gap: 1.5 }}>
            {displayedGallery.map((image, idx) => (
              <Box
                key={image.src}
                onClick={() => setGalleryLightbox(image)}
                sx={{
                  border: '1px solid #cbd5e1',
                  borderRadius: 2.5,
                  overflow: 'hidden',
                  bgcolor: 'background.paper',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 14px 30px rgba(15,23,42,0.16)' },
                  gridColumn: { xs: 'span 1', sm: 'span 1', md: idx === 0 ? 'span 6' : idx % 5 === 0 ? 'span 6' : 'span 3' },
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <Box
                    component="img"
                    src={image.src}
                    alt={image.title}
                    sx={{ width: '100%', height: idx === 0 ? 260 : idx % 3 === 0 ? 220 : 180, objectFit: 'cover', display: 'block' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 'auto 0 0 0',
                      p: 1,
                      background: 'linear-gradient(180deg, rgba(2,6,23,0) 0%, rgba(2,6,23,0.82) 100%)',
                    }}
                  >
                    <Typography variant="caption" sx={{ color: '#fff', fontWeight: 700 }}>
                      {image.title}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          <Dialog open={Boolean(galleryLightbox)} onClose={() => setGalleryLightbox(null)} maxWidth="lg" fullWidth>
            <DialogContent sx={{ p: 0, bgcolor: '#020617' }}>
              {galleryLightbox ? (
                <Box sx={{ position: 'relative' }}>
                  <Box component="img" src={galleryLightbox.src} alt={galleryLightbox.title} sx={{ width: '100%', maxHeight: '78vh', objectFit: 'contain', display: 'block' }} />
                  <IconButton
                    aria-label="Затвори"
                    onClick={() => setGalleryLightbox(null)}
                    sx={{
                      position: 'absolute',
                      right: 10,
                      top: 10,
                      bgcolor: 'rgba(2,6,23,0.55)',
                      color: '#fff',
                      '&:hover': { bgcolor: 'rgba(2,6,23,0.85)' },
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                  <Button
                    onClick={prevGalleryImage}
                    sx={{
                      position: 'absolute',
                      left: 12,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      minWidth: 0,
                      width: 40,
                      height: 40,
                      borderRadius: 999,
                      bgcolor: 'rgba(2,6,23,0.55)',
                      color: '#fff',
                      '&:hover': { bgcolor: 'rgba(2,6,23,0.8)' },
                    }}
                  >
                    <ChevronLeftIcon />
                  </Button>
                  <Button
                    onClick={nextGalleryImage}
                    sx={{
                      position: 'absolute',
                      right: 12,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      minWidth: 0,
                      width: 40,
                      height: 40,
                      borderRadius: 999,
                      bgcolor: 'rgba(2,6,23,0.55)',
                      color: '#fff',
                      '&:hover': { bgcolor: 'rgba(2,6,23,0.8)' },
                    }}
                  >
                    <ChevronRightIcon />
                  </Button>
                  <Typography variant="body2" sx={{ p: 1.2, color: '#e2e8f0', fontWeight: 700 }}>
                    {galleryLightbox.title} {galleryActiveIndex >= 0 ? `· ${galleryActiveIndex + 1}/${displayedGallery.length}` : ''}
                  </Typography>
                </Box>
              ) : null}
            </DialogContent>
          </Dialog>
        </Stack>
      ) : isCulturePage ? (
        <Stack spacing={2}>
          <Box
            sx={{
              border: '1px solid #d8dee8',
              borderRadius: 2,
              p: { xs: 2, md: 2.5 },
              background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
            }}
          >
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.4fr 1fr' }, gap: 2 }}>
              <Box>
                <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 0.7 }}>
                  Община Пещера
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5 }}>
                  Култура
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                  Културно-историческото наследство на Пещера включва възрожденски храмове, читалищни традиции, музейни
                  експозиции и изявени личности с национален принос.
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 1.5 }}>
                  {['Храмове', 'Читалища', 'Музеи', 'Личности'].map((chip) => (
                    <Box
                      key={chip}
                      sx={{
                        px: 1.2,
                        py: 0.4,
                        borderRadius: 999,
                        bgcolor: '#e2e8f0',
                        color: '#0f172a',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                      }}
                    >
                      {chip}
                    </Box>
                  ))}
                </Stack>
              </Box>
              <Box sx={{ borderRadius: 2, overflow: 'hidden', border: '1px solid #cbd5e1' }}>
                <Box
                  component="img"
                  src={asset('culture-hero-town.png')}
                  alt="Панорамна гледка към град Пещера"
                  sx={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }}
                />
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 1.5 }}>
            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 1.5, p: 1.25, bgcolor: '#f8fafc' }}>
              <Typography variant="caption" color="text.secondary">
                Първо светско училище
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                1848 г.
              </Typography>
            </Box>
            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 1.5, p: 1.25, bgcolor: '#f8fafc' }}>
              <Typography variant="caption" color="text.secondary">
                Читалище „Надежда“
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                1873 г.
              </Typography>
            </Box>
            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 1.5, p: 1.25, bgcolor: '#f8fafc' }}>
              <Typography variant="caption" color="text.secondary">
                Исторически музей
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                от 1969 г.
              </Typography>
            </Box>
            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 1.5, p: 1.25, bgcolor: '#f8fafc' }}>
              <Typography variant="caption" color="text.secondary">
                Читалища в общината
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                3 + Дом на културата
              </Typography>
            </Box>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: { xs: 2, md: 2.5 }, bgcolor: 'background.paper' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Образование и възрожденска традиция
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
              Първото светско българско училище в Пещера е създадено през 1848 година, а читалище "Надежда" - през 1873
              година. Изтъкнат възрожденски учител е Спас Зафиров - учител на Иван Вазов, Христо Ботев и Васил Левски.
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' }, gap: 1.5 }}>
            {cultureGallery.map((item) => (
              <Box
                key={item.src}
                sx={{
                  border: '1px solid #d8dee8',
                  borderRadius: 2,
                  overflow: 'hidden',
                  bgcolor: 'background.paper',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 10px 24px rgba(15,23,42,0.12)' },
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <Box component="img" src={item.src} alt={item.title} sx={{ width: '100%', height: 170, objectFit: 'cover', display: 'block' }} />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 'auto 0 0 0',
                      p: 1,
                      background: 'linear-gradient(180deg, rgba(15,23,42,0) 0%, rgba(15,23,42,0.75) 100%)',
                    }}
                  >
                    <Typography variant="caption" sx={{ color: '#fff', fontWeight: 700 }}>
                      {item.title}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: { xs: 2, md: 2.5 }, bgcolor: 'background.paper', borderLeft: '4px solid #c084fc' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Църквата „Св. Димитър“
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 0.8 }}>
              Църквата "Св. Димитьр" е един от малкото запазени паметници от епохата на Възраждането в България.
              Строена е в периода 1825 - 1831 година. Тя е трикорабна, кръстокуполна с притвор и галерия.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 0.8 }}>
              Иконостасът е резбован през 1910 година, но иконите са от 19 век. Особено ценни са „Богородица
              Одигитрия“, „Велик архангелски събор“ и „Св. Димитър“. Оригинални са и стенописните изображения в
              интериора на храма.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
              В централния купол е изписан Христос, а в олтарната част впечатляват композициите „Богородица ширшая“,
              „Благовещение“ и старозаветни пророци.
            </Typography>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: { xs: 2, md: 2.5 }, bgcolor: 'background.paper', borderLeft: '4px solid #22c55e' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Музеи и културни институции
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 0.8 }}>
              В метоха на църквата "Св. Петка" е разположена експозицията на Общинския исторически музей. Музеят е
              основан на 22.06.1969 г. със статут на музейна сбирка, а експозицията е в пет зали - археология,
              възраждане, националноосвободително движение и нова история.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 0.8 }}>
              С пет уникални предмета от праисторията музеят участва в изложбата "Златна Тракия" в Брюксел
              (03.03.2002 г.), с което Пещера намира своето място в културната история на Европа.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
              Музейна сбирка функционира и в с. Радилово. На територията на общината развиват дейност три читалища, един
              Дом на културата и картинна галерия "Проф. В. Стайков".
            </Typography>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: { xs: 2, md: 2.5 }, bgcolor: 'background.paper', borderLeft: '4px solid #0ea5e9' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Личности с принос за България
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 0.8 }}>
              Община Пещера дава на България редица политици, общественици и учени - включително 5 министри: Георги
              Кьосеиванов, Михаил Такев, Георги Теохаров, Григор Чешмеджиев и Никола Стоилов.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
              От Пещерската община израстват един академик, 24 професори, 10 доцента, трима ректори на ВУЗ, един декан
              и двама зам.-декани, както и изявени личности в историята, медицината, изкуството, спорта и киното.
            </Typography>
          </Box>
        </Stack>
      ) : isHistoryPage ? (
        <Stack spacing={2}>
          <Box
            sx={{
              border: '1px solid #d8dee8',
              borderRadius: 2,
              p: { xs: 2, md: 2.5 },
              background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
            }}
          >
            <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 0.7 }}>
              Община Пещера
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.5 }}>
              История
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              Пещера през вековете - от неолита до Освобождението.
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 1.5 }}>
            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 1.5, p: 1.5, bgcolor: '#f8fafc' }}>
              <Typography variant="caption" color="text.secondary">
                Начало на селището
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                IV в. пр.н.е.
              </Typography>
            </Box>
            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 1.5, p: 1.5, bgcolor: '#f8fafc' }}>
              <Typography variant="caption" color="text.secondary">
                Първо светско училище
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                1848 г.
              </Typography>
            </Box>
            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 1.5, p: 1.5, bgcolor: '#f8fafc' }}>
              <Typography variant="caption" color="text.secondary">
                Освобождение
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                06.01.1878 г.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 2 }}>
            {historySections.map((section) => (
              <Box
                key={section.title}
                sx={{
                  border: '1px solid #d8dee8',
                  borderRadius: 2,
                  p: 2,
                  bgcolor: 'background.paper',
                  borderLeft: '4px solid #94a3b8',
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.8 }}>
                  {section.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                  {section.text}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: { xs: 2, md: 2.5 }, bgcolor: 'background.paper', borderLeft: '4px solid #64748b' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Просвета и възрожденски дейци
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 0.8 }}>
              Първото светско българско училище в Пещера е създадено през 1848 г., а читалището "Надежда" - през 1873 г.
              Изтъкнат възрожденски учител е Спас Зафиров - учител на Иван Вазов, Христо Ботев и Васил Левски.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
              В хайдушката чета на Тодор Банчев стават хайдути от Пещера - Тодор Фиданов, Сотир Келеш и Динко.
            </Typography>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: { xs: 2, md: 2.5 }, bgcolor: 'background.paper', borderLeft: '4px solid #0ea5e9' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Национално-освободителна борба и Освобождение
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 0.8 }}>
              В национално-освободителната борба Пещера дава на България Димитър и Атанас Горови и Георги Зафиров.
              В Опълчението участват от Пещера: Нешо Чипев, Никола М. Донски и Георги Стоилов.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
              Пещера е освободена в Руско-турската освободителна война на 06.01.1878 г. от 17-та рота на поручик
              Панин, а за гарнизон в Пещера остава VIII-ма рота на к-н Сафонов от 123-ти Козловски полк.
            </Typography>
          </Box>
        </Stack>
      ) : isGeoLocationPage ? (
        <Stack spacing={2}>
          <Box
            sx={{
              border: '1px solid #d8dee8',
              borderRadius: 2,
              p: { xs: 2, md: 2.5 },
              background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
            }}
          >
            <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 0.7 }}>
              Община Пещера
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.5 }}>
              Географско местоположение
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              Ключови характеристики за територия, релеф, свързаност и природни ресурси.
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(4, 1fr)' }, gap: 1.5 }}>
            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 1.5, p: 1.25, bgcolor: '#f8fafc' }}>
              <Typography variant="caption" color="text.secondary">
                Площ
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                17 472 ха
              </Typography>
            </Box>
            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 1.5, p: 1.25, bgcolor: '#f8fafc' }}>
              <Typography variant="caption" color="text.secondary">
                Н.в. Пещера
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                450-461 м
              </Typography>
            </Box>
            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 1.5, p: 1.25, bgcolor: '#f8fafc' }}>
              <Typography variant="caption" color="text.secondary">
                Горски фонд
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                около 40%
              </Typography>
            </Box>
            <Box sx={{ border: '1px solid #d8dee8', borderRadius: 1.5, p: 1.25, bgcolor: '#f8fafc' }}>
              <Typography variant="caption" color="text.secondary">
                Разстояние до София
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                125 км
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 2 }}>
            {geoSections.map((section) => (
              <Box
                key={section.title}
                sx={{
                  border: '1px solid #d8dee8',
                  borderRadius: 2,
                  p: 2,
                  bgcolor: 'background.paper',
                  borderLeft: '4px solid #38bdf8',
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.8 }}>
                  {section.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                  {section.text}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: { xs: 2, md: 2.5 }, bgcolor: 'background.paper', borderLeft: '4px solid #0ea5e9' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Климат
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 0.8 }}>
              Климатът в общината е умерен, без резки температурни колебания. Средната надморска височина на град
              Пещера е 461 м.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
              Средната годишна температура е 12.6oС. Валежите са сравнително добри - от 670 до 680 л/кв.м. годишно.
            </Typography>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: { xs: 2, md: 2.5 }, bgcolor: 'background.paper', borderLeft: '4px solid #16a34a' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Водни ресурси
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 0.8 }}>
              На територията на общината съществуват осем гравитачни извора с минимален дебит 20 л/с и максимален
              дебит 42 л/с, сондажни кладенци с дебит 30 л/с и един карстов извор с дебит 12 - 30 л/с.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
              Водните ресурси в Община Пещера са достатъчни за 100% водоснабдяване на населението, което е осъществено.
            </Typography>
          </Box>
        </Stack>
      ) : isMunicipalEnterprisesPage ? (
        <Stack spacing={2}>
          <Box
            sx={{
              border: '1px solid #d8dee8',
              borderRadius: 2,
              p: { xs: 2, md: 2.5 },
              bgcolor: '#f8fafc',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
            }}
          >
            <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 0.7 }}>
              Контакти → Връзка с нас
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.5 }}>
              Общински предприятия и фирми
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ТЕЛЕФОНЕН УКАЗАТЕЛ на Общинските предприятия и фирми в община Пещера
            </Typography>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper' }}>
            <Box sx={{ overflowX: 'auto' }}>
              <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse', minWidth: 660 }}>
                <Box component="thead" sx={{ bgcolor: '#f8fafc' }}>
                  <Box component="tr">
                    <Box component="th" sx={{ p: 1.25, borderBottom: '1px solid #e2e8f0', textAlign: 'left', width: 70 }}>
                      №
                    </Box>
                    <Box component="th" sx={{ p: 1.25, borderBottom: '1px solid #e2e8f0', textAlign: 'left' }}>
                      Предприятие / фирма
                    </Box>
                    <Box component="th" sx={{ p: 1.25, borderBottom: '1px solid #e2e8f0', textAlign: 'left', width: 180 }}>
                      Телефон
                    </Box>
                  </Box>
                </Box>
                <Box component="tbody">
                  {municipalEnterprises.map((row) => (
                    <Box component="tr" key={row.idx}>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9', verticalAlign: 'top' }}>
                        {row.idx}
                      </Box>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9', verticalAlign: 'top' }}>
                        {row.name}
                      </Box>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9', verticalAlign: 'top' }}>
                        <Link href={`tel:${row.phone.replace(/[^\d+]/g, '')}`} underline="hover" sx={{ fontWeight: 600 }}>
                          {row.phone}
                        </Link>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      ) : isBankAccountsPage ? (
        <Stack spacing={2}>
          <Box
            sx={{
              border: '1px solid #d8dee8',
              borderRadius: 2,
              p: { xs: 2, md: 2.5 },
              bgcolor: '#f8fafc',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
            }}
          >
            <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 0.7 }}>
              Общинска администрация
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.5 }}>
              Банкови сметки
            </Typography>
            <Typography variant="body2" color="text.secondary">
              БУЛСТАТ: 000351750
            </Typography>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: { xs: 2, md: 2.5 }, bgcolor: 'background.paper' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
              Плащане на местни данъци и такси, услуги по съответен вид плащане
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2} alignItems={{ xs: 'flex-start', sm: 'center' }}>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                IBAN: BG06SOMB91308432970244
              </Typography>
              <Button size="small" variant="outlined" onClick={() => copyToClipboard('BG06SOMB91308432970244', 'IBAN за местни данъци и такси')}>
                Копирай
              </Button>
            </Stack>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: { xs: 2, md: 2.5 }, bgcolor: 'background.paper' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
              За депозити и гаранции
            </Typography>
            <Stack spacing={1.2}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2} alignItems={{ xs: 'flex-start', sm: 'center' }}>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  IBAN: BG87SOMB91303332970201
                </Typography>
                <Button size="small" variant="outlined" onClick={() => copyToClipboard('BG87SOMB91303332970201', 'IBAN за депозити и гаранции')}>
                  Копирай
                </Button>
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2} alignItems={{ xs: 'flex-start', sm: 'center' }}>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  BIC: SOMBBGSF (Общинска банка / Municipal Bank)
                </Typography>
                <Button size="small" variant="outlined" onClick={() => copyToClipboard('SOMBBGSF', 'BIC')}>
                  Копирай
                </Button>
              </Stack>
            </Stack>
            {copyFeedback ? (
              <Typography variant="caption" color="primary" sx={{ mt: 1.25, display: 'block', fontWeight: 600 }}>
                {copyFeedback}
              </Typography>
            ) : null}
          </Box>
        </Stack>
      ) : isMayorPage ? (
        <Box
          sx={{
            border: '1px solid #d8dee8',
            borderRadius: 2,
            overflow: 'hidden',
            bgcolor: 'background.paper',
            boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
          }}
        >
          <Stack direction={{ xs: 'column', md: 'row' }}>
            <Box sx={{ p: 2.5, minWidth: { md: 300 }, maxWidth: { md: 340 }, bgcolor: '#f8fafc' }}>
              <Box
                component="img"
                src={asset('jordan-mladenov.png')}
                alt={mayor.name}
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  display: 'block',
                  mb: 2,
                  border: '1px solid #e2e8f0',
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.3 }}>
                {mayor.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {mayor.title}
              </Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />
            <Divider sx={{ display: { xs: 'block', md: 'none' } }} />
            <Box sx={{ p: 2.5, flex: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Контакти и приемно време
              </Typography>
              <Stack spacing={1.25}>
                <Box sx={{ p: 1.5, border: '1px solid #e2e8f0', borderRadius: 1.5 }}>
                  <Typography variant="caption" color="text.secondary">
                    Адрес
                  </Typography>
                  <Typography variant="body1">{mayor.office}</Typography>
                </Box>
                <Box sx={{ p: 1.5, border: '1px solid #e2e8f0', borderRadius: 1.5 }}>
                  <Typography variant="caption" color="text.secondary">
                    Телефон
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {mayor.phones.map((phone) => (
                      <Link key={phone} href={`tel:${phone.replace(/[^\d+]/g, '')}`} underline="hover" sx={{ fontWeight: 600 }}>
                        {phone}
                      </Link>
                    ))}
                  </Stack>
                </Box>
                <Box sx={{ p: 1.5, border: '1px solid #e2e8f0', borderRadius: 1.5 }}>
                  <Typography variant="caption" color="text.secondary">
                    Електронна поща
                  </Typography>
                  <Stack spacing={0.5}>
                    {mayor.emails.map((email) => (
                      <Link key={email} href={`mailto:${email}`} underline="hover" sx={{ fontWeight: 600 }}>
                        {email}
                      </Link>
                    ))}
                  </Stack>
                </Box>
                <Box sx={{ p: 1.5, border: '1px solid #e2e8f0', borderRadius: 1.5 }}>
                  <Typography variant="caption" color="text.secondary">
                    Приемен ден
                  </Typography>
                  <Typography variant="body1">{mayor.reception}</Typography>
                </Box>
              </Stack>
            </Box>
          </Stack>
          <Divider />
          <Box sx={{ p: 2.5 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
              Функции на кмета на общината
            </Typography>
            <Box
              component="ol"
              sx={{
                m: 0,
                pl: 3,
                '& li': { mb: 1.1, color: 'text.secondary' },
                '& li::marker': { fontWeight: 700, color: 'text.primary' },
              }}
            >
              {bullets?.map((b, i) => (
                <Typography key={i} component="li" variant="body2" sx={{ lineHeight: 1.75 }}>
                  {String(b).replace(/^\d+\.\s*/, '')}
                </Typography>
              ))}
            </Box>
            {paragraphs.slice(4).map((text, i) => (
              <Typography key={`tail-${i}`} variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.75, mt: 2 }}>
                {text}
              </Typography>
            ))}
          </Box>
        </Box>
      ) : isDeputyPage ? (
        <Stack spacing={2}>
          <Box
            sx={{
              border: '1px solid #d8dee8',
              borderRadius: 2,
              overflow: 'hidden',
              bgcolor: 'background.paper',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
            }}
          >
            <Stack direction={{ xs: 'column', md: 'row' }}>
              <Box sx={{ p: 2.5, minWidth: { md: 300 }, maxWidth: { md: 340 }, bgcolor: '#f8fafc' }}>
                {deputyMayors[0].image ? (
                  <Box
                    component="img"
                    src={deputyMayors[0].image}
                    alt={deputyMayors[0].name}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 2,
                      display: 'block',
                      mb: 2,
                      border: '1px solid #e2e8f0',
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      width: 92,
                      height: 92,
                      borderRadius: '50%',
                      bgcolor: '#e2e8f0',
                      color: '#334155',
                      display: 'grid',
                      placeItems: 'center',
                      fontWeight: 800,
                      fontSize: '1.15rem',
                      mb: 2,
                      border: '1px solid #cbd5e1',
                    }}
                  >
                    ЗК
                  </Box>
                )}
                <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.3 }}>
                  {deputyMayors[0].name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Заместник-кмет на Община Пещера
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />
              <Divider sx={{ display: { xs: 'block', md: 'none' } }} />
              <Box sx={{ p: 2.5, flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  Контакти и ресор
                </Typography>
                <Stack spacing={1.25}>
                  <Box sx={{ p: 1.5, border: '1px solid #e2e8f0', borderRadius: 1.5 }}>
                    <Typography variant="caption" color="text.secondary">
                      Адрес
                    </Typography>
                    <Typography variant="body1">{deputyMayors[0].office}</Typography>
                  </Box>
                  <Box sx={{ p: 1.5, border: '1px solid #e2e8f0', borderRadius: 1.5 }}>
                    <Typography variant="caption" color="text.secondary">
                      Електронна поща
                    </Typography>
                    {deputyMayors[0].email ? (
                      <Link href={`mailto:${deputyMayors[0].email}`} underline="hover" sx={{ fontWeight: 600 }}>
                        {deputyMayors[0].email}
                      </Link>
                    ) : (
                      <Typography variant="body1" color="text.secondary">
                        не е посочена
                      </Typography>
                    )}
                  </Box>
                  <Box sx={{ p: 1.5, border: '1px solid #e2e8f0', borderRadius: 1.5 }}>
                    <Typography variant="caption" color="text.secondary">
                      Приемен ден
                    </Typography>
                    <Typography variant="body1">{deputyMayors[0].reception}</Typography>
                  </Box>
                  <Box sx={{ p: 1.5, border: '1px solid #e2e8f0', borderRadius: 1.5 }}>
                    <Typography variant="caption" color="text.secondary">
                      Ресор
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                      {deputyMayors[0].scope}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Box>

          {deputyMayors.slice(1).map((person) => (
            <Box key={person.name} sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2, bgcolor: 'background.paper' }}>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                {person.image ? (
                  <Box
                    component="img"
                    src={person.image}
                    alt={person.name}
                    sx={{
                      width: { xs: '100%', md: 180 },
                      maxWidth: 220,
                      height: 'auto',
                      borderRadius: 1.5,
                      border: '1px solid #e2e8f0',
                      alignSelf: 'flex-start',
                    }}
                  />
                ) : null}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {person.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                    {person.office}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                    Приемен ден: {person.reception}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1.25 }}>
                    Електронна поща:{' '}
                    {person.email ? (
                      <Link href={`mailto:${person.email}`} underline="hover" sx={{ fontWeight: 600 }}>
                        {person.email}
                      </Link>
                    ) : (
                      'не е посочена'
                    )}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                    <strong>Ресор:</strong> {person.scope}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          ))}

          <Box sx={{ border: '1px solid #e2e8f0', borderRadius: 2, p: 2 }}>
            <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.75 }}>
              Кметът на общината, съответно кметът на района, назначава заместник-кметове в съответствие с одобрената
              численост и структура на общинската администрация и определя техните функции.
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.75 }}>
              Кметът на общината, съответно кметът на района, определя със заповед заместник-кмет, който го замества
              при отсъствието му от общината, съответно от района.
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.75 }}>
              Кметът на общината и кметът на района могат да оправомощават заместник-кметове да изпълняват техни
              правомощия в случаите, когато това е предвидено в закон.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
              Заместник-кмет може да бъде освободен без предизвестие със заповед на кмета на общината, съответно на
              кмета на района.
            </Typography>
          </Box>
        </Stack>
      ) : isSecretaryPage ? (
        <Box
          sx={{
            border: '1px solid #d8dee8',
            borderRadius: 2,
            overflow: 'hidden',
            bgcolor: 'background.paper',
            boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
          }}
        >
          <Stack direction={{ xs: 'column', md: 'row' }}>
            <Box sx={{ p: 2.5, minWidth: { md: 300 }, maxWidth: { md: 340 }, bgcolor: '#f8fafc' }}>
              <Box
                sx={{
                  width: 92,
                  height: 92,
                  borderRadius: '50%',
                  bgcolor: '#e2e8f0',
                  color: '#334155',
                  display: 'grid',
                  placeItems: 'center',
                  fontWeight: 800,
                  fontSize: '1.15rem',
                  mb: 2,
                  border: '1px solid #cbd5e1',
                }}
              >
                С
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.3 }}>
                {secretary.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {secretary.title}
              </Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />
            <Divider sx={{ display: { xs: 'block', md: 'none' } }} />
            <Box sx={{ p: 2.5, flex: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Контакти и приемно време
              </Typography>
              <Stack spacing={1.25}>
                <Box sx={{ p: 1.5, border: '1px solid #e2e8f0', borderRadius: 1.5 }}>
                  <Typography variant="caption" color="text.secondary">
                    Адрес
                  </Typography>
                  <Typography variant="body1">{secretary.office}</Typography>
                </Box>
                <Box sx={{ p: 1.5, border: '1px solid #e2e8f0', borderRadius: 1.5 }}>
                  <Typography variant="caption" color="text.secondary">
                    Електронна поща
                  </Typography>
                  <Link href={`mailto:${secretary.email}`} underline="hover" sx={{ fontWeight: 600 }}>
                    {secretary.email}
                  </Link>
                </Box>
                <Box sx={{ p: 1.5, border: '1px solid #e2e8f0', borderRadius: 1.5 }}>
                  <Typography variant="caption" color="text.secondary">
                    Приемен ден
                  </Typography>
                  <Typography variant="body1">{secretary.reception}</Typography>
                </Box>
              </Stack>
            </Box>
          </Stack>
          <Divider />
          <Box sx={{ p: 2.5 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
              Функции на секретаря на общината
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
              {secretary.scope}
            </Typography>
          </Box>
        </Box>
      ) : isVillagePage ? (
        <Stack spacing={2}>
          {villageLeaders.map((person) => (
            <Box key={person.name} sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2, bgcolor: 'background.paper' }}>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                {person.image ? (
                  <Box
                    component="img"
                    src={person.image}
                    alt={person.name}
                    sx={{
                      width: { xs: '100%', md: 180 },
                      maxWidth: 220,
                      height: 'auto',
                      borderRadius: 1.5,
                      border: '1px solid #e2e8f0',
                      alignSelf: 'flex-start',
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      width: 92,
                      height: 92,
                      borderRadius: '50%',
                      bgcolor: '#e2e8f0',
                      color: '#334155',
                      display: 'grid',
                      placeItems: 'center',
                      fontWeight: 800,
                      fontSize: '1.05rem',
                      border: '1px solid #cbd5e1',
                      alignSelf: 'flex-start',
                    }}
                  >
                    КМ
                  </Box>
                )}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                    {person.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                    {person.role}
                  </Typography>
                  {person.address ? (
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      {person.address}
                    </Typography>
                  ) : null}
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                    Телефон:{' '}
                    <Link href={`tel:${person.phone.replace(/[^\d+]/g, '')}`} underline="hover" sx={{ fontWeight: 600 }}>
                      {person.phone}
                    </Link>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Електронна поща:{' '}
                    <Link href={`mailto:${person.email}`} underline="hover" sx={{ fontWeight: 600 }}>
                      {person.email}
                    </Link>
                  </Typography>
                </Box>
              </Stack>
            </Box>
          ))}

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2.5, bgcolor: 'background.paper' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
              Функции на кмета на кметство
            </Typography>
            <Box component="ol" sx={{ m: 0, pl: 3, '& li': { mb: 1.05, color: 'text.secondary' } }}>
              {villageMayorFunctions.map((item, i) => (
                <Typography key={i} component="li" variant="body2" sx={{ lineHeight: 1.7 }}>
                  {item}
                </Typography>
              ))}
            </Box>
            <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.75, mt: 2 }}>
              Правомощията на кмет на кметство в населеното място, което е административен център на общината, се
              изпълняват от кмета на общината.
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.75 }}>
              Кметът на район и кметът на кметство могат да участват в заседанията на общинския съвет с право на
              съвещателен глас. Те се изслушват задължително при обсъждане на въпроси, отнасящи се за кметството или
              за района.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
              На кметовете на райони и кметства могат да бъдат възлагани и други функции със закон или друг нормативен
              акт, както и с правилника по чл. 21, ал. 3 в зависимост от конкретните особености на общината, районите
              или кметствата.
            </Typography>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2.5, bgcolor: 'background.paper' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
              Пълномощия на кметския наместник
            </Typography>
            <Box component="ol" sx={{ m: 0, pl: 3, '& li': { mb: 1.05, color: 'text.secondary' } }}>
              {deputyVicarFunctions.map((item, i) => (
                <Typography key={i} component="li" variant="body2" sx={{ lineHeight: 1.7 }}>
                  {item}
                </Typography>
              ))}
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mt: 2 }}>
              Кметският наместник може да участва в заседанията на общинския съвет с право на съвещателен глас. Той се
              изслушва задължително при обсъждане на въпроси, отнасящи се до населеното място.
            </Typography>
          </Box>
        </Stack>
      ) : isStructurePage ? (
        <Stack spacing={2}>
          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper' }}>
            <Box
              component="img"
              src={structure.image}
              alt="Структура на Общинска администрация Пещера"
              sx={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2.5, bgcolor: 'background.paper' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              {structure.regulationTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
              Приложен документ:
            </Typography>
            <Link href={structure.ethicsPdf} target="_blank" rel="noopener noreferrer" underline="hover" sx={{ fontWeight: 700 }}>
              ЕТИЧЕН КОДЕКС НА СЛУЖИТЕЛИТЕ В ОБЩИНСКАТА АДМИНИСТРАЦИЯ (4527 Kb)
            </Link>
          </Box>
        </Stack>
      ) : isDeclarations35Page ? (
        <Stack spacing={2}>
          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2.5, bgcolor: 'background.paper' }}>
            <Typography variant="body2" color="text.secondary">
              Приложение № 4
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Към Заповед № 66/0502.2018г.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              изм. със Заповед № 264/28.04.2020г.
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.4 }}>
              Публичен регистър на декларациите по чл. 35 от ЗПКОНПИ на Община Пещера
            </Typography>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper' }}>
            <Box sx={{ p: 1.5, borderBottom: '1px solid #e2e8f0' }}>
              <TextField
                size="small"
                fullWidth
                label="Търсене по №, име или длъжност"
                value={declarationsSearch}
                onChange={(e) => setDeclarationsSearch(e.target.value)}
              />
            </Box>
            <Box sx={{ overflowX: 'auto' }}>
              <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse', minWidth: 820 }}>
                <Box component="thead" sx={{ bgcolor: '#f8fafc' }}>
                  <Box component="tr">
                    <Box component="th" sx={{ p: 1.25, borderBottom: '1px solid #e2e8f0', textAlign: 'left', width: 50 }}>
                      №
                    </Box>
                    <Box component="th" sx={{ p: 1.25, borderBottom: '1px solid #e2e8f0', textAlign: 'left' }}>
                      Име, фамилия
                    </Box>
                    <Box component="th" sx={{ p: 1.25, borderBottom: '1px solid #e2e8f0', textAlign: 'left' }}>
                      Длъжност
                    </Box>
                    <Box component="th" sx={{ p: 1.25, borderBottom: '1px solid #e2e8f0', textAlign: 'left', width: 210 }}>
                      Декларация по чл.35, ал.1, т.1
                    </Box>
                    <Box component="th" sx={{ p: 1.25, borderBottom: '1px solid #e2e8f0', textAlign: 'left', width: 210 }}>
                      Декларация по чл.35, ал.1, т.2
                    </Box>
                  </Box>
                </Box>
                <Box component="tbody">
                  {filteredDeclarations35.map(({ idx, name, role, t1Link, t2Link }) => (
                    <Box component="tr" key={idx}>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9', verticalAlign: 'top' }}>
                        {idx}
                      </Box>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9', verticalAlign: 'top' }}>
                        {name}
                      </Box>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9', verticalAlign: 'top' }}>
                        {role}
                      </Box>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9', verticalAlign: 'top' }}>
                        {t1Link ? (
                          <Link href={t1Link} target="_blank" rel="noopener noreferrer" underline="hover" sx={{ fontWeight: 600 }}>
                            Декларация
                          </Link>
                        ) : (
                          'Декларация'
                        )}
                      </Box>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9', verticalAlign: 'top' }}>
                        {t2Link ? (
                          <Link href={t2Link} target="_blank" rel="noopener noreferrer" underline="hover" sx={{ fontWeight: 600 }}>
                            Декларация
                          </Link>
                        ) : (
                          'Декларация'
                        )}
                      </Box>
                    </Box>
                  ))}
                  {filteredDeclarations35.length === 0 ? (
                    <Box component="tr">
                      <Box component="td" colSpan={5} sx={{ p: 2, textAlign: 'center', color: 'text.secondary' }}>
                        Няма резултати за търсенето.
                      </Box>
                    </Box>
                  ) : null}
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      ) : isDeclarations49Page ? (
        <Stack spacing={2}>
          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2.5, bgcolor: 'background.paper' }}>
            <Typography variant="body2" color="text.secondary">
              Приложение №3
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              към заповед №773 от 20.11.2023г. на Кмета на Община Пещера
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.4 }}>
              Регистър на декларациите за чл. 49 от Закона за противодействие на корупцията
            </Typography>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper' }}>
            <Box sx={{ p: 1.5, borderBottom: '1px solid #e2e8f0' }}>
              <TextField
                size="small"
                fullWidth
                label="Търсене по вх.№, име или длъжност"
                value={declarationsSearch}
                onChange={(e) => setDeclarationsSearch(e.target.value)}
              />
            </Box>
            <Box sx={{ overflowX: 'auto' }}>
              <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse', minWidth: 860 }}>
                <Box component="thead" sx={{ bgcolor: '#f8fafc' }}>
                  <Box component="tr">
                    <Box component="th" sx={{ p: 1.25, borderBottom: '1px solid #e2e8f0', textAlign: 'left', width: 80 }}>№</Box>
                    <Box component="th" sx={{ p: 1.25, borderBottom: '1px solid #e2e8f0', textAlign: 'left', width: 170 }}>Вх.№ / Дата</Box>
                    <Box component="th" sx={{ p: 1.25, borderBottom: '1px solid #e2e8f0', textAlign: 'left', width: 210 }}>Декларация</Box>
                    <Box component="th" sx={{ p: 1.25, borderBottom: '1px solid #e2e8f0', textAlign: 'left' }}>Име презиме и фамилия</Box>
                    <Box component="th" sx={{ p: 1.25, borderBottom: '1px solid #e2e8f0', textAlign: 'left' }}>Заемана длъжност</Box>
                  </Box>
                </Box>
                <Box component="tbody">
                  {filtered49t2.map((r) => (
                    <Box component="tr" key={`t2-${r.idx}-${r.incoming}`}>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9', verticalAlign: 'top' }}>{r.idx}</Box>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9', verticalAlign: 'top' }}>{r.incoming}</Box>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9', verticalAlign: 'top' }}>
                        {r.declarationLink ? (
                          <Link href={r.declarationLink} target="_blank" rel="noopener noreferrer" underline="hover" sx={{ fontWeight: 600 }}>
                            {r.declaration}
                          </Link>
                        ) : (
                          r.declaration
                        )}
                      </Box>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9', verticalAlign: 'top' }}>{r.name}</Box>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9', verticalAlign: 'top' }}>{r.role}</Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2.5, bgcolor: 'background.paper' }}>
            <Typography variant="body2" color="text.secondary">
              Приложение №4
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              към заповед №773 от 20.11.2023г. на Кмета на Община Пещера
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.4 }}>
              Публичен регистър на декларациите по чл.49 ал.1 т.1 и т.3 от Закона за противодействие на корупцията
            </Typography>
          </Box>

          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper' }}>
            <Box sx={{ overflowX: 'auto' }}>
              <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse', minWidth: 860 }}>
                <Box component="thead" sx={{ bgcolor: '#f8fafc' }}>
                  <Box component="tr">
                    <Box component="th" sx={{ p: 1.25, borderBottom: '1px solid #e2e8f0', textAlign: 'left', width: 80 }}>№</Box>
                    <Box component="th" sx={{ p: 1.25, borderBottom: '1px solid #e2e8f0', textAlign: 'left', width: 170 }}>Вх.№ / Дата</Box>
                    <Box component="th" sx={{ p: 1.25, borderBottom: '1px solid #e2e8f0', textAlign: 'left', width: 210 }}>Декларация</Box>
                    <Box component="th" sx={{ p: 1.25, borderBottom: '1px solid #e2e8f0', textAlign: 'left' }}>Име презиме и фамилия</Box>
                    <Box component="th" sx={{ p: 1.25, borderBottom: '1px solid #e2e8f0', textAlign: 'left' }}>Заемана длъжност</Box>
                  </Box>
                </Box>
                <Box component="tbody">
                  {filtered49t13.map((r) => (
                    <Box component="tr" key={`t13-${r.idx}-${r.incoming}`}>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9', verticalAlign: 'top' }}>{r.idx}</Box>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9', verticalAlign: 'top' }}>{r.incoming}</Box>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9', verticalAlign: 'top' }}>
                        {r.declarationLink ? (
                          <Link href={r.declarationLink} target="_blank" rel="noopener noreferrer" underline="hover" sx={{ fontWeight: 600 }}>
                            {r.declaration}
                          </Link>
                        ) : (
                          r.declaration
                        )}
                      </Box>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9', verticalAlign: 'top' }}>{r.name}</Box>
                      <Box component="td" sx={{ p: 1.1, borderBottom: '1px solid #f1f5f9', verticalAlign: 'top' }}>{r.role}</Box>
                    </Box>
                  ))}
                  {filtered49t2.length === 0 && filtered49t13.length === 0 ? (
                    <Box component="tr">
                      <Box component="td" colSpan={5} sx={{ p: 2, textAlign: 'center', color: 'text.secondary' }}>
                        Няма резултати за търсенето.
                      </Box>
                    </Box>
                  ) : null}
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      ) : isProgramPage ? (
        <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper' }}>
          <Box sx={{ px: 2.5, py: 2, borderBottom: '1px solid #e2e8f0', bgcolor: '#f8fafc' }}>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              ПРОГРАМА ЗА УПРАВЛЕНИЕ НА ОБЩИНА ПЕЩЕРА 2023-2027 г.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              Официален текст 1:1 от страницата на общината
            </Typography>
          </Box>
          <Box
            sx={{
              p: 2.5,
              '& strong': { color: 'text.primary' },
            }}
          >
            {managementProgramText.split('\n').map((raw, i) => {
              const line = raw.trim();
              if (!line) return <Box key={`sp-${i}`} sx={{ height: 8 }} />;

              if (
                /^ПРОГРАМА\b/.test(line) ||
                /^ВЪВЕДЕНИЕ$/.test(line) ||
                /^ВОДЕЩИ ПРИНЦИПИ$/.test(line) ||
                /^ЦЕЛ\b/.test(line) ||
                /^ПРИОРИТЕТИ:?$/.test(line) ||
                /^ПРИОРИТЕТ\s+\d+/.test(line)
              ) {
                return (
                  <Typography key={`h-${i}`} variant="h6" sx={{ fontWeight: 700, mt: 1.75, mb: 1 }}>
                    {line}
                  </Typography>
                );
              }

              if (/^Дейност\s+\d+/.test(line)) {
                return (
                  <Typography key={`d-${i}`} variant="subtitle1" sx={{ fontWeight: 700, mt: 1.5, mb: 0.75 }}>
                    {line}
                  </Typography>
                );
              }

              if (/^(Срок:|Очаквани резултати:)/.test(line)) {
                return (
                  <Typography key={`m-${i}`} variant="body2" sx={{ lineHeight: 1.75, mb: 0.75 }}>
                    <Box component="span" sx={{ fontWeight: 700 }}>
                      {line.split(':')[0]}:
                    </Box>{' '}
                    {line.slice(line.indexOf(':') + 1).trim()}
                  </Typography>
                );
              }

              if (/^-/.test(line)) {
                return (
                  <Typography key={`b-${i}`} variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, pl: 1.5, mb: 0.5 }}>
                    • {line.replace(/^-+\s*/, '')}
                  </Typography>
                );
              }

              return (
                <Typography key={`p-${i}`} variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 0.9 }}>
                  {line}
                </Typography>
              );
            })}
          </Box>
        </Box>
      ) : (
        <>
          {paragraphs.map((text, i) => (
            <Typography key={i} variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.75 }}>
              {text}
            </Typography>
          ))}
          {bullets?.length > 0 && (
            <Box component="ul" sx={{ pl: 2.5, mb: 2, m: 0 }}>
              {bullets.map((b, i) => (
                <Typography key={i} component="li" variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                  {b}
                </Typography>
              ))}
            </Box>
          )}
        </>
      )}

      
    </Container>
  );
}
