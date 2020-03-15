<template>
  <section>
    <b-field position="is-centered">
      <b-input placeholder="Search" type="search" icon="magnify" @keyup.enter.native="search" v-model="title"></b-input>
    </b-field>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import bus from '../bus'

@Component
export default class Search extends Vue {
  private title = ''

  search() {
    if (this.title) {
      bus.$emit('getBooks', this.title)
    }
  }
}
</script>
