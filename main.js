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
        clickEvent.preventDefault()     // 禁用默认锚点跳转，导航栏会遮挡
        let a = clickEvent.currentTarget
        console.log(a);
        

        // a.href是浏览器的API，是带HTTP协议的；
        // a.getAttribute('href')是用户写入的，只有锚点部分
        let href = a.getAttribute('href')
        let element = document.querySelector(href)
        let top = element.offsetTop
        window.scrollTo(0, top - 100)
    }
}