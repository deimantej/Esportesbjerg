<template>
  <span class="navigation">
    <v-navigation-drawer app v-model="drawer" class="grey darken-3" dark disable-resize-watcher>
      <v-list>
        <v-list-tile
          active-class="pink lighten-2 white--text"
          v-for="item in items"
          :key="item.title"
          :to="item.link"
        >
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="navbar" flat app color="#151B26" dark height="100px">
      <v-toolbar-side-icon class="hidden-md-and-up" top="50px" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <router-link to="/">
        <v-toolbar-title to="/">
          <img class="logo" height="60px" top="50px" :src="appTitle">
        </v-toolbar-title>
      </router-link>
      <div class="mygtukai">
        <v-btn flat class="hidden-sm-and-down" top="50px" to="/work">Work</v-btn>
        <v-btn flat class="hidden-sm-and-down" top="50px" to="/about">About</v-btn>
      </div>
    </v-toolbar>
  </span>
</template>
<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      appTitle: require("@/assets/logo.png"),
      drawer: false,
      items: [
        { title: "Home", link: "/" },
        { title: "Work", link: "/work" },
        { title: "About", link: "/about" }
      ]
    };
  },
  methods: {
    track() {
      this.$ga.page("/");
    }
  }
};
</script>
<style scoped>
a {
  color: white;
  text-decoration: none;
}
.navbar {
  z-index: 100;
}
.logo {
  margin-top: 100px;
}
.primary--text {
  color: white;
}
</style>