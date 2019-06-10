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
    serviceWorker: true, // 是否开启 PWA
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/foo/one.html' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: {
            '/foo/': [
                '',     /* /foo/ */
                'one',  /* /foo/one.html */
                'two'   /* /foo/two.html */
            ],

            '/bar/': [
                '',      /* /bar/ */
                'three', /* /bar/three.html */
                'four'   /* /bar/four.html */
            ],

            // fallback
            '/': [
                '',        /* / */
                'contact', /* /contact.html */
                'about'    /* /about.html */
            ]
        },
        // sidebar: 'auto',
        // sidebar: {
        //     '/foo/': [
        //         '',     /* /foo/ */
        //         'one',  /* /foo/one.html */
        //         'two'   /* /foo/two.html */
        //     ],

        //     '/bar/': [
        //         '',      /* /bar/ */
        //         'three', /* /bar/three.html */
        //         'four'   /* /bar/four.html */
        //     ],

        //     // fallback
        //     '/': [
        //         '',        /* / */
        //         'contact', /* /contact.html */
        //         'about'    /* /about.html */
        //     ],
        // },
        // sidebar: [
        //     {
        //         '/fontend/': [
        //             '/fontend/',
        //         ],
        //     },
        //     {
        //         '/work/': [
        //             '/work/'
        //         ]
        //     }
        // ], // 侧边栏配置
        sidebarDepth: 2, // 侧边栏显示2级
    }
};

function getFontEnd() {
    return [
        {
            title: "前端",
            collapsable: false,
            children: [
                '',
                'one'
            ]
        }
    ]
}