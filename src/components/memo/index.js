import * as React from 'react';
import { Switch, RouteComponentProps, Route, withRouter } from 'react-router-dom';
import MemoContainer from '../../containers/Memo'
import AddMemoContainer from '../../containers/AddMemo'
import MemoList from '../../containers/MemoList'

function MemoRouter(props) {
  const { match } = props;
  console.log("MemoRouter",match);
  return (
    <Switch>
      <Route path={`${match.url}/add`} exact component={AddMemoContainer} />
      <Route path={`${match.url}/memo`} exact component={MemoList} />
      <Route path={`${match.url}/:id`} exact component={MemoContainer} />
      <Route path={`${match.url}/`} exact component={() => <div>메모 없음</div>} />
    </Switch>
  )
}

export default withRouter(MemoRouter);