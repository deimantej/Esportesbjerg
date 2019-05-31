<template>
  <v-container my-5 grid-list-md class="set-max-width">
    <h1>Gallery</h1>
    <v-layout row wrap>
      <v-flex v-for="(obj,key) in images" :key="key" xs6 sm4 md3>
        <v-card flat>
          <v-img :src="obj.thumb" @click="zoom(obj.img)" aspect-ratio="1"/>
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
        img: require("@/assets/gallery/1.jpg"),
        thumb: require("@/assets/gallery/1sm.png")
      },
      {
        img: require("@/assets/gallery/2.jpg"),
        thumb: require("@/assets/gallery/2sm.png")
      },
      {
        img: require("@/assets/gallery/3.jpg"),
        thumb: require("@/assets/gallery/3sm.png")
      },
      {
        img: require("@/assets/gallery/4.jpg"),
        thumb: require("@/assets/gallery/4sm.png")
      },
      {
        img: require("@/assets/gallery/5.jpg"),
        thumb: require("@/assets/gallery/5sm.png")
      },
      {
        img: require("@/assets/gallery/6.jpg"),
        thumb: require("@/assets/gallery/6sm.png")
      },
      {
        img: require("@/assets/gallery/7.jpg"),
        thumb: require("@/assets/gallery/7sm.png")
      },
      {
        img: require("@/assets/gallery/8.jpg"),
        thumb: require("@/assets/gallery/8sm.png")
      },
      {
        img: require("@/assets/gallery/9.jpg"),
        thumb: require("@/assets/gallery/9sm.png")
      },
      {
        img: require("@/assets/gallery/10.jpg"),
        thumb: require("@/assets/gallery/10sm.png")
      },
      {
        img: require("@/assets/gallery/11.jpg"),
        thumb: require("@/assets/gallery/11sm.png")
      },
      {
        img: require("@/assets/gallery/12.jpg"),
        thumb: require("@/assets/gallery/12sm.png")
      },
      {
        img: require("@/assets/gallery/13.jpg"),
        thumb: require("@/assets/gallery/13sm.png")
      },
      {
        img: require("@/assets/gallery/14.jpg"),
        thumb: require("@/assets/gallery/14sm.png")
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