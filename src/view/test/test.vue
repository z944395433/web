<template>

    <div class="test">
          <div style="height: 25px;width: 100%">
            <p style="float: left">当前位置：》{{ this.$route.name}}</p>
          </div>
      <h1>{{ msg }}</h1>

    </div>

</template>

 

<script>

  export default {

    name: 'test',

    data () {

      return {

        msg: '测试页面'

      }

    }

  }

</script>

 

<style scoped>

</style>
