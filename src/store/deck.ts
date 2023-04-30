import { defineStore } from 'pinia';
import { ref, reactive} from 'vue';

interface Card {
  card: String;
  id: Number;
}

export const useDeckStore = defineStore('deck', {
  state: () => ({
    cards: [] as Card[],
    id: 0,
  }),
  actions: {
    addCard(card: string) {
      this.cards.push({card, id: this.id++})
    }
  },
});