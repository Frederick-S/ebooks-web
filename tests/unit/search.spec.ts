import { shallowMount } from '@vue/test-utils'
import Search from '@/components/Search.vue'
import Vue from 'vue'
import Buefy from 'buefy'

Vue.use(Buefy)

describe('Search.vue', () => {
  it('Has a input', () => {
    const wrapper = shallowMount(Search, {
      stubs: ['b-input']
    })

    expect(wrapper.find('b-input-stub').exists()).toBe(true)
  })
})
