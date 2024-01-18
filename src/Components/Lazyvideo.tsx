import React, { useRef, useEffect } from 'react';

interface LazyVideoProps {
  src: string;
}

const LazyVideo: React.FC<LazyVideoProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video && MediaSource.isTypeSupported('video/mp4')) {
      const mediaSource = new MediaSource();
      video.src = URL.createObjectURL(mediaSource);

      mediaSource.addEventListener('sourceopen', () => {
        const sourceBuffer = mediaSource.addSourceBuffer('video/mp4');

        fetch(src)
          .then((response) => response.arrayBuffer())
          .then((data) => {
            sourceBuffer.appendBuffer(data);
          })
          .catch((error) => console.error('Error fetching video:', error));
      });
    } else {
      // Fallback to regular video loading
      video!.src = src;
    }
  }, [src]);

  return <video ref={videoRef} autoPlay loop muted controls={false} playsInline className="object-cover w-full h-full" />;
};

export default LazyVideo;
