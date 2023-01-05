<template>
  <v-stepper v-model="attacksCalculator" vertical>
    <v-stepper-step step="1" editable :complete="attacksCalculator > 1">
      Character Stats
    </v-stepper-step>

    <v-stepper-content step="1">
      <div class="stepper-content">
        <v-slider
          v-model="stats.profBonus"
          :max="6"
          :min="2"
          label="Proficiency Bonus"
          ticks="always"
          thumb-label="always"
          step="1"
        ></v-slider>
        <v-slider
          v-model="stats.abilityMod"
          :max="7"
          :min="-1"
          label="Ability Modifier"
          ticks="always"
          thumb-label="always"
          step="1"
          ></v-slider>
      </div>

      <v-btn color="primary" @click="attacksCalculator = 2" class="btn-continue">
        Continue
      </v-btn>
    </v-stepper-content>

    <v-stepper-step step="2" editable :complete="attacksCalculator > 2">
      Main Hand Weapon
    </v-stepper-step>

    <v-stepper-content step="2">
      <div class="stepper-content">
        <v-slider
          v-model="weapons.mh.speed"
          :max="10"
          :min="1"
          label="Speed"
          ticks="always"
          thumb-label="always"
          step="1"
        ></v-slider>

        <v-slider
          v-model="weapons.mh.enchant"
          :max="5"
          :min="0"
          label="Enchantment Bonus"
          hint="+1, +2, etc."
          persistent-hint
          ticks="always"
          thumb-label="always"
          step="1"
        ></v-slider>
      </div>

      <v-btn
        color="primary"
        class="btn-continue"
        @click="attacksCalculator = 3"
      >
        Continue
      </v-btn>
    </v-stepper-content>

    <v-stepper-step step="3" editable :complete="attacksCalculator > 3">
      Off-Hand Weapon
    </v-stepper-step>

    <v-stepper-content step="3">
      <div class="stepper-content">
        <v-switch
      v-model="weapons.hasOffhand"
      :label="`Off-Hand Equipped?: ${weapons.hasOffhand ? 'Yes' : 'No' }`"
    ></v-switch>

        <div v-show="weapons.hasOffhand" class="mx-auto">
          <v-expand-transition>
            <v-slider
              v-model="weapons.oh.speed"
              :max="10"
              :min="1"
              label="Speed"
              ticks="always"
              thumb-label="always"
              step="1"
            ></v-slider>
            </v-expand-transition>

            <v-expand-transition>
            <v-slider
              v-model="weapons.oh.enchant"
              :max="5"
              :min="0"
              label="Enchantment Bonus"
              hint="+1, +2, etc."
              persistent-hint
              ticks="always"
              thumb-label="always"
              step="1"
            ></v-slider>
          </v-expand-transition>
        </div>
      </div>

      <v-btn
        color="primary"
        @click="attacksCalculator = 4"
        class="btn-continue"
      >
        Continue
      </v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">
      Results
    </v-stepper-step>

    <v-stepper-content step="4">
      <div class="stepper-content">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Main Hand
                </th>
                <th class="text-left" v-show="weapons.hasOffhand">
                  Off-Hand
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in numAttacks" :key="index">
                <td>{{ item[0] }}</td>
                <td v-show="weapons.hasOffhand">{{ item[1] }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
      <v-btn
        color="secondary"
        @click="attacksCalculator = 1"
        class="btn-continue"
      >
        Start Over
      </v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
export default {
  data () {
    return {
      attacksCalculator: 1,
      stats: {
        profBonus: 2,
        abilityMod: 0
      },
      weapons: {
        mh: {
          speed: 4,
          enchant: 0
        },
        oh: {
          speed: 4,
          enchant: 0
        },
        hasOffhand: false
      }
    }
  },
  computed: {
    numAttacks () {
      const attacks = []
      const mhStart = this.stats.profBonus + this.stats.abilityMod + this.weapons.mh.enchant
      const ohStart = this.stats.profBonus + this.stats.abilityMod + this.weapons.oh.enchant
      const mhSpeed = this.weapons.mh.speed
      const ohSpeed = this.weapons.oh.speed
      const boolean = this.weapons.hasOffhand

      for (let i = mhStart; i >= 0; i = i - mhSpeed) {
        attacks.push([`+${i}`, '--'])
      }

      let counter = 0
      for (let i = ohStart; i >= 0; i = i - ohSpeed) {
        i = i - counter
        if (i >= 0) {
          if (boolean) {
            if (counter in attacks) {
              attacks[counter][1] = `+${i}`
            } else {
              attacks.push(['--', `+${i}`])
            }
          }
        }
        counter++
      }
      return attacks
    }
  }
}
</script>

<style lang="scss" scoped>
.v-stepper {
  box-shadow: none;
}
.v-input__slider {
  margin: 2rem 0;
}
.v-input--switch {
  margin-left: 1rem;
}
.stepper-content {
  padding: 1rem;
}
.btn-continue {
  float: right !important;
  margin-bottom: 1rem;
}
</style>
