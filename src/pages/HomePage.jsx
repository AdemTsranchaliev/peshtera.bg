import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
  Chip,
} from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GavelIcon from '@mui/icons-material/Gavel';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import { Link as RouterLink } from 'react-router-dom';
import { sampleNews } from '../data/news';
import { OFFICIAL_SITE } from '../data/navigation';
import { pz } from '../theme/pazardzhikPalette';

const quickLinks = [
  {
    title: 'Търгове и конкурси',
    to: '/razdel/targove-konkursi',
    icon: <GavelIcon sx={{ color: pz.navGreen, fontSize: 28 }} />,
  },
  {
    title: 'Местни данъци и такси',
    to: '/razdel/mdt',
    icon: <AccountBalanceIcon sx={{ color: pz.navGreen, fontSize: 28 }} />,
  },
  {
    title: 'Профил на купувача',
    to: '/razdel/profil-kupuvach',
    icon: <ArticleOutlinedIcon sx={{ color: pz.navGreen, fontSize: 28 }} />,
  },
  {
    title: 'Електронни услуги',
    to: '/razdel/elektronski-uslugi',
    icon: <CloudOutlinedIcon sx={{ color: pz.navGreen, fontSize: 28 }} />,
  },
];

function SectionTitle({ children, sx }) {
  return (
    <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2, ...sx }}>
      <Box sx={{ width: 4, height: 28, bgcolor: pz.navGreen, borderRadius: 0.5 }} aria-hidden />
      <Typography variant="h5" component="h2" sx={{ fontWeight: 700, color: pz.primary }}>
        {children}
      </Typography>
    </Stack>
  );
}

export default function HomePage() {
  const featured = sampleNews.slice(0, 4);

  return (
    <Container maxWidth="lg">
      {/* Hero — в духа на слайдера / водещия блок на pazardzhik.bg */}
      <Box
        sx={{
          mb: 4,
          borderRadius: 0,
          overflow: 'hidden',
          boxShadow: '0 4px 24px rgba(0, 75, 33, 0.15)',
          border: `1px solid ${pz.borderFooter}`,
        }}
      >
        <Box
          sx={{
            background: `linear-gradient(105deg, ${pz.primary} 0%, ${pz.primaryStripe} 42%, ${pz.navGreen} 100%)`,
            color: pz.white,
            position: 'relative',
            px: { xs: 2.5, md: 4 },
            py: { xs: 3, md: 5 },
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              opacity: 0.07,
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 12px,
                rgba(255,255,255,0.35) 12px,
                rgba(255,255,255,0.35) 14px
              )`,
              pointerEvents: 'none',
            }}
            aria-hidden
          />
          <Box sx={{ position: 'relative', maxWidth: 800 }}>
            <Typography
              variant="overline"
              sx={{ color: pz.textOnDarkMuted, fontWeight: 700, letterSpacing: 1 }}
            >
              Община Пещера · област Пазарджик
            </Typography>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontFamily: '"Exo 2", sans-serif',
                fontWeight: 700,
                my: 1.5,
                fontSize: { xs: '1.65rem', sm: '2rem', md: '2.35rem' },
                lineHeight: 1.2,
                textTransform: 'uppercase',
                letterSpacing: 0.5,
              }}
            >
              Добре дошли в община Пещера
            </Typography>
            <Typography variant="body1" sx={{ color: pz.textOnDarkMuted, mb: 3, lineHeight: 1.65 }}>
              Официален информационен портал: администрация, Общински съвет, електронни услуги, обяви и
              прозрачност — по структура и визуален стил, съвместими с модела на общинските портали в България.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
              <Button
                variant="contained"
                component={RouterLink}
                to="/novini"
                size="large"
                sx={{
                  bgcolor: pz.accentGold,
                  color: pz.councilBtn,
                  fontWeight: 700,
                  px: 3,
                  '&:hover': { bgcolor: pz.white, color: pz.primary },
                }}
              >
                Актуални новини
              </Button>
              <Button
                variant="outlined"
                component="a"
                href={OFFICIAL_SITE}
                target="_blank"
                rel="noopener noreferrer"
                size="large"
                sx={{
                  borderColor: 'rgba(255,255,255,0.55)',
                  color: pz.white,
                  fontWeight: 600,
                  '&:hover': { borderColor: pz.white, bgcolor: 'rgba(255,255,255,0.08)' },
                }}
              >
                Пълно съдържание на peshtera.bg
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>

      <SectionTitle>Бързи връзки</SectionTitle>
      <Grid container spacing={2} sx={{ mb: 5 }}>
        {quickLinks.map((q) => (
          <Grid item xs={12} sm={6} md={3} key={q.to}>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                borderLeft: `4px solid ${pz.navGreen}`,
                borderColor: pz.borderFooter,
                transition: 'box-shadow 0.2s, border-color 0.2s',
                '&:hover': {
                  boxShadow: '0 6px 20px rgba(0, 75, 33, 0.1)',
                  borderColor: `${pz.navGreen} !important`,
                },
              }}
            >
              <CardActionArea component={RouterLink} to={q.to} sx={{ height: '100%', alignItems: 'stretch' }}>
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 1,
                        bgcolor: pz.topBarBg,
                        display: 'grid',
                        placeItems: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {q.icon}
                    </Box>
                    <Typography variant="subtitle1" fontWeight={700} sx={{ color: pz.primary }}>
                      {q.title}
                    </Typography>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
        <SectionTitle sx={{ mb: 0 }}>Публикации</SectionTitle>
        <Button
          component={RouterLink}
          to="/novini"
          size="small"
          sx={{ color: pz.navGreen, fontWeight: 700, '&:hover': { bgcolor: 'rgba(0, 117, 51, 0.06)' } }}
        >
          Всички новини
        </Button>
      </Stack>

      <Grid container spacing={2}>
        {featured.map((n) => (
          <Grid item xs={12} md={6} key={n.id}>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                borderColor: pz.borderFooter,
                borderTop: `3px solid ${pz.themeGreen}`,
                '&:hover': { borderColor: pz.navGreen },
              }}
            >
              <CardContent>
                <Chip
                  label={n.date}
                  size="small"
                  sx={{
                    mb: 1,
                    bgcolor: pz.topBarBg,
                    color: pz.primary,
                    fontWeight: 600,
                    border: `1px solid ${pz.borderFooter}`,
                  }}
                />
                <Typography variant="h6" component="h3" sx={{ fontSize: '1.05rem', fontWeight: 700, mb: 1, color: pz.primary }}>
                  {n.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {n.excerpt}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
