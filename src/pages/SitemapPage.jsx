import { Box, Container, Link, List, ListItem, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { flattenNav, navTree } from '../data/navigation';
import { navLinkTo } from '../utils/navLinkTo';
import { OFFICIAL_SITEMAP_URL } from '../data/siteContent';

function SitemapBranch({ items, depth = 0 }) {
  return (
    <List
      component="ul"
      dense
      sx={{
        pl: depth === 0 ? 0 : 2,
        py: 0,
        listStyleType: depth === 0 ? 'none' : 'disc',
      }}
    >
      {items.map((item) => (
        <ListItem
          key={`${item.id}-${item.path || ''}-${item.label}`}
          sx={{
            display: 'list-item',
            flexDirection: 'column',
            alignItems: 'flex-start',
            py: 0.35,
            pl: depth === 0 ? 0 : 2,
          }}
        >
          <Link component={RouterLink} to={navLinkTo(item)} underline="hover" variant="body2">
            {item.label}
          </Link>
          {item.children?.length > 0 && <SitemapBranch items={item.children} depth={depth + 1} />}
        </ListItem>
      ))}
    </List>
  );
}

function ListLinks({ items }) {
  return (
    <List dense>
      {items.map((entry) => (
        <ListItem key={`${entry.path}${entry.hash || ''}-${entry.label}`} disablePadding sx={{ py: 0.25 }}>
          <Link component={RouterLink} to={navLinkTo(entry)} underline="hover">
            {entry.label}
          </Link>
        </ListItem>
      ))}
    </List>
  );
}

export default function SitemapPage() {
  const flat = flattenNav(navTree);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
        Карта на сайта
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
        Йерархия по структурата на{' '}
        <Link href="https://www.peshtera.bg/" target="_blank" rel="noopener noreferrer">
          www.peshtera.bg
        </Link>{' '}
        и{' '}
        <Link href={OFFICIAL_SITEMAP_URL} target="_blank" rel="noopener noreferrer">
          официалната карта (xmap)
        </Link>
        . Всички вътрешни страници съдържат резюме; пълните материали са на официалния портал.
      </Typography>
      <Box component="section" aria-labelledby="tree-heading" sx={{ mb: 4 }}>
        <Typography id="tree-heading" variant="h6" sx={{ mb: 1.5, fontWeight: 700 }}>
          Дърво на разделите
        </Typography>
        <SitemapBranch items={navTree} />
      </Box>
      <Box component="section" aria-labelledby="flat-heading">
        <Typography id="flat-heading" variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
          Азбучен списък на връзките
        </Typography>
        <ListLinks items={flat} />
      </Box>
    </Container>
  );
}
