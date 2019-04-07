<template>
  <div class="picker">
    <h1>{{ msg }}</h1>
    <FormButton
      button-text="Login"
      @buttonClick="handleButtonClick"
    ></FormButton>
    <CypherPicker></CypherPicker>
    <OddityPicker></OddityPicker>

  </div>
</template>

<script>
import CypherPicker from './CypherPicker.vue';
import OddityPicker from './OddityPicker.vue';
import FormButton from './FormButton.vue';
import AuthService from '../auth/authService';

export default {
  name: 'PickerViewer',
  data() {
    return {
      msg: 'Pickers',
    };
  },
  components: {
    OddityPicker,
    CypherPicker,
    FormButton,
  },
  methods: {
    handleButtonClick() {
      AuthService.login();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.picker{
}
</style>
