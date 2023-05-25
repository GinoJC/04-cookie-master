import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import 'styles/globals.css';
import { CssBaseline, Theme } from '@mui/material';
import { darkTheme, lightTheme, customTheme } from 'themes';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

interface Props extends AppProps {
  theme: string;
}

export default function App({ Component, pageProps, theme }: Props) {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    const cookieTheme = Cookies.get('theme');
    const selectedTheme: Theme =
      cookieTheme === 'custom' ? customTheme : cookieTheme === 'dark' ? darkTheme : lightTheme;

    setCurrentTheme(selectedTheme);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
