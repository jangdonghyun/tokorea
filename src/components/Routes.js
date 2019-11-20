import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import SectionIntro from './SectionIntro.js';
import SectionMap from './SectionMap.js';
import SectionChoice from './SectionChoice.js';
import Header from './Header.js';
import Memo from '../pages/MemoHome'
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import AddMemoContainer from '../containers/AddMemo';
import MemoContainer from '../containers/Memo';
import MemoList from '../containers/MemoList';
import MemoHome from '../containers/MemoHome';
import MemoRoute from './memo';
import History from './History';


const store = configureStore()

// App.js에 있던 Aladin, LionKing, SpiderMan을
// Components/Routes.js 로 이동
export default () => (
  <Provider store={store}>
    <Router>
      <Header/>
      <Route exact path="/" component={SectionIntro} />
      <Route path="/intro" component={SectionIntro} />
      <Route path="/map" component={SectionMap} />
      <Route path="/choice" component={SectionChoice} />
      <Route path="/memo" component={MemoRoute} />
      <Route path="/history" component={History} />
    </Router>
  </Provider>
)