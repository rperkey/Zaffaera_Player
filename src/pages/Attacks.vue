<template>
  <div>
    <md-toolbar :md-elevation="0">
      <span class="md-title">Attacks Calculator</span>
    </md-toolbar>

    <md-steppers md-vertical @md-changed="calculate">
      <md-step id="first" md-label="Character Stats" :md-done.sync="done">
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-size-100">
            <md-field>
              <label for="prof">Proficiency Bonus</label>
              <md-select v-model="prof" name="prof" md-dense @md-selected="calculate">
                <md-option value="2">
                  2
                </md-option>
                <md-option value="3">
                  3
                </md-option>
                <md-option value="4">
                  4
                </md-option>
                <md-option value="5">
                  5
                </md-option>
                <md-option value="6">
                  6
                </md-option>
              </md-select>
            </md-field>
          </div>

          <div class="md-layout-item md-size-100">
            <md-field>
              <label for="mod">Ability Modifier (DEX/STR)</label>
              <md-select v-model="mod" name="mod" md-dense @md-selected="calculate">
                <md-option value="0">
                  0
                </md-option>
                <md-option value="1">
                  1
                </md-option>
                <md-option value="2">
                  2
                </md-option>
                <md-option value="3">
                  3
                </md-option>
                <md-option value="4">
                  4
                </md-option>
                <md-option value="5">
                  5
                </md-option>
                <md-option value="6">
                  6
                </md-option>
                <md-option value="7">
                  7
                </md-option>
              </md-select>
            </md-field>
          </div>
        </div>
      </md-step>

      <md-step id="second" md-label="Weapon(s)" :md-done.sync="done">
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-size-small-50">
            <md-field>
              <label for="s1">MH Weapon Speed</label>
              <md-select v-model="s1" name="s1" md-dense @md-selected="calculate">
                <md-option value="1">
                  1
                </md-option>
                <md-option value="2">
                  2
                </md-option>
                <md-option value="3">
                  3
                </md-option>
                <md-option value="4">
                  4
                </md-option>
                <md-option value="5">
                  5
                </md-option>
                <md-option value="6">
                  6
                </md-option>
                <md-option value="7">
                  7
                </md-option>
                <md-option value="8">
                  8
                </md-option>
                <md-option value="9">
                  9
                </md-option>
                <md-option value="10">
                  10
                </md-option>
              </md-select>
            </md-field>
          </div>

          <div class="md-layout-item md-size-small-50">
            <md-field>
              <label for="e1">MH Enhancement/Enchant</label>
              <md-select v-model="e1" name="e1" md-dense @md-selected="calculate">
                <md-option value="0">
                  0
                </md-option>
                <md-option value="1">
                  +1
                </md-option>
                <md-option value="2">
                  +2
                </md-option>
                <md-option value="3">
                  +3
                </md-option>
                <md-option value="4">
                  +4
                </md-option>
                <md-option value="5">
                  +5
                </md-option>
              </md-select>
            </md-field>
          </div>

          <div class="md-layout-item md-size-100">
            <md-switch v-model="boolean" class="md-primary" @change="calculate">
              Off-Hand Equipped?
            </md-switch>
          </div>

          <div v-if="boolean" class="md-layout-item md-size-medium-100">
            <md-field>
              <label for="s2">OH Weapon Speed</label>
              <md-select v-model="s2" name="s2" md-dense @md-selected="calculate">
                <md-option value="1">
                  1
                </md-option>
                <md-option value="2">
                  2
                </md-option>
                <md-option value="3">
                  3
                </md-option>
                <md-option value="4">
                  4
                </md-option>
                <md-option value="5">
                  5
                </md-option>
                <md-option value="6">
                  6
                </md-option>
                <md-option value="7">
                  7
                </md-option>
                <md-option value="8">
                  8
                </md-option>
                <md-option value="9">
                  9
                </md-option>
                <md-option value="10">
                  10
                </md-option>
              </md-select>
            </md-field>
          </div>

          <div v-if="boolean" class="md-layout-item md-size-medium-100">
            <md-field>
              <label for="e2">OH Enhancement/Enchant</label>
              <md-select v-model="e2" name="e2" md-dense @md-selected="calculate">
                <md-option value="0">
                  0
                </md-option>
                <md-option value="1">
                  +1
                </md-option>
                <md-option value="2">
                  +2
                </md-option>
                <md-option value="3">
                  +3
                </md-option>
                <md-option value="4">
                  +4
                </md-option>
                <md-option value="5">
                  +5
                </md-option>
              </md-select>
            </md-field>
          </div>
        </div>
      </md-step>

      <md-step id="fourth" md-label="Results" :md-done.sync="done">
        <div id="results">
          <md-table>
            <md-table-row>
              <md-table-head>Main Hand</md-table-head>
              <md-table-head v-if="boolean">
                Off Hand
              </md-table-head>
            </md-table-row>

            <md-table-row v-for="(attack, index) in attacks" :key="index">
              <md-table-cell>{{ attack[0] }}</md-table-cell>
              <md-table-cell v-if="boolean">
                {{ attack[1] }}
              </md-table-cell>
            </md-table-row>
          </md-table>
        </div>
      </md-step>
    </md-steppers>
  </div>
</template>

<script>
export default {
  name: 'Attacks',
  metaInfo: {
    title: 'Attacks'
  },
  data: () => ({
    done: false,
    boolean: false,
    prof: 3,
    mod: 5,
    s1: 4,
    s2: 4,
    e1: 0,
    e2: 0,
    attacks: []
  }),
  methods: {
    calculate () {
      this.attacks = []
      const mhStart = parseInt(this.prof) + parseInt(this.mod) + parseInt(this.e1)
      const ohStart = parseInt(this.prof) + parseInt(this.mod) + parseInt(this.e2)
      const s1 = parseInt(this.s1)
      const s2 = parseInt(this.s2)

      for (let i = mhStart; i >= 0; i = i - s1) {
        this.attacks.push([i, '--'])
      }

      let counter = 0
      for (let i = ohStart; i >= 0; i = i - s2) {
        i = i - counter
        if (i >= 0) {
          if (this.boolean) {
            this.attacks[counter][1] = i
          }
        }
        counter++
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#results {
  table {
    th {
      font-size: 18px;
      font-weight: bold;
      color: #444;
    }
    td {
      font-size: 18px;
    }
  }
}
</style>
