<template>
  <full-page :options="options">
    <div class="section">
      <p class="text">First section</p>
    </div>
    <div class="section">
      <p class="text">Second section</p>
    </div>
    <div class="section">
      <p class="text">Third section</p>
    </div>
  </full-page>
</template>

<script>
export default {
  data() {
    return {
      options: {
        start: 0,
        sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
        dir: 'v',
        loop: false,
        duration: 300,
        beforeChange (ele, current, next) {
          this.index = next
        },
        afterChange (ele, current) {
          this.index = current
        }
      }
    }
  }
}
</script>

<style>
</style>
