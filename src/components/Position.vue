<template>
    <div>
     {{rank}}
      <Team :name=position.name />
    </div>
</template>
<script>
import Team from './Team';

export default {
  name: 'Position',
  components: { Team },
  props: ['position', 'rank'],
};
</script>
