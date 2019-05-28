<template>
  <v-form
    v-model="valid"
    id="joinForm"
    action="https://getform.io/f/497cdafe-0c13-447d-b9bd-fe959cd46d06"
    method="POST"
  >
    <v-container grid-list-md my-5 class="set-max-width">
      <h1>Join Application Season 2019</h1>

      <v-layout row wrap>
        <v-flex d-none>
          <input type="text" readonly name="Form Type" value="Join Form">
        </v-flex>
        <v-flex xs12 md6>
          <v-text-field
            prepend-icon="person"
            v-model="nickname"
            :rules="nicknameRules"
            :counter="10"
            label="Nickname"
            name="Nickname"
            required
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 md6>
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            label="First name"
            name="First name"
            required
          ></v-text-field>
        </v-flex>
        <v-flex xs12 md6>
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            label="Last name"
            name="Last name"
            required
          ></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field v-model="street" name="Street" label="Street"></v-text-field>
        </v-flex>
        <v-flex xs12 md6>
          <v-text-field v-model="postnr" name="Post nr." label="Post nr."></v-text-field>
        </v-flex>
        <v-flex xs12 md6>
          <v-text-field v-model="city" name="City" label="City"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 md6>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                label="Birthday date"
                name="Date of Birth"
                prepend-icon="event"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              ref="picker"
              v-model="date"
              :max="new Date().toISOString().substr(0, 10)"
              min="1950-01-01"
              @change="save"
            ></v-date-picker>
          </v-menu>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 md6>
          <v-text-field
            prepend-icon="email"
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            name="E-mail"
            required
          ></v-text-field>
        </v-flex>
        <v-flex xs12 text-xs-right>
          <v-btn depressed dark class="yellow--text" :disabled="!valid" @click="submit">Send</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    nickname: "",
    nicknameRules: [
      v => !!v || "Nickname is required",
      v => v.length <= 10 || "Nickname must be less than 10 characters"
    ],
    firstname: "",
    lastname: "",
    nameRules: [v => !!v || "Name is required"],
    street: "",
    postnr: "",
    city: "",
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    date: null,
    menu: false
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
    submit() {
      joinForm.submit();
    }
  }
};
</script>