import Vue from 'vue'

const spinner = new Vue({
  methods: {
    open() {
      this.$buefy.loading.open({
        container: null
      })
    }
  }
})

export default spinner
