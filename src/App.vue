<template>
  <v-app>
    <div class="bg-gradient">
      <app-navigation></app-navigation>
      <v-content transition="slide-x-transition">
        <router-view></router-view>
      </v-content>
      <app-footer></app-footer>
    </div>
  </v-app>
</template>

<script>
import AppNavigation from "@/components/AppNavigation";
import AppFooter from "@/components/AppFooter";

export default {
  name: "App",
  components: {
    AppNavigation,
    AppFooter
  }
};
</script>


<style lang="scss">
@import "./styles/style.scss";
</style>
