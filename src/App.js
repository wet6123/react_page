import React, { useEffect, useState } from "react";
import "./css/App.css";

function App() {
  const [position, setposition] = useState(0);
  function onScroll() {
    console.log(window.scrollY);
    setposition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>
      <img src="/img/main.png" alt="타이틀 이미지" />
      {/* <h1>스파이더맨 노웨이 홈</h1> */}
      <div id="stillImg">
        <img
          src="/img/1.png"
          alt="1 이미지"
          style={{
            transform: `translateX(${(position - 500) / 5}px)`,
            opacity: (position - 100) / 150,
          }}
        />
        <img
          src="/img/2.png"
          alt="2 이미지"
          style={{
            opacity: (position - 900) / 200,
          }}
        />
        <img
          src="/img/4.png"
          alt="4 이미지"
          style={{
            transform: `translateX(${(2300 - position) / 5}px)`,
            opacity: (position - 1700) / 200,
          }}
        />
      </div>
      <div>
        <p
          style={{
            opacity: (position - 2150) / 200,
          }}
        >
          시리즈 최초로 정체가 탄로난 스파이더맨!
        </p>
        <p
          style={{
            opacity: (position - 2200) / 200,
          }}
        >
          절체절명의 위기에 빠진 스파이더맨 피터 파커!
        </p>
        <p
          style={{
            opacity: (position - 2420) / 200,
          }}
        >
          모든 일상을 빼앗아간 거대한 위협과 맞서다!
        </p>
        <p id="synop">
          ‘미스테리오’의 계략으로 세상에 정체가 탄로난 스파이더맨 ‘피터 파커’는
          하루 아침에 평범한 일상을 잃게 된다. 문제를 해결하기 위해 ‘닥터
          스트레인지’를 찾아가 도움을 청하지만 뜻하지 않게 멀티버스가 열리면서
          각기 다른 차원의 불청객들이 나타난다. ‘닥터 옥토퍼스’를 비롯해
          스파이더맨에게 깊은 원한을 가진 숙적들의 강력한 공격에 ‘피터 파커’는
          사상 최악의 위기를 맞게 되는데…
        </p>
      </div>
    </div>
  );
}

export default App;
