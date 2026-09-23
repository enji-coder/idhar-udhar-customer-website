import { createTheme } from '@mui/material/styles'

const font = '"Manrope", Inter, system-ui, sans-serif'

const theme = createTheme({
  palette: {
    primary: { main: '#FF6B35', dark: '#E4572E', contrastText: '#111827' },
    secondary: { main: '#18B6C9', contrastText: '#111827' },
    text: { primary: '#111827', secondary: '#4B5565' },
    background: { default: '#F7F5F3', paper: '#FFFFFF' },
    divider: 'rgba(17, 24, 39, 0.08)',
  },
  typography: {
    fontFamily: font,
    h1: { fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 0.94 },
    h2: { fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.02 },
    h3: { fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15 },
    body1: { fontSize: '1.05rem', lineHeight: 1.65, letterSpacing: '-0.011em' },
    body2: { fontSize: '0.95rem', lineHeight: 1.6 },
    button: { textTransform: 'none', fontWeight: 700, letterSpacing: '0.01em', fontFamily: font },
    overline: { letterSpacing: '0.16em', fontWeight: 700, fontSize: '0.72rem' },
  },
  shape: { borderRadius: 18 },
  shadows: [
    'none',
    '0 1px 2px rgba(17,24,39,0.04)',
    '0 8px 24px rgba(17,24,39,0.06)',
    '0 16px 40px rgba(17,24,39,0.08)',
    '0 24px 60px rgba(17,24,39,0.10)',
    ...Array(20).fill('0 24px 60px rgba(17,24,39,0.10)'),
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#F7F5F3',
          fontFamily: font,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          background: 'transparent',
          boxShadow: 'none',
          '&:before': { display: 'none' },
          borderBottom: '1px solid rgba(17, 24, 39, 0.08)',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: '6px 0',
          minHeight: 76,
          '&.Mui-expanded': { minHeight: 76 },
        },
        content: { margin: '16px 0', '&.Mui-expanded': { margin: '16px 0' } },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: { root: { padding: '0 56px 22px 0' } },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          background: 'rgba(255,255,255,0.86)',
          fontFamily: font,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: { root: { fontFamily: font } },
    },
    MuiFormHelperText: {
      styleOverrides: { root: { fontFamily: font, marginLeft: 4 } },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: { fontFamily: font },
      },
    },
  },
})

export default theme
