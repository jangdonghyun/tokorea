import * as React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Sidebar, { SidebarTitle } from '../components/Sidebar';
import Main from '../components/Main';
import AddMemoBtn from '../components/AddMenuBtn';
import { List, ListItem } from '../components/List';
import MemoRouter from '../components/memo';

function MemoHome(props) {
    const { memos, deletedMemos } = props;
    const { match, path } = props;
    return (
      <>
      <Layout>
      <Sidebar>
        <SidebarTitle>폴더</SidebarTitle>
        <List>
          <ListItem first>
            <Link to={match.url+'/list'}>메모({memos.length})</Link>
          </ListItem>
          <ListItem>
            <Link to="/trash">휴지통()</Link>
          </ListItem>
        </List>
      </Sidebar>
      <Main>
        <div style={{
          margin: '10px'
        }}><AddMemoBtn /></div>
      </Main>
    </Layout>
    </>
    );
  }

export default MemoHome;