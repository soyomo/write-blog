module.exports = [
    { text: '主页', link: '/' },
    {
        text: '基础', items: [
            {
                text: '编程', items: [
                    { text: 'c语言', link: '/basis/codeing/c/' },
                    { text: '编程范式', link: '/basis/codeing/programming_paradigm/' },
                    { text: '数据结构和算法', link: '/basis/codeing/algorithm_data/' }
                ]
            },
            {
                text: '系统', items: [
                    { text: '操作系统', link: '/basis/system/porating_sys/' },
                    { text: '计算机系统', link: '/basis/system/computer_sys/' },
                    { text: '网络基础', link: '/basis/system/network_foundation/' },
                    { text: '数据库', link: '/basis/system/data_base/' },
                    { text: '分布式', link: '/basis/system/distributed/' },
                ]
            },
        ]
    },
    {
        text: '前端', items: [
            {
                text: '基础', items: [
                    { text: 'HTML', link: '/fontend/basis/HTML/' },
                    { text: 'CSS', link: '/fontend/basis/CSS/' },
                    { text: 'js', link: '/fontend/basis/js/' },
                ]
            },
            {
                text: '框架', items: [
                    { text: 'Vue', link: '/fontend/frame/Vue/' },
                    { text: 'React', link: '/fontend/frame/React/' },
                    { text: 'Angular', link: '/fontend/frame/Angular/' },
                    { text: 'Flutter', link: '/fontend/frame/Flutter/' }
                ]
            },
            {
                text: '图形学', items: [
                    {text: "basis", link: '/visualization/basis/'},
                    {text: "webgl", link: '/visualization/webgl/'},
                ]
            },
             {text: 'gis', items: [
                {text: "basis", link: '/gis/basis/'},
                {text: "mapbox", link: '/gis/mapbox/'},
                {text: "openlayer", link: '/gis/openlayer/'},
            ]},
        ]
    },
    { text: '后端', link: '/backend/' },
    { text: '工作笔记', link: '/work/' },
    { text: '环境配置', link: '/development_environment/' },
    { text: 'Github', link: 'https://github.com/soyomo' }
]
