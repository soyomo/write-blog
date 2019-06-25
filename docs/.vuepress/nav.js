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
        {text: '基础', link: '/basis/'},
        {text: '可视化', link: '/basis/visualization/'},
    ] },
    { text: '后端', link: '/backend/'},
    {
        text: '框架', items: [
            { text: 'Vue', link: '/frame/Vue/' },
            { text: 'React', link: '/frame/React/' },
            { text: 'Angular', link: '/frame/Angular/' },
            { text: 'Flutter', link: '/frame/Flutter/' }
        ]
    },
    { text: '工作笔记', link: '/work/' },
    
    { text: '环境配置', link: '/environment/' },
    { text: 'Github', link: 'https://github.com/soyomo' }
]
