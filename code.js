const { createApp } = Vue;

createApp({
  data() {
    return {
      name: 'mahmoud',
      link: 'https://www.google.com',
      count: 0 ,
    };
  },
  methods: {
    welcome(name) {
      return 'Welcome to Vue.js! ' + name
    },
    myfunction(){
      console.log('test')
    },
    increaseCount(){
      this.count++;
    },
    decreaseCount(){
      this.count--;
    },
  }
}).mount('#app');
