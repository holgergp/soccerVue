<template>
    <ul>
        <li v-for="(position, index) in SAMPLE_LEAGUE_TABLE" :key="position.id">
            <Position :position=position :rank=index+1 />
        </li>
    </ul>
</template>
<script>
import { SAMPLE_LEAGUE_TABLE } from '../constants/SampleData';
import Position from './Position';

export default {
  name: 'LeagueTable',
  components: { Position },
  data() {
    return {
      SAMPLE_LEAGUE_TABLE,
    };
  },
};
</script>
