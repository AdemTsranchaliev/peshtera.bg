/** Локация за React Router (поддръжка на якоря към контакти). */
export function navLinkTo(node) {
  if (!node?.path) return '/';
  if (node.hash) return { pathname: node.path, hash: node.hash };
  return node.path;
}
