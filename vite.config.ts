/// <reference types="vitest" />   
// 上面一行代码是增加一个类型定义声明，解决配置test报错
import { defineConfig,UserConfig  } from "vite";
// import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'

// import { presetUno, presetAttributify, presetIcons } from "unocss";
// import Unocss from "unocss/vite";
import Unocss from "./config/unocss";

// https://vitejs.dev/config/
const rollupOptions = {

  external: ["vue", "vue-router"],
  output: {
    //解决which may not be what you want. Use `output.exports: "named"` to disable this warning
    exports: 'named' as 'named',
    assetFileNames: `assets/[name].css`,
    globals: {
      vue: "Vue",
    },
  },
};

export const config ={

  plugins: [vue(),
    // JSX插件
    vueJsx({}),

     // 添加UnoCSS插件
    //  Unocss({
    //   presets: [presetUno(), presetAttributify(), presetIcons()],
    //  }),

    //将unocss配置抽出来
    Unocss(),
     
  ],
  build: {
    rollupOptions,
    minify: 'terser', // boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独 source文件
    reportCompressedSize: true,  // 生成压缩大小报告
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name: "SmartyUI",
      fileName: "smarty-ui",
      // 导出模块格式
      formats: ["es", "umd","iife"],
    },
    outDir: "./dist"
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
   // 提供测试所需要的 Dom 仿真
    environment: 'happy-dom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }

};

export default defineConfig(config as UserConfig)
