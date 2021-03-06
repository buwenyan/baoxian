import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store'
import './assets/style/resize.css'
import vueAxios from 'vue-axios'
import http from './utils/http'
 
import { Button, Icon ,Container ,Header,Aside,Main,Footer,Menu,MenuItem,MenuItemGroup} from 'element-ui';
import { Autocomplete,Submenu,Input,Checkbox,Pagination,Select,Option,DatePicker,Form,FormItem} from 'element-ui';
import { Upload,Dialog,Radio,Dropdown,DropdownItem,DropdownMenu,Avatar,Rate,TableColumn,Tag,Table} from 'element-ui';
// import { } from 'element-ui';

// Message.install = function (Vue) {
//   Vue.prototype.$message = Message
// }
// MessageBox.install = function (Vue,options) {
// MessageBox.install = function (Vue) {
//   Vue.prototype.$confirm = MessageBox
// }


import Echarts from 'echarts'

Vue.prototype.echarts = Echarts

// Vue.use(Container)
Vue.use(Tag)
Vue.use(TableColumn)
Vue.use(Table)
Vue.use(Autocomplete)
Vue.use(Option)
Vue.use(Select)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Dropdown)
Vue.use(vueAxios, http)
Vue.use( Button)
Vue.use(Icon)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Pagination)
Vue.use(Select)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(Form)
Vue.use(FormItem)
// Vue.use(Message)
// Vue.use(MessageBox)
Vue.use(Upload)
Vue.use(Dialog)
Vue.use(Radio)
Vue.use(Avatar)
Vue.use(Rate)

Vue.config.productionTip = false

Vue.prototype.formatWord = function (val) {
  return val.replace(/\n/g, '<br>')
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

