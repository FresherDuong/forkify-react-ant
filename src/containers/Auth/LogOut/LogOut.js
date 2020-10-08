import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import * as actionsCreator from './../../../store/actions/index';
import { useDispatch } from 'react-redux';

const LogOut = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionsCreator.logOut());
  }, [dispatch]);

  return <Redirect to="/" />;
};

export default LogOut;
