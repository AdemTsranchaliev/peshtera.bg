import { Box, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { pz } from '../../theme/pazardzhikPalette';

/**
 * Заглавен ред в стил .box-primary .box-heading на pazardzhik.bg
 */
export default function PzBoxPrimary({ title, titleComponent = 'h2', linkText, linkTo, linkExternal, children, contentSx }) {
  const linkInner = (
    <>
      {linkText}
      <Box component="span" aria-hidden sx={{ fontSize: '1rem' }}>
        →
      </Box>
    </>
  );

  const linkSx = {
    color: pz.navGreen,
    fontWeight: 700,
    fontSize: '0.875rem',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 0.5,
    '&:hover': { color: pz.primary },
  };

  return (
    <Box
      sx={{
        border: `1px solid ${pz.borderFooter}`,
        boxShadow: '0 4px 20px rgba(0, 75, 33, 0.07)',
        mb: 2,
        bgcolor: pz.white,
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'stretch', sm: 'stretch' },
          minHeight: 56,
        }}
      >
        <Box
          sx={{
            flex: 1,
            bgcolor: pz.topBarBg,
            display: 'flex',
            alignItems: 'center',
            px: 2,
            py: 1.5,
            borderBottom: { xs: `1px solid ${pz.borderFooter}`, sm: 'none' },
          }}
        >
          <Typography
            component={titleComponent}
            variant="h6"
            sx={{
              fontFamily: '"Exo 2", sans-serif',
              fontWeight: 700,
              color: pz.primary,
              textTransform: 'none',
              fontSize: '1.1rem',
              m: 0,
            }}
          >
            {title}
          </Typography>
        </Box>
        {linkText && linkTo && (
          <Box
            sx={{
              position: 'relative',
              bgcolor: pz.pageBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'flex-start', sm: 'flex-end' },
              px: { xs: 2, sm: 3 },
              py: 1.5,
              minWidth: { sm: 200 },
              clipPath: { sm: 'polygon(20px 0, 100% 0, 100% 100%, 0 100%)' },
            }}
          >
            {linkExternal ? (
              <Link href={linkTo} target="_blank" rel="noopener noreferrer" underline="hover" sx={linkSx}>
                {linkInner}
              </Link>
            ) : (
              <Box component={RouterLink} to={linkTo} sx={{ ...linkSx, textDecoration: 'none' }}>
                {linkInner}
              </Box>
            )}
          </Box>
        )}
      </Box>
      <Box
        sx={{
          bgcolor: pz.white,
          p: 2,
          ...contentSx,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
