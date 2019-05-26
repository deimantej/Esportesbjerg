<template>
  <v-container grid-list-xs text-xs-center>
    <v-layout row wrap my-5 pt-5 justify-center>
      <v-flex xs12 style="max-width: 600px;">
        <v-card flat color="transparent" class="my-2">
          <v-card-text>
            <div
              style="color:#11537C; font-family: 'dinB'; font-size:21px; margin-bottom:-25px;"
            >JOIN THE</div>
            <span style="font-family: 'delirium'; font-size:89px;">discussion</span>

            <div
              class="text--primary"
              style="font-size:21px;"
            >eSport Esbjerg is a public education association whose purpose is to create a gathering for young people, as well as old people who have an interest in gaming. Here you can find people with the same interest within the different games and get the face of the people you play with. This creates an opportunity to be around games, but at the same time get to know new people.</div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-btn
          depressed
          outline
          color="black"
          class="black--text"
          to="/gallery"
          style="font-family: 'dinB'; font-size:20px"
        >FORUM</v-btn>
      </v-flex>

      <v-flex d-flex justify-center pt-5>
        <div v-for="(icon,index) in icons" :key="index">
          <a target="_blank" v-bind:href="icon.url">
            <v-img class="media_item" v-bind:src="icon.img"></v-img>
          </a>
        </div>
      </v-flex>

      <v-flex xs12 pt-5 pb-0>
        <span style="font-family: 'dinB'; font-size:30px;">OR FIND US HERE</span>
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
        },
      ]
    };
  }
};
</script>

<style scoped>
.media_item {
  margin: 0 auto;
  height: 80px;
  width: 80px;
}
.media_item:hover {
  opacity: .7
}
</style>
