<template>
<v-container fluid ma-0 pa-0 fill-width >
<v-flex >

    <div>
            <v-flex>
          <div class="text-xs-center  " style="z-index:3; align-items: center;
    justify-content: center; ">
         <v-btn round small>Join the community</v-btn>
       </div>
      </v-flex>
        <v-carousel>
            
      
      
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src">
      
     
    </v-carousel-item>
  </v-carousel> 
  </div>
  </v-flex>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
