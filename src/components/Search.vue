<template>
  <section>
    <b-field position="is-centered">
      <b-input placeholder="Search" type="search" icon="magnify" @keyup.enter.native="search" v-model="bookName"></b-input>
    </b-field>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import spinner from '../spinner'

@Component
export default class Search extends Vue {
  private bookName = ''

  search() {
    if (this.bookName) {
      spinner.open()
    }
  }
}
</script>
