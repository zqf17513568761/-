
<template>
  <div class="total">
    <div class="top" v-if="message">
      <div class="header" v-for="s in message" :key="s.id">{{s.address}}</div>
      <div class="input">
        <input type="text" placeholder="搜索饿了么商家、商家名称">
      </div>
    </div>

    <div class="lunbo">
      <div v-for="(p,index) in photoes" :key="p.id" :style="imageHandle(index)">
        <img :src="showImage2(p.image_hash)" alt>
      </div>
    </div>


    <div class="foods">
      <p v-for="a in message1[0].entries" :key="a.id" class="kinds">
        <img :src="showImage(a.image_hash)" alt class="food_img">
        <br>
        <span class="name">{{a.name}}</span>
      </p>
    </div>
    <div class="taocan">
      <div class="left">
        <h3>品质套餐</h3>
        <p>搭配齐全吃的好</p>
        <br>
        <p class="qianggou">立即抢购 ></p>
      </div>
 
      <div class="right">
        <img src="./1.png" alt>
      </div>
      <div class="clear"></div>
    </div>

    <div class="huiyuan">
      <div class="hui">
        <span>
          <img src="./2.png" alt>
        </span>&nbsp;
        <span class="p">超级会员</span>&nbsp;
        <span>·</span>&nbsp;
        <span class="pp">每月领20元红包</span>
        <span class="kaitong">立即开通 ></span>
      </div>
    </div>
    <!-- 四张轮播图 -->

    <div>
      <!-- <h3>—————— 推荐商家  ———————</h3> -->
      <sort class="shang"></sort>
       <img class="tupian" src="./3.png" alt="">
    </div>

   
    
    
  </div>

</template>

<script>


import axios from "axios";

import Sort from '../pages/Sort'

export default {
  name: "Home",
  components:{
    Sort,
  },
  data() {
    return {
      message: null,
      message1: null,
      allLeft:[],
      photoes:null
    };
  },
  mounted() {
    axios
      .get("/restapi/member/v2/users/14547420/location")
      .then(res => {
        console.log(res);
        this.message = res.data.addresses;
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("restapi/shopping/v2/entries")
      .then(res1 => {
        console.log(res1);
        this.message1 = res1.data;
      })
      .catch(error => {
        console.log(error);
      });
        axios
      .get("restapi/shopping/v2/banners")
      .then(res2 => {
        console.log(res2);
        this.photoes = res2.data;
               for (let i = 0; i < this.photoes.length; i++) {
          this.allLeft.push(i * 550);
        }
        setInterval(() => {
          for (let i = 0; i < this.photoes.length; i++) {
            let newLeft = this.allLeft[i] - 550;
            if (newLeft < -550) {
              newLeft = (this.photoes.length - 2
               ) * 550;
            }
            this.$set(this.allLeft, i, newLeft);
            console.log("1111");
          }
        
        }, 3000);
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    showImage(src) {
      const a = src.slice(0, 1) + "/" + src.slice(1, 3) + "/" + src.slice(3);
      if (src.indexOf("jpeg") !== -1) {
        return (
          "https://fuss10.elemecdn.com/" +
          a +
          ".jpeg?imageMogr/thumbnail/!80x80r/gravity/Center/crop/80x80/"
        );
      } else if (src.indexOf("png") !== -1) {
        return (
          "https://fuss10.elemecdn.com/" +
          a +
          ".png?imageMogr/thumbnail/!80x80r/gravity/Center/crop/80x80/"
        );
      } else {
        return "https://fuss10.elemecdn.com/a/7c/a7e9e5aa15b1b8fc6f1bece8ee385jpeg.jpeg?imageMogr/thumbnail/!80x80r/gravity/Center/crop/80x80/";
      }
    },
     showImage2(src) {
      const a = src.slice(0, 1) + "/" + src.slice(1, 3) + "/" + src.slice(3);
      if (src.indexOf("jpeg") !== -1) {
        return (
          "https://fuss10.elemecdn.com/" +
          a +
          ".jpeg?imageMogr/thumbnail/!355x88r/gravity/Center/crop/355x88/"
        );
      } else if (src.indexOf("png") !== -1) {
        return (
          "https://fuss10.elemecdn.com/" +
          a +
          ".png?imageMogr/thumbnail/!355x88r/gravity/Center/crop/355x88/"
        );
      } else {
        return "https://fuss10.elemecdn.com/a/7c/a7e9e5aa15b1b8fc6f1bece8ee385jpeg.jpeg?imageMogr/thumbnail/!355x88r/gravity/Center/crop/355x88/";
      }
    },
    imageHandle: function(index) {
      let nowindex = 9;
      if (this.allLeft[index] < 0) {
        nowindex = -1;
      }
      return `left:${
        this.allLeft[index]
      }px;z-index:${nowindex};transition:all 0.5s`;
    }
  }
};



</script>
<style scoped>
.tupian{
  width: 100%;
  height: 100%;
  background-size: 100%;
}

.top {
  margin: 0;
  padding: 0;
  background-color: #0096ff;
}
.header {
  text-align: left;
  padding: 1.3vw;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
}
.input {
  padding: 10px;
}
input {
  width: 347px;
  height: 36px;
  text-align: center;
  border: 0;
}
.food_img {
  width: 45px;
}
.kinds {
  width: 75px;
  height: 65px;
  display: inline-block;
}
.foods {
  width: 100%;
  height: 180px;
  overflow: hidden;
}
.name {
  font-size: 14px;
}

.taocan {
  background-color: #f4f4f4;
  margin: 20px;
}
.taocan h3 {
  text-align: left;
  padding: 5px 0 0 20px;
}
.taocan p {
  color: gray;
  text-align: left;
  padding-left: 20px;
  margin-top: -15px;
}
.qianggou {
  color: #af8260;
  font-size: 16px;
  font-weight: 700;
  padding-bottom: -20px;
}
.left {
  float: left;
}
.right {
  float: right;
}
.clear {
  clear: both;
}
.right img {
  width: 170px;
  height: 120px;
  margin: 20px;
}
.huiyuan {
  background-color: #f3dda0;
  margin: 20px;
  padding: 10px;
}
.huiyuan img {
  width: 25px;
  height: 25px;
  position: relative;
  top: 3px;
}
.huiyuan .p {
  font-size: 18px;
  font-weight: 700;
}
.huiyuan .pp {
  font-size: 14px;
  font-weight: 400;
}
.hui {
  text-align: left;
}
.kaitong {
  float: right;
  margin-top: 6px;
  margin-right: 10px;
}
.lunbo {

  height: 88px;
  margin: 5px auto;
  overflow: hidden;
  position: relative;
}
.lunbo div {
  position: absolute;
  width: 100%;
}
.lunbo div img{
  width: 90%;
  height: 88px;
}


</style>