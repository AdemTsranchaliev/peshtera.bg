import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Link as RouterLink, useLocation, Navigate } from 'react-router-dom';
import { pathToNav, OFFICIAL_SITE } from '../data/navigation';
import { getPageContent, OFFICIAL_SITEMAP_URL } from '../data/siteContent';

export default function ContentPage() {
  const { pathname } = useLocation();
  const node = pathToNav.get(pathname);

  if (!node) {
    return <Navigate to="/" replace />;
  }

  const { title, paragraphs, bullets } = getPageContent(pathname, node);

  return (
    <Container maxWidth="md" sx={{ py: 1 }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
        {title}
      </Typography>
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
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 2, flexWrap: 'wrap' }}>
        <Button variant="contained" href={OFFICIAL_SITE} target="_blank" rel="noopener noreferrer" size="medium">
          Към www.peshtera.bg
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
