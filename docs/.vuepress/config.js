module.exports = {
    title: 'chenfeng\'s blog',
    description: 'chenfeng的个人博客',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
        ['link', { rel: 'manifest', href: '/logo.png' }],
        ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
        ['link', { rel: 'mask-icon', href: '/logo.png', color: '#3eaf7c' }],
        ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache' }],
        ['meta', { 'http-quiv': 'expires', cotent: '0' }],
        ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache, must-revalidate' }]
    ],
    // serviceWorker: true, // 是否开启 PWA
    // plugins: ['@vuepress/pwa'],
    plugins: [
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }],
        ['@vssue/vuepress-plugin-vssue', {
            // 设置 `platform` 而不是 `api`
            platform: 'github',
            locale: 'zh',

            // 其他的 Vssue 配置
            owner: 'soyomo',
            repo: 'soyomo.github.io',
            clientId: 'f56eda181355ca053e0e',
            clientSecret: '552ca031bd9e42699cf4014c4dde5d6ec20f6cb5',
        }]
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        nav: require('./nav'),
        sidebar: {
            '/blog/': getSidebar('blog'),
            '/frame/': getSidebar('frame'),
            '/basis/': getSidebar('basis'),
            'visualization': getSidebar('visualization')
        },
        sidebarDepth: 2, // 侧边栏显示2级
        plugins: {
            '@vuepress/pwa': {
                serviceWorker: true,
                updatePopup: {
                    message: "New content is available.",
                    buttonText: "Refresh"
                }
            }
        },
        lastUpdated: '最后更新时间', // string | boolean
    }
};

function getSidebar(barName) {
    const sidebar = {
        frame: [
            '/fontend/frame/',
            '/fontend/frame/Vue/',
            '/fontend/frame/React/',
            '/fontend/frame/Angular/'
        ],
        blog: [
            '/blog/'
        ],
        basis: [

        ],
        visualization: [
            '/fontend/visualization/'
        ]
    }
    return sidebar[barName]
}