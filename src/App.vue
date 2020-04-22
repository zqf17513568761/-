<template>
  <div id="app">
    <div class="footer">
      <span>
        <router-link to="/home"><img src="../img/首页.png" alt=""><br>首页</router-link>
      </span>
      <span>
        <router-link to="/set"><img src="../img/发现.png" alt=""><br>发现</router-link>
      </span>
      <span>
        <router-link to="/find"><img src="../img/订单.png" alt=""><br>订单</router-link>
      </span>
      <span>
        <router-link to="/footer"><img src="../img/我的.png" alt=""><br>我的</router-link>
      </span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
.footer{ 
  width: 100%;
  height: 60px;
  background-color: rgb(218, 214, 214);
  z-index: 99999;
  font-size: 12px;
  position: fixed;
  bottom: 0;
  margin: 0;
}
.footer p{
  border: 1px solid #f4f4f4;
}
a{
  text-decoration: none;
  color: gray;
}
.footer span{
  /* margin: 0 30px 0 30px; */
  width: 20%;
  display: inline-block;
  line-height: 30px
  
}
.router-link-active{
  color: blue;
  text-decoration: none;
}
.router-link-active img{
  opacity: 0;
}
img{
  display: inline-block;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
