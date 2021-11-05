<template>
  <div class="about">
    <Artists />
  </div>
</template>

<script>
import Artists from "@/components/Artists.vue";

export default {
  name: "About",
  data() {
    return {
      id: Artists.id,
    };
  },
  components: {
    Artists,
  },
};
</script>

<style>
.list {
  display: flex;
  overflow-x: scroll;
  padding: 0 10%;
}

.card {
  margin: 0 200px;

  -webkit-transform: rotateX(23deg) rotateZ(-9deg) rotateY(15deg)
    scale3d(1, 1, -0.9);
  transform: rotateX(23deg) rotateZ(-9deg) rotateY(15deg) scale(0.9);
  transition: all 0.2s cubic-bezier(0, 0.55, 0.45, 1);

  cursor: pointer;
}

.card:hover {
  transform: scale(1);
}
</style>