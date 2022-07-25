const app = Vue.createApp({
  data() {
    return {
      goal: "I am master in VueJS",
      name: "<h1 style='color:red'>My name is Mironshoh</h1>",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaIT1cccPKzyKOYtKKNKQoasXOFQ-4fnkTYw&usqp=CAU",
    };
  },
  methods: {
    outputMyFirstName() {
      return "Mironshoh Asadov";
    },
    printGoal() {
      return "My name is Mironshoh." + this.goal;
    },
  },
});

app.mount("#user-goal");
