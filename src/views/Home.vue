<template>
  <div :class="$style.wrapper">
    <router-link to="/about">About Page</router-link>
    <p>Oh hello world!</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {
  created(): void {
    console.log('Hey there!');
  }
}
</script>

<style lang="scss" module>
.wrapper {
  width: 100%;

  p {
    font-size: 16px;
  }
}
</style>
