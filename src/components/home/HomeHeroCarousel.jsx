import { useEffect, useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { pz } from '../../theme/pazardzhikPalette';

export default function HomeHeroCarousel({ slides, autoMs = 6000, height = { xs: 220, sm: 300, md: 380 } }) {
  const [i, setI] = useState(0);
  const [loaded, setLoaded] = useState(() => new Set([0]));
  const n = slides.length;
  const cur = slides[i];

  useEffect(() => {
    if (n <= 1) return undefined;
    const t = setInterval(() => setI((v) => (v + 1) % n), autoMs);
    return () => clearInterval(t);
  }, [n, autoMs]);

  useEffect(() => {
    setLoaded((prev) => new Set(prev).add(i));
  }, [i]);

  const prev = () => setI((v) => (v - 1 + n) % n);
  const next = () => setI((v) => (v + 1) % n);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height,
        overflow: 'hidden',
        bgcolor: pz.primary,
        borderRadius: { xs: 0, md: '0 0 16px 16px' },
        boxShadow: '0 12px 40px rgba(0, 75, 33, 0.22)',
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Избрани снимки"
    >
      {slides.map((slide, idx) => (
        <Box
          key={slide.src}
          aria-hidden={idx !== i}
          sx={{
            position: 'absolute',
            inset: 0,
            opacity: idx === i ? 1 : 0,
            transition: 'opacity 0.85s ease-in-out',
            pointerEvents: idx === i ? 'auto' : 'none',
          }}
        >
          {loaded.has(idx) && (
            <Box
              component="img"
              src={slide.src}
              alt={slide.alt}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
              }}
            />
          )}
        </Box>
      ))}

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(to top, rgba(0,43,19,0.88) 0%, rgba(0,75,33,0.35) 45%, transparent 72%)`,
          pointerEvents: 'none',
        }}
        aria-hidden
      />

      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          p: { xs: 2, sm: 3, md: 4 },
          pt: 8,
          color: pz.white,
          zIndex: 1,
        }}
      >
        <Typography
          variant="overline"
          sx={{ color: pz.accentGold, fontWeight: 800, letterSpacing: 2, display: 'block', mb: 0.5 }}
        >
          Община Пещера
        </Typography>
        <Typography
          component="h2"
          variant="h4"
          sx={{
            fontFamily: '"Exo 2", sans-serif',
            fontWeight: 800,
            lineHeight: 1.15,
            textShadow: '0 2px 12px rgba(0,0,0,0.35)',
            fontSize: { xs: '1.35rem', sm: '1.75rem', md: '2rem' },
            maxWidth: 720,
          }}
        >
          {cur.title}
        </Typography>
        {cur.subtitle && (
          <Typography
            variant="body1"
            sx={{
              mt: 1,
              maxWidth: 560,
              color: pz.textOnDarkMuted,
              textShadow: '0 1px 8px rgba(0,0,0,0.4)',
              fontSize: { xs: '0.9rem', md: '1rem' },
            }}
          >
            {cur.subtitle}
          </Typography>
        )}
      </Box>

      {n > 1 && (
        <>
          <IconButton
            onClick={prev}
            aria-label="Предишна снимка"
            sx={{
              position: 'absolute',
              left: { xs: 8, md: 16 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              color: pz.white,
              bgcolor: 'rgba(0,0,0,0.28)',
              border: `1px solid rgba(255,255,255,0.2)`,
              '&:hover': { bgcolor: 'rgba(255,255,255,0.18)' },
            }}
            size="large"
          >
            <ChevronLeftIcon fontSize="large" />
          </IconButton>
          <IconButton
            onClick={next}
            aria-label="Следваща снимка"
            sx={{
              position: 'absolute',
              right: { xs: 8, md: 16 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              color: pz.white,
              bgcolor: 'rgba(0,0,0,0.28)',
              border: `1px solid rgba(255,255,255,0.2)`,
              '&:hover': { bgcolor: 'rgba(255,255,255,0.18)' },
            }}
            size="large"
          >
            <ChevronRightIcon fontSize="large" />
          </IconButton>
          <Box
            sx={{
              position: 'absolute',
              bottom: { xs: 12, md: 20 },
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 1,
              zIndex: 2,
            }}
            role="tablist"
            aria-label="Индикатори на каросела"
          >
            {slides.map((_, idx) => (
              <Box
                key={idx}
                component="button"
                type="button"
                onClick={() => setI(idx)}
                aria-label={`Снимка ${idx + 1} от ${n}`}
                aria-current={idx === i ? 'true' : undefined}
                sx={{
                  width: idx === i ? 28 : 10,
                  height: 10,
                  borderRadius: 5,
                  border: 'none',
                  p: 0,
                  cursor: 'pointer',
                  bgcolor: idx === i ? pz.accentGold : 'rgba(255,255,255,0.4)',
                  transition: 'width 0.3s, background-color 0.3s',
                  '&:hover': { bgcolor: idx === i ? pz.accentGold : 'rgba(255,255,255,0.65)' },
                }}
              />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
}
