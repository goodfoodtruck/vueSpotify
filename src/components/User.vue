<template>
  <div class="user">
    {{ auth() }}
    <img :src="user.images[0].url" />
    <h1>{{ user.display_name }}</h1>
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "User",
  data() {
    return {
      user: "",
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    async getUser() {
      const response = await api.spotify.users.getUserProfile();
      this.user = response.data;
    },
    auth() {
      return api.auth.getAuth();
    },
  },
};
</script>

<style scoped>
img {
  border-radius: 50%;
}

h1 {
  font-size: 40px;
}
</style>
