<template>
  <div class="picker">
    <h2>Cypher Picker</h2>
    <h2>Set your rolls</h2>
    <div class="inputs">
      <input class="inputBox" v-model.number="d100">
      <p>d100</p>
    </div>
    <div class="inputs">
      <input class="inputBox" v-model.number="d6">
      <p>d6</p>
    </div>
    <FormButton
      button-text="Salvage"
      @buttonClick="handleButtonClick"
    ></FormButton>
  </div>
</template>

<script>
import FormButton from './FormButton';
import cyphers, { Cypher } from '../data/Cyphers';

export default {
  name: 'CypherPicker',
  components: { FormButton },
  data() {
    return {
      d100: 0,
      d6: 0,
      cypher: null,
    };
  },
  methods: {
    handleButtonClick() {
      const cypherPick = cyphers[this.d100 - 1];
      this.cypher = new Cypher(
        cypherPick.name,
        cypherPick.anoetic,
        this.d6 + cypherPick.levelModifier,
        cypherPick.formFactor(),
        cypherPick.effect);
    },
  },
};
</script>


<style scoped>
  .inputs {
    display: inline-block;
  }
</style>
