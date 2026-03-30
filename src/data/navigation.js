/**
 * Официален домейн и помощни функции. Дървото на менюто е в navTree.js
 * (структура по карта на сайта www.peshtera.bg).
 */
import { navTree } from './navTree';

export { navTree };
export const OFFICIAL_SITE = 'https://www.peshtera.bg/';

export const hotline = {
  phones: ['0350 6 22 03', '035062216', '0893532069'],
  address: '4550 гр. Пещера, ул. „Дойранска епопея“ № 17',
  emailNote: 'Официалният имейл е публикуван на www.peshtera.bg',
};

export function flattenNav(items, acc = []) {
  for (const item of items) {
    acc.push({ label: item.label, path: item.path, hash: item.hash });
    if (item.children?.length) flattenNav(item.children, acc);
  }
  return acc;
}

export const pathToNav = new Map();
(function indexPaths(items) {
  for (const item of items) {
    if (item.path && item.path !== '/' && !item.hash) {
      pathToNav.set(item.path, item);
    }
    if (item.children?.length) indexPaths(item.children);
  }
})(navTree);
