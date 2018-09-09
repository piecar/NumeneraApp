<template>
  <div class="picker">
    <h1>{{ msg }}</h1>
    <CypherPicker></CypherPicker>
    <h2>Oddity Picker</h2>
  </div>
</template>

<script>
import CypherPicker from './CypherPicker';

export default {
  name: 'PickerViewer',
  data() {
    return {
      msg: 'Pickers',
    };
  },
  components: {
    CypherPicker,
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
