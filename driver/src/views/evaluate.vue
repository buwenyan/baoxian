<template>
  <div class=".sss">
    <nav class="nav">
      <div class="ift" id="f" @click="goback">&#xe607;返回</div>
      <p class="b">我的评价</p>
    </nav>
    <div class="yhpj">
      <div class="yxpj">
        <p
          :style="{'text-align':'left','width':'100%','line-height':'40px','font-size':'20px','margin-top':'10px',}"
        >用户评价:</p>
      </div>
      <div class="pjnr"  v-for="(item,index) in sy" :key="index">
        <ul :style="{'font-size':'12px','min-height':'163px'}">
          <li :style="{'display':'flex','flex-wrap':'nowrap'}">
            <div :style="{'margin-top':'10px','display':'flex','flex-wrap':'nowrap','width':'100%'}">
              <div>
                <img
                  :src="require('../assets/pic/'+img)"
                  alt
                  :style="{'height':'30px','width':'30px','margin-left':'10px','border-radius':'5px'}"
                />
              </div>
              <p :style="{'line-height':'34px','margin-left':'10px','width':'40px'}">{{item.driverName}}</p>
              <p :style="{'width':'70%','text-align':'right','margin-top':'10px'}">{{item.commTime}}</p>
            </div>
          </li>
          <li>
            <p :style="{'margin-left':'-140px',}">
              <van-rate v-model="item.commStar" allow-half void-icon="star" void-color="#eee" readonly />
            </p>
          </li>
          <li :style="{'padding-left':'53px'}">
            <p :style="{'text-align':'left',}">{{item.commLabel}}</p>
          </li>
          <li :style="{'padding-left':'53px','display':'flex','flex-wrap':'nowrap'}">
            <p :style="{'text-align':'left','width':'30px'}">评论:</p>
            <div class="nr">
              <p class="t" :style="{'text-align':'left'}">{{item.commRemark}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "evaluate",
  data() {
    return {
      name: "何志勇",
      date: "2019/11/29",
      img: "blog菜单图片_07.png",
      wn1: "评价文案",
      wn2: "评价文案",
      www: "0",
      pl: "花催你和承诺或金额VB是万花催 ",
      list: ["好", "干净", "整洁"],
      sy:[],
      qqq: [
        {
          name: "qq",
          age: "12",
          pi: [0, 1,2]
        },
        {
          name: "ww",
          age: "13",
          pi: [1, 2,0]
        },
        {
          name: "ee",
          age: "14",
          pi: [0, 2,1]
        }
      ]
    };
  },
  methods: {
    goback(){
      this.$router.go(-1);
    }
  },
  mounted() {
    console.log(this.list[this.qqq[1].pi[2]]);
  },
   created(){
    this.axios
      .post("/driver/findCommentListByDriverId",{
       driverId:"1"
      })
      .then(res => {
        console.log(res)
        this.sy = res.data.data;

      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="less">
.t {
  word-break: break-all;
  word-wrap: break-word;
  min-height: 40px;
  
}

* {
  margin: 0;
  padding: 0;
}
body {
  background: white;
}
.nav {
  width: 100%;
  height: 80px;
   background: #63ADDE;
}


#f {
  float: left;
  line-height: 80px;
  font-size: 30px;
}
.b {
  color: aliceblue;
  line-height: 80px;
  text-align: center;
  margin: 0 auto;
  margin-right: 60px;
  font-size: 30px;
}

.yxpj {
  width: 100%;
  min-height: 80px;
  background: white;
  border-bottom: rgb(93, 86, 86) solid 2px;
}
.pjnr {
  width: 100%;
  min-height: 342px;
  background: white;
  margin-bottom: 20px;
}
.van-rate__icon {
  font-size: 50px;
}

ul > li {
  margin-bottom: 20px;
}
.nr {
  width: 580px;
  min-height: 40px;
}

@font-face {
  font-family: "iconfont"; /* project id 1531997 */
  src: url("//at.alicdn.com/t/font_1531997_694yqw1hmv6.eot");
  src: url("//at.alicdn.com/t/font_1531997_694yqw1hmv6.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1531997_694yqw1hmv6.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1531997_694yqw1hmv6.woff") format("woff"),
    url("//at.alicdn.com/t/font_1531997_694yqw1hmv6.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1531997_694yqw1hmv6.svg#iconfont") format("svg");
}

.ift {
  font-family: "iconfont" !important;
  font-size: 50px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(255, 235, 235);
  text-decoration: none;
}
</style>