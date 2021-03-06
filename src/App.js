import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/views/Login/Login';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import Tables from './components/views/Tables/Tables';
import TablesBooking from './components/views/TablesBooking/TablesBooking';
import TablesEvents from './components/views/TablesEvents/TablesEvents';
import Waiter from './components/views/Waiter/WaiterContainer';
import WaiterOrder from './components/views/WaiterOrder/WaiterOrder';
import Kitchen from './components/views/Kitchen/Kitchen';
import { StylesProvider } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './redux/store';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
    //secondary: {      main: '#11cb5f',    },
  },
});


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>      
            <MainLayout>
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
                <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
                <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBooking} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={TablesEvents} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={WaiterOrder} />
                <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
