// 欢迎页动画
setTimeout(function() {
  siteWelcome.classList.remove('active')
}, 600)

// 下拉列表动画
let liTags = document.getElementsByClassName('menuTrigger')
for (let i = 0; i < liTags.length; i++) {
  liTags[i].onmouseenter = function(enterEvent) {
    enterEvent.currentTarget.classList.add('active')
  }

  liTags[i].onmouseleave = function(leaveEvent) {
    leaveEvent.currentTarget.classList.remove('active')
  }
}
