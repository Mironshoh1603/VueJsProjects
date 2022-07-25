const app = Vue.createApp({
  data() {
    return {
      name: "Mironshoh",
      age: 19,
      imgScr:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsJ774VL7RjYJGKgiFM2E1DmvLT3NeldlBWA&usqp=CAU",
    };
  },
  methods: {
    addAge() {
      return this.age + 5;
    },
    favouriteNumber() {
      return Math.random() * 10;
    },
  },
});

app.mount("#assignment");
