<template>
  <v-footer class="footer" height="auto" dark color="#000000">
    <v-container grid-list-md>
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
                Lalaland
                <br>Wonder street
                <br>69
              </p>
              <p>
                Opening hours
                <br>Monday - Thursday: 6 pm - 8 pm
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
                  <a href>Home</a>
                </li>
                <li>
                  <a href>Gallery</a>
                </li>
                <li>
                  <a href>About</a>
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



<script>
export default {};
</script>

<style>
.footer {
  display: block;
}
.footer h3 {
  font-size: 2rem;
  width: 100%;
}

.last_col ul {
  list-style-type: none;
  padding: 0;
}
.last_col ul li {
  padding-bottom: 15px;
}

ul li a {
  text-decoration: none;
  color: #fff;
  padding: 5px 20px;

  transition: 0.6s ease;
}
</style>
