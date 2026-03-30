import { Box, Container, Divider, Link, Stack, Typography } from '@mui/material';
import { hotline, OFFICIAL_SITE } from '../data/navigation';

export default function ContactPage() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" sx={{ fontWeight: 600, mb: 2 }}>
        Контакти
      </Typography>

      <Box id="adres" sx={{ scrollMarginTop: 96 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Адрес
        </Typography>
        <Typography variant="body1">{hotline.address}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Център за административно обслужване — партерен етаж на сградата на общината.
        </Typography>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box id="rabotno-vreme" sx={{ scrollMarginTop: 96 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Работно време
        </Typography>
        <Typography variant="body1">Понеделник – петък: 08:30 – 17:30 (с прекъсва 12:30 – 13:30)</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Уточнете актуално работно време и приемни дни на{' '}
          <Link href={OFFICIAL_SITE} target="_blank" rel="noopener noreferrer">
            официалния сайт
          </Link>
          .
        </Typography>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box id="goresht-telefon" sx={{ scrollMarginTop: 96 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Телефони и гореща линия
        </Typography>
        <Stack spacing={0.5}>
          {hotline.phones.map((p) => (
            <Link key={p} href={`tel:${p.replace(/\s/g, '')}`} variant="body1">
              {p}
            </Link>
          ))}
        </Stack>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Typography variant="body2" color="text.secondary">
        {hotline.emailNote}
      </Typography>
    </Container>
  );
}
