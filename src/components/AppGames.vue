<template>
  <div class="waves2">
    <v-layout>
      <v-flex text-xs-center xs12 pt-5 pb-3>
        <h2>games we play</h2>
      </v-flex>
    </v-layout>

    <div class="games" style="background-image: url(https://i.imgur.com/OXzzGwo.jpg);">
      <v-expansion-panel>
        <v-container grid-list-xs text-xs-center text-md-left>
          <v-expansion-panel-content pa-0 ma-0 class="transparent">
            <template v-slot:actions>
              <v-btn outline color="yellow" class="btn">Read more</v-btn>
            </template>
            <template v-slot:header>
              <span
                class="yellow--text text1"
                style="font-size: 5vw;"
              >COUNTER STRIKE:GLOBAL OFFENSIVE</span>
            </template>
            <v-card color="transparent" class="text2">
              <v-card-text
                class="white--text px-5"
                style="font-size: 1.2vw; font-family: 'dinB';"
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
              <v-btn outline color="yellow" class="btn">Read more</v-btn>
            </template>
            <template v-slot:header>
              <span class="yellow--text text1" style="font-size: 5vw;">fortnite</span>
            </template>
            <v-card color="transparent" class="text2">
              <v-card-text
                class="white--text px-5"
                style="font-size: 1.2vw; font-family: 'dinB';"
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
              <v-btn outline color="yellow" class="btn">Read more</v-btn>
            </template>
            <template v-slot:header>
              <span class="yellow--text text1" style="font-size: 5vw;">Overwatch</span>
            </template>
            <v-card color="transparent" class="text2">
              <v-card-text
                class="white--text px-5"
                style="font-size: 1.2vw; font-family: 'dinB';"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-container>
      </v-expansion-panel>
    </div>
  </div>
</template>

