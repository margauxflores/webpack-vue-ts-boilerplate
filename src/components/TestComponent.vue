<template>
  <div :class="$style.wrapper">
    <p>Hey! I'm a test component!</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class TestComponent extends Vue {}
</script>

<style lang="scss" module>
.wrapper {
  width: 100%;

  p {
    font-size: 14px;
  }
}
</style>
