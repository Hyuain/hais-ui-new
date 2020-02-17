import HaiButton from './components/button'
import HaiButtonGroup from './components/button-group'
import HaiIcon from './components/icon'
import HaiInput from './components/input'
import HaiCol from './components/col'
import HaiRow from './components/row'
import HaiContainer from './components/container'
import HaiHeader from './components/header'
import HaiContent from './components/content'
import HaiSider from './components/sider'
import HaiFooter from './components/footer'
import HaiTabs from './components/tabs'
import HaiTabsHead from './components/tabs-head'
import HaiTabsBody from './components/tabs-body'
import HaiTabsItem from './components/tabs-item'
import HaiTabsPane from './components/tabs-pane'
import HaiPopover from './components/popover'
import HaiCollapse from './components/collapse'
import HaiCollapseItem from './components/collapse-item'
import HaiToast from "./plugins/toast"

const components = {
  HaiButton,
  HaiButtonGroup,
  HaiIcon,
  HaiInput,
  HaiCol,
  HaiRow,
  HaiContainer,
  HaiHeader,
  HaiContent,
  HaiSider,
  HaiFooter,
  HaiTabs,
  HaiTabsHead,
  HaiTabsBody,
  HaiTabsItem,
  HaiTabsPane,
  HaiPopover,
  HaiCollapse,
  HaiCollapseItem
}

const install = function (Vue) {

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });

  Vue.use(HaiToast)
}

export default install

export {
  HaiButton,
  HaiButtonGroup,
  HaiIcon,
  HaiInput,
  HaiCol,
  HaiRow,
  HaiContainer,
  HaiHeader,
  HaiContent,
  HaiSider,
  HaiFooter,
  HaiTabs,
  HaiTabsHead,
  HaiTabsBody,
  HaiTabsItem,
  HaiTabsPane,
  HaiPopover,
  HaiCollapse,
  HaiCollapseItem,
  HaiToast
}