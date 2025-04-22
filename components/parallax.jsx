import Image from "next/image";
import { Button } from "./ui/button";
import { Play } from "lucide-react";
import Anchor from "./anchor";
const Parallax = () => {
  return (
    <div className="flex h-[calc(100dvh-theme(space.32))]">
      <Anchor id="home" top={"-top-[162px] md:-top-32"}></Anchor>
      <div className="fixed h-full w-full z-0 r-0 t-0">
        <video
          src="https://github.com/Enricco18/thay-producoes/raw/refs/heads/main/public/bg-video.mp4"
          className="object-cover max-w-none object-center md:max-w-full brightness-[0.25]"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div className="z-20 my-4 mb-16 md:my-0 md:self-center mx-auto md:mr-0 md:ml-20">
        <div className="flex flex-col justify-center items-center md:block">
          <Image
            src={"/logo-v-white.png"}
            width={210}
            height={210}
            alt="Logo Thay Vertical"
          />
          <p className="w-96 py-6 font-bold text-center md:text-left">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Cras dictumst
            congue tempor integer magnis dapibus. Convallis dapibus ac dapibus
            erat nostra. Maximus fusce scelerisque condimentum quis libero
            pulvinar. Venenatis facilisi magnis nisl nullam iaculis nam viverra.
            Ad natoque scelerisque lorem in; eleifend suspendisse ex. Nunc
            primis ullamcorper eros potenti nulla ad.
          </p>
          <Button>
            <Play />
            Assisir
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
