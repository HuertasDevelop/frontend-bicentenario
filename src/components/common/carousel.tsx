"use client";
import Carousel from "nuka-carousel";
import Image from "next/image";
import Link from "next/link";
type Props = {
  carousel: Carousel[];
};

const CarouselHome = ({ carousel }: Props) => {
  return (
    <>
      {carousel && (
        <Carousel
          autoplay={true}
          wrapAround={true}
          vertical={true}
          autoplayInterval={3000}
          pauseOnHover={true}
          withoutControls={false}
          renderCenterRightControls={() => false}
          renderCenterLeftControls={() => false}
          renderBottomCenterControls={({
            slideCount,
            currentSlide,
            goToSlide,
          }) => (
            <ul className="flex  ">
              {[...Array(slideCount)].map((e, index) => (
                <li className="w-4 h-4" key={index}>
                  <button
                    type="button"
                    aria-label="slide 1 bullet"
                    onClick={() => goToSlide(index)}
                  >
                    <i
                      className={
                        index === currentSlide ||
                        index === currentSlide - slideCount
                          ? "bi bi-circle-fill  max-h-44  text-sm text-secondary-100  "
                          : " bi bi-circle-fill   text-xs text-secondary-400"
                      }
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}
        >
          {carousel.map(({ id, link, description, photo }) => (
            <Link
              key={id}
              href={link}
              className="w-full  overflow-auto"
              target="_blank"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${photo}`}
                width={1000}
                height={1000}
                alt={description}
                style={
                  {
                    // height: 100 vh - 100 px,
                    // height: "calc(100vh - 600px)",
                  }
                }
                className="w-full  overflow-auto object-cover h-[160px]  sm:h-[250px] md:h-[300px] lg:h-[200px] xl:h-[300px] 2xl:h-[600px] rounded-md"
              />
            </Link>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default CarouselHome;
