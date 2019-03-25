// 欢迎页动画
setTimeout(function () {
    siteWelcome.classList.remove('active')
}, 600)

let specialTags = document.querySelectorAll('[data-x]')
for (let i = 1; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
}

setTimeout(() => {
    findClosest()
}, 800);
// 导航栏动画
window.onscroll = function () {
    // 添加屏幕滚动的导航栏动画
    window.scrollY ? topNavBar.classList.add('sticky') : topNavBar.classList.remove('sticky')
    findClosest()
}

function findClosest() {
    // 添加导航链接自动高亮
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for (let i = 1; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
            minIndex = i
        }
    }

    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href = "#' + id + '"]')
    let children = a.parentNode.parentNode.children
    for (let i = 0; i < children.length; i++) {
        children[i].classList.remove('highlight')
    }
    a.parentNode.classList.add('highlight')
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

// 页面内平滑跳转
// Setup the animation loop.
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

let aTags = document.querySelectorAll('.topNavBar nav > ul > li > a')
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (clickEvent) {
        // myTweenSroll()

        // 禁用默认锚点跳转，导航栏会遮挡
        clickEvent.preventDefault()

        let targetTop = document.querySelector(clickEvent.currentTarget.getAttribute('href')).offsetTop - 100
        let currentTop = window.scrollY
        let s = targetTop - currentTop

        // 设置一个t根据跳转距离增加而增加，上限.5s
        let t = Math.abs(s / 100 * 200) > 500 ? 500 : Math.abs(s / 100 * 200)

        let coords = { y: currentTop };
        let tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
            .to({ y: targetTop }, t)
            .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
            .onUpdate(function () {
                window.scrollTo(0, coords.y)
            })
            .start();
    }
}


// 没有用tweenjs实现的页面滚动跳转
function myTweenSroll() {
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