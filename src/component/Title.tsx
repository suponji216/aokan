import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Moon from "../assets/moon.svg";

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
          rotation: 360,
          repeat: -1,
          duration: 180,
          ease: "bounce.inOut",
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

export default Title;
