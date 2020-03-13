<template>
  <section>
    <b-tabs position="is-centered">
      <b-tab-item label="微信读书"></b-tab-item>
      <b-tab-item label="多看阅读"></b-tab-item>
      <b-tab-item label="豆瓣阅读"></b-tab-item>
      <b-tab-item label="图灵社区"></b-tab-item>
      <b-tab-item label="异步社区"></b-tab-item>
      </b-tabs>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from '../axios'
import bus from '../bus'
import spinner from '../spinner'
import toast from '../toast'

@Component
export default class Books extends Vue {
  getBooks(bookName: string) {
    axios.get(`/v1.0/ebooks?provider=weread&book_name=${bookName}`)
      .then((data) => {
        console.log(data)
      })
      .catch((error) => [
        toast.danger(error)
      ])
      .finally(() => {
        spinner.close()
      })
  }

  mounted() {
    bus.$on('getBooks', this.getBooks)
  }
}
</script>
