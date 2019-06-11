<template>
  <div class="dropdown">
    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="node" class="content">
      <select name="">
        <option value="1">
          1
        </option>
        <option value="1">
          1
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import data from '@/config/data.js'

export default {
  name: 'Dropdown',
  props: {
    menu: {
      type: String,
      required: true
    }
  },
  data () {
    // console.log(data)
    console.log(data[this.menu].min)
    console.log(data[this.menu].max)
    console.log(this.menu)
    return {
      loading: false,
      node: null,
      error: null
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      // -
    }
  }
}
</script>
