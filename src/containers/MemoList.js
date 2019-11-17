  
import * as React from 'react'
import {connect} from 'react-redux'
import MemoListPage from '../pages/memo/MemoList';
import * as api from '../apis';
import { Dispatch, bindActionCreators } from 'redux';
import { FetchMemoListAction, fetchMemoList } from '../actions';
import { RootState } from '../reducers';
import { RouteComponentProps, Redirect } from 'react-router';

class MemoListContainer extends React.Component {
  componentWillMount() {
      console.log("componentWillMount");
    const {fetchMemoList} = this.props;
    const memos = api.fetchMemoList();
    fetchMemoList(memos);
  }

  render() {
    console.log("componentWillMount render");
    
    const {memos, match: {isExact, url}, location: {pathname}} = this.props    
    const hasMemos = memos.length > 0
    const isAddPath = pathname === `${url}/add`

    // if (isExact && hasMemos) {
    //   return <Redirect to={`${url}/${memos[0].id}`} />
    // }

    console.log("componentWillMount MemoListPage");
    
    return <MemoListPage {...this.props} hasAddMemoBtn={!isAddPath}/>
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