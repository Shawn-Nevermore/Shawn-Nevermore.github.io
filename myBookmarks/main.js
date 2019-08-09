// 1.初始化数据
var key2site = init()
var keys = key2site['keys'],
  hash = key2site['hash']

// 2.生成键盘
generateKeyboard(keys, hash)

// 3.监听键盘
listenToUser(hash)

// 工具函数
function getFromLocalStorage(name) {
  return JSON.parse(localStorage.getItem(name) || 'null')
}

// 生成tag，并添加属性（为hash表）
function tag(tagName, attr) {
  var element = document.createElement(tagName)
  for (var key in attr) {
    element[key] = attr[key]
  }
  return element
}

function createSpan(content) {
  return (span = tag('span', { textContent: content, className: 'text' }))
}

function createButton(keyId) {
  var button = tag('button', { textContent: 'E', id: keyId })

  button.onclick = function(onclickEvent) {
    // 获取用户点击的编辑按钮的id，button是一个容器，页面呈现时循环遍历已经走完，永远保存最后一个key
    // 因此需要一个按键事件来定位到所需key
    var buttonKey = onclickEvent.target.id

    // 弹出窗口，获取用户的输入信息
    var newWebsite = prompt('请输入你想更新的网址：')

    // hash变更
    hash[buttonKey] = newWebsite

    // 获取变更后的网址图标
    var img = onclickEvent.target.previousSibling
    img.src = 'http://' + hash[keyId] + '/favicon.ico'
    img.onerror = function(event) {
      event.target.src = 'https://i.loli.net/2019/03/16/5c8bf7dfcefcc.png'
      event.target.style = 'opacity:0.2'
    }

    // 将用户变更的网址，即变更的hash存到浏览器中的localStorage
    localStorage.setItem('hashUpdater', JSON.stringify(hash))
  }

  return button
}

function createImg(domain) {
  var img = tag('img')
  if (domain) {
    img.src = 'http://' + domain + '/favicon.ico'
  } else {
    img.src = 'https://i.loli.net/2019/03/16/5c8bf7dfcefcc.png'
    img.style = 'opacity:0.2'
  }
  img.onerror = function(event) {
    event.target.src = 'https://i.loli.net/2019/03/16/5c8bf7dfcefcc.png'
    event.target.style = 'opacity:0.2'
  }
  return img
}

function init() {
  var keys = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  ]

  var hash = {
    q: 'mail.qq.com',
    w: 'weibo.com',
    e: 'ele.me',
    r: 'ruanyifeng.com',
    t: 'tencent.com',
    y: 'youtube.com',
    u: 'uestc.edu.cn',
    i: 'iqiyi.com',
    o: 'opera.com',
    p: 'picture.baidu.com/',
    a: 'amazon.com',
    s: '',
    z: 'zhihu.com',
    v: 'v2ex.com',
    c: 'cctv.com',
    b: 'bilibili.com',
    j: 'javascript.ruanyifeng.com',
    h: 'huya.com',
    d: 'douyu.com',
    n: 'nodejs.cn/',
    k: null,
    m: null,
    l: 'liaoxuefeng.com'
  }

  // 将localStorage中的hashUpdater覆盖到初始的hash中，以防止刷新浏览器导致变更信息丢失
  // 添加'null'防止hashUpdater为空，parse失败
  var hashInLocalStorage = getFromLocalStorage('hashUpdater')
  if (hashInLocalStorage) {
    hash = hashInLocalStorage
  }

  return {
    keys: keys,
    hash: hash
  }
}

function generateKeyboard(keys, hash) {
  for (var i = 0; i < keys.length; i++) {
    var div = tag('div', null)

    keyboard.appendChild(div) // keyboard是div的wrapper的id

    for (var j = 0; j < keys[i].length; j++) {
      // 获取按键
      var k = keys[i][j]

      // createSpan(k)

      var button = createButton(k)

      // 添加按键图标
      var img = createImg(hash[k])

      var kbd = tag('kbd', { textContent: k.toUpperCase(), className: 'key' })
      // kdb.appendChild(span)
      kbd.appendChild(img)
      kbd.appendChild(button)

      div.appendChild(kbd)
    }
  }
}

function listenToUser(hash) {
  document.onkeypress = function(onkeypressEvent) {
    var key = onkeypressEvent.key
    var website = hash[key]
    window.open('http://' + website, '_blank')
    // location.href = 'http://' + website
  }
}
