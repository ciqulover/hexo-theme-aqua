var state = false

document.addEventListener('mousewheel', function (e) {
  var h = window.innerHeight
  if (document.body.scrollTop < 9 * h / 10 && e.wheelDelta < 0) {
    e.preventDefault()
    if (!state) scroll(window.innerHeight - document.body.scrollTop, 'down')
    return
  }

  if (document.body.scrollTop < h && e.wheelDelta > 0) {
    e.preventDefault()
    if (!state) scroll(document.body.scrollTop, 'up')
  }
})


function scroll(dis, dir) {
  state = true
  var time = 60
  var i = Math.PI / time
  var interval = Array.apply(null, new Array(60))
    .map((j, k) => 10 * Math.sin((k + 1) * i))

  var total = interval.reduce((pre, cur) => pre + cur)

  var ds = interval.map(i => i / total * dis)

  var t = 0

  function frame() {
    if (t > 59) return state = false
    if (ds[t]) document.body.scrollTop = dir == 'up'
      ? document.body.scrollTop - ds[t]
      : document.body.scrollTop + ds[t]
    t++
    requestAnimationFrame(frame)
  }

  requestAnimationFrame(frame)
}
