import { Box, Container, Link, List, ListItem, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { flattenNav } from '../data/navigation';
import { navLinkTo } from '../utils/navLinkTo';

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
      <Typography variant="h4" component="h1" sx={{ fontWeight: 600, mb: 2 }}>
        Карта на сайта
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Всички раздели, съответстващи на структурата на менюто на{' '}
        <Link href="https://www.peshtera.bg/" target="_blank" rel="noopener noreferrer">
          www.peshtera.bg
        </Link>
        .
      </Typography>
      <Box component="section" aria-labelledby="flat-heading">
        <Typography id="flat-heading" variant="h6" sx={{ mb: 1 }}>
          Азбучен списък на страниците
        </Typography>
        <ListLinks items={flat} />
      </Box>
    </Container>
  );
}
