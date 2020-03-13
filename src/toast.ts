import Vue from 'vue'

const toast = new Vue({
  methods: {
    danger(message: string) {
      this.$buefy.toast.open({
        duration: 3000,
        message,
        type: 'is-danger'
      })
    }
  }
})

export default toast
