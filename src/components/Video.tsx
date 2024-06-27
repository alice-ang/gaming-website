export const Video = () => {
  return (
    <video className="aspect-video" controls preload="none">
      <source src="/path/to/video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
