import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';

import { MenuItem } from './Components/Header';

import Header from './Components/Header';
import Footer from './Components/Footer';

import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import MyWorkPage from './Pages/MyWorkPage';
import NotFoundPage from './Pages/NotFoundPage';

const App: React.FC = () => {
  
  const headerMenuItems: MenuItem[] = [
    {
      title: "Home",
      linkTo: "/",
    },
    {
      title: "About Me",
      linkTo: "/about",
    },
    {
      title: "My Work",
      linkTo: "/work",
    },
  ];

  return (
    <Fragment>
      <Header menuItems={headerMenuItems}/>

      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>

        <Route exact path="/about">
          <AboutPage/>
        </Route>

        <Route exact path="/work">
          <MyWorkPage/>
        </Route>

        <Route>
          <NotFoundPage/>
        </Route>
      </Switch>

      <Footer/>
    </Fragment>
  );
}

export default App;
