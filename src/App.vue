<!--
 * @Author: xiaoming
 * @Date: 2021-05-13 17:16:12
 * @LastEditors: xiaoming
 * @LastEditTime: 2021-05-13 17:38:23
 * @Description: file content
-->
<template>
  <div id="app">
    <router-view />
    <service-worker-update-popup />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'App',
  components: {},
})
export default class extends Vue {}
</script>
