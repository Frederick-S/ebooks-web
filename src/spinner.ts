import Vue from 'vue'

const spinner = new Vue({
  data: {
    loadingComponent: null as any
  },
  methods: {
    open() {
      this.loadingComponent = this.$buefy.loading.open({
        container: null
      })
    },
    close() {
      this.loadingComponent.close()
    }
  }
})

export default spinner
