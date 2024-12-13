import { useRouteStore } from "@/hooks/store/useRouteStore";

export const useAddRoute = () => {
 const { pages, addNewPage } = useRouteStore();

 return { pages, addNewPage };
};
