(() => {

const { createApp } = Vue

createApp({
  data() {
    return {
      result: '',
      number: ''
    }
  },
  methods: {
    toInt(value) {
      const result = parseInt(value)
      return isNaN(result) ? 0 : result
    },
    enter() {
      this.result = this.toInt(this.number)
      this.number = ''
    },
    add() {
      this.result = this.toInt(this.result) + this.toInt(this.number)
      this.number = ''
      this.$refs.number.focus()
    },
    sub() {
      this.result = this.toInt(this.result) - this.toInt(this.number)
      this.number = ''
      this.$refs.number.focus()
    },
    mult() {
      this.result = this.toInt(this.result) * this.toInt(this.number)
      this.number = ''
      this.$refs.number.focus()
    },
    div() {
      this.result = this.toInt(this.result) / this.toInt(this.number)
      this.number = ''
      this.$refs.number.focus()
    },
    clear() {
      this.result = ''
      this.number = ''
      this.$refs.number.focus()
    }
  }
}).mount('#app')

})()
