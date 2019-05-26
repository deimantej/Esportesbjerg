<template>
  <div>
   

    <div class="games" style="background-image: url(https://i.imgur.com/OXzzGwo.jpg);">
      
      <v-expansion-panel>
        <v-container grid-list-xs text-xs-center text-md-left>
          <v-expansion-panel-content pa-0 ma-0 class="transparent">
            <template v-slot:actions>
              <v-btn outline color="yellow" class="btn">Join the community</v-btn>
            </template>
            <template v-slot:header>
              <span class="yellow--text text1" style="font-size: 5vw;">COUNTER STRIKE:GLOBAL OFFENSIVE</span>
            </template>
            <v-card color="transparent" class="text2">
              <v-card-text
                class="white--text px-5"
                style="font-size: 1vw; font-family: 'dinB';"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-container>
      </v-expansion-panel>
    </div>
    <div class="games" style="background-image: url(https://i.imgur.com/soJdzrI.jpg);">
      <v-expansion-panel>
        <v-container grid-list-xs text-xs-center text-md-left>
          <v-expansion-panel-content pa-0 ma-0 class="transparent">
            <template v-slot:actions>
              <v-btn outline color="yellow" class="btn">Join the community</v-btn>
            </template>
            <template v-slot:header>
              <span class="yellow--text text1" style="font-size: 5vw;">fortnite</span>
            </template>
            <v-card color="transparent" class="text2">
              <v-card-text
                class="white--text px-5"
                style="font-size: 1vw; font-family: 'dinB';"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-container>
      </v-expansion-panel>
    </div>
    <div class="games" style="background-image: url(https://i.imgur.com/cN2lpog.jpg);">
      <v-expansion-panel>
        <v-container grid-list-xs text-xs-center text-md-left>
          <v-expansion-panel-content pa-0 ma-0 class="transparent">
            <template v-slot:actions>
              <v-btn outline color="yellow" class="btn">Join the community</v-btn>
            </template>
            <template v-slot:header>
              <span class="yellow--text text1" style="font-size: 5vw;">Overwatch</span>
            </template>
            <v-card color="transparent" class="text2">
              <v-card-text
                class="white--text px-5"
                style="font-size: 1vw; font-family: 'dinB';"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-container>
      </v-expansion-panel>
    </div>

  </div>
</template>


<style>
.games {
  width: 100%;
  
  background-size: cover;
  background-position: center top;
}

.text1 {
  font-family: "delirium";
}
.btn{
  font-family: 'dinB';
}
.v-expansion-panel__header {
  position: unset;
}
</style>
