var APP_ID = 'DodUh0KyyJtOGBc1yzskWhGM-gzGzoHsz'
var APP_KEY = 'B3JatpoW5ViIlua2w6vv6iOw'

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
})

var TestObject = AV.Object.extend('TestObject')
var testObject = new TestObject()
// testObject.save({
//     words: 'Hello World!'
// }).then(function (object) {
// })