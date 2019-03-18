<template>
  <div>
   <div class="HelloWorld">
    <h1>{{ msg }}</h1>
    <h1>site : {{site}}</h1>
    <h1>url : {{url}}</h1>
    <h1>{{details()}}</h1>
   </div>
  </div>
</template>

<script>
export default {
name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎来到vue世界！'，
      site: '菜鸟教程',
      url: 'www.runoob.com',
    }
  },
    methods: {
        details: function() {
        return  this.site + " - 学的不仅是技术，更是梦想！";
        }
    }
}
</script>