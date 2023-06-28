import { createApp } from 'vue/dist/vue.esm-bundler.js'
import SmartyUI from './entry'

import SButton from './button'
import SFCButton from './SFCButton.vue'
import JSXButton from './JSXButton'

//createApp(SButton)
//createApp(SFCButton)
// createApp(JSXButton)
//   .mount("#app")

  createApp({
    template:`
        <div>
            <SButton>普通按钮</SButton>
        </div>
    `
})
.use(SmartyUI)
.mount("#app");

