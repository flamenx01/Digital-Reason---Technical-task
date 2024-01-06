import { defineStore } from 'pinia'

export const useThemeStore = defineStore('themeStore', {
  state: () => {
    return {
      menuItems: [],
    }
  },

  actions: {
    async getMenu() {
      const response = await fetch('/data/menu.json');
      try {
        const result = await response.json();
        this.menuItems = result.items;
      } catch (err) {
        console.error('Error loading new arrivals:', err);
        return err;
      }
    }
  }
})