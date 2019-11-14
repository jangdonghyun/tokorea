import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SectionIntro from './SectionIntro.js';
import SectionMap from './SectionMap.js';
import SectionChoice from './SectionChoice.js';
import Header from './Header.js';
import Memo from '../pages/MemoHome'

// App.js에 있던 Aladin, LionKing, SpiderMan을
// Components/Routes.js 로 이동
export default () => (
  <Router>
    <Header/>
    <Route exact path="/" component={SectionIntro} />
    <Route path="/intro" component={SectionIntro} />
    <Route path="/map" component={SectionMap} />
    <Route path="/choice" component={SectionChoice} />
    <Route path="/memo" component={Memo} />
  </Router>
)