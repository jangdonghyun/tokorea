import * as React from 'react';
import { Switch, RouteComponentProps, Route, withRouter } from 'react-router-dom';
import MemoContainer from '../../containers/Memo';
import AddMemoContainer from '../../containers/AddMemo';
import MemoList from '../../containers/MemoList';
import MemoHome from '../../containers/MemoHome';

function MemoRouter(props) {
  const { match } = props;
  console.log("MemoRouter",match);
  return (
    <Switch>
      <Route path={`${match.url}/add`} exact component={AddMemoContainer} />
      <Route path={`${match.url}/list`} exact component={MemoList} />
      <Route path={`${match.url}/:id`} exact component={MemoContainer} />
      <Route exact path={match.path} component={MemoHome} />
    </Switch>
  )
}

export default withRouter(MemoRouter);