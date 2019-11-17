import * as React from 'react';
import { Link, RouteComponentProps, Redirect, withRouter } from 'react-router-dom';
import Layout from '../../components/Layout';
import Sidebar, { SidebarTitle, SidebarBackButton } from '../../components/Sidebar';
import Main from '../../components/Main';
import AddMemoBtn from '../../components/AddMenuBtn';
import MemoRouter from '../../components/memo';
import { List, ListItem } from '../../components/List';

function MemoListPage(props) {
    console.log("MemoListPage");
    
  const { memos, hasAddMemoBtn } = props;
  const hasMemos = memos.length > 0;
  console.log("MemoListPage", memos);
  
  return (
    <Layout>
      <Sidebar>
        <SidebarBackButton to="/" />
        <SidebarTitle>메모</SidebarTitle>
        {hasMemos && <MemoList {...props}/>}
      </Sidebar>
      <Main>
        <div style={{ margin: '10px' }}>
          {hasAddMemoBtn && <AddMemoBtn />}
          <MemoRouter />
        </div>
      </Main>
    </Layout>
  );
}

export default MemoListPage

function MemoList({memos}){
  const memoTitle = (content) => {
    return content.substr(0, 15);
  }

  return (
    <List>
      {memos.map((memo, idx) =>
        <ListItem key={idx} first={idx === 0}>
          <Link to={`/memo/${memo.id}`}
            style={{
              textDecoration: 'none',
              color: '#000'
            }}>
            {memoTitle(memo.content)}
          </Link>
        </ListItem>
      )}
      <MemoRouter />
    </List>
  )
}