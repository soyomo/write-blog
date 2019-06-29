module.exports = [
    { text: '主页', link: '/' },
    {
        text: '基础', items: [
            { text: '计算机组成', link: '/basis/computer/' },
            { text: '操作系统', link: '/basis/os/' },
            { text: '数据结构和算法', link: '/basis/at/' },
            { text: '网络协议', link: '/basis/net/' },
        ]
    },
    { text: '前端', items: [
        {text: '基础', items: [
            {text: 'HTML', link: '/fontend/basis/HTML/'},
            {text: 'CSS', link: '/fontend/basis/CSS/'},
            {text: 'js', link: '/fontend/basis/js/'},
        ]},
        {
            text: '框架', items: [
                { text: 'Vue', link: '/fontend/frame/Vue/' },
                { text: 'React', link: '/fontend/frame/React/' },
                { text: 'Angular', link: '/fontend/frame/Angular/' },
                { text: 'Flutter', link: '/fontend/frame/Flutter/' }
            ]
        },
        {text: '可视化', link: '/fontend/visualization/'},
    ] },
    { text: '后端', link: '/backend/'},
    { text: '工作笔记', link: '/work/' },
    { text: '环境配置', link: '/environment/' },
    { text: 'Github', link: 'https://github.com/soyomo' }
]
