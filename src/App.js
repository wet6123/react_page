import React, { useEffect, useState } from "react";
import "./css/App.css";
// import spiderTom from "../public/img/7.jpg";

//탭메뉴 콘텐츠
const content = [
  {
    tab: "톰 홀랜드",
    content: "마블 시네마틱 유니버스의 스파이더맨",
    // img: spiderTom,
  },
  {
    tab: "베네딕트 컴버배치",
    content: "마블 시네마틱 유니버스의 닥터 스트레인지",
  },
  {
    tab: "토비 맥과이어",
    content: "스파이더맨 트릴로지의 스파이더맨",
  },
  {
    tab: "앤드루 가필드",
    content: "어메이징 스파이더맨 시리즈의 스파이더맨",
  },
];

//탭메뉴 hooks
const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

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

  const { currentItem, changeItem } = useTabs(0, content);

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

      <div class="letters">
        <div class="bigLetter">
          <p
            style={{
              opacity: (position - 2700) / 200,
            }}
          >
            시리즈 최초로 정체가 탄로난 스파이더맨!
          </p>
          <p
            style={{
              opacity: (position - 2900) / 200,
            }}
          >
            절체절명의 위기에 빠진 스파이더맨 피터 파커!
          </p>
          <p
            style={{
              opacity: (position - 3100) / 200,
            }}
          >
            모든 일상을 빼앗아간 거대한 위협과 맞서다!
          </p>
        </div>

        <p
          class="synop"
          style={{
            opacity: (position - 3900) / 200,
          }}
        >
          ‘미스테리오’의 계략으로 세상에 정체가 탄로난 스파이더맨 ‘피터 파커’는
        </p>
        <p
          class="synop"
          style={{
            opacity: (position - 4000) / 200,
          }}
        >
          하루 아침에 평범한 일상을 잃게 된다. 문제를 해결하기 위해
        </p>
        <p
          class="synop"
          style={{
            opacity: (position - 4100) / 200,
          }}
        >
          ‘닥터스트레인지’를 찾아가 도움을 청하지만 뜻하지 않게 멀티버스가
        </p>
        <p
          class="synop"
          style={{
            opacity: (position - 4200) / 200,
          }}
        >
          열리면서 각기 다른 차원의 불청객들이 나타난다. ‘닥터 옥토퍼스’를
        </p>
        <p
          class="synop"
          style={{
            opacity: (position - 4300) / 200,
          }}
        >
          비롯해 스파이더맨에게 깊은 원한을 가진 숙적들의 강력한 공격에
        </p>

        <p
          class="synop"
          style={{
            opacity: (position - 4400) / 200,
          }}
        >
          ‘피터 파커’는 사상 최악의 위기를 맞게 되는데…
        </p>
      </div>

      <div
        class="tabMenu"
        style={{
          opacity: (position - 5000) / 200,
        }}
      >
        {content.map((section, index) => (
          <button onClick={() => changeItem(index)}>{section.tab}</button>
        ))}
        <div>{currentItem.content}</div>
      </div>
    </div>
  );
}

export default App;
