let container = document.getElementsByClassName('designation')[0]

let textWrap = container.getElementsByClassName('typing-title')[0]

textWrap.style.display = 'none'

let textList = Array.from(textWrap.children)

let textOrigin = container.getElementsByClassName('typed-title')[0]

// 当前切换文本索引
let curIndex = 0

textOrigin.innerHTML = textList[curIndex].innerHTML

// 当前文字索引
let curTextLen = 0

const waitTime = (callback, time = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      callback()
      resolve()
    }, time)
  })
}

// 判断 一次循环结束
let reverseText = []

function reqCurText(){
  // 文字逐步出现
  const curBox = textList[curIndex]
  const splitDom = curBox.getElementsByTagName('strong')[0]
  const texts = splitDom.innerText

  // 判断正向还是反向
  if(reverseText.length < texts.length){
    // 正向
    curTextLen += 1
  }
  if(reverseText.length >= texts.length && reverseText.length < texts.length * 2){
    // 反向
    curTextLen -= 1
  }
  // 如果超出, 则切换下一个文字
  if(reverseText.length >= texts.length * 2){
    curIndex += 1
    curIndex = curIndex >= textList.length ? 0 : curIndex
    curTextLen = 0
    reverseText = []
    waitTime(reqCurText, 50)
    return
  }
  reverseText.push('')
  textOrigin.innerHTML = `<strong>${texts.slice(0, curTextLen)}</strong>|`
  waitTime(reqCurText, 200)
}


waitTime(reqCurText, 200)
