<template>
  <div
    class="page contactpage"
    :class="{
      'active-page': isActive,
      'animate__animated animate__zoomIn': isActive,
    }"
  >
    <div class="page-wrapper">
      <PageHeader :title="'Get in touch'" :secondaryTitle="'contact'" />
      <div class="row">
        <div class="contact col-12 col-lg-5 addr">
          <h3>REACH OUT!</h3>
          <p>
            Lassen Sie uns in Kontakt treten. 
          
          </p>
          <address>
            <font-awesome-icon :icon="['fas', 'map']" />
            <h5>Address Point</h5>
            <p>Neukoppel 3, 22415 Hamburg.</p>
          </address>
          <address>
            <font-awesome-icon :icon="['fas', 'envelope']" />
            <h5>Send a mail</h5>
            <p>kieslichbettina@gmail.com</p>
          </address>
          <address>
            <font-awesome-icon :icon="['fas', 'square-phone']" />
            <h5>Call</h5>
            <p>+49 170 2120 114</p>
          </address>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/bettina-kieslich-6a9951187/"
                target="_blank"
                ><img :src="linkedinLogo"
              /></a>
            </li>
            <li>
              <a href="https://github.com/bettinakieslich" target="_blank"
                ><img :src="gitHubLogo"
              /></a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-6">
          <form class="contactform" @submit.prevent="handleFormSubmit">
            <div class="row">
              <div class="col-12 col-lg-6">
                <div class="form-group">
                  <input
                    type="text"
                    v-model="name"
                    placeholder="Enter Name"
                    name="name"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="form-group">
                  <input
                    type="email"
                    v-model="email"
                    placeholder="Enter Email"
                    name="email"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div class="col-12 col-lg-12">
                <div class="form-group">
                  <input
                    type="text"
                    v-model="subject"
                    placeholder="Subject"
                    name="subject"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <textarea
                    type=""
                    v-model="message"
                    placeholder="Type a message..."
                    rows="5"
                    name="message"
                    aria-required="true"
                  ></textarea>
                </div>
              </div>
              <div class="col-12">
                <button class="button" :disabled="isLoading">
                  <div v-if="isLoading">
                    <span>Loading...</span>
                    <font-awesome-icon
                      :icon="['fas', 'spinner']"
                      class="btn-icon spin"
                    />
                  </div>
                  <div v-else>
                    <span class="btn-text">Send Message</span>
                    <font-awesome-icon
                      :icon="['fas', 'paper-plane']"
                      class="btn-icon"
                    />
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "../PageHeader.vue";

export default {
  name: "ContactPage",
  props: ["isActive"],
  components: { PageHeader },
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      isLoading: false,
      instagramLogo: require("@/assets/img/svg/instagram.svg"),
      twitterLogo: require("@/assets/img/svg/twitter.svg"),
      linkedinLogo: require("@/assets/img/svg/linkedin.svg"),
      gitHubLogo: require("@/assets/img/svg/github.svg"),
    };
  },
  methods: {
    handleFormSubmit() {
      this.isLoading = true;
      fetch("https://formsubmit.co/ajax/kieslichbettina@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          this.$swal(
            "Thank You!",
            "I appreciate you taking the time to reach out!",
            "success"
          );
          this.name = "";
          this.subject = "";
          this.message = "";
          this.email = "";
          this.isLoading = false;
        })
        .catch((error) => {
          this.isLoading = false;
          this.$swal("Something went wrong!", "Please try again!", "error");
        });
    },
  },
};
</script>
