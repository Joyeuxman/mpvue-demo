
<script>
// 入口的APP.vue 文件没有template标签。添加该标签会使页面热更新失败。
import {get} from './util'
export default {
  async created () {
    const res = await get('/weapp/demo')
    console.log(123, res)
    console.log('小程序启动了')
  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
