const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      changeNum: 0,
      name: "",
      age: "",
    };
  },
  methods: {
    add() {
      return (this.counter += this.changeNum);
    },
    remove() {
      return (this.counter -= this.changeNum);
    },
    reset() {
      return (this.counter = 0);
    },
    getInputValue(val) {
      this.changeNum = +val.target.value;
    },
    getName(val) {
      this.name = val.target.value;
    },
    getAge(val) {
      this.age = +val.target.value;
    },
    submitForm() {
      alert(`Your name is ${this.name}.Your age is ${this.age}`);
    },
  },
});

app.mount("#events");
