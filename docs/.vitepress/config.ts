import { defineConfig } from 'vitepress';
import themeConfig from './themeConfig';


export default defineConfig({
    base:'/docs/',
    // 标题
    title: 'chuxin-docs',
    // 描述
    description: '基于vitepress搭建个人博客',
    // 显示最后更新时间
    lastUpdated: true,
    // markdown
    markdown: {
        theme: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
        },
    },
    // themeConfig 配置
    themeConfig: themeConfig,
})