import React, { Fragment, useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router';

import { MenuItem } from './Components/Header';

import Header from './Components/Header';
import Footer from './Components/Footer';

import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import MyWorkPage from './Pages/MyWorkPage';
import NotFoundPage from './Pages/NotFoundPage';

const App: React.FC = () => {

  let location = useLocation();

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const [isShowingEasterEgg, setIsShowingEasterEgg] = useState(false);

  useEffect(() => {
    if (document.location.hash === "#/") {
      document.body.id = "bg-img";
      setIsOverlayVisible(false);
    }
    else {
      document.body.id = "bg-img-about";
      setIsOverlayVisible(true);
    }
  }, []);

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

  const handleEasterEggMouseOver = () => {
    setIsShowingEasterEgg(true);
  };

  const handleEasterEggMouseLeave = () => {
    setIsShowingEasterEgg(false);
  };

  const renderOverlay = () => {
    let overlayClass = "overlay";

    if (isShowingEasterEgg) {
      overlayClass += " hide";
    }

    if (isOverlayVisible) {
      return (
        <div className={overlayClass}>

        </div>
      );
    }

    return <Fragment/>
  };

  return (
    <Fragment>
      {renderOverlay()}

      <Header menuItems={headerMenuItems}/>

      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>

        <Route exact path="/about">
          <AboutPage 
            easterEggMouseOver={handleEasterEggMouseOver} 
            easterEggMouseLeave={handleEasterEggMouseLeave}/>
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
