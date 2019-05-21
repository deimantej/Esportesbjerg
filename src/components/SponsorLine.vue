<template>
  <v-toolbar color="grey darken-4 ">
    <v-toolbar-items >
      <v-layout >
        <div >
          <v-flex v-for="(obj,key) in sponsors" :key="key">
            <v-img class="image" width="200px" v-bind:src="obj.img"></v-img>
          </v-flex>
        </div>
      </v-layout>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    sponsors: [
      {
        img: require("@/assets/pictures/cloudlogo.png"),
        img: require("@/assets/pictures/cosmoslogo.png")
      }
    ]
  })
};
</script>
