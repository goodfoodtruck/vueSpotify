<template>
  <div class="list">
    <div
      class="card"
      v-for="(artist, index) in artists"
      :key="'artist' + index"
      v-on:click="getArtistId(artist)"
    >
      <img :src="artist.images[0].url" width="500" height="500" />
      <div class="name">{{ artist.name }}</div>
    </div>
    <Albums v-if="id" />
  </div>
</template>

<script>
import api from "@/api";
import Albums from "@/components/Albums.vue";

export default {
  name: "Artists",
  data() {
    return {
      artists: [],
      id: "",
    };
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      const response = await api.spotify.users.getUserItems();
      this.artists = response.data.items;
    },
    getArtistId(artist) {
      this.id = artist.id;
    },
  },
  components: {
    Albums,
  },
};
</script>

<style scoped>
img {
  object-fit: cover;
}
</style>
