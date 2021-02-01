<template>
  <div id="app" data-app>
    <AppDropdown />
  </div>
</template>

<script>
import AppDropdown from "./components/AppDropdown/component/AppDropdown.vue";

export default {
  name: "App",
  components: {
    AppDropdown,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
