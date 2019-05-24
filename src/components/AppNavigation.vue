<template>
  <span class="navigation">
    <v-navigation-drawer
      app
      v-model="drawer"
      class="grey darken-3"
      clipped-right="true"
      dark
      disable-resize-watcher
    >
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
    <v-toolbar class="navbar" flat app color="#151B26" dark height="70px">
      <router-link class="logo" to="/">
        <v-toolbar-title to="/">
          <img height="130px" :src="appTitle">
        </v-toolbar-title>
      </router-link>
      <v-flex class="mygtukai">
        <v-btn flat class="hidden-sm-and-down" to="/work">Home</v-btn>
        <v-btn flat class="hidden-sm-and-down" to="/about">Games</v-btn>
        <v-btn flat class="hidden-sm-and-down" to="/about">Events</v-btn>
        <v-btn flat class="hidden-sm-and-down" to="/about">Gallery</v-btn>
        <v-btn flat class="hidden-sm-and-down" to="/about">What is esports</v-btn>
      </v-flex>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-flex class="mygtukai">
        <v-btn flat class="hidden-sm-and-down yellow--text" to="/about">Join</v-btn>
      </v-flex>
      <v-toolbar-side-icon class="hidden-md-and-up nav_btn" @click="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
  </span>
</template>
<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      appTitle: require("@/assets/pictures/logo2000x2000.png"),
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
  z-index: 5;
}
.logo {
  align-self: flex-start;
}
.primary--text {
  color: white;
}
.nav_btn {
  justify-self: end;
}
</style>