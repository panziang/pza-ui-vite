import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'

import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

// https://vitejs.dev/config/
const rollupOptions = {

  external: ["vue", "vue-router"],
  output: {
    //解决which may not be what you want. Use `output.exports: "named"` to disable this warning
    exports: 'named' as 'named',
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({

  plugins: [vue(),
    // JSX插件
    vueJsx({}),
     // 添加UnoCSS插件
     Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()],
  })
  ],
  build: {
    rollupOptions,
    minify:false,
    lib: {
      entry: "./src/entry.ts",
      name: "SmartyUI",
      fileName: "smarty-ui",
      // 导出模块格式
      formats: ["es", "umd","iife"],
    },
  },

});
