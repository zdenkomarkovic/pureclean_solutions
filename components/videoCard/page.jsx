import React from "react";

const VideoCard = () => {
  return (
    <div>
      <section>
        <video
          src="/cleaning.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
          className="w-full"
        />
      </section>
    </div>
  );
};

export default VideoCard;
