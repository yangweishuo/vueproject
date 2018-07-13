<template>
  <div id="app">
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body,html,#app,section{
    width: 100%;
    height: 100%;
  }
  section .warp{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  section .warp .main{
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
</style>
