<template>
  <section>
    <b-tabs position="is-centered">
      <b-tab-item v-for="(bookProvider, index) in bookProviders" :key="index" :label="bookProvider.label"></b-tab-item>
      </b-tabs>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from '../axios'
import bus from '../bus'
import spinner from '../spinner'
import toast from '../toast'
import PagedBook from '../paged-book'

interface PagedBooks {
  [key: string]: PagedBook;
}

@Component
export default class Books extends Vue {
  private title = ''

  private bookProvider = 'weread'

  private pagedBooks: PagedBooks = {
    'weread': new PagedBook()
  }

  private bookProviders = [
    {
      key: 'weread',
      label: '微信读书'
    },
    {
      key: 'duokan',
      label: '多看阅读'
    },
    {
      key: 'douban',
      label: '豆瓣阅读'
    },
    {
      key: 'turing',
      label: '图灵社区'
    },
    {
      key: 'epubit',
      label: '异步社区'
    }
  ]

  getBooks(title: string) {
    this.title = title

    axios.get(`/v1.0/ebooks?provider=${this.bookProvider}&title=${this.title}`)
      .then((data) => {
        const pagedBook = this.pagedBooks[this.bookProvider]
        pagedBook.books = data.data
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
