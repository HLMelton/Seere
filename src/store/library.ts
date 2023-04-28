import { defineStore } from 'pinia';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface LibraryState {
  items: Record<string, Product>;
}

export const useLibraryStore = defineStore({
  id: 'library',

  state: (): LibraryState => ({
    items: {},
  }),

  getters: {
    list(): Product[] {
      return this.ids.map((i) => this.items[i]);
    },

    loaded(): boolean {
      return this.ids.length > 0;
    },
  },

  actions: {

});