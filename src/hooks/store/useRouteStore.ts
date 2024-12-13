import {create} from 'zustand';
import { RouteState } from './store.types';

export const useRouteStore = create<RouteState>((set) => ({
  pages: [{ path: "/", name: "Home" }],
  addNewPage: (path, name) => set((state) => ({
    pages: [...state.pages, { path, name }]
  })),
}));
