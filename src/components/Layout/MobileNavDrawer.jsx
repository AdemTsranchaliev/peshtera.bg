import { useState } from 'react';
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link as RouterLink } from 'react-router-dom';
import { navTree } from '../../data/navigation';
import { navLinkTo } from '../../utils/navLinkTo';
import { pz } from '../../theme/pazardzhikPalette';

function NavList({ items, depth = 0, onNavigate }) {
  return (
    <List disablePadding sx={{ pl: depth * 1.5 }}>
      {items.map((item) => (
        <NavRow key={item.id} item={item} depth={depth} onNavigate={onNavigate} />
      ))}
    </List>
  );
}

function NavRow({ item, depth, onNavigate }) {
  const [open, setOpen] = useState(depth < 1);
  const hasChildren = item.children?.length > 0 && item.id !== 'gallery';
  const externalUrl = item.externalUrl;

  if (!hasChildren) {
    return (
      <ListItemButton
        component={externalUrl ? 'a' : RouterLink}
        to={externalUrl ? undefined : navLinkTo(item)}
        href={externalUrl}
        target={externalUrl ? '_blank' : undefined}
        rel={externalUrl ? 'noopener noreferrer' : undefined}
        sx={{
          pl: 2 + depth * 2,
          py: 1.25,
          '&:hover': { bgcolor: 'rgba(0, 117, 51, 0.08)' },
        }}
        onClick={onNavigate}
      >
        <ListItemText
          primary={item.label}
          primaryTypographyProps={{ variant: 'body2', fontWeight: 500, color: pz.primary }}
        />
      </ListItemButton>
    );
  }

  return (
    <Box>
      <ListItemButton
        onClick={() => setOpen((v) => !v)}
        sx={{
          pl: 2 + depth * 2,
          py: 1.25,
          bgcolor: depth ? 'rgba(0, 75, 33, 0.04)' : 'rgba(0, 75, 33, 0.06)',
        }}
      >
        <ListItemText
          primary={item.label}
          primaryTypographyProps={{ variant: 'body2', fontWeight: 700, color: pz.primary }}
        />
        {open ? <ExpandLess sx={{ color: pz.navGreen }} /> : <ExpandMore sx={{ color: pz.navGreen }} />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <NavList items={item.children} depth={depth + 1} onNavigate={onNavigate} />
      </Collapse>
    </Box>
  );
}

export default function MobileNavDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        edge="start"
        aria-label="Отвори меню"
        onClick={() => setOpen(true)}
        sx={{
          display: { xs: 'inline-flex', md: 'none' },
          color: pz.white,
          bgcolor: 'rgba(0,0,0,0.12)',
          '&:hover': { bgcolor: 'rgba(255,255,255,0.12)' },
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Toolbar
          sx={{
            bgcolor: pz.navGreen,
            color: pz.white,
            minHeight: 56,
          }}
        >
          <Typography variant="subtitle1" fontWeight={700} fontFamily='"Exo 2", sans-serif'>
            Меню
          </Typography>
        </Toolbar>
        <Divider />
        <Box sx={{ width: 320, maxWidth: '100vw' }} role="navigation" aria-label="Мобилна навигация">
          <NavList items={navTree} onNavigate={() => setOpen(false)} />
        </Box>
      </Drawer>
    </>
  );
}
