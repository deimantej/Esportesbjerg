<template>
  <v-footer class="footer" height="auto" dark>
    <v-container class="set-max-width" grid-list-md>
      <v-layout row wrap class="footnav">
        <v-flex xs12 sm6 md4 lg3>
          <v-card flat color="transparent">
            <v-card-title>
              <h3>Esport Esbjerg</h3>
            </v-card-title>
            <v-card-text>
              <p>
                Jack Sparrow
                <br>whateveremail@gmail.com
                <br>546986554321
              </p>
              <p>
                Discord
                <br>Facebook
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md5 lg6>
          <v-card flat color="transparent">
            <v-card-title>
              <h3>Address</h3>
            </v-card-title>
            <v-card-text>
              <p>
                Askekrattet 4
                <br>6705 Esbjerg
              </p>
              <p>
                Opening hours
                <br>Monday - Thursday: 9 am - 10 pm
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm12 md3>
          <v-card flat color="transparent" class="last_col text-md-right">
            <v-card-title>
              <h3>Navigation</h3>
            </v-card-title>
            <v-card-text>
              <ul>
                <li class="active">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/gallery">Gallery</a>
                </li>
                <li>
                  <a href="">Forum</a>
                </li>
              </ul>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 sm6 text-sm-left text-xs-center>Copyright 2019 eSport Esbjerg</v-flex>
        <v-flex xs12 sm6 text-sm-right text-xs-center>Esbjerg, Denmark</v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>
