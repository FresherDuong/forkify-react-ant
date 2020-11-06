import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import LayoutPage from './hocs/LayoutPage/LayoutPage';
import Home from './containers/Home/Home';
// import Auth from './containers/Auth/Auth';
import LogOut from './containers/Auth/LogOut/LogOut';
// import YourOrder from './containers/YourOrder/YourOrder';
import asyncComponent from './hocs/asyncComponent/asyncComponent';
import * as actionsCreator from './store/actions/index';
import { useDispatch } from 'react-redux';

const asyncYourOrder = asyncComponent(() =>
  import('./containers/YourOrder/YourOrder')
);

const asyncAuth = asyncComponent(() => import('./containers/Auth/Auth'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionsCreator.authCheckState());
    dispatch(actionsCreator.reloadFavoritesData());
  }, [dispatch]);

  return (
    <React.Fragment>
      <LayoutPage>
        <Switch>
          <Route path="/your-orders" component={asyncYourOrder} />
          <Route path="/auth" component={asyncAuth} />
          <Route path="/logout" component={LogOut} />
          <Route path="/" exact={true} component={Home} />
          <Route path="/" component={Home} />
        </Switch>
      </LayoutPage>
    </React.Fragment>
  );
};

export default App;
