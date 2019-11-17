import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

function AddMemoBtn() {
  return (
    <Button to="/memo/add">새로운 메모</Button>
  )
}

export default AddMemoBtn;