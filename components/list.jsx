import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Anchor from "@/components/anchor";

import { projects } from "@/lib/constants";

function getProjects(id) {
  const items = projects[id];
  // await setTimeout();
  return items;
}

const List = ({ portfolio }) => {
  const projects = getProjects(portfolio.id);
  return (
    <>
      <div className="py-4 mx-auto">
        <Anchor id={portfolio.id} top={"-top-[162px] md:-top-32"}></Anchor>
        <h1 className="pb-3">{portfolio.title}</h1>
        <Carousel>
          <CarouselContent className="ml-0 md:-ml-4">
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="pl-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <Dialog>
                  <DialogTrigger>
                    <div className=" bg-white flex flex-col w-56 max-w-56">
                      {(project.cover != "") & (project.cover != null) ? (
                        <Image
                          src={project.cover}
                          alt="Cover for project"
                          width={100}
                          height={100}
                          className="h-32 w-56 max-h-32 max-w-56"
                        />
                      ) : (
                        <>
                          <Image
                            src="/no-image.png"
                            alt="no image"
                            width={100}
                            height={100}
                            className="h-32 w-56 max-h-32 max-w-56"
                          />
                        </>
                      )}
                      <div className="bg-black text-center">
                        {project.category}
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-h-full overflow-y-scroll m-4 flex flex-col gap-2 justify-center items-center">
                    <DialogHeader>
                      <DialogTitle>{project.title}</DialogTitle>
                      <DialogDescription className="py-2">
                        {project.description}
                      </DialogDescription>
                    </DialogHeader>
                    {project.images
                      ? project.images.map((image, index) => (
                          <Image
                            key={`{project.id}-image-${index}`}
                            src={image}
                            alt={`image for ${project.title}`}
                            width={100}
                            height={100}
                            className="max-w-56"
                          />
                        ))
                      : null}
                    {project.videos
                      ? project.videos.map((video, index) => (
                          <video
                            src={video}
                            key={`{project.id}-video-${index}`}
                            alt={`video for ${project.title}`}
                            className=" object-center "
                            controls
                          ></video>
                        ))
                      : null}
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};
export default List;
