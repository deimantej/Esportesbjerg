<template>


  <v-container fluid ma-0 pa-0 fill-width  >
    <v-toolbar flat  fixed  color="rgba(0, 0, 0, 0.5)" style="z-index:3; top:100px; " >
    <v-toolbar-items  >
      <v-layout>
        <div class="images" >
          <v-flex  mx-4 d-inline-block v-for="(obj,key) in sponsors" :key="key"  >
            <v-img width="20vh" v-bind:src="obj.img"></v-img>
          </v-flex>
        </div>
      </v-layout>
    </v-toolbar-items>
  </v-toolbar>
    <v-flex>
      <div>
        
        <v-carousel>
          
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.img" reverse-transition="fade"
      transition="fade">
            <v-container fill-height>
              <v-layout align-center>
                <v-flex>
                  <v-card-actions class="justify-center">
                    <v-btn round light color="red white--text">Join the community</v-btn>
                  </v-card-actions>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>
        </v-carousel>
      </div>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
         {
        img: require("@/assets/pictures/gamer.png"),
        },
         {
        img: require("@/assets/pictures/gamer.png"),
        },
         {
        img: require("@/assets/pictures/gamer.png"),
        },
         {
        img: require("@/assets/pictures/gamer.png"),
        },
      ],
      sponsors: [
      {
        img: require("@/assets/pictures/cloudlogo.png"),
      },
       {
        img: require("@/assets/pictures/cosmoslogo.png"),
      },
       {
        img: require("@/assets/pictures/cloudlogo.png"),
      },
    ]
    };
  }
};
</script>

<style scoped>

.images{
  display:inline-block;
  opacity: 0.6;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


</style>
