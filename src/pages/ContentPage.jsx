import { Box, Button, Container, Typography } from '@mui/material';
import { useLocation, Navigate } from 'react-router-dom';
import { OFFICIAL_SITE, pathToNav } from '../data/navigation';

export default function ContentPage() {
  const { pathname } = useLocation();
  const node = pathToNav.get(pathname);

  if (!node) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" sx={{ fontWeight: 600, mb: 2 }}>
        {node.label}
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Този портал е изграден с Material UI и React и възпроизвежда организационната структура и навигацията
        на официалния сайт на Община Пещера. Тук можете да публикувате пълните текстове, PDF и връзки към
        електронни регистри, след като ги пренесете от настоящата система или CMS.
      </Typography>
      <Typography variant="body1" paragraph>
        За действащи нормативни актове, заповеди, решения на Общинския съвет, профил на купувача и
        административни услуги използвайте официалния източник, докато миграцията не приключи.
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Button variant="contained" href={OFFICIAL_SITE} target="_blank" rel="noopener noreferrer" size="large">
          Отвори www.peshtera.bg
        </Button>
      </Box>
    </Container>
  );
}
