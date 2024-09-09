<template>
  <div>
    <div class="text-subtitle-1 text-center mt-6 color-change text-uppercase">contact</div>
    <div class="text-h4 text-center font-weight-bold text-uppercase">get in touch</div>
    <v-container class="mt-5">
      <v-row>
        <v-col cols="12" md="4">
          <div class="pa-4 border-outset text-center pa-3 card">
            <v-icon large class="color-change">fab fa-line</v-icon>
            <p class="my-3 text-caption text-md-body1 text-center grey--text">
              WhatsApp<br />
              ID: +1 7052499893359
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="pa-4 border-outset text-center pa-3 card">
            <v-icon large class="color-change">fas fa-envelope</v-icon>
            <p class="my-3 text-caption text-md-body1 grey--text">
              Email<br />
              aafree2014@gmail.com
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="pa-4 border-outset text-center pa-3 card">
            <v-icon large class="color-change">fas fa-phone</v-icon>
            <p class="my-3 text-caption text-md-body1 grey--text">
              Phone<br />
              +01 (705)2499893359
            </p>
          </div>
        </v-col>
      </v-row>
      <!-- 寄信 -->
      <v-row class="mt-10">
        <v-col cols="12" md="6" class="text-body-2">
          <div class="contact_msg d-flex align-center color-change">
            <input
              type="text"
              v-model="email.from_name"
              class="contact_msg_input border-outset px-3 py-2 color-change my-6"
            />
            <label class="contact_msg_label grey--text">Name</label>
          </div>
          <div class="contact_msg d-flex align-center color-change">
            <input
              type="email"
              v-model="email.from_email"
              class="contact_msg_input border-outset px-3 py-2 color-change my-6"
            />
            <label class="contact_msg_label grey--text">Email</label>
          </div>
          <div class="contact_msg d-flex align-center color-change">
            <input
              type="text"
              class="contact_msg_input border-outset px-3 py-2 color-change my-6"
              v-model="email.subject_message"
            />
            <label class="contact_msg_label grey--text">Subject</label>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <textarea
            :class="[
              'contact_msg_textarea pa-4 border-outset text-center pa-3 card text-start',
              ' color-change',
            ]"
            cols="30"
            rows="4"
            v-model="email.message"
            placeholder="If you have any questions, feel free to contact me!"
          ></textarea>
        </v-col>
      </v-row>
      <div class="d-flex mt-5">
        <v-btn
          rounded
          class="ms-auto px-5 border-outset color-change"
          :disabled="email.subject_message === ''"
          @pointerup.stop="sendEmail"
          >Submit</v-btn
        >
      </div>
    </v-container>
  </div>
</template>
<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      email: {
        from_name: '',
        from_email: '',
        subject_message: '',
        message: '',
      },
      errorMsgShow: false,
    };
  },
  methods: {
    sendEmail() {
      const keys = Object.keys(this.email);
      keys.forEach((key) => {
        if (this.email[key] === '') {
          this.errorMsgShow = true;
        }
      });
      if (!this.errorMsgShow) {
        emailjs
          .send(
            process.env.VUE_APP_EMAIL_SERVICE_ID,
            process.env.VUE_APP_EMAIL_TEMPLATE_ID,
            this.email,
            process.env.VUE_APP_EMAIL_USER_ID,
          )
          .then(
            (result) => {
              console.log('SUCCESS!', result.text);
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  height: 100%;
}
.contact_msg {
  position: relative;
  &_input,
  &_textarea {
    width: 100%;
    line-height: 1.5;
    border-radius: 20px;
  }
  &_label {
    position: absolute;
    left: 12px;
    top: 5px;
    transition: all 0.3s linear;
  }
  &_input:focus + &_label {
    color: inherit !important;
    font-size: 16px;
  }
}

.v-text-field > .v-input__control > .v-input__slot:before {
  border: 0;
}

.night .v-btn.v-btn--disabled,
.morning .v-btn.v-btn--disabled {
  color: #9e9e9e !important;
}
</style>
