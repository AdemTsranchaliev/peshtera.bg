import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  Link,
  Breadcrumbs,
  Stack,
} from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Link as RouterLink } from 'react-router-dom';
import SkipLink from '../SkipLink';
import PrimaryNav from './PrimaryNav';
import MobileNavDrawer from './MobileNavDrawer';
import Footer from './Footer';
import CouncilHeaderButton from './CouncilHeaderButton';
import { pathToNav } from '../../data/navigation';
import { pz, pzHeaderGradient } from '../../theme/pazardzhikPalette';

function Crumbs() {
  const { pathname } = useLocation();
  if (pathname === '/') return null;

  const node = pathToNav.get(pathname);
  const isNews = pathname === '/novini' || pathname.startsWith('/novini/');
  const isContact = pathname === '/kontakti';
  const isMap = pathname === '/karta-na-saita';

  let current = 'Страница';
  if (node) current = node.label;
  else if (isNews) current = 'Новини';
  else if (isContact) current = 'Контакти';
  else if (isMap) current = 'Карта на сайта';

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        borderBottom: `1px solid ${pz.borderFooter}`,
        boxShadow: '0 1px 0 rgba(0,0,0,0.03)',
      }}
    >
      <Container maxWidth="lg" sx={{ py: 1.5 }}>
        <Breadcrumbs aria-label="Пътека в сайта" sx={{ '& .MuiBreadcrumbs-separator': { color: 'text.secondary' } }}>
          <Link component={RouterLink} to="/" underline="hover" color="inherit" sx={{ color: 'text.secondary' }}>
            Начало
          </Link>
          <Typography color="text.primary" fontWeight={600}>
            {current}
          </Typography>
        </Breadcrumbs>
      </Container>
    </Box>
  );
}

export default function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      <SkipLink />
      {/* Горна лента — bg-lrgreen */}
      <Box
        component="div"
        sx={{
          display: { xs: 'none', sm: 'block' },
          bgcolor: pz.topBarBg,
          borderBottom: `1px solid ${pz.borderFooter}`,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters variant="dense" sx={{ minHeight: 40, py: 0.5, justifyContent: 'space-between' }}>
            <Typography variant="caption" sx={{ color: pz.primary, fontWeight: 600, letterSpacing: 0.2 }}>
              Общинска администрация Пещера
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="caption" sx={{ color: pz.primary, display: { xs: 'none', md: 'inline' } }}>
                Официален информационен портал
              </Typography>
              <Link component={RouterLink} to="/kontakti" variant="caption" underline="hover" sx={{ color: pz.navGreen, fontWeight: 600 }}>
                Връзка с нас
              </Link>
            </Stack>
          </Toolbar>
        </Container>
      </Box>

      <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'transparent' }}>
        {/* Тъмнозелен хедър — .header */}
        <Box
          sx={{
            background: pzHeaderGradient,
            position: 'relative',
            color: pz.white,
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              bgcolor: pz.primary,
              overflow: 'hidden',
              '&::after': {
                content: '""',
                position: 'absolute',
                right: 0,
                bottom: 0,
                width: 0,
                height: 0,
                borderStyle: 'solid',
                borderWidth: '238px 60px 0 0',
                borderColor: `${pz.primaryStripe} transparent transparent transparent`,
                pointerEvents: 'none',
                display: { xs: 'none', lg: 'block' },
              },
            }}
          >
            <Container maxWidth="lg">
              <Toolbar
                disableGutters
                sx={{
                  flexWrap: 'wrap',
                  gap: 2,
                  py: { xs: 1.5, md: 2 },
                  alignItems: { xs: 'flex-start', md: 'center' },
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1.5} sx={{ flexGrow: { xs: 1, md: 0 } }}>
                  <MobileNavDrawer />
                  <Box
                    component={RouterLink}
                    to="/"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    <Box
                      component="img"
                      src={`${import.meta.env.BASE_URL}logo-peshtera.png`}
                      alt="Герб на Община Пещера"
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 1,
                        objectFit: 'contain',
                        flexShrink: 0,
                        bgcolor: pz.white,
                        p: 0.25,
                        border: `2px solid ${pz.accentGold}`,
                      }}
                    />
                    <Box sx={{ lineHeight: 1.25 }}>
                      <Typography
                        variant="h6"
                        component="span"
                        sx={{
                          fontFamily: '"Exo 2", sans-serif',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: 0.5,
                          display: 'block',
                          color: pz.white,
                          fontSize: { xs: '1rem', sm: '1.25rem' },
                        }}
                      >
                        Община Пещера
                      </Typography>
                      <Typography variant="caption" sx={{ color: pz.textOnDarkMuted, fontWeight: 500 }}>
                        Официален уеб сайт
                      </Typography>
                    </Box>
                  </Box>
                </Stack>

                <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'block' } }} />

                <Stack
                  direction="row"
                  spacing={3}
                  alignItems="center"
                  sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto' }}
                >
                  <Box component="nav" aria-label="Бързи връзки в хедъра" sx={{ display: { xs: 'none', xl: 'block' } }}>
                    <Stack component="ul" spacing={0.5} sx={{ m: 0, p: 0, listStyle: 'none' }}>
                      <Box component="li">
                        <Link component={RouterLink} to="/karta-na-saita" sx={{ color: pz.white, fontSize: 13, '&:hover': { color: pz.textOnDarkMuted } }}>
                          › Карта на сайта
                        </Link>
                      </Box>
                      <Box component="li">
                        <Link component={RouterLink} to="/kontakti" sx={{ color: pz.textOnDarkMuted, fontSize: 13, '&:hover': { color: pz.white } }}>
                          › Контакти
                        </Link>
                      </Box>
                      <Box component="li">
                        <Link component={RouterLink} to="/razdel/signal" sx={{ color: pz.textOnDarkMuted, fontSize: 13, '&:hover': { color: pz.white } }}>
                          › Сигнали
                        </Link>
                      </Box>
                    </Stack>
                  </Box>

                  <Stack direction="row" spacing={1.5} alignItems="flex-start">
                    <PhoneInTalkIcon sx={{ color: pz.textOnDarkMuted, fontSize: 28, mt: 0.25 }} aria-hidden />
                    <Box>
                      <Typography variant="caption" sx={{ color: pz.textOnDarkMuted, display: 'block', lineHeight: 1.4 }}>
                        Горещ телефон / приемна
                      </Typography>
                      <Link href="tel:035062216" sx={{ color: pz.white, fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}>
                        0350 6 22 03
                      </Link>
                    </Box>
                  </Stack>

                  <CouncilHeaderButton />
                </Stack>
              </Toolbar>
            </Container>
          </Box>
        </Box>
        <PrimaryNav />
      </AppBar>

      <Crumbs />

      <Box
        id="main-content"
        component="main"
        tabIndex={-1}
        sx={{ outline: 'none', flex: 1, py: { xs: 2, md: 3 } }}
      >
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
}
