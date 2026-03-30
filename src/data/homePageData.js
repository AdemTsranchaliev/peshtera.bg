import CampaignIcon from '@mui/icons-material/Campaign';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import GavelIcon from '@mui/icons-material/Gavel';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import { OFFICIAL_SITE } from './navigation';

/** Осем иконни връзки като на pazardzhik.bg (ред и подредба) */
export const homeIconLinks = [
  { title: 'Обяви и съобщения', to: '/novini', Icon: CampaignIcon },
  { title: 'Профил на купувача', to: '/razdel/profil-kupuvach', Icon: AssignmentIndIcon },
  { title: 'Търгове', to: '/razdel/targove-konkursi', Icon: GavelIcon },
  { title: 'Регистри', to: '/razdel/os-publichni-registri', Icon: ListAltIcon },
  { title: 'Услуги', to: '/razdel/elektronski-uslugi', Icon: SettingsSuggestIcon },
  { title: 'Кариери', to: '/razdel/konkursi-admin', Icon: WorkOutlineIcon },
  { title: 'Местни данъци и такси', to: '/razdel/mdt', Icon: AccountBalanceWalletIcon },
  { title: 'Административни услуги', to: '/razdel/admin-uslugi', Icon: RoomPreferencesIcon },
];

/** Ляв акордеон — тематични блокове като на pazardzhik.bg */
export const homeAccordionSections = [
  {
    id: 'energy',
    title: 'НП Енергийна ефективност',
    links: [
      { label: 'Методически указания', to: '/razdel/energiyna-efektivnost' },
      { label: 'Информация / регистър', to: '/razdel/energiyna-efektivnost' },
    ],
  },
  {
    id: 'transport',
    title: 'Транспорт',
    links: [
      { label: 'Автобусен транспорт', href: `${OFFICIAL_SITE}index.php?option=com_content&view=category&id=96` },
      { label: 'Полезни връзки', to: '/razdel/polezni-vrazki' },
    ],
  },
  {
    id: 'tourism',
    title: 'Туризъм',
    links: [{ label: 'Забележителности и туризъм', to: '/razdel/turizam' }],
  },
  {
    id: 'business',
    title: 'Бизнес и финанси',
    links: [
      { label: 'Местни данъци и такси', to: '/razdel/mdt' },
      { label: 'Общински бюджет', to: '/razdel/obshtinski-byudzhet' },
      { label: 'Банкови сметки', to: '/razdel/bankovi-smetki' },
    ],
  },
  {
    id: 'education',
    title: 'Образование',
    links: [
      { label: 'Училища и детски градини', to: '/razdel/obrazovanie' },
      { label: 'Култура и читалища', to: '/razdel/kultura' },
    ],
  },
];

/** Слайдер — водещи теми (по модела на pazardzhik.bg) */
export const homeBannerSlides = [
  {
    title: 'Топъл обяд в община Пещера',
    subtitle: 'Информация за социалната услуга и критерии за участие.',
    to: '/razdel/inovativni-uslugi',
  },
  {
    title: 'Проекти и европейско финансиране',
    subtitle: 'Енергийна ефективност, ВЕИ и зелени инициативи на територията на общината.',
    to: '/razdel/proekti',
  },
  {
    title: 'Преброяване на безстопанствени кучета',
    subtitle: 'Актуални заповеди и график на дейностите по Националната програма.',
    to: '/novini',
  },
  {
    title: 'Обществено обсъждане и ОВОС',
    subtitle: 'Съобщения до заинтересованите лица по ЗУТ и екология.',
    to: '/novini',
  },
  {
    title: 'Дърва за огрев — отоплителен сезон',
    subtitle: 'Критерии, срокове и подаване на заявления.',
    to: '/novini',
  },
];

/** Събития — примерни заглавия в стила на календара */
export const homeEvents = [
  { title: 'Заседание на Общински съвет', to: '/razdel/os-zasedaniya' },
  { title: 'Обществено обсъждане — изменение на ОУП', to: '/novini' },
  { title: 'Културна проява — читалище „Развитие“', to: '/razdel/kultura' },
  { title: 'Информационна кампания — ИУЕЕО', to: '/novini' },
];
