interface IAuthor {
  name: string;
  profilePic: { url: string };
  role: string;
}

export interface IBlog {
  id?: number;
  title: string;
  slug: string;
  image: { url: string };
  readTime: number;
  author: IAuthor;
  category: string;
  content?: {  html: string  };
  featured?: boolean
  publishedAt: string;	
}

export interface IBlogData {
  blogs: IBlog[];
}
