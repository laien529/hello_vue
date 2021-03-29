<template>
  <div class="hello">
    <Button type="success">success</Button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    date:Date

  },
  mounted() {
    // alert("hellow mounted")
    // this.timer = setInterval(function () {
    //   var _this = this;
    //   _this.date = new Date;
    //   console.log(_this.date);
    // }, 1000 
    // )
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
