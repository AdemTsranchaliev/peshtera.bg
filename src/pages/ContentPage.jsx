import { useEffect, useMemo, useState } from 'react';
import { Box, Button, CircularProgress, Container, Divider, Link, Stack, TextField, Typography } from '@mui/material';
import { Link as RouterLink, useLocation, Navigate } from 'react-router-dom';
import { pathToNav, OFFICIAL_SITE } from '../data/navigation';
import { getPageContent, OFFICIAL_SITEMAP_URL } from '../data/siteContent';
import municipalityMirrorPaths from '../data/municipalityMirrorPaths.js';
import declarations35Data from '../data/declarations35.json';

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
  const node = pathToNav.get(pathname);
  const [mirrorEntry, setMirrorEntry] = useState(undefined);
  const [declarationsSearch, setDeclarationsSearch] = useState('');

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

  const { title, paragraphs, bullets } = getPageContent(pathname, node);
  const showMirror = mirrorEntry?.html;
  const mirrorLoading = mirrorEntry === undefined;
  const isMayorPage = pathname === '/razdel/kmet';
  const isDeputyPage = pathname === '/razdel/zam-kmetove';
  const isSecretaryPage = pathname === '/razdel/sekretar';
  const isVillagePage = pathname === '/razdel/kmetove-kmetstva';
  const isStructurePage = pathname === '/razdel/struktura-administratsiya';
  const isDeclarations35Page = pathname === '/razdel/deklaratsii-35';
  const isDeclarations49Page = pathname === '/razdel/deklaratsii-49';
  const hasCustomLayout =
    isMayorPage || isDeputyPage || isSecretaryPage || isVillagePage || isStructurePage || isDeclarations35Page || isDeclarations49Page;
  const mayor = {
    name: 'Йордан Стоянов Младенов',
    title: 'Кмет на Община Пещера',
    office: 'Община Пещера, стая 7, ет. 1',
    phones: ['0350/6-22-01'],
    emails: ['y.mladenov@peshtera.bg', 'mayor@peshtera.bg'],
    reception: 'Всеки понеделник, 14:00 - 17:00',
  };
  const deputyMayors = [
    {
      name: 'Гълъбина Карамитрева',
      office: 'Община Пещера, стая 14, ет.1',
      email: 'g.karamitreva@peshtera.bg',
      reception: 'всяка сряда от 14.30 часа до 17.00 часа',
      scope:
        'Заместник-кмет: финанси и човешки ресурси, европейски фондове и обществени поръчки, МКБППМН, Общинско предприятие „Обредни дейности”, трудова заетост и подпомагане, Клубове на инвалида и Клуб на пенсионера), звено Крепост „Перистера”, координация с органите на полицията и съдебната система. Ръководи, координира и контролира дейността на екипите за управление на проекти.',
      image: '/galabina-karamitreva.png',
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
      image: '/nansi-todorova.png',
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
    image: '/struktura-admin.png',
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
            По-долу е възпроизведено съдържанието от съответната страница на{' '}
            <a href={OFFICIAL_SITE} target="_blank" rel="noopener noreferrer">
              www.peshtera.bg
            </a>
            . За най-актуални файлове и формуляри отворете оригинала.
          </Typography>
          <Box
            className="municipality-mirror"
            sx={mirrorSx}
            dangerouslySetInnerHTML={{ __html: mirrorEntry.html }}
          />
        </>
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
                src="/jordan-mladenov.png"
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

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 3, flexWrap: 'wrap' }}>
        {mirrorEntry?.sourceUrl ? (
          <Button variant="contained" href={mirrorEntry.sourceUrl} target="_blank" rel="noopener noreferrer" size="medium">
            Оригинална страница (официален сайт)
          </Button>
        ) : (
          <Button variant="contained" href={OFFICIAL_SITE} target="_blank" rel="noopener noreferrer" size="medium">
            Към www.peshtera.bg
          </Button>
        )}
        <Button variant="outlined" href={OFFICIAL_SITE} target="_blank" rel="noopener noreferrer" size="medium">
          Начало на официалния портал
        </Button>
        <Button variant="outlined" href={OFFICIAL_SITEMAP_URL} target="_blank" rel="noopener noreferrer" size="medium">
          Карта на сайта (официална)
        </Button>
        <Button component={RouterLink} to="/karta-na-saita" variant="outlined" size="medium">
          Карта в този портал
        </Button>
      </Stack>
    </Container>
  );
}
