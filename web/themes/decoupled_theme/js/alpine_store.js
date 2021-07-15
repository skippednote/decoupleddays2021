document.addEventListener("alpine:init", () => {
  Alpine.store("characters", {
    characters: null,

    clear() {
      this.characters = null;
    },

    async get() {
      this.characters = await fetch(
        "https://rickandmortyapi.com/api/character/"
      ).then((r) => r.json());
      this.characters = this.characters.results;
    },
  });

  Alpine.store("episodes", {
    episodes: null,

    clear() {
      this.episodes = null;
    },

    async get() {
      this.episodes = await fetch(
        "https://rickandmortyapi.com/api/episode/"
      ).then((r) => r.json());
      this.episodes = this.episodes.results;
    },
  });
});
