<template>
  <v-container fluid grid-list-xs text-xs-center pa-0>
    <v-layout justify-center>
      <v-flex>
        <v-expansion-panel >
          <v-expansion-panel-content pa-0 ma-0 class="games">
            <template v-slot:actions>
              <v-btn outline color="yellow" class="btn">Join the community</v-btn>
            </template>
            <template v-slot:header>
              <div class="top-left">
              <span
               
                class="yellow--text "
                style="font-size: 5vw; font-family: 'delirium';"
              >COUNTER STRIKE:GLOBAL OFFENSIVE</span>
            </div>
            </template>
            <v-card color="transparent" class="tekstas1" >
              <v-card-text class="white--text px-5" style="font-size: 1vw;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        
        <v-expansion-panel >
          <v-expansion-panel-content pa-0 ma-0 class="games">
            <template v-slot:actions>
              <v-btn outline color="yellow" class="btn">Join the community</v-btn>
            </template>
            <template v-slot:header>
              <div class="top-left">
              <span
               
                class="yellow--text "
                style="font-size: 5vw; font-family: 'delirium';"
              >COUNTER STRIKE:GLOBAL OFFENSIVE</span>
            </div>
            </template>
            <v-card color="transparent" class="tekstas1" >
              <v-card-text class="white--text px-5" style="font-size: 1vw;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel >
          <v-expansion-panel-content xs12 pa-0 ma-0 class="games">
            <template v-slot:actions>
              <v-btn outline color="yellow" class="btn">Join the community</v-btn>
            </template>
            <template v-slot:header>
              <div class="top-left">
              <span
               
                class="yellow--text "
                style="font-size: 5vw; font-family: 'delirium';"
              >COUNTER STRIKE:GLOBAL OFFENSIVE</span>
            </div>
            </template>
            <v-card color="transparent" class="tekstas1" >
              <v-card-text class="white--text px-5" style="font-size: 1vw;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<style>
.games {
  position: relative;
  width: 100%;
  height: 300px;
  background-image: url(https://i.imgur.com/OXzzGwo.jpg);
  background-size: cover;
  background-position: center top;
}

/* Make the image responsive */
.games img {
  width: 100%;
  height: 300px;
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
  top: 30%;
  left: 10%;
}



.v-expansion-panel__header{
  position: unset;
}
</style>
