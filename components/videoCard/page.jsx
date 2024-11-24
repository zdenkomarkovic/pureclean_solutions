import React from "react";

const VideoCard = () => {
  return (
    <div>
      <section>
        <video
          src="/vid1.mp4"
          type="video/mp4"
          autoPlay
          loop
          className="w-full"
        />
      </section>
    </div>
  );
};

export default VideoCard;
