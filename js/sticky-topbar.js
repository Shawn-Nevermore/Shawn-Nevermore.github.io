!function () {
    var view = document.querySelector('#topNavBar')
    window.addEventListener('scroll', () => {
        // 添加屏幕滚动的导航栏动画
        window.scrollY ? view.classList.add('sticky') : view.classList.remove('sticky')
    })
}.call()