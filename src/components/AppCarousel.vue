<template>
  <v-container fluid ma-0 pa-0 fill-width>
    <v-flex>
      <div>
        
        <v-carousel>
          
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade"
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
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
