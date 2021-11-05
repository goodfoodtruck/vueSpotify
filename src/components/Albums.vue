<template>
  <div class="list">
    <div class="card" v-for="(album, index) in albums" :key="'album' + index">
      <img :src="album.images[0].url" width="500" height="500" />
      <div class="name">{{ album.name }}</div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import Artists from "@/components/Artists.vue";

export default {
  name: "Albums",
  data() {
    return {
      albums: [],
    };
  },
  created() {
    this.getAlbums();
  },
  methods: {
    async getAlbums() {
      const response = await api.spotify.albums.getAlbums(Artists.id);
      this.albums = response.data.items;
    },
  },
};
</script>