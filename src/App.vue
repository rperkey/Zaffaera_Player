<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-toolbar-title>Zaffaera Players Tools</v-toolbar-title>
      </div>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-expansion-panels focusable>
          <v-expansion-panel>
            <v-expansion-panel-header>Number of Attacks Calculator</v-expansion-panel-header>
            <v-expansion-panel-content>
              <attacks-calculator />
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Health and Vitality Calculator</v-expansion-panel-header>
            <v-expansion-panel-content>
              <health-calculator />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AttacksCalculator from '@/components/AttacksCalculator'
import HealthCalculator from '@/components/HealthCalculator'

export default {
  name: 'App',
  components: {
    AttacksCalculator,
    HealthCalculator
  },
  data: () => ({
    items: [
      { title: 'Home' },
      { title: 'About' }
    ],
    drawer: false,
    group: null
  })
}
</script>

<style lang="scss">
.v-expansion-panel-header {
  font-weight: bold;
}
</style>
