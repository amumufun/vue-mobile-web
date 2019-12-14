import Vue from 'vue';
import 'mint-ui/lib/style.css';
import {
  Toast,
  Indicator,
  // MessageBox,
  // Actionsheet,
  // Popup,
  // Lazyload,
  // Range,
  // Picker,
  // DatetimePicker,
  Header,
  Tabbar,
  TabItem,
  // Navbar,
  // Cell,
  // CellSwipe,
  // Search,
  // Switch,
  // Checklist,
  // Radio,
  // Field,
  // Badge
  // TabContainer 小型页面使用
} from 'mint-ui';

// Vue.component(Actionsheet.name, Actionsheet);
// Vue.component(Popup.name, Popup);
// Vue.component(Range.name, Range);
// Vue.component(Picker.name, Picker);
// Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
// Vue.component(Navbar.name, Navbar);
// Vue.component(Cell.name, Cell);
// Vue.component(CellSwipe.name, CellSwipe);
// Vue.component(Search.name, Search);
// Vue.component(Switch.name, Switch);
// Vue.component(Checklist.name, Checklist);
// Vue.component(Radio.name, Radio);
// Vue.component(Field.name, Field);
// Vue.component(Badge.name, Badge);

Vue.prototype.$toast = Toast;
Vue.prototype.$indicator = Indicator;
// Vue.prototype.$messagebox = MessageBox;

// Vue.use(Lazyload);
