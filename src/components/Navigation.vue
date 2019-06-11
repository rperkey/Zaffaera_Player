<template>
  <md-list>
    <md-list-item>
      <span class="md-list-item-text">
        <router-link to="attacks">Attacks Calculator</router-link>
      </span>
    </md-list-item>

    <md-list-item>
      <span class="md-list-item-text">
        <router-link to="spells">Mana Tracker</router-link>
      </span>
    </md-list-item>
  </md-list>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>
