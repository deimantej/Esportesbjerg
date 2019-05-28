<template>
  <div class="waves">
    <v-container class="set-max-width" grid-list-md>
      <v-layout row wrap my-5 pt-5 justify-center>
        <v-flex xs12 md6 lg4>
          <v-card flat color="transparent" class="my-2">
            <v-card-text>
              <h2>
                <small>WHAT IS</small>
                esport
              </h2>

              <div class="text--primary">
                eSport is electronic sport, ie. computer games on the competition plan, which involves firm training both physically and in the game, participation in tournaments and championships, qualifications and finals.
                eSport is for everyone, regardless of age, language and wherever you are.
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 md6 lg4>
          <v-card flat color="transparent" class="my-2">
            <v-card-text>
              <h2>
                <small>WHO IS</small>
                ESPORT ESBJERG
              </h2>

              <div
                class="text--primary"
              >eSport Esbjerg is a public education association whose purpose is to create a gathering for young people, as well as old people who have an interest in gaming. Here you can find people with the same interest within the different games and get the face of the people you play with. This creates an opportunity to be around games, but at the same time get to know new people.</div>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 lg4>
          <v-card flat color="transparent" class="my-2">
            <v-card-text>
              <h2>
                <small>WHY IS</small>
                choose us
              </h2>

              <div class="text--primary">
                Get access and discounts at club events. Access to both Discord and Teamspeak server. Benefits of eSport Esbjerg's game server.
                Member offers from sponsors.
                Membership within eSport Esbjerg ensures that eSport development in the Esbjerg area does not stop.
              </div>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 my-5 text-xs-center>
          <v-btn depressed outline color="black" to="/gallery">Check the gallery</v-btn>
          <v-btn depressed dark class="yellow--text" to="/gallery">Join</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

