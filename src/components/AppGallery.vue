<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-container grid-list-sm fluid>
          <v-layout row wrap>
            <v-flex
              v-for="(obj,key) in images" :key="key"
              xs4
              d-flex
            >
              <v-card flat tile class="d-flex">
                <v-img
                  v-bind:src="obj.img"
                  contain
                  aspect-ratio="1"
                  class="transparent"
                >
                  <template v-slot:placeholder>
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </template>
                </v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>



<script>
export default {
    data: () => ({
      images: [
            
            {
                img: require('@/assets/gallery/Træning ved Cosmos.jpg'),
                
            },
            {
                img: require('@/assets/gallery/Træning ved Cosmos_1.jpg'),
                
            },
                       
            {
                img: require('@/assets/gallery/Træning ved Cosmos_2.jpg'),
                
            },
            {
                img: require('@/assets/gallery/Træning ved Cosmos_3.jpg'),
                
            },
            {
                img: require('@/assets/gallery/Træning ved Cosmos_4.jpg'),
                
            },
            {
                img: require('@/assets/gallery/Træning ved Cosmos_5.jpg'),
                
            },
            {
                img: require('@/assets/gallery/Træning ved Cosmos_6.jpg'),
                
            },
            {
                img: require('@/assets/gallery/Træning ved Cosmos_7.jpg'),
                
            },
            {
                img: require('@/assets/gallery/Træning ved Cosmos_8.jpg'),
                
            },
            {
                img: require('@/assets/gallery/Træning ved Cosmos_9.jpg'),
                
            },
            {
                img: require('@/assets/gallery/Træning ved Cosmos_2.jpg'),
                
            },


        ],

        
        
    })
};
</script>