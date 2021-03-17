<template>
  <div :class="$style.wrapper">
    <p>Here's an about!</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class About extends Vue {}
</script>

<style lang="scss" module>
.wrapper {
  width: 100%;

  p {
    font-size: 20px;
  }
}
</style>
