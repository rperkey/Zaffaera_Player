<template>
  <div id="health-calculator">
    <v-slider
      v-model="milestones"
      :max="20"
      :min="1"
      label="Milestones"
      ticks="always"
      thumb-label="always"
      step="1"
    ></v-slider>
    <v-slider
      v-model="conMod"
      :max="7"
      :min="-1"
      label="CON Modifier"
      ticks="always"
      thumb-label="always"
      step="1"
      ></v-slider>
      <v-slider
      v-model="raceHp"
      :max="15"
      :min="2"
      label="Race HP"
      ticks="always"
      thumb-label="always"
      step="1"
      ></v-slider>
      <v-slider
      v-model="classHp"
      :max="8"
      :min="5"
      label="Class HP"
      ticks="always"
      thumb-label="always"
      step="1"
      ></v-slider>
      <v-slider
      v-model="adjustment"
      :max="2"
      :min="0"
      label="Adjustment"
      ticks="always"
      thumb-label="always"
      step="1"
      ></v-slider>

      <v-switch
        v-model="hasHearty"
        :label="`Has Hearty Feat?: ${hasHearty ? 'Yes' : 'No' }`"
      ></v-switch>

      <div class="results">
        <div class="section">
          <h2>Health</h2>
          <hr>
          <h3>{{ calculated.hp }}</h3>
        </div>

        <div class="section">
          <h2>Vitality</h2>
          <hr>
          <h3>{{ calculated.vp }}</h3>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      milestones: 2,
      conMod: 0,
      classHp: 5,
      raceHp: 4,
      adjustment: 0,
      hasHearty: false
    }
  },
  computed: {
    calculated () {
      let hp = 0
      let vp = 0

      hp += this.milestones * this.conMod
      hp += this.milestones * this.raceHp
      hp += this.classLvl(this.milestones) * this.classHp

      vp = Math.ceil(hp / (this.hasHearty ? 2 : 4))

      return { hp: hp, vp: vp }
    }
  },
  methods: {
    classLvl (milestones) {
      switch (this.adjustment) {
        case 1:
          return Math.floor(milestones * 0.8)
        case 2:
          return Math.floor(milestones * 0.6)
        default:
          return milestones
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#health-calculator {
  padding: 1rem;
}
.v-input__slider {
  margin: 2rem 0;
}
.results {
  display: flex;
  margin-top: 2rem;

  .section {
    flex: 50%;
    text-align: center;
    h2 {
      font-size: 2rem;
    }
    hr {
      width: 70%;
      margin: 0 auto;
    }
    h3 {
      font-size: 5rem;
    }
  }
}

</style>
