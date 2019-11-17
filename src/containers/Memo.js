import * as React from 'react'
import {connect} from 'react-redux'
import * as api from '../apis';
import { fetchMemo, fetchMemoList } from '../actions';
import AddMemoPage from '../pages/memo/AddMemo'
import { Dispatch, bindActionCreators } from 'redux';
import { Redirect } from 'react-router';
import MemoPage from '../pages/memo/Memo';

class MemoContainer extends React.Component {

    render() {
        console.log("here is MemoContainer");
        
        //const {isMemoDeleted} = this.state
        //if (isMemoDeleted) return <Redirect to="/memo" />
        
        return (
            <MemoPage 
            {...this.props} 
            onDeleteMemo={this.onDeleteMemo} />
        )
    }
}

const mapStateToProps = 
(state, props) => {
  const memoId = parseInt(props.match.params.id, 10)

  return {
    memo: state.memo.memos.find(memo => memo.id == memoId) 
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchMemo,
    fetchMemoList,
  }, dispatch)
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(MemoContainer)