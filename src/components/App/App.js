import * as React from 'react';
import { blue ,grey,lightBlue} from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import SignIn from '../SignIn/SignIn';
import { Routes, Route, Link as RouterLink } from "react-router-dom";
import GetCode from '../GetCode/GetCode';
import ChooseService from '../ChooseService/ChooseService';
import { Toolbar, AppBar, Typography, Button, Link } from '@mui/material';
import Admin from '../Admin/Admin';


const theme = createTheme({
  palette: {
    background: {
      default: grey[50],
    },
    primary: {
      main: blue[500],
      light: lightBlue[50]
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
  },
});

function App() {
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          <Link to="/" component={RouterLink}
            >
              Home
            </Link>
          </Typography>
          <nav>
            <Link to="choose" component={RouterLink} 
            >
              選擇服務
            </Link>
            <Link to="getCode" component={RouterLink} sx={{mx: 1.5}}
            >
              接碼
            </Link>
            <Link to="admin" component={RouterLink}
            >
              管理員登入
            </Link>
          </nav>
          <Button variant="outlined" sx={{ my: 1, mx: 1.5 }} >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="*" element={<SignIn />} />
        <Route path="getCode" element={<GetCode />} />
        <Route path="choose" element={<ChooseService />} />
        <Route path="admin" element={<Admin />} />
        {/* <Route path="manage" element={<Manage />} /> */}
      </Routes>
       {/* <SignIn /> */}
    </ThemeProvider>
  )
}

export default App;
