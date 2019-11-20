import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
        <nav>
        <ul id="main-nav">
            <li><Link style={{ textDecoration: 'none' }} to="/intro">카페 소개</Link></li>					
            <li><Link style={{ textDecoration: 'none' }} to="/map">오시는 길</Link></li>
            <li><Link style={{ textDecoration: 'none' }} to="/choice">이 달의 추천</Link></li>
            <li><Link style={{ textDecoration: 'none' }} to="/memo">메모</Link></li>
            <li><Link style={{ textDecoration: 'none' }} to="/history">라우터</Link></li>
        </ul>
        </nav>
    </header>
  );
}

export default Header;