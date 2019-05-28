<template>
  <v-container class="set-max-width" grid-list-xs text-xs-center>
    <v-layout row wrap my-5 pt-5 justify-center>
      <v-flex xs12>
        <v-card flat color="transparent" class="my-2">
          <v-card-text>
            <h2>
              <small>JOIN THE</small>
              discussion
            </h2>
            <div
              class="text--primary"
            >eSport Esbjerg is a public education association whose purpose is to create a gathering for young people, as well as old people who have an interest in gaming. Here you can find people with the same interest within the different games and get the face of the people you play with. This creates an opportunity to be around games, but at the same time get to know new people.</div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-btn depressed outline color="black" class="black--text" to="/gallery">FORUM</v-btn>
      </v-flex>
      <v-flex xs12 pt-5 pb-0>
        <h3>OR FIND US HERE</h3>
      </v-flex>
      <v-flex>
        <div class="d-flex justify-space-around pt-5">
          <div v-for="(icon,index) in icons" :key="index">
            <a target="_blank" v-bind:href="icon.url">
              <v-img class="media_item" v-bind:src="icon.img"></v-img>
            </a>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      icons: [
        {
          url: "https://www.linkedin.com/in/deimante-jokubauskaite-07604b17b/",
          img: require("@/assets/pictures/team logo.png")
        },
        {
          url: "https://www.facebook.com/pandiscee",
          img: require("@/assets/pictures/discordblack.png")
        },
        {
          url: "https://www.instagram.com/pandisce/",
          img: require("@/assets/pictures/fb.png")
        }
      ]
    };
  }
};
</script>
