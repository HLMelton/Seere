import { defineStore } from 'pinia';

export interface Card {
  card: String;
  id: number;
  status: boolean;
}

export const useDeckStore = defineStore('deck', {
  state: () => ({
    cards: [] as Card[],
  }),
  actions: {
    addCard(card: string) {
      this.cards.push({card, id: this.id++, status: false})
    },
    removeCard(card: Card){
      this.cards.splice(this.cards.indexOf(card), 1);
    },
    statusChange(card: Card){
      card.status = !card.status
    }
  },
  persist: true,
});