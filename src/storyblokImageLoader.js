const storyblokImageLoader = ({ src, width, quality }) => {
  return `${src}/m/fit-in/${width}x0/filters:quality(${quality || 75})`;
};

export default storyblokImageLoader;
