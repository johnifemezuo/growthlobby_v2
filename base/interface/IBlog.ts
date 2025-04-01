interface IAuthor {
  name: string;
  image: string;
  profilePic: { url: string };
  role: string;
}

export interface IBlog {
  id: number;
  title: string;
  slug: string;
  coverImage: { url: string };
  readTime: number;
  date: string;
  author: IAuthor;
  category: string;
  details: { content: { html: string } };
}

export interface IBlogData {
  blogs: IBlog[];
}
