import React from 'react';

import coffee from '../images/coffee.jpg';

function SectionIntro() {
  return (
    <section id="intro">
        <div class="page-title">
            <h1>카페 소개</h1>
        </div>
        <div class="content">
            <div class="photo">
                <img src="images/coffee.jpg" alt=""/>
            </div>
            <div class="text">
                <p> 영업 시간 : 오전 9시 ~ 밤 10시 </p>
                <p> 휴무 : 매주 수요일 (<i><small>수요일이 공휴일일 경우 수요일 영업, 다음날 휴무</small></i>)</p>
            </div>
        </div>
    </section>
  );
}

export default SectionIntro;
