<template>
  <div class="picker">
    <h2>Cypher Picker</h2>
    <h2>Set your rolls</h2>
    <div class="inputs">
      <label for="d100">d100</label>
      <input class="inputBox" id="d100" v-model.number="d100">
    </div>
    <div class="inputs">
      <label for="d6">d6</label>
      <input class="inputBox" id="d6" v-model.number="d6">
    </div>
    <FormButton
      button-text="Salvage"
      @buttonClick="handleButtonClick"
    ></FormButton>
    <div v-if="showExtraEffects">
      <div class="inputs" id="extraEffectInput">
        <label for="extraEffectId100">d100</label>
        <input class="inputBox" id="extraEffectId100" v-model.number="extraEffectd100">
      </div>
      <FormButton id="extraEffectButton"
        button-text="Extra Effect"
        @buttonClick="handleExtraEffects"
      ></FormButton>
    </div>
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
      extraEffectd100: 0,
      cypher: null,
      showCypher: false,
      showExtraEffects: false,
    };
  },
  methods: {
    handleButtonClick() {
      this.showExtraEffects = false;
      this.showCypher = false;
      if (this.d100 !== 0 || this.d6 !== 0) {
        const cypherPick = cyphers[this.d100 - 1];
        this.cypher = new Cypher(
          cypherPick.name,
          cypherPick.anoetic,
          this.d6 + cypherPick.levelModifier,
          cypherPick.formFactor(),
          cypherPick.effect,
          cypherPick.extraEffect);
        if (typeof cypherPick.extraEffect !== 'function') {
          this.showCypher = true;
        } else {
          this.showExtraEffects = true;
        }
      }
    },
    handleExtraEffects() {
      this.cypher.extraEffect = this.cypher.extraEffect(this.extraEffectd100);
      this.showCypher = true;
    },
  },
};
</script>


<style scoped>
  .inputs {
    display: inline-block;
  }
  .inputBox {
    display: block;
  }
  label {
    display: block;
  }
  /** {*/
    /*border: 1px solid red !important;*/
  /*}*/
</style>
