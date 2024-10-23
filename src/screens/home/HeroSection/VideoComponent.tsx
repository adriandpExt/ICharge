import { ReactElement, useEffect, useRef } from "react";

const VideoComponent = (): ReactElement => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const threshold = 0.5;

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handlePlayPause = async (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        try {
          await videoElement.play();
        } catch (error) {
          console.error("Video play was interrupted: ", error);
        }
      } else {
        videoElement.pause();
      }
    };

    const observer = new IntersectionObserver(handlePlayPause, {
      threshold,
    });

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, [threshold]);

  return (
    <div className='absolute overflow-hidden inset-0 h-[90vh] w-full rounded-bl-[5rem] border-b-2 border-white object-cover shadow-2xl brightness-[30%] transition-opacity duration-1000'>
            <iframe 
                width="1920"
                height="1080"
                src="https://www.youtube.com/embed/E0SEzlJrFf8?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&start=50&enablejsapi=1&&widgetid=3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
                 />
    </div>
  );
};

export default VideoComponent;
