<template>
  <v-footer dark color="grey darken-4" height="350px">
    <v-container grid-list-md>
      <v-layout class="footnav">
        <v-flex d-inline-flex>
          <v-flex style="margin-left: 50px;"  width="25vh" >
            <v-card flat color="transparent">
              <v-card-title>
                <h1>Esport Esbjerg</h1>
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
          <v-flex>
            <v-card flat color="transparent" width="40vh">
              <v-card-title>
                <h1>Address</h1>
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
          <v-flex  >
            <v-card flat color="transparent" >
              <v-card-title>
                <h1 >Navigation</h1>
              </v-card-title>
              <v-card-text>
                <ul>
                  <li class="active">
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">Gallery</a>
                  </li>
                  <li>
                    <a href="">About</a>
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>



<script>
export default {};
</script>

<style>


ul{
    list-style-type: none;
    float: none;
    text-align:right;

}
ul li{

    padding: 15px;
}

ul li a{
    

    text-decoration: none;
    color: #fff;
    padding: 5px 20px;

    transition: 0.6s ease;
}

</style>
