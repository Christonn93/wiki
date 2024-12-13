export type RouteState = {
  pages: { path: string; name: string }[];
  addNewPage: (path: string, name: string) => void;
}
