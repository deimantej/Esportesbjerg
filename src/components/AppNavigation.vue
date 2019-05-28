<template>
  <span class="navigation">
    <v-navigation-drawer
      app
      v-model="drawer"
      dark
      clipped-right="true"
      class="side-nav"
      disable-resize-watcher
    >
      <v-list>
        <v-list-tile
          active-class="lighten-2 white--text"
          v-for="item in items"
          :key="item.title"
          :to="item.link"
        >
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
      <div class="text-xs-center">
        <v-btn light color="yellow" class="black--text" to="/join">Join</v-btn>
      </div>
    </v-navigation-drawer>
    <v-toolbar class="navbar" flat app color="#151B26" dark height="70px">
      <router-link class="logo" to="/">
        <v-toolbar-title to="/">
          <img height="130px" :src="appTitle">
        </v-toolbar-title>
      </router-link>
      <v-flex>
        <v-btn flat v-for="item in items"
          :key="item.title"
          :to="item.link" class="hidden-sm-and-down" >{{item.title}}</v-btn>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex>
        <div class="text-xs-right">
          <v-btn flat class="hidden-sm-and-down yellow--text join" to="/join">Join</v-btn>
        </div>
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
        { title: "Gallery", link: "/gallery" },
        { title: "Forum", link: "/Forum" }
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