import React from "react";

const VideoCard = () => {
  return (
    <div>
      <section>
        <video
          src="/vid1.mov"
          type="video/mov"
          autoPlay
          loop
          className="w-full"
        />
      </section>
    </div>
  );
};

export default VideoCard;
