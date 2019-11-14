import React from 'react';

import map from '../images/map.jpg';

function SectionMap() {
  return (
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
  );
}

export default SectionMap;
