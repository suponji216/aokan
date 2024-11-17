import "./App.css";
import MapPin from "./assets/map-pin.svg";
import CalendarMonth from "./assets/calendar-month.svg";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  const title = useRef(null);

  useGSAP(
    () => {
      gsap.to(".ease", {
        delay: 0.2,
        duration: 0.5,
        ease: "power1.in",
        stagger: 0.2,
        y: 0,
        opacity: 1,
      });
    },
    { scope: title }
  );

  return (
    <>
      <div className=" mt-3 ml-3 mb-20">
        <div className="flex">
          <div ref={title} className="ease-wrapper title flex flex-col ml-10">
            <span className="ease">
              TEI<span className="text-amber-500">A</span>NBO
            </span>
            <span className="ease">
              <span className="text-emerald-400">O</span>NLINE
            </span>
            <span className="ease">
              <span className="text-rose-300">CON</span>FERENCE
            </span>
          </div>
        </div>
        <div className="text flex ml-12 gap-1">
          <img className="h-3 mt-0.5" src={MapPin} alt="Map pin SVG" />
          <span className="text-xs">提案募</span>
        </div>
        <div className="text flex ml-12 gap-1">
          <img
            className="h-3 mt-3"
            src={CalendarMonth}
            alt="Calendar month SVG"
          />
          <span className="text-xs">
            12月<span className="text-lg">7</span>日&
            <span className="text-lg">28</span>日 21時~
          </span>
        </div>
        <div className="flex mt-20">
          <div className="w-[20%]"></div>
          <div className="w-[60%]">
            <div className="title-sm">ABOUT EVENT</div>
            <div className="mt-2 flex flex-col">
              <span>
                みんなで寝ないでいっぱいゲームしよう！21時ぐらいから始めて気絶するまでゲームします！12/7は少し早めに終わります。28日は🥜無限🥜です！
              </span>
              <span className="mt-2">
                各イベントでTP(teianbo point)を付与します。
              </span>
              <span>勝ったチーム：5TP</span>
              <span>負けたチーム：2TP</span>
              <span>感染者：1TP</span>
              <span>TFT等の順位があるゲームは順位に応じてTPを付与します。</span>
              <span className="mt-2">
                最終的に一番TPが多い人にあったらうれしい程度の賞品をプレゼント🎁
              </span>
              <span>シークレッド賞もあります！</span>
            </div>
            <div className="title-sm">GAMES</div>
            <ul className="list-outside list-none">
              <li>League of Legends</li>
              <li>VALORANT</li>
              <li>tank team</li>
              <li>マーベル・ライバルズ</li>
              <li>マイクラ攻城戦</li>
              <li>TFT</li>
              <li>feigen</li>
              <li>AMQ</li>
              <li>その場のノリ</li>
            </ul>
          </div>
          <div className="w-[20%]"></div>
        </div>
      </div>
    </>
  );
}

export default App;
