const app = new Vue({
  el: '#app',
  data: {
    mensaje: "Hello Sunday",
    contador: 0
  },
  computed: {
    invertido() {
      return this.mensaje.split('').reverse().join('');
    },
    fondo() {
      return {
        'bg-success': this.contador <= 20,
        'bg-warning': this.contador <= 50 && this.contador > 20,
        'bg-danger': this.contador > 50
      };
    }
  }
});