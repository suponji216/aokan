import { useGSAP } from "@gsap/react";
import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import gsap from "gsap";
import Moon from "../assets/moon.svg";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="flex flex-col">
      <Title />
      <Body />
      <Footer />
    </div>
  );
}
function Footer() {
  return (
    <div
      className="bg-deepCove h-32"
      style={{ clipPath: "polygon(0 0, 100% 10vh, 100% 100%, 0 100%)" }}
    ></div>
  );
}
function Title() {
  const title = useRef(null);
  const moon = useRef(null);

  useGSAP(
    () => {
      gsap.to(".ease", {
        delay: 0.2,
        duration: 0.5,
        stagger: 0.2,
        y: 0,
        opacity: 1,
      });
    },
    { scope: title }
  );
  useGSAP(
    () => {
      gsap
        .timeline()
        .to("img", {
          delay: gsap.utils.random(0.5, 1.5, 0.1),
          duration: 0.5,
          opacity: 0.5,
        })
        .to("img", {
          rotation: 180 * gsap.utils.random([1, -1]),
          repeat: -1,
          duration: 180,
        });
    },
    { scope: moon }
  );

  return (
    <div
      className="relative"
      style={{
        clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 calc(100% - 10vh))",
      }}
    >
      <div
        ref={title}
        className="h-dvh font-title font-black text-9xl text-right text-neutral-300 flex flex-col justify-end bg-deepCove"
      >
        <div ref={moon} className="absolute top-40 left-72">
          <img src={Moon} alt="moon" className="w-72 h-72 opacity-0" />
        </div>
        <span className="ease opacity-0 mr-64">
          TEI<span className="text-java">A</span>NBO
        </span>
        <span className="ease opacity-0 mr-10">
          <span className="text-java">O</span>NLINE
        </span>
        <span className="ease opacity-0 mr-40">
          <span className="text-java">CON</span>FERENCE
        </span>
        <span className="ease opacity-0 mr-24 mb-20">2024</span>
      </div>
    </div>
  );
}
function Body() {
  return (
    <div className="mx-auto">
      <h1 className="font-title text-7xl font-black text-center mb-5">
        ABOUT EVENT
      </h1>
      <div className="font-body text-3xl">
        <div className="mb-5">
          <p>ていあんぼのみんなと寝ないでいっぱいゲームしよう！</p>
          <p>21時ぐらいから始めて気絶するまでゲームします！</p>
          <p>途中参加途中抜けOK！</p>
          <p>12/7は少し早めに終わります。28日は🥜無限🥜です！</p>
        </div>
        <div className="mb-5">
          <p>各イベントでTP(teianbo point)を付与します</p>
          <p>勝ったチーム：5TP</p>
          <p>負けたチーム：2TP</p>
          <p>感染者：1TP</p>
          <p>TFT等の順位があるゲームは順位に応じてTPを付与します</p>
        </div>
        <div className="mb-5">
          <p>
            最終的に一番TPが多い人にあったらうれしい程度の賞品をプレゼント🎁
          </p>
          <p>?シークレット賞もあります¿</p>
        </div>
      </div>
      <h1 className="font-title text-7xl font-black text-center mb-5">GAMES</h1>
      <div className="font-body text-3xl">
        <div className="mb-5">
          <p>League of Legends(カスタム)</p>
          <p>VALORANT(カスタム)</p>
          <p>tank team</p>
          <p>マーベル・ライバルズ</p>
          <p>マイクラ攻城戦</p>
          <p>TFT</p>
          <p>feigen</p>
          <p>AMQ</p>
          <p>その場のノリ</p>
        </div>
      </div>
    </div>
  );
}
