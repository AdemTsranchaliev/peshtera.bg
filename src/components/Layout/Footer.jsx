import { Box, Container, Divider, Grid, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { hotline, OFFICIAL_SITE } from '../../data/navigation';
import { pz, pzFooterGradient } from '../../theme/pazardzhikPalette';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        background: pzFooterGradient,
        borderTop: `2px solid ${pz.borderFooter}`,
        color: pz.textOnDarkMuted,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          bgcolor: pz.primary,
          py: 4,
          '&::after': {
            content: '""',
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderWidth: '120px 40px 0 0',
            borderColor: `${pz.primaryStripe} transparent transparent transparent`,
            pointerEvents: 'none',
            opacity: 0.35,
            display: { xs: 'none', md: 'block' },
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Exo 2", sans-serif',
                  color: pz.white,
                  mb: 1,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: 0.5,
                }}
              >
                Община Пещера
              </Typography>
              <Typography variant="body2" sx={{ mb: 1, color: pz.textOnDarkMuted }}>
                {hotline.address}
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                Център за административно обслужване — партерен етаж
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography
                variant="subtitle1"
                sx={{ color: pz.white, fontWeight: 700, mb: 1, fontFamily: '"Exo 2", sans-serif' }}
              >
                Телефони
              </Typography>
              <Stack spacing={0.5}>
                {hotline.phones.map((p) => (
                  <Link
                    key={p}
                    href={`tel:${p.replace(/\s/g, '')}`}
                    underline="hover"
                    sx={{ color: pz.textOnDarkMuted, fontWeight: 600, '&:hover': { color: pz.white } }}
                  >
                    {p}
                  </Link>
                ))}
              </Stack>
              <Typography variant="caption" sx={{ display: 'block', mt: 1.5, opacity: 0.9 }}>
                За приемна на кмета и спешни случаи вижте раздел „Контакти“.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography
                variant="subtitle1"
                sx={{ color: pz.white, fontWeight: 700, mb: 1, fontFamily: '"Exo 2", sans-serif' }}
              >
                Връзки
              </Typography>
              <Link
                href={OFFICIAL_SITE}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                sx={{ color: pz.textOnDarkMuted, display: 'block', mb: 1, '&:hover': { color: pz.white } }}
              >
                Към настоящия официален сайт www.peshtera.bg
              </Link>
              <Typography variant="body2">
                <Link
                  component={RouterLink}
                  to="/karta-na-saita"
                  underline="hover"
                  sx={{ color: pz.accentGold, fontWeight: 600, '&:hover': { color: pz.white } }}
                >
                  Карта на сайта
                </Link>
                <Typography component="span" sx={{ mx: 1, color: 'rgba(255,255,255,0.4)' }}>
                  |
                </Typography>
                <Link
                  component={RouterLink}
                  to="/kontakti"
                  underline="hover"
                  sx={{ color: pz.accentGold, fontWeight: 600, '&:hover': { color: pz.white } }}
                >
                  Контакти
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.15)' }} />
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)' }}>
            © {new Date().getFullYear()} Община Пещера. Всички права запазени. |{' '}
            <Link
              component={RouterLink}
              to="/razdel/zashtita-lichni-danni"
              underline="hover"
              sx={{ color: pz.textOnDarkMuted, '&:hover': { color: pz.white } }}
            >
              Защита на личните данни
            </Link>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
