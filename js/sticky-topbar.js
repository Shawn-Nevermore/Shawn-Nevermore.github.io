!function () {
    var view = document.querySelector('#topNavBar')

    var controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {
            window.addEventListener('scroll', () => {
                // 添加屏幕滚动的导航栏动画
                window.scrollY ? this.active() : this.deactive()
            })
        },
        active: function () {
            view.classList.add('sticky')
        },
        deactive: function () {
            view.classList.remove('sticky')
        },
    }

    controller.init(view)
}.call()