<template>
  <div id="main-wrapper" class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Zaffaera Players Tools</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title">Zaffaera Players Tools</span>
        </md-toolbar>
        <md-divider />
        <Navigation />
      </md-app-drawer>

      <md-app-content>
        <router-view />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'App',
  metaInfo: {
    titleTemplate: '%s | Zaffaera Players Tools'
  },
  components: { Navigation },
  data: () => ({
    menuVisible: false
  })
}
</script>
