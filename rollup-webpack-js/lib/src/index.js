import Vue from 'vue';
import DsButton from './button/button.vue';
import DsSwitch from './switch/switch.vue';

export { DsButton };
export { DsSwitch };

export default {
  install: () => {
    Vue.component('DsButton', DsButton);
    Vue.component('DsSwitch', DsSwitch);
  }
}
