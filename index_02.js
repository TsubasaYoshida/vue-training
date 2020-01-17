new Vue({
  el: '#app',
  data: {
    button_label: 'Good!'
  },
  methods: {
    onclick: function(){
      this.button_label = 'Yeah!'
    }
  }
});
