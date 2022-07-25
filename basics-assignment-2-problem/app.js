const app = Vue.createApp({
  data() {
    return {
      user: "",
      output: "",
    };
  },
  methods: {
    showAlert() {
      alert("this is alert!");
    },
    getUser(val) {
      this.user = val.target.value;
    },
    getOutput(val) {
      this.output = val.target.value;
    },
    outputUser() {
      return this.user;
    },
  },
});

app.mount("#assignment");
