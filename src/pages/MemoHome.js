import * as React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Sidebar, { SidebarTitle } from '../components/Slidbar';
// import Main from '../../components/Main';
// import AddMemoBtn from '../../components/AddMenuBtn';
import { List, ListItem } from '../components/List';
// import { Memo } from '../../models';

function MemoHome(props) {
    const { memos, deletedMemos } = props

    return (
      <Layout>
      <Sidebar>
        <SidebarTitle>폴더</SidebarTitle>
        <List>
          <ListItem first>
            <Link to="/memo">메모()</Link>
          </ListItem>
          <ListItem>
            <Link to="/trash">휴지통()</Link>
          </ListItem>
        </List>
      </Sidebar>
     
    </Layout>
    );
  }

export default MemoHome;