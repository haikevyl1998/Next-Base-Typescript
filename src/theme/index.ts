import createCache from '@emotion/cache';
import { createTheme } from '@mui/material/styles';

export const createEmotionCache = () => createCache({ key: 'css', prepend: true });

export const theme = createTheme({});
