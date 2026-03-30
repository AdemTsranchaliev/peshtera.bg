import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as RouterLink } from 'react-router-dom';
import { pz } from '../../theme/pazardzhikPalette';

export default function HomeTopicAccordion({ sections, defaultOpenId = 'transport' }) {
  return (
    <Box
      sx={{
        border: `1px solid ${pz.borderFooter}`,
        bgcolor: pz.white,
        boxShadow: '0 2px 12px rgba(0, 75, 33, 0.06)',
      }}
    >
      {sections.map((sec) => (
        <Accordion
          key={sec.id}
          defaultExpanded={sec.id === defaultOpenId}
          disableGutters
          elevation={0}
          square
          sx={{
            borderBottom: `1px solid ${pz.borderFooter}`,
            '&:before': { display: 'none' },
            '&.Mui-expanded': { margin: 0 },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: pz.navGreen }} />}
            sx={{
              bgcolor: pz.pageBg,
              minHeight: 48,
              '& .MuiAccordionSummary-content': { my: 1 },
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: '"Exo 2", sans-serif',
                fontWeight: 700,
                color: pz.primary,
                textTransform: 'uppercase',
                letterSpacing: 0.4,
                fontSize: '0.8rem',
              }}
            >
              {sec.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 0, bgcolor: pz.white }}>
            <List disablePadding dense>
              {sec.links.map((l) => (
                <ListItem key={l.label} disablePadding>
                  {l.href ? (
                    <ListItemButton
                      component="a"
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ py: 1, pl: 2 }}
                    >
                      <ListItemText
                        primary={l.label}
                        primaryTypographyProps={{ variant: 'body2', color: pz.navGreen, fontWeight: 500 }}
                      />
                    </ListItemButton>
                  ) : (
                    <ListItemButton component={RouterLink} to={l.to} sx={{ py: 1, pl: 2 }}>
                      <ListItemText
                        primary={l.label}
                        primaryTypographyProps={{ variant: 'body2', color: pz.navGreen, fontWeight: 500 }}
                      />
                    </ListItemButton>
                  )}
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
