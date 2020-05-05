<template>
  <div class="column">
    <Search></Search>
    <Books></Books>
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import Books from '@/components/Books.vue'

export default {
  name: 'Home',
  components: {
    Search,
    Books
  }
}
</script>
