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
            <li>
              <a target="_blank" href="https://api.whatsapp.com/send?phone=56949233611">
                <img class="icon" src="../assets/whatsapp.svg" alt="whatsapp icon" /> +569 4923 3611
              </a>
            </li>
            <li class="lowercase">
              <a target="_blank" href="https://t.me/sebakc">
                <img class="icon" src="../assets/telegram.svg" alt="telegram icon" /> https://t.me/sebakc
              </a>
            </li>
            <li class="lowercase">
              <a href="mailto:seba.kc@gmail.com">
                <img class="icon" src="../assets/email.svg" alt="email icon" /> seba.kc@gmail.com
              </a>
            </li>
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
            <button type="submit">send!</button>
            {{ message }}
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
      message: "",
      form: {
        message: "",
        name: "",
        email: ""
      }
    }
  },
  methods: {
    submit() {
      this.message = "Sending..."
      axios.post("https://api.telegram.org/bot1826217619:AAEX7G4kdHczspledd9NOKnObSBQKYKLR1U/sendMessage", {
        chat_id: "1477994016",
        text: `name: ${this.form.name}\nemail: ${this.form.email}\nmessage: ${this.form.message}`
      }).then(() => {
        this.message = "Done :D"
        this.form = {
          message: "",
          name: "",
          email: ""
        }
      }).catch(()=>{
        this.message = "There was a mistake D: please try again"
      })
    }
  }
}
</script>
<style lang="scss">
#contact {
  .blank-list {
    display: flex;
    position: relative;
    li {
      margin-right: 1em;
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
