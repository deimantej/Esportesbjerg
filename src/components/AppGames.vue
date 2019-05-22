<template>
    <v-container fluid grid-list-xs text-xs-center pa-0  >
        <v-layout row wrap justify-center  >
            <div class="title"> 
                <h1  class="display-2">Games we play</h1>
            </div>
            <v-flex>
                <div pa-0  ma-0 class="games">
                    <img src="https://i.imgur.com/OXzzGwo.jpg" alt="Snow">
                    <v-flex xs12>
                     <div class="top-left">
                         <h1 text-xs-left class=" yellow--text font-weight-bold" style="font-size: 2.5vw;">COUNTER STRIKE:GLOBAL OFFENSIVE</h1>
                     </div>
                     </v-flex>
                    <v-btn round outline class="btn yellow--text">Join the community</v-btn>
                </div>
                <div class="games">
                    <img src="https://i.imgur.com/OXzzGwo.jpg" alt="Snow">
                    <v-flex xs12>
                     <div class="top-left">
                         <h1 text-xs-left class=" yellow--text font-weight-bold" style="font-size: 2.5vw;">COUNTER STRIKE:GLOBAL OFFENSIVE</h1>
                     </div>
                     </v-flex>
                    <v-btn round outline class="btn yellow--text">Join the community</v-btn>
                </div>
                <div class="games">
                    <img src="https://i.imgur.com/OXzzGwo.jpg" alt="Snow">
                    <v-flex xs12>
                     <div class="top-left">
                         <h1 text-xs-left class=" yellow--text font-weight-bold" style="font-size: 2.5vw;">COUNTER STRIKE:GLOBAL OFFENSIVE</h1>
                     </div>
                     </v-flex>
                    <v-btn round outline class="btn yellow--text">Join the community</v-btn>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<style>

.games {
  position: relative;
  width: 100%;
}

/* Make the image responsive */
.games img {
  width: 100%;
  height: auto;
}

/* Style the button and place it in the middle of the container/image */
.games .btn {
  position: absolute;
  top: 50%;
  left: 80%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);


}
.top-left {
  position: absolute;
  top: 45%;
  left: 10%;
  
  
}
h1{
    font-size: 16px;
}
</style>
