<template>
  <section class="book-list-wrap">
    <b-tabs position="is-centered" @input="changeBookProvider">
      <b-tab-item v-for="(bookProvider, index) in bookProviders" :key="index" :label="bookProvider.name">
        <slot>
          <div class="columns is-multiline book-list">
            <div class="column is-half" v-for="(book, index) in bookProvider.pagedBook.books" :key="index">
              <div class="columns">
                <div class="column is-one-third">
                  <img class="book-cover" :src="book.cover" />
                </div>
                <div class="column">
                  <h1 class="book-title">{{ book.title }}</h1>
                  <p>{{ book.author }}</p>
                  <p v-if="book.price && book.price !== 0.0">¥{{ book.price.toFixed(2) }}</p>
                </div>
              </div>
            </div>
          </div>
        </slot>
      </b-tab-item>
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

interface BookProvider {
  key: string;

  name: string;

  pagedBook: PagedBook;
}

@Component
export default class Books extends Vue {
  private title = ''

  private bookProvider = 'weread'

  private bookProviders: BookProvider[] = [
    {
      key: 'weread',
      name: '微信读书',
      pagedBook: new PagedBook()
    },
    {
      key: 'duokan',
      name: '多看阅读',
      pagedBook: new PagedBook()
    },
    {
      key: 'douban',
      name: '豆瓣阅读',
      pagedBook: new PagedBook()
    },
    {
      key: 'turing',
      name: '图灵社区',
      pagedBook: new PagedBook()
    },
    {
      key: 'epubit',
      name: '异步社区',
      pagedBook: new PagedBook()
    },
    {
      key: 'jd',
      name: '京东',
      pagedBook: new PagedBook()
    }
  ]

  getBooks(title?: string) {
    if (title) {
      this.title = title
    }

    spinner.open()

    axios.get(`/v1.0/ebooks?provider=${this.bookProvider}&title=${this.title}`)
      .then((data) => {
        const bookProvider = this.bookProviders.find(bookProvider => bookProvider.key === this.bookProvider)

        if (!bookProvider) {
          toast.danger(`Could not find the book provider with the specified name: ${this.bookProvider}`)

          return
        } else {
          bookProvider.pagedBook.books = data.data
        }
      })
      .catch((error) => [
        toast.danger(error)
      ])
      .finally(() => {
        spinner.close()
      })
  }

  changeBookProvider(index: number) {
    const bookProvider = this.bookProviders[index]

    if (!bookProvider || bookProvider.key === this.bookProvider) {
      return
    }

    this.bookProvider = bookProvider.key

    if (!this.title) {
      return
    }

    this.getBooks()
  }

  mounted() {
    bus.$on('getBooks', this.getBooks)
  }
}
</script>

<style scoped>
  .book-list-wrap {
    max-width: 60%;
    margin: 0 auto;
  }

  .book-list {
    max-height: 400px;
    overflow-y: auto;
  }

  .book-cover {
    max-width: 80px;
  }

  .book-title {
    font-weight: bold;
  }
</style>
