<template>
  <div class="column is-half">
    <section>
      <b-field position="is-centered">
        <b-input placeholder="Search" type="search" icon="magnify"></b-input>
      </b-field>
    </section>
    <section>
      <b-tabs position="is-centered">
        <b-tab-item label="微信读书"></b-tab-item>
        <b-tab-item label="多看阅读"></b-tab-item>
        <b-tab-item label="豆瓣阅读"></b-tab-item>
        <b-tab-item label="图灵社区"></b-tab-item>
        <b-tab-item label="异步社区"></b-tab-item>
      </b-tabs>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
