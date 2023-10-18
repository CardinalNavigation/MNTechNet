import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './redux/store';

import App from './components/App/App';
import { createTheme, ThemeProvider } from '@mui/material';

// const theme=createTheme({
//   components: {
//     MuiTypography: {
//       defaultProps: {
//         variantMapping: {
//           h1: 'h2',
//           h2: 'h2',
//           h3: 'h2',
//           h4: 'h2',
//           h5: 'h2',
//           h6: 'h2',
//           subtitle1: 'h2',
//           subtitle2: 'h2',
//           body1: 'span',
//           body2: 'span',
//         },
//       },
//     },
//   },
// });

const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <ThemeProvider theme={theme}> */}
      <App />
    {/* </ThemeProvider> */}
    </Provider>
  </React.StrictMode>
);
