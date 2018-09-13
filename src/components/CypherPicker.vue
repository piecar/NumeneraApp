<template>
  <div class="picker">
    <h2>Cypher Picker</h2>
    <h2>Set your rolls</h2>
    <div class="inputs">
      <label for="d100">d100</label>
      <input class="inputBox" id="d100" v-model.number="d100">
      <p>d100</p>
    </div>
    <div class="inputs">
      <label for="d6">d6</label>
      <input class="inputBox" id="d6" v-model.number="d6">
      <p>d6</p>
    </div>
    <FormButton
      button-text="Salvage"
      @buttonClick="handleButtonClick"
    ></FormButton>
    <CypherDisplay
      v-bind:cypher="cypher" v-if="showCypher">
    </CypherDisplay>
  </div>
</template>

<script>
import FormButton from './FormButton';
import CypherDisplay from './CypherDisplay';
import cyphers, { Cypher } from '../data/Cyphers';

export default {
  name: 'CypherPicker',
  components: { FormButton, CypherDisplay },
  data() {
    return {
      d100: 0,
      d6: 0,
      cypher: null,
      showCypher: false,
    };
  },
  methods: {
    handleButtonClick() {
      if (this.d100 !== 0 || this.d6 !== 0) {
        const cypherPick = cyphers[this.d100 - 1];
        this.cypher = new Cypher(
          cypherPick.name,
          cypherPick.anoetic,
          this.d6 + cypherPick.levelModifier,
          cypherPick.formFactor(),
          cypherPick.effect);
        this.showCypher = true;
      }
    },
  },
};
</script>


<style scoped>
  .inputs {
    display: inline-block;
  }
</style>
