import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  Divider,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { sampleNews } from '../data/news';
import { OFFICIAL_SITE } from '../data/navigation';
import { heroCarouselSlides } from '../data/heroCarousel';
import { pz } from '../theme/pazardzhikPalette';
import {
  homeIconLinks,
  homeAccordionSections,
  homeBannerSlides,
  homeEvents,
} from '../data/homePageData';
import PzBoxPrimary from '../components/home/PzBoxPrimary';
import HomeBannerSlider from '../components/home/HomeBannerSlider';
import HomeTopicAccordion from '../components/home/HomeTopicAccordion';
import HomeHeroCarousel from '../components/home/HomeHeroCarousel';

function formatBgDate(iso) {
  const [y, m, d] = iso.split('-');
  return `${d}.${m}.${y}`;
}

function splitIsoDate(iso) {
  const [y, mo, d] = iso.split('-');
  return { d, mo, y };
}

export default function HomePage() {
  const [email, setEmail] = useState('');
  const newsFour = sampleNews.slice(0, 4);
  const announcements = sampleNews.slice(0, 4);

  return (
    <>
      {/* Пълна ширина спрямо viewport, съдържанието подравнено към maxWidth lg */}
      <Box
        sx={{
          width: '100vw',
          maxWidth: '100%',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          mb: { xs: 3, md: 4 },
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2, md: 3 } }}>
          <HomeHeroCarousel slides={heroCarouselSlides} />
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ pb: { xs: 3, md: 5 }, px: { xs: 2, md: 3 } }}>
        <Typography
          component="h1"
          variant="h1"
          sx={{
            position: 'absolute',
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            border: 0,
          }}
        >
          Добре дошли в община Пещера!
        </Typography>

        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mb: { xs: 3, md: 4 } }}>
          <Grid item xs={12} md={6} lg={3}>
            <Box
              component="nav"
              aria-label="Основни връзки"
              sx={{
                border: `1px solid ${pz.borderFooter}`,
                bgcolor: pz.white,
                p: 1.5,
                borderRadius: 2,
                boxShadow: '0 4px 24px rgba(0, 75, 33, 0.07)',
                height: '100%',
              }}
            >
              <Grid container spacing={1.25}>
                {homeIconLinks.map(({ title, to, Icon }) => (
                  <Grid item xs={6} key={to}>
                    <Box
                      component={RouterLink}
                      to={to}
                      sx={{
                        display: 'block',
                        textAlign: 'center',
                        py: 1.75,
                        px: 0.75,
                        height: '100%',
                        textDecoration: 'none',
                        color: pz.primary,
                        border: `1px solid ${pz.borderFooter}`,
                        borderRadius: 1.5,
                        bgcolor: pz.pageBg,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          bgcolor: pz.topBarBg,
                          borderColor: pz.navGreen,
                          transform: 'translateY(-2px)',
                          boxShadow: '0 6px 16px rgba(0, 75, 33, 0.1)',
                          '& .icon-wrap': { color: pz.primary, transform: 'scale(1.06)' },
                        },
                      }}
                    >
                      <Box
                        className="icon-wrap"
                        sx={{
                          color: pz.navGreen,
                          mb: 0.75,
                          transition: 'transform 0.2s ease',
                        }}
                      >
                        <Icon sx={{ fontSize: 34 }} aria-hidden />
                      </Box>
                      <Typography
                        component="strong"
                        variant="caption"
                        sx={{ fontWeight: 700, lineHeight: 1.3, display: 'block', px: 0.5 }}
                      >
                        {title}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Box sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0, 75, 33, 0.07)' }}>
              <HomeTopicAccordion sections={homeAccordionSections} defaultOpenId="transport" />
            </Box>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Box sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0, 75, 33, 0.07)' }}>
              <HomeBannerSlider slides={homeBannerSlides} />
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mb: { xs: 3, md: 4 } }}>
          <PzBoxPrimary
            title="Актуални новини"
            linkText="Всички новини"
            linkTo="/novini"
            contentSx={{ p: { xs: 1.5, sm: 2 } }}
          >
            <Grid container spacing={1.5} sx={{ mx: -0.75 }}>
              {newsFour.map((n) => (
                <Grid item xs={12} sm={6} md={3} key={n.id} sx={{ px: 0.75 }}>
                  <Box
                    component={RouterLink}
                    to="/novini"
                    sx={{
                      display: 'block',
                      height: '100%',
                      textDecoration: 'none',
                      color: 'inherit',
                      p: 2,
                      borderRadius: 1.5,
                      borderLeft: `4px solid ${pz.navGreen}`,
                      bgcolor: pz.pageBg,
                      transition: 'background-color 0.2s, box-shadow 0.2s',
                      '&:hover': {
                        bgcolor: pz.topBarBg,
                        boxShadow: '0 4px 14px rgba(0, 75, 33, 0.08)',
                      },
                    }}
                  >
                    <Typography variant="caption" sx={{ color: pz.navGreen, fontWeight: 700, display: 'block', mb: 0.75 }}>
                      {formatBgDate(n.date)}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: pz.primary, lineHeight: 1.4 }}>
                      {n.title}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </PzBoxPrimary>
        </Box>

        <Box
          sx={{
            textAlign: 'center',
            py: { xs: 3, md: 4 },
            px: 2,
            mb: { xs: 3, md: 4 },
            bgcolor: pz.white,
            border: `1px solid ${pz.borderFooter}`,
            borderRadius: 3,
            boxShadow: '0 4px 20px rgba(0, 75, 33, 0.06)',
            background: `linear-gradient(180deg, ${pz.white} 0%, ${pz.pageBg} 100%)`,
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: pz.primary, mb: 1 }}
          >
            Бъдете информирани
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 520, mx: 'auto', mb: 2.5 }}>
            Абонирайте се! Получавайте първи актуални новини и съобщения от община Пещера. (Демонстрация на форма — без
            изпращане.)
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            justifyContent="center"
            alignItems={{ xs: 'stretch', sm: 'center' }}
            sx={{ maxWidth: 500, mx: 'auto' }}
            component="form"
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <TextField
              size="small"
              fullWidth
              label="Имейл"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ bgcolor: pz.white, borderRadius: 1, '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: pz.navGreen,
                color: pz.white,
                fontWeight: 700,
                px: 3,
                py: 1,
                borderRadius: 1,
                flexShrink: 0,
                '&:hover': { bgcolor: pz.primary },
              }}
            >
              Запиши ме
            </Button>
          </Stack>
        </Box>

        <Grid container spacing={{ xs: 2, md: 3 }} alignItems="flex-start">
          <Grid item xs={12} md={8}>
            <PzBoxPrimary
              title="Обяви и съобщения"
              linkText="Всички обяви"
              linkTo="/novini"
              contentSx={{ p: 0, bgcolor: pz.pageBg, borderRadius: '0 0 8px 8px' }}
            >
              <Stack divider={<Divider flexItem sx={{ borderColor: pz.borderFooter }} />}>
                {announcements.map((a) => (
                  <Box
                    key={a.id}
                    component={RouterLink}
                    to="/novini"
                    sx={{
                      display: 'flex',
                      gap: 2,
                      py: 2.25,
                      px: 2,
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'background-color 0.2s',
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.85)' },
                    }}
                  >
                    <Box sx={{ minWidth: 52, textAlign: 'center', flexShrink: 0 }}>
                      {(() => {
                        const { d, mo, y } = splitIsoDate(a.date);
                        return (
                          <>
                            <Typography
                              component="span"
                              sx={{
                                display: 'block',
                                fontWeight: 800,
                                fontFamily: '"Exo 2", sans-serif',
                                fontSize: '1.35rem',
                                color: pz.navGreen,
                                lineHeight: 1,
                              }}
                            >
                              {d}
                            </Typography>
                            <Typography
                              component="span"
                              variant="caption"
                              sx={{ fontWeight: 700, color: pz.primary, display: 'block', mt: 0.25 }}
                            >
                              {mo}.{y}
                            </Typography>
                          </>
                        );
                      })()}
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: pz.primary, flex: 1, lineHeight: 1.5 }}>
                      {a.title}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </PzBoxPrimary>
          </Grid>

          <Grid item xs={12} md={4}>
            <PzBoxPrimary
              title="Събития"
              linkText="календар"
              linkTo="/razdel/os-pk-kultura"
              contentSx={{ p: 2 }}
            >
              <Stack spacing={1.75} sx={{ mb: 2 }}>
                {homeEvents.map((ev) => (
                  <Typography key={ev.title} variant="body2" sx={{ m: 0 }}>
                    <Box
                      component={RouterLink}
                      to={ev.to}
                      sx={{
                        color: pz.navGreen,
                        fontWeight: 600,
                        textDecoration: 'none',
                        display: 'inline-block',
                        lineHeight: 1.45,
                        '&:hover': { textDecoration: 'underline', color: pz.primary },
                      }}
                    >
                      {ev.title}
                    </Box>
                  </Typography>
                ))}
              </Stack>
              <Divider sx={{ borderColor: pz.borderFooter, my: 2 }} />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Exo 2", sans-serif',
                  fontWeight: 700,
                  color: pz.primary,
                  mb: 1,
                  fontSize: '1rem',
                }}
              >
                Културен афиш
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                Културни прояви и инициативи на територията на общината.
              </Typography>
              <Button
                component={RouterLink}
                to="/razdel/kultura"
                size="small"
                variant="outlined"
                fullWidth
                sx={{
                  borderColor: pz.navGreen,
                  color: pz.navGreen,
                  fontWeight: 700,
                  py: 1,
                  borderRadius: 1,
                  '&:hover': { borderColor: pz.primary, bgcolor: pz.topBarBg },
                }}
              >
                Културни прояви в община Пещера
              </Button>
            </PzBoxPrimary>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: { xs: 2, md: 3 } }} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: pz.primary, mb: 1.5 }}
            >
              Меморандум за сътрудничество
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
              Община Пещера развива партньорства с институции, неправителствени организации и други общини в областта на
              образованието, социалните услуги, околната среда и регионалното развитие. Актуални споразумения и проекти се
              публикуват в разделите за стратегически документи и проекти, както и на{' '}
              <Box
                component="a"
                href={OFFICIAL_SITE}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: pz.navGreen, fontWeight: 600 }}
              >
                официалния сайт www.peshtera.bg
              </Box>
              .
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                border: `1px dashed ${pz.borderFooter}`,
                bgcolor: pz.topBarBg,
                p: 3,
                textAlign: 'center',
                borderRadius: 2,
              }}
            >
              <Typography variant="subtitle2" sx={{ color: pz.primary, fontWeight: 700 }}>
                Регионално и международно сътрудничество
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1.5, lineHeight: 1.5 }}>
                Място за лого на партньори или списък побратимени населени места — по данни от администрацията.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
