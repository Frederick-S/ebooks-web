<template>
  <section>
    <b-field position="is-centered">
      <b-input placeholder="Search" type="search" icon="magnify" @keyup.enter.native="search" v-model="bookName"></b-input>
    </b-field>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Search extends Vue {
  private bookName = ''

  search() {
    console.log(this.bookName)
  }
}
</script>
