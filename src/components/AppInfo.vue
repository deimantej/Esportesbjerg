<template>
  <div class="waves">
    <v-container grid-list-xs text-xs-center >
      <v-layout row wrap my-5 pt-5 justify-center >
        <v-flex xs12 mx-5 style="max-width: 400px; ">
          <v-card flat color="transparent" class="my-2" >
            <v-card-text >
              <div style="color:#11537C; font-family: 'dinB'; font-size:21px; margin-bottom:-25px;">WHAT IS</div>
              <span style="font-family: 'delirium'; font-size:89px;">esport</span>

              <div class="text--primary text-xs-left" style="font-size:21px;">
                eSport is electronic sport, ie. computer games on the competition plan, which involves firm training both physically and in the game, participation in tournaments and championships, qualifications and finals.
                eSport is for everyone, regardless of age, language and wherever you are.
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12  mx-5 style="max-width: 400px; ;">
          <v-card flat color="transparent" class="my-2" >
            <v-card-text >
              <div style="color:#11537C; font-family: 'dinB'; font-size:21px; margin-bottom:-25px;">WHO IS</div>
              <span style="font-family: 'delirium'; font-size:89px;">ESPORT ESBJERG</span>

              <div
                class="text--primary text-xs-left" style="font-size:21px;"
              >eSport Esbjerg is a public education association whose purpose is to create a gathering for young people, as well as old people who have an interest in gaming. Here you can find people with the same interest within the different games and get the face of the people you play with. This creates an opportunity to be around games, but at the same time get to know new people.</div>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12  mx-5 style="max-width: 400px;">
          <v-card flat color="transparent" class="my-2" >
            <v-card-text >
              <div style="color:#11537C; font-family: 'dinB'; font-size:21px; margin-bottom:-25px;">WHY IS</div>
              <span style="font-family: 'delirium'; font-size:89px;">choose us</span>

              <div class="text--primary text-xs-left" style="font-size:21px;">
                Get access and discounts at club events. Access to both Discord and Teamspeak server. Benefits of eSport Esbjerg's game server.
                Member offers from sponsors.
                Membership within eSport Esbjerg ensures that eSport development in the Esbjerg area does not stop.
              </div>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12  my-5>
          <v-btn
          depressed
            outline color="black"
            class="black--text "
            to="/gallery"
            style="min-width:300px;font-family: 'dinB'; font-size:20px"
          >Check the gallery</v-btn>
          <v-btn
          depressed
            dark
            class="yellow--text"
            to="/gallery"
            style="font-family: 'dinB'; font-size:20px"
          >Join</v-btn>
        </v-flex>
        <v-flex xs12 pt-5 pb-0>
          <span style="font-family: 'delirium'; font-size:89px;">games we play</span>
        </v-flex>
        

      </v-layout>
    </v-container>
  </div>
</template>


<style scoped>
.waves {
  background: url("~@/assets/pictures/waves.png") no-repeat top center;
  background-size: 100% auto;
  margin-top: -40px;
  position: relative;
  z-index: 2;
 
}
@media only screen and (max-width: 960px) {
  .waves {
    background-size: 150% auto;
  }
}
@media only screen and (max-width: 560px) {
  .waves {
    background-size: 200% auto;
  }
}
@media only screen and (max-width: 400px) {
  .waves {
    background-size: auto 100%;
  }
}
</style>
