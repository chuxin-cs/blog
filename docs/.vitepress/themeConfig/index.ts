import { Mini } from './mini';
import { Business } from './business';
import { ToolChest } from './tool-chest';
import { WebCli } from './web-cli';

// 导出
export default {
    // logo
    logo: 'https://p3-passport.byteimg.com/img/user-avatar/d06e34c655a09859004bdebfaa639c81~100x100.awebp',
    // 图标
    socialLinks: [
        { icon: 'github', link: 'https://github.com/chuxin-cs/chuxin-docs' },
    ],
    // header
    nav: [
        { text: '首页', link: '/' },
        { text: '业务沉淀', items: [{ text: '业务沉淀', items: Business }] },
        { text: '源码系列', items: [{ text: '源码系列', items: Mini }] },
        { text: '前端工程化', items: [{ text: '前端工程化', items: WebCli }] },
        { text: '工具百宝箱', items: [{ text: '工具百宝箱', items: ToolChest }] },
        { text: '关于我', link: '/chuxin/' }
    ],
    // menu
    sidebar: {
        '/mini/': [{ text: '源码系列', items: Mini }],
        '/business/': [{ text: '业务沉淀', items: Business }],
        '/web-cli/': [{ text: '前端工程化', items: WebCli }],
        '/tool-chest/': [{ text: '工具百宝箱', items: ToolChest }],
    }
}