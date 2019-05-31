<template>
  <v-container pa-0 fluid text-xs-center id="header-carousel">
    <div class="logo-images d-flex justify-center">
      <div class="sponsor_item" v-for="(obj,key) in sponsors" :key="key">
        <v-img v-bind:src="obj.img"></v-img>
      </div>
    </div>
    <v-carousel hide-delimiters hide-controls>
      <v-carousel-item
        v-for="(item, i) in items"
        :src="item.img"
        :key="i"
        reverse-transition="fade"
        transition="fade"
      >
        <v-container fill-height>
          <v-layout row wrap align-center>
            <v-flex xs12 d-block>
              <h3 class="white--text title1" style="font-size:34px;">
                JOIN OUR COMMUNITY OF PASSIONATE GAMERS
                <br>AT ESPORT ESBJERG
              </h3>
              <v-btn light color="yellow" to="/join" class="black--text mainbtn">Become a member</v-btn>
              <v-btn class="video-btn" target="_blank" @click.stop="dialog = true">
                <v-icon large>play_circle_outline</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-carousel-item>
    </v-carousel>
    <v-dialog v-model="dialog" max-width="800">
      <div class="embed-container">
        <iframe src="https://www.youtube.com/embed/56jAD1gyq2g" frameborder="0" allowfullscreen></iframe>
      </div>
    </v-dialog>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      dialog: false,
      items: [
        {
          img: require("@/assets/pictures/gamer.png")
        },
        {
          img: require("@/assets/pictures/gamer01.jpg")
        },
        {
          img: require("@/assets/pictures/gamer02.jpg")
        },
        {
          img: require("@/assets/pictures/gamer03.jpg")
        }
      ],
      sponsors: [
        {
          img: require("@/assets/pictures/cloudlogo.png")
        },
        {
          img: require("@/assets/pictures/cosmoslogo.png")
        }
      ]
    };
  }
};
</script>
<style>
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}
.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>