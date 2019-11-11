import React from 'react';
import map from './images/map.jpg';
import coffee from './images/coffee.jpg';
import './App.css';

function App() {
  return (
    <>
    <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <title>Cafe</title>
    </head>
    <body>
      <div className="container">
        <header>
          <nav>
            <ul id="main-nav">
              <li><a href="#intro">카페 소개</a></li>					
              <li><a href="#map">오시는 길</a></li>
              <li><a href="#choice">이 달의 추천</a></li>
            </ul>
          </nav>
        </header>
        <section id="map">
          <div className="page-title">
            <h1>오시는 길</h1>
            </div>
            <div className="content">
              <div className="photo">
                <img src={map} alt="사계 포구에서 서쪽 방향으로 0001미터 진행"></img>
              </div>
              <div className="text">
                <p>서귀포시 안덕면 사계리 oooo-ooo1</p>
                <p>제주 올레 10코스 산방산 근처</p>	
            </div>
          </div>
        </section>
        <section id="choice">
          <div className="page-title">
            <h1>이 달의 추천 </h1>
          </div>
          <div className="content">
            <div className="photo">
              <img src={coffee} alt="아이스 커피" style={{border:'1px solid white', borderRadius:'50%'}}/>
            </div>
            <div className="text">
              <h2>핸드드립 아이스커피</h2>
                <ol>
                  <li>1인분 기준으로 서버에 각얼음 5조각(한조각의 20cc) 넣고 추출을 시작한다.</li>
                  <li>평상시 보다 원두의 양은 2배 정도 (20g)와 추출액은 얼음 포함해서 200cc까지 내린다.</li>
                  <li>아이스 잔에 얼음 6~7개 섞어서 시원하게 마신다</li>
                </ol>
            </div>
          </div>
        </section>
        <footer>
          <p>My times with Coffee</p>
        </footer>
      </div>
    </body>
    </>
  );
}

export default App;
