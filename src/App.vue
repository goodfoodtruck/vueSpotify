<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><i class="fas fa-couch"></i></router-link>
    </div>
    <transition
      name="view"
      appear
      enter-active-class="animated zoomInRight delay"
      leave-active-class="animated zoomOutLeft"
    >
      <router-view />
    </transition>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 5% 10%;
}

#nav {
  padding-bottom: 20px;
}

#nav a {
  font-size: 20px;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.delay {
  animation-delay: 1s;
}
</style>
