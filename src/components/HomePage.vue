<template>
  <v-container fluid text-xs-center id="header-carousel">
    <div class="images">
      <v-layout row wrap justify-center>
        <v-flex class="sponsor_item" xs4 d-flex v-for="(obj,key) in sponsors" :key="key">
          <v-img v-bind:src="obj.img"></v-img>
        </v-flex>
      </v-layout>
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
              <h3 class="display-1 white--text">{{ item.title }}</h3>
              <v-btn
                round
                light
                class="blue--text"
                style="min-width:300px; border:2px solid #2196F3 ;"
              >Become a member</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      items: [
        {
          img: require("@/assets/pictures/gamer.png"),
          title: "something",
          text: " hello world"
        },
        {
          img: require("@/assets/pictures/gamer01.jpg"),
          title: "something",
          text: " hello world"
        },
        {
          img: require("@/assets/pictures/gamer02.jpg"),
          title: "something",
          text: " hello world"
        },
        {
          img: require("@/assets/pictures/gamer03.jpg"),
          title: "something",
          text: " hello world"
        }
      ],
      sponsors: [
        {
          img: require("@/assets/pictures/cloudlogo.png")
        },
        {
          img: require("@/assets/pictures/cosmoslogo.png")
        },
        {
          img: require("@/assets/pictures/cloudlogo.png")
        }
      ]
    };
  }
};
</script>

<style scoped>
.images {
  opacity: 0.6;
  z-index: 5;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  padding: 15px;
}
.sponsor_item {
  max-width: 160px;
  padding: 0 8px;
}

.container {
  padding: 0;
}

#header-carousel .fade-enter-active,
#header-carousel .fade-leave-active,
#header-carousel .fade-leave-to {
  transition: all 0.3s ease-out;
  position: absolute;
  top: 0;
  width: 100%;

  left: 0;
}
#header-carousel .fade-enter,
#header-carousel .fade-leave,
#header-carousel .fade-leave-to {
  opacity: 0;
}
</style>
