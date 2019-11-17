import * as React from 'react'
import {connect} from 'react-redux'
import * as api from '../apis';
import { addMemo, AddMemoAction } from '../actions';
import AddMemoPage from '../pages/memo/AddMemo'
import { Dispatch, bindActionCreators } from 'redux';
import { Redirect } from 'react-router';

class AddMemoContainer extends React.Component {

  state = {
    newMemoId: 0
  }

  handleSubmit = (memo) => {
    const {addMemo} = this.props;

    const newMemo = api.addMemo(memo)
    addMemo(newMemo)

    this.setState({ newMemoId: newMemo.id})
  }

  render() {

    console.log("here is AddMemoContainer");
    
    const {newMemoId} = this.state

    console.log("newMemoId", newMemoId);
    if (newMemoId > 0) return <Redirect to={`/memo/${newMemoId}`} />
    
    return <AddMemoPage onSubmit={this.handleSubmit} />
  }
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addMemo,
  }, dispatch)
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(AddMemoContainer)