<template>
  <section>
    <b-field position="is-centered">
      <b-input placeholder="Search" type="search" icon="magnify"></b-input>
    </b-field>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Search extends Vue {
    search() {
        console.log('searching...')
    }
}
</script>
