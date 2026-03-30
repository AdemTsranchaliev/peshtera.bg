import { Box, Button, Card, CardContent, Container, Stack, Typography, Chip } from '@mui/material';
import { sampleNews } from '../data/news';
import { OFFICIAL_SITE } from '../data/navigation';

export default function NewsPage() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" sx={{ fontWeight: 600, mb: 1 }}>
        Новини, обяви и съобщения
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        По-долу са примерни заглавия в стила на публикациите на официалния сайт. За пълен архив, прикачени
        файлове и точни дати вижте{' '}
        <Button href={OFFICIAL_SITE} target="_blank" rel="noopener noreferrer" size="small">
          www.peshtera.bg
        </Button>
        .
      </Typography>
      <Stack spacing={2}>
        {sampleNews.map((n) => (
          <Card key={n.id} variant="outlined">
            <CardContent>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                <Chip label={n.date} size="small" variant="outlined" />
              </Stack>
              <Typography variant="h6" component="h2" sx={{ fontSize: '1.1rem', fontWeight: 600 }}>
                {n.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {n.excerpt}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
