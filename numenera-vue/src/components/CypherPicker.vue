<template>
  <div class="picker">
    <h2>Cypher Picker</h2>
    <h2>Set your rolls</h2>
    <FormButton
      button-text="Salvage"
      @buttonClick="handleButtonClick"
    ></FormButton>
  </div>
</template>

<script>
import FormButton from './FormButton';

export default {
  name: 'CypherPicker',
  components: { FormButton },
  methods: {
    handleButtonClick() {
      // TODO: Call Database with Cyphers
    },
  },
};
</script>

<style scoped>
</style>
