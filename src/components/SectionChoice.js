import React from 'react';

import ice from '../images/ice.jpg';

function SectionChoice() {
  return (
    <section id="choice">
        <div className="page-title">
        <h1>이 달의 추천 </h1>
        </div>
        <div className="content">
        <div className="photo">
            <img src={ice} alt="아이스 커피" style={{border:'1px solid white', borderRadius:'50%'}}/>
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
  );
}

export default SectionChoice;
