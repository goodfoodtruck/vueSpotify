<template>
  <div id="home">
    <User />
    <router-link to="/about"><button>Découvrir</button></router-link>
  </div>
</template>

<script>
import User from "@/components/User.vue";

export default {
  name: "Home",
  components: {
    User,
  },
};
</script>

<style scoped>
button {
  background-color: #42b983;
  border: none;

  border-radius: 25px;
  width: 150px;

  margin: auto;
  padding: 10px 0;

  font-size: 15px;
  font-family: inherit;
  font-weight: bold;

  cursor: pointer;
}
</style>
