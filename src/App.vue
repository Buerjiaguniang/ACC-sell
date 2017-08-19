<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/Goods" class="item">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/Ratings" class="item">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/Seller" class="item">商家</router-link>
      </div>
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import header from './components/header/header'
const ERR_OK = 0;
export default {
  name: 'app',
  data() {
      return {
        seller: {

        }
      }
  },
  created() {
    this.$http.get('/api/seller').then((response) => {
        response = response.body;
        console.log(response);
        if (response.errno === ERR_OK) {
            this.seller = response.data;
            console.log(this.seller);
        }
    })
  },
  components: {
    'v-header': header
  }
}


</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"

  #app
    .tab
      display: flex
      width: 100%
      heigth: 40px
      line-height: 40px
      position:relative
      /*border-bottom: 1px solid rgba(7, 17, 27, 0.1)*/
      border-1px(rgba(7, 17, 27, 0.1))
      .tab-item
        flex: 1
        text-align: center
        & > a
          display: block
          font-size: 14px
          color:rgb(77,85,93)
        .router-link-active
            color:rgb(240,20,20)

</style>
