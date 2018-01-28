<template>
  <span><div contenteditable=true
    v-html="name"
    v-on:blur="changed"
    v-on:paste="changed"
 /></span>
</template>
<script>
import eventConstants from '../constants/events';

export default {
  name: 'Team',
  props: { name: { type: String, required: true } },
  methods: {
    changed(event) {
      this.$emit(eventConstants.teamnameUpdated, { updatedTeamname: event.target.innerText });
    },
  },
};
</script>
