import { useEffect, useState } from 'react';
import { Box, IconButton, Link, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link as RouterLink } from 'react-router-dom';
import { pz } from '../../theme/pazardzhikPalette';

export default function HomeBannerSlider({ slides, autoMs = 7000 }) {
  const [i, setI] = useState(0);
  const n = slides.length;
  const cur = slides[i];

  useEffect(() => {
    if (n <= 1) return undefined;
    const t = setInterval(() => setI((v) => (v + 1) % n), autoMs);
    return () => clearInterval(t);
  }, [n, autoMs]);

  const prev = () => setI((v) => (v - 1 + n) % n);
  const next = () => setI((v) => (v + 1) % n);

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: 240, sm: 280, md: 320 },
        background: `linear-gradient(125deg, ${pz.primary} 0%, ${pz.primaryStripe} 50%, ${pz.navGreen} 100%)`,
        color: pz.white,
        overflow: 'hidden',
        border: `1px solid ${pz.borderFooter}`,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.06,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 60L60 0H0z' fill='%23fff'/%3E%3C/svg%3E")`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: { xs: 2, sm: 4 },
          pr: { xs: 6, sm: 8 },
        }}
      >
        <Typography
          component="h2"
          variant="h5"
          sx={{
            fontFamily: '"Exo 2", sans-serif',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: 0.4,
            lineHeight: 1.35,
            fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' },
            mb: 1.5,
          }}
        >
          {cur.title}
        </Typography>
        {cur.subtitle && (
          <Typography variant="body2" sx={{ color: pz.textOnDarkMuted, maxWidth: 520, mb: 2 }}>
            {cur.subtitle}
          </Typography>
        )}
        {cur.to && (
          <Link
            component={RouterLink}
            to={cur.to}
            underline="hover"
            sx={{ color: pz.accentGold, fontWeight: 700, fontSize: '0.9rem', alignSelf: 'flex-start' }}
          >
            Научете повече →
          </Link>
        )}
      </Box>
      {n > 1 && (
        <>
          <IconButton
            onClick={prev}
            aria-label="Предишен слайд"
            sx={{
              position: 'absolute',
              left: 4,
              top: '50%',
              transform: 'translateY(-50%)',
              color: pz.white,
              bgcolor: 'rgba(0,0,0,0.15)',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.15)' },
            }}
            size="small"
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            onClick={next}
            aria-label="Следващ слайд"
            sx={{
              position: 'absolute',
              right: 4,
              top: '50%',
              transform: 'translateY(-50%)',
              color: pz.white,
              bgcolor: 'rgba(0,0,0,0.15)',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.15)' },
            }}
            size="small"
          >
            <ChevronRightIcon />
          </IconButton>
          <Box
            sx={{
              position: 'absolute',
              bottom: 10,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 0.75,
            }}
            role="tablist"
            aria-label="Индикатори на слайдера"
          >
            {slides.map((_, idx) => (
              <Box
                key={idx}
                component="button"
                type="button"
                onClick={() => setI(idx)}
                aria-label={`Слайд ${idx + 1}`}
                aria-current={idx === i ? 'true' : undefined}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  border: 'none',
                  p: 0,
                  cursor: 'pointer',
                  bgcolor: idx === i ? pz.accentGold : 'rgba(255,255,255,0.35)',
                  '&:hover': { bgcolor: idx === i ? pz.accentGold : 'rgba(255,255,255,0.55)' },
                }}
              />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
}
