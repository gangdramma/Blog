import { IEntity } from "src/interfaces/blogs";

export interface SidebarProps {
  LatestBlogs: IEntity.Blog[];
  categories: IEntity.Categories[];
}
