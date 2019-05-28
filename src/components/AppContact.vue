<template>
  <div class="contact-us mt-4 py-5">
    <v-form
      action="https://getform.io/f/497cdafe-0c13-447d-b9bd-fe959cd46d06"
      v-model="valid"
      method="POST"
      id="contactForm"
    >
      <v-container class="set-max-width">
        <h2>Contact us</h2>
        <v-layout row wrap>
          <v-flex xs12 md4 text-md-right text-xs-center order-xs1 order-md2>
            <v-list two-line class="transparent">
              <v-list-tile @click="openLink('tel:+4527153774')">
                <v-list-tile-action>
                  <v-icon>phone</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>+45 27 15 37 74</v-list-tile-title>
                  <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="openLink('https://goo.gl/maps/YkfnWxGdMzEN7nLb8')">
                <v-list-tile-action>
                  <v-icon>location_on</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>Askekrattet 4</v-list-tile-title>
                  <v-list-tile-sub-title>6705 Esbjerg</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="openLink('mailto:support@esport-esbjerg.dk')">
                <v-list-tile-action>
                  <v-icon>email</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>support@esport-esbjerg.dk</v-list-tile-title>
                  <v-list-tile-sub-title>Email</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-flex>
          <v-flex xs12 md8 order-xs2 order-md1>
            <v-flex d-none>
              <input readonly type="text" name="Form Type" value="Contact Form">
            </v-flex>
            <v-flex xs12>
              <v-text-field
                v-model="fullname"
                :rules="nameRules"
                name="Name"
                label="Full name"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="email"
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                name="Email"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-textarea v-model="message" name="Message" label="Message"></v-textarea>
            </v-flex>

            <v-flex xs12 text-xs-right>
              <v-btn depressed dark class="yellow--text" :disabled="!valid" @click="submit">Send</v-btn>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    fullname: "",
    lastname: "",
    nameRules: [v => !!v || "Name is required"],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    message: ""
  }),
  methods: {
    openLink(link) {
      window.open(link);
    },
    submit() {
      contactForm.submit();
    }
  }
};
</script>
