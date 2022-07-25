const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      fullName: "",
    };
  },
  methods: {
    setName(val) {
      this.name = val.target.value;
    },
    outputFullname(val) {
      return this.name + val.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
  },
  computed: {
    renderFullname() {
      console.log("ishladi");
      return this.name + "Asadov";
    },
    renderCouter() {
      return this.counter;
    },
  },
  watch: {
    name(newData, oldData) {
      return newData + " Asadov";
    },
  },
});

app.mount("#events");
