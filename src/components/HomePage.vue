<template>
  <v-container fluid text-xs-center style="max-height: 100vh;">
    <v-layout justify-center align-center>
      <div>
        <v-toolbar flat fixed color="rgba(0, 0, 0, 0.5)" style="z-index:3; top:100px;">
          <v-toolbar-items class="sponsors">
            <v-layout>
              <div class="images">
                <v-flex mx-4 d-inline-block v-for="(obj,key) in sponsors" :key="key">
                  <v-img width="15vh" v-bind:src="obj.img"></v-img>
                </v-flex>
              </div>
            </v-layout>
          </v-toolbar-items>
        </v-toolbar>
      </div>

      <v-flex>
        <div id="header-carousel">
          <v-carousel style="height: 100%">
            <v-carousel-item
              v-for="(item, i) in items"
              :src="item.img"
              :key="i"
              reverse-transition="fade"
              transition="fade"
            >
              <v-jumbotron dark>
                <v-container fill-height>
                  <v-layout align-center>
                    <v-flex>
                      <h3 class="display-3">{{ item.title }}</h3>
                      <a href="www.facebook.com">
                          <div class="hover-animation">
                              <img src="https://i.imgur.com/nqlLeBo.png" alt="" class="img-front">
                              <img src="https://i.imgur.com/uR9xKZt.png" alt="" class="img-front">
                          </div>
                          
                      </a>
                        
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-jumbotron>
            </v-carousel-item>
          </v-carousel>
        </div>
      </v-flex>
    </v-layout>
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
          img: require("@/assets/pictures/gamer.png"),
          title: "something",
          text: " hello world"
        },
        {
          img: require("@/assets/pictures/gamer.png"),
          title: "something",
          text: " hello world"
        },
        {
          img: require("@/assets/pictures/gamer.png"),
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
  display: inline-block;
  opacity: 0.6;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.container {
  padding: 0;
}
.hover-animation {

  margin: 10% auto 0;
  color: #fff;
}
.hover-animation img {
  position: absolute;
  transition: opacity 1s ease-in-out;
}
.hover-animation img.img-front:hover {
  opacity: 0;
  cursor: pointer;
}
</style>
