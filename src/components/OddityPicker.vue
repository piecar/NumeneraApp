<template>
<div class="picker">
  <h2>Oddity Picker</h2>
  <h2>Set your roll</h2>
  <div class="inputs">
    <label for="d100">d100</label>
    <input class="inputBox" id="d100" v-model.number="d100">
  </div>
  <FormButton
    button-text="Pickup"
    @buttonClick="handleButtonClick"
  ></FormButton>
  <div>
    <p v-if="showOddity">{{oddity}}</p>
  </div>
</div>
</template>

<script>
import FormButton from './FormButton';
import oddities from '../data/Oddities';

export default {
  name: 'OddityPicker',
  components: { FormButton },
  data() {
    return {
      d100: 0,
      oddity: '',
      showOddity: false,
    };
  },
  methods: {
    handleButtonClick() {
      this.oddity = oddities[this.d100 - 1];
      this.showOddity = true;
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

</style>
