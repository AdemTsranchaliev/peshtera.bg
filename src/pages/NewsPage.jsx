import { useMemo, useState } from 'react';
import { Box, Button, Card, CardContent, Container, Stack, Typography, Chip, TextField, MenuItem } from '@mui/material';
import { Link as RouterLink, Navigate, useParams } from 'react-router-dom';
import { sampleNews } from '../data/news';

export default function NewsPage() {
  const { '*': slug } = useParams();
  const [search, setSearch] = useState('');
  const [year, setYear] = useState('all');
  const [date, setDate] = useState('');

  const selectedNews = slug ? sampleNews.find((n) => n.id === slug) : null;
  const years = Array.from(new Set(sampleNews.map((n) => n.date.slice(0, 4)))).sort((a, b) => Number(b) - Number(a));
  const filteredNews = useMemo(() => {
    const q = search.trim().toLowerCase();
    return sampleNews.filter((n) => {
      const byYear = year === 'all' || n.date.startsWith(`${year}-`);
      const byDate = !date || n.date === date;
      const bySearch = !q || `${n.title} ${n.excerpt}`.toLowerCase().includes(q);
      return byYear && byDate && bySearch;
    });
  }, [search, year, date]);

  if (slug && !selectedNews) {
    return <Navigate to="/novini" replace />;
  }

  if (selectedNews) {
    return (
      <Container maxWidth="md">
        <Stack spacing={2}>
          <Button component={RouterLink} to="/novini" variant="outlined" size="small" sx={{ alignSelf: 'flex-start' }}>
            ← Назад към новини и архив
          </Button>
          <Card variant="outlined">
            <CardContent>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                <Chip label={selectedNews.date} size="small" variant="outlined" />
              </Stack>
              <Typography variant="h5" component="h1" sx={{ fontWeight: 700 }}>
                {selectedNews.title}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1.5, lineHeight: 1.8 }}>
                {selectedNews.excerpt}
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" sx={{ fontWeight: 600, mb: 1 }}>
        Новини и архив новини
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Всички публикации са на едно място с филтри по година, дата и текст.
      </Typography>
      <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 1.5, bgcolor: 'background.paper', mb: 2 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr 1fr' }, gap: 1.25 }}>
          <TextField size="small" label="Търсене в заглавие/текст" value={search} onChange={(e) => setSearch(e.target.value)} fullWidth />
          <TextField size="small" select label="Филтър по година" value={year} onChange={(e) => setYear(e.target.value)} fullWidth>
            <MenuItem value="all">Всички години</MenuItem>
            {years.map((y) => (
              <MenuItem key={y} value={y}>
                {y}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            size="small"
            type="date"
            label="Филтър по дата"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Box>
      </Box>
      <Stack spacing={2}>
        {filteredNews.map((n) => (
          <Card key={n.id} variant="outlined">
            <CardContent>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                <Chip label={n.date} size="small" variant="outlined" />
              </Stack>
              <Typography
                component={RouterLink}
                to={`/novini/${n.id}`}
                variant="h6"
                sx={{ fontSize: '1.1rem', fontWeight: 700, color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
              >
                {n.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {n.excerpt}
              </Typography>
              <Box sx={{ mt: 1.2 }}>
                <Button component={RouterLink} to={`/novini/${n.id}`} size="small" variant="outlined">
                  Прочети
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
        {filteredNews.length === 0 ? (
          <Box sx={{ border: '1px solid #d8dee8', borderRadius: 2, p: 2, textAlign: 'center', color: 'text.secondary' }}>
            Няма резултати за избраните филтри.
          </Box>
        ) : null}
      </Stack>
    </Container>
  );
}
