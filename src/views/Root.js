import React, { useState} from 'react';
import { ThemeProvider } from 'styled-components';
import {HashRouter as Router , Route, Switch} from 'react-router-dom'
import MyContext from '../context/index'
import GlobalStyle from '../themes/GlobalStyle';
import {theme} from '../themes/mainTheme';
import Heading from '../components/organisms/Heading';
import InfoBar from '../components/atoms/InfoBar';
import DetailsView from "./DeatilsView";
import MainView from './MainView';

const Root = () => {

  const [newestVideo='',setNewestVideo] = useState();
  return (
    <MyContext.Provider value={{newestVideo,setNewestVideo}}>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Heading/>
          <Switch>
            <Route exact path="/" component={MainView} />
            <Route exact path='/:name' component={DetailsView}/>
          </Switch>
          <InfoBar footer >COPYRIGHT © 2020 EKIPA <p>created by karol piotrowicz</p></InfoBar>
        </ThemeProvider>
      </Router>
    </MyContext.Provider>
  );
}

export default Root;
