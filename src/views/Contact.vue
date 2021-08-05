<template>
  <section id="contact" class="section section-left">
    <div class="limit">
      <div class="section-header">
        <h1>Let's chat!</h1>
      </div>
      <div class="section-body d-flex">
        <div class="contact-message">
          <p>
            Use the form, send me a Whatsapp or however you want, if you have a question just talk to me.
          </p>
          <ul class="blank-list">
            <li><img class="icon" src="../assets/whatsapp.svg" alt="whatsapp icon" /> +569 4923 3611</li>
            <li><img class="icon" src="../assets/email.svg" alt="email icon" /> seba.kc@gmail.com</li>
          </ul>
        </div>
        <div class="contact-form">
          <form @submit.prevent="submit()">
            <div class="form-input">
              <label for="name">Name:</label>
              <input v-model="form.name" id="name" type="text">
            </div>
            <div class="form-input">
              <label for="email">Email:</label>
              <input v-model="form.email" id="email" type="email">
            </div>
            <div class="form-input">
              <label for="message">Message:</label>
              <textarea v-model="form.message" id="message" rows="4"/>
            </div>
            <button @click="submit()" type="submit">send</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios"
export default {
  data () {
    return {
      form: {
        message: "",
        name: "",
        email: ""
      }
    }
  },
  methods: {
    submit() {
      axios.post("https://api.telegram.org/bot1826217619:AAEX7G4kdHczspledd9NOKnObSBQKYKLR1U/sendMessage", {
        chat_id: "1477994016",
        text: `name: ${form.name}\nemail: ${form.email}\nmessage: ${form.message}`
      })
    }
  }
}
</script>
<style lang="scss">
#contact {
  .blank-list {
    display: flex;
    li {
      margin-right: 1em;
    }
    &::before {
      content: '';
      height: 60%;
      width: 100%;
      background: var(--dark);
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 99;
    }
  }
  @media screen and (min-width: 550px) {
    align-items: center;
    justify-content: center;
    position: relative;
    display: flex;
    .blank-list {
      display: block;
    }
  }
  .section-body {
    flex-direction: column;
    @media screen and (min-width: 550px) {
      flex-direction: row;
    }
  }
  .contact-message {
    @media screen and (min-width: 550px) {
      width: 40%;
    }
  }
  .contact-form {
    @media screen and (min-width: 550px) {
      width: 60%;
      padding-left: 4em;
    }
    input, textarea {
      position: relative;
      z-index: 99;
    }
  }
}
</style>
