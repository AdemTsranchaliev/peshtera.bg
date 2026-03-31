import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Typography,
  useMediaQuery,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { navTree } from '../../data/navigation';
import { navLinkTo } from '../../utils/navLinkTo';
import { pz } from '../../theme/pazardzhikPalette';

function SubMenu({ anchorEl, open, onClose, items, title }) {
  if (!items?.length) return null;
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      MenuListProps={{ dense: true, sx: { py: 0, minWidth: 320, maxHeight: 480 } }}
      slotProps={{
        paper: {
          elevation: 6,
          sx: {
            mt: 0.5,
            borderRadius: 0,
            border: `1px solid ${pz.borderFooter}`,
            overflow: 'hidden',
          },
        },
      }}
      disableScrollLock
    >
      <Box sx={{ px: 2, py: 1.25, bgcolor: pz.topBarBg, borderBottom: `1px solid ${pz.borderFooter}` }}>
        <Typography variant="caption" sx={{ color: pz.primary, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.6 }}>
          {title}
        </Typography>
      </Box>
      <MenuList sx={{ py: 0 }}>
        {items.map((child) => (
          <NavBranch key={child.id} node={child} onNavigate={onClose} />
        ))}
      </MenuList>
    </Menu>
  );
}

function NavBranch({ node, onNavigate, depth = 0 }) {
  const hasChildren = node.children?.length > 0;
  const externalUrl = node.externalUrl;

  if (!hasChildren) {
    return (
      <MenuItem
        component={externalUrl ? 'a' : RouterLink}
        to={externalUrl ? undefined : navLinkTo(node)}
        href={externalUrl}
        target={externalUrl ? '_blank' : undefined}
        rel={externalUrl ? 'noopener noreferrer' : undefined}
        onClick={onNavigate}
        sx={{
          pl: 2 + depth * 2,
          py: 1.25,
          color: pz.primary,
          '&:hover': { bgcolor: 'rgba(0, 117, 51, 0.08)' },
        }}
      >
        <ListItemText
          primary={node.label}
          primaryTypographyProps={{ variant: 'body2', fontWeight: depth ? 400 : 500 }}
        />
      </MenuItem>
    );
  }

  return (
    <>
      <MenuItem
        onClick={(e) => e.preventDefault()}
        sx={{
          pl: 2 + depth * 2,
          py: 1.25,
          bgcolor: depth ? 'rgba(0, 75, 33, 0.04)' : 'rgba(0, 75, 33, 0.06)',
          color: pz.primary,
          borderBottom: `1px solid ${pz.borderFooter}`,
          '&:hover': { bgcolor: 'rgba(0, 117, 51, 0.1)' },
        }}
      >
        <ListItemText
          primary={node.label}
          primaryTypographyProps={{ variant: 'body2', fontWeight: 700 }}
        />
      </MenuItem>
      {node.children.map((c) => (
        <NavBranch key={c.id} node={c} onNavigate={onNavigate} depth={depth + 1} />
      ))}
    </>
  );
}

function TopNavEntry({ item }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const hasChildren = item.children?.length > 0 && item.id !== 'gallery';
  const externalUrl = item.externalUrl;

  const close = () => setAnchorEl(null);

  return (
    <Box>
      <Button
        color="inherit"
        component={hasChildren ? 'button' : externalUrl ? 'a' : RouterLink}
        to={hasChildren || externalUrl ? undefined : item.path}
        href={externalUrl}
        target={externalUrl ? '_blank' : undefined}
        rel={externalUrl ? 'noopener noreferrer' : undefined}
        onClick={hasChildren ? (e) => setAnchorEl(e.currentTarget) : undefined}
        endIcon={hasChildren ? <ArrowDropDownIcon sx={{ opacity: 0.85 }} /> : null}
        sx={{
          color: pz.white,
          fontWeight: 600,
          fontSize: '0.9375rem',
          textTransform: 'none',
          borderRadius: 0,
          px: 1.5,
          py: 1.25,
          minHeight: 48,
          fontFamily: '"Exo 2", sans-serif',
          '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
        }}
      >
        {item.label}
      </Button>
      {hasChildren && (
        <SubMenu
          anchorEl={anchorEl}
          open={open}
          onClose={close}
          items={item.children}
          title={item.label}
        />
      )}
    </Box>
  );
}

export default function PrimaryNav() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  if (isMd) return null;

  return (
    <Paper
      component="nav"
      elevation={0}
      square
      sx={{
        bgcolor: pz.navGreen,
        borderTop: `1px solid rgba(255,255,255,0.12)`,
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
      }}
      aria-label="Основна навигация"
    >
      <Container
        maxWidth="lg"
        disableGutters={false}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'stretch',
          justifyContent: 'center',
          px: { md: 2, lg: 3 },
          py: 0,
          gap: { md: 0.25, lg: 0.5 },
        }}
      >
        {navTree.map((item) => (
          <TopNavEntry key={item.id} item={item} />
        ))}
      </Container>
    </Paper>
  );
}
