import { MenuOutlined } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';

const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuOutlined />
        </IconButton>
        <Link href="/" passHref style={{ textDecoration: 'none' }}>
          <Typography variant="h6" color="white">
            Cookie Master
          </Typography>
        </Link>
        <div style={{ flex: 1 }} />
        <Link href="/theme-changer" passHref style={{ textDecoration: 'none' }}>
          <Typography variant="h6" color="white">
            Cambiar tema
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
