!function () {

    let specialTags = document.querySelectorAll('[data-x]')
    for (let i = 1; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset')
    }
    findClosestAndRemoveOffset()
    window.addEventListener('scroll', () => {
        findClosestAndRemoveOffset()
    })

    /* helper */
    function findClosestAndRemoveOffset() {
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

}.call()
