import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { pz } from '../../theme/pazardzhikPalette';

export default function CouncilHeaderButton() {
  return (
    <Box
      component={RouterLink}
      to="/razdel/obshtinski-savet"
      className="council-header-btn"
      sx={{
        fontFamily: '"Exo 2", sans-serif',
        position: 'relative',
        bgcolor: pz.councilBtn,
        color: pz.accentGold,
        pl: 2.5,
        pr: 1.75,
        py: 2,
        textTransform: 'uppercase',
        fontSize: 14,
        fontWeight: 700,
        textDecoration: 'none',
        display: { xs: 'none', md: 'inline-flex' },
        alignItems: 'center',
        whiteSpace: 'nowrap',
        transition: 'background-color 0.25s, color 0.25s',
        '&::before': {
          content: '""',
          position: 'absolute',
          left: -13,
          top: 0,
          width: 0,
          height: 0,
          borderStyle: 'solid',
          borderWidth: 0,
          borderRight: `13px solid ${pz.councilBtn}`,
          borderBottom: '52px solid transparent',
          transition: 'border-color 0.25s',
        },
        '&:hover': {
          bgcolor: pz.navGreen,
          color: pz.white,
          '&::before': {
            borderRightColor: pz.navGreen,
          },
          '& .council-header-btn__icon': {
            color: `${pz.accentGold} !important`,
          },
        },
      }}
    >
      Общински съвет
      <ChevronRightIcon
        className="council-header-btn__icon"
        sx={{ ml: 0.75, fontSize: 22, color: pz.navGreen, transition: 'color 0.25s' }}
        aria-hidden
      />
    </Box>
  );
}
