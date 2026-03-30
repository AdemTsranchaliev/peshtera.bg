import { Link as MuiLink } from '@mui/material';
import { pz } from '../theme/pazardzhikPalette';

export default function SkipLink() {
  return (
    <MuiLink
      href="#main-content"
      sx={{
        position: 'absolute',
        left: 16,
        top: -100,
        zIndex: 10000,
        px: 2,
        py: 1,
        bgcolor: pz.navGreen,
        color: 'common.white',
        borderRadius: 1,
        textDecoration: 'none',
        fontWeight: 600,
        '&:focus': { top: 16 },
      }}
    >
      Към основното съдържание
    </MuiLink>
  );
}
