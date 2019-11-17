  
import * as React from 'react'
import {connect} from 'react-redux'
import MemoListPage from '../pages/memo/MemoList';
import * as api from '../apis';
import { Dispatch, bindActionCreators } from 'redux';
import { FetchMemoListAction, fetchMemoList } from '../actions';
import { RootState } from '../reducers';
import { RouteComponentProps, Redirect } from 'react-router';
import MemoHome from '../pages/MemoHome'

class MemoListContainer extends React.Component {
  componentWillMount() {
    const {fetchMemoList} = this.props;
    const memos = api.fetchMemoList();
    fetchMemoList(memos);
  }

  render() {
    return <MemoHome {...this.props}/>
  }
}

const mapStateToProps = (state) => ({
  memos: state.memo.memos
})

const mapDispatchToProps = (dispatch) => 
  bindActionCreators({
    fetchMemoList
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemoListContainer)