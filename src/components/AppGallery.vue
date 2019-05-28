<template>
  <v-container my-5 grid-list-md class="set-max-width">
    <h1>Gallery</h1>
    <v-layout row wrap>
      <v-flex v-for="(obj,key) in images" :key="key" xs6 sm4 md3>
        <v-card flat>
          <v-img :src="obj.img" @click="zoom(obj.img)" aspect-ratio="1"/>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" max-width="90%">
      <v-card>
        <v-img :src="selectedImage" @click.stop="dialog = false" contain/>
      </v-card>
    </v-dialog>
  </v-container>
</template>



<script>
export default {
  data: () => ({
    dialog: false,
    selectedImage: "",
    images: [
      {
        img: require("@/assets/gallery/training ved Cosmos.jpg")
      },
      {
        img: require("@/assets/gallery/training ved Cosmos_1.jpg")
      },
      {
        img: require("@/assets/gallery/training ved Cosmos_2.jpg")
      },
      {
        img: require("@/assets/gallery/training ved Cosmos_3.jpg")
      },
      {
        img: require("@/assets/gallery/training ved Cosmos_4.jpg")
      },
      {
        img: require("@/assets/gallery/training ved Cosmos_5.jpg")
      },
      {
        img: require("@/assets/gallery/training ved Cosmos_6.jpg")
      },
      {
        img: require("@/assets/gallery/training ved Cosmos_7.jpg")
      },
      {
        img: require("@/assets/gallery/training ved Cosmos_8.jpg")
      },
      {
        img: require("@/assets/gallery/training ved Cosmos_9.jpg")
      },
      {
        img: require("@/assets/gallery/training ved Cosmos_2.jpg")
      }
    ]
  }),
  methods: {
    zoom(url) {
      this.selectedImage = url;
      this.dialog = true;
    }
  }
};
</script>