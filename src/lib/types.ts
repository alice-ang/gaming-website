export type Post = {
  title: string;
  idx: number;
  createdAt: string;
  //   coverImage: Image;
  body: {
    markdown: any;
  };
};
