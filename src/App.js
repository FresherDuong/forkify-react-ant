import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import LayoutPage from './hocs/LayoutPage/LayoutPage';
import Home from './containers/Home/Home';
import Auth from './containers/Auth/Auth';
import YourOrder from './containers/YourOrder/YourOrder';

const App = () => {
  return (
    <React.Fragment>
      <LayoutPage>
        <Switch>
          <Route path="/your-orders" component={YourOrder} />
          <Route path="/auth" component={Auth} />
          <Route path="/" exact={true} component={Home} />
        </Switch>
      </LayoutPage>
    </React.Fragment>
  );
};

export default App;
