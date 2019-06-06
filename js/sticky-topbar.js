!function () {
    window.addEventListener('scroll', () => {
        // 添加屏幕滚动的导航栏动画
        window.scrollY ? topNavBar.classList.add('sticky') : topNavBar.classList.remove('sticky')
    })
}.call()