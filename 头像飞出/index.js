let container = document.getElementsByClassName('avatar')[0]

let insideContainer = document.getElementsByClassName('inside-avatar')[0]

function handler() {
  container.style.opacity = 0
  insideContainer.classList.add('animate-flyto')
}


// 动画结束
insideContainer.addEventListener('animationend', function () {
  if (insideContainer.className.indexOf('animate-flyout') !== -1) {
    insideContainer.classList.remove('animate-flyout')
  }
  container.style.opacity = 1
})


function handerLeave(e) {
  // 判断距离，是否隐藏大框
  insideContainer.classList.remove('animate-flyto')
  insideContainer.classList.add('animate-flyout')
}

container.addEventListener('mouseenter', handler)
container.addEventListener('mouseleave', handerLeave)

// 鼠标移出事件
container.addEventListener('mouseleave', handerLeave)