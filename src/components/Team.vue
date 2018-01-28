<template>
  <span><div contenteditable=true
    v-html="name"
    v-on:blur="changed"
    v-on:paste="changed"
 /></span>
</template>
<script>
export default {
  name: 'Team',
  props: { name: { type: String, required: true } },
  methods: {
    changed(event) {
      this.$emit('contentedited', { updatedTeamname: event.target.innerText });
    },
  },
};
</script>
