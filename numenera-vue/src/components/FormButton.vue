<template>
  <div class="formButton">
    <button class="button" @click="$emit('buttonClick')">{{buttonText}}
    </button>
  </div>
</template>

<script>

export default {
  name: 'FormButton',
  props: {
    buttonText: {
      type: String,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
