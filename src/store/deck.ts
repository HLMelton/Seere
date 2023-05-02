import { defineStore } from 'pinia';

export interface Card {
  card: String;
  id: number;
}

export const useDeckStore = defineStore('deck', {
  state: () => ({
    cards: [] as Card[],
    id: 0,
  }),
  actions: {
    addCard(card: string) {
      this.cards.push({card, id: this.id++})
    },
    removeCard(card: Card){
      console.log('Trigger: Remove the current index')
      console.log(card)
    }
  },
  persist: false,
});