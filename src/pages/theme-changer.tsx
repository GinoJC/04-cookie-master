import React, { ChangeEvent, useEffect, useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import Cookies from 'js-cookie';
import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { Layout } from 'components/layout';
import axios from 'axios';

interface Props {
  theme: string;
}

const ThemeChangerPage: NextPage<Props> = ({ theme }) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = event.target.value;
    setCurrentTheme(selectedTheme);
    Cookies.set('theme', selectedTheme);
  };

  const onClick = async () => {
    const { data } = await axios.get('/api/hello');
    console.log('data', data);
  };

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup value={currentTheme} onChange={onThemeChange}>
              <FormControlLabel value="light" control={<Radio />} label="Light" />
              <FormControlLabel value="dark" control={<Radio />} label="Dark" />
              <FormControlLabel value="custom" control={<Radio />} label="Custom" />
            </RadioGroup>
          </FormControl>
          <Button onClick={onClick}>Solicitud</Button>
        </CardContent>
      </Card>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { theme = 'light' } = req.cookies;
  const validTheme = ['light', 'dark', 'custom'];

  return {
    props: {
      theme: validTheme.includes(theme) ? theme : 'light',
    },
  };
};

export default ThemeChangerPage;
