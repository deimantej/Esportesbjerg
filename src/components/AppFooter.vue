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
                <a href="mailto:admin@esport-esbjerg.dk">admin@esport-esbjerg.dk</a>
                <br>
                <a href="tel:+4531131774">+45 3113 1774</a>
              </p>
              <p>
                <a
                  href="https://discordapp.com/invite/tW6mMUm?fbclid=IwAR19V4tDJQeglcBlO7o-1FI_t1sjit_wbFhBrLaXBt-yXpvRw9T5Gv2XRjo"
                  target="_blank"
                >Discord</a>
                <br>
                <a href="https://www.facebook.com/eSportEsbjerg" target="_blank">Facebook</a>
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
                <a href="https://goo.gl/maps/YkfnWxGdMzEN7nLb8" target="_blank">
                  Askekrattet 4
                  <br>6705 Esbjerg
                </a>
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
            <v-card-title class="d-block">
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
                  <a href="https:/esportesbjerg.createaforum.com/" target="_blank">Forum</a>
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
