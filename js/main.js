// 欢迎页动画
setTimeout(function () {
    siteWelcome.classList.remove('active')
}, 1000)

// 导航栏动画
window.onscroll = function () {
    window.scrollY ? topNavBar.classList.add('sticky') : topNavBar.classList.remove('sticky')
}

// 下拉列表动画
let liTags = document.getElementsByClassName('menuTrigger')
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (enterEvent) {
        enterEvent.currentTarget.classList.add('active')
    }

    liTags[i].onmouseleave = function (leaveEvent) {
        leaveEvent.currentTarget.classList.remove('active')
    }
}

// 锚点定位
let aTags = document.querySelectorAll('.topNavBar nav > ul > li > a')
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (clickEvent) {

        // 禁用默认锚点跳转，导航栏会遮挡
        clickEvent.preventDefault()

        /* 以下是思维过程

        let a = clickEvent.currentTarget
        // a.href是浏览器的API，是带HTTP协议的；
        // a.getAttribute('href')是用户写入的，只有锚点部分
        let href = a.getAttribute('href')
        let element = document.querySelector(href)
        let top = element.offsetTop
        
        */

        // 这是上面四句代码的合成，链式编程在实际中更常见
        let top = document.querySelector(clickEvent.currentTarget.getAttribute('href')).offsetTop

        let currentTop = window.scrollY
        let targetTop = top - 100
        let n = 30  // 滚动次数（我的理解是帧数，1秒60帧）
        let duration = 200 / n   // 每次滚动时间
        let distance = (targetTop - currentTop) / n   // 每次移动距离

        // setInterval隔一段时间就执行一次，相当于循环，所以要在外面声明，
        // 可以用++i，这里用--n减少变量
        // let i = 0 
          
        let timer = setInterval(() => {
            if (!n) {
                window.clearInterval(timer)
                return
            }
            window.scrollTo(0, currentTop + distance * (30 - --n))

        }, duration)
    }
}