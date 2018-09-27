<template>
  <div>
    <h2>{{cypher.name}}</h2>
    <h3 id="anoeticType" v-if="cypher.anoetic">Type: Anoetic</h3>
    <h3 id="occulticType" v-if="!cypher.anoetic">Type: Occultic</h3>
    <h3 id="level">Level: {{cypher.levelModifier}}</h3>
    <p>Form Factor: {{cypher.formFactorList}}</p>
    <p>Effect: {{cypher.effect}}</p>
    <p v-if="cypher.extraEffect !== undefined">Extra Effect: {{cypher.extraEffect}}</p>
  </div>
</template>

<script>
export default {
  name: 'CypherDisplay',
  props: {
    cypher: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
  h3 {
    display: inline;
    margin: 1em;
  }

</style>
