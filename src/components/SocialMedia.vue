<template>
  <div>
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
              >Share your knowledge about gameplay, strategies, features or browse the most popular answers provided by the eSport Esbjerg community. Or simply join the discussion to find friends with the same interest.</div>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-btn
            depressed
            outline
            color="black"
            class="black--text"
            href="https://esportesbjerg.createaforum.com/index.php"
          >FORUM</v-btn>
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
  </div>
</template>


<script>
export default {
  data() {
    return {
      icons: [
        {
          url: "https:/esportesbjerg.createaforum.com/",
          img: require("@/assets/pictures/team logo.png")
        },
        {
          url:
            "https://discordapp.com/invite/tW6mMUm?fbclid=IwAR24FfWV-JgBr-NmwwUTPAqGvYAQNunf49UnffWVZfRtwlSZmepXymvNVy0",
          img: require("@/assets/pictures/discordblack.png")
        },
        {
          url: "https://www.facebook.com/eSportEsbjerg",
          img: require("@/assets/pictures/fb.png")
        }
      ]
    };
  }
};
</script>


