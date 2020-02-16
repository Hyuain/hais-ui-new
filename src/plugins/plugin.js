import Toast from '../components/toast.vue'

let currentToast

export default {
  install(Vue) {
    Vue.prototype.$toast = function (message, options = {}) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({
        Vue,
        message,
        propsData: options,
        onClose: () => {
          currentToast = null
        }
      })
    }
  }
}

/* helpers */

function createToast({Vue, message, propsData, onClose}) {
  const Constructor = Vue.extend(Toast)
  const toast = new Constructor({
    data() {
      return {message}
    },
    propsData
  })
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('beforeClose', onClose)
  document.body.appendChild(toast.$el)
  return toast
}