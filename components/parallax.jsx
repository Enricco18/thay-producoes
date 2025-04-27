"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { Play } from "lucide-react";
import Anchor from "./anchor";
import { useEffect, useState } from "react";
const Parallax = () => {
  const defaultBrightness = 0.75;
  const [brightness, setBrightness] = useState(defaultBrightness);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const scrollVH = scrollY / vh;

      // Limita o brilho mínimo a 0.3, pra não sumir completamente
      const novoBrilho = Math.max((1 - scrollVH) * defaultBrightness, 0.2);
      setBrightness(novoBrilho);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div className="flex min-h-[calc(100dvh-theme(space.32))]">
      <Anchor id="home" top={"-top-[162px] md:-top-32"}></Anchor>
      <div className="fixed h-full w-full z-0 r-0 t-0">
        <video
          src="https://public-tv-productions.s3.sa-east-1.amazonaws.com/bg-video.mp4"
          className={`object-cover max-w-none object-center md:max-w-full grayscale-25`}
          style={{ filter: `brightness(${brightness})` }}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div className="z-20 my-8 mb-20 md:my-12 md:self-center mx-auto md:mr-0 md:ml-20">
        <div className="flex flex-col justify-center items-center md:block gap-4">
          <Image
            src={"/logo-v-white.png"}
            width={210}
            height={210}
            alt="Logo Thay Vertical"
          />
          <p className="w-full px-2 md:px-0 md:w-[500px] py-4 font-bold text-center md:text-left leading-relaxed text-shadow-lg/30">
            Oi! Eu sou a Thayná Vergara, videomaker que ama contar histórias de
            um jeito leve, criativo e verdadeiro.
            <br /> Trabalho com vídeos pra várias áreas — de marcas e empresas
            até projetos culturais e gastronômicos — sempre buscando deixar as
            pessoas à vontade, porque acredito que os melhores registros nascem
            quando a gente tá se sentindo bem.
            <br />
            Vem conhecer meu trabalho!
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
