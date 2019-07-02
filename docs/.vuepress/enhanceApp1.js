function integrateGitment(router) {
    const linkGitment = document.createElement('link')
    linkGitment.href = 'https://imsun.github.io/gitment/style/default.css'
    linkGitment.rel = 'stylesheet'
    const scriptGitment = document.createElement('script')
    document.body.appendChild(linkGitment)
    scriptGitment.src = 'https://imsun.github.io/gitment/dist/gitment.browser.js'
    document.body.appendChild(scriptGitment)
  
    router.afterEach((to, from) => {
      // 页面滚动，hash值变化，也会触发afterEach钩子，避免重新渲染
      if (to.path === from.path) return
      // 已被初始化则根据页面重新渲染 评论区
      if (scriptGitment.onload) {
        renderGitment(to.fullPath)
      } else {
        scriptGitment.onload = () => {
          const commentsContainer = document.createElement('div')
          commentsContainer.id = 'comments-container'
          commentsContainer.style.padding = '20px'
          commentsContainer.style.zIndex = '9'
          commentsContainer.classList.add('content')
          const $page = document.querySelector('.page')
          if ($page) {
            $page.appendChild(commentsContainer)
            renderGitment()
          }
        }
      }
    })
  
    function renderGitment(fullPath) {
      const gitment = new Gitment({
        // ！！！ID最好不要使用默认值（location.href），因为href会携带hash，可能导致一个页面对应像个评论issue！！！
        // https://github.com/imsun/gitment/issues/55
        id: fullPath,
        owner: 'soyomo', // 必须是你自己的github账号
        repo: 'soyomo.github.io', // 上一个准备的github仓库
        // link: location.origin + location.pathname,
        oauth: {
          client_id: 'f56eda181355ca053e0e', // 第一步注册 OAuth application 后获取到的 Client ID
          client_secret: '552ca031bd9e42699cf4014c4dde5d6ec20f6cb5', // 第一步注册 OAuth application 后获取到的 Clien Secret
        },
      })
      gitment.render('comments-container')
    }
  }
  
  export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData // 站点元数据
  }) => {
    try {
      // 生成静态页时在node中执行，没有document对象
      document && integrateGitment(router)
    } catch (e) {
      console.error(e.message)
    }
  }