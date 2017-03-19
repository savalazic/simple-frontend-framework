/**
 * Parallax Scroll
 */

const requestAnimationFrame = window.requestAnimationFrame       ||
                              window.webkitRequestAnimationFrame ||
                              window.mozRequestAnimationFrame    ||
                              window.oRequestAnimationFrame;

function parallaxScroll() {

  var windowOffset = document.body.scrollTop

  var lastPosition = -1
  if ( lastPosition == windowOffset ) {

    requestAnimationFrame(parallaxScroll)
    return false

  } else lastPosition = windowOffset

  const parallaxElements = document.querySelectorAll('[data-parallax]')

  var i
  for (i = 0; i < parallaxElements.length; i++) {

    var el     = parallaxElements[i]
    var parent = el.parentNode

    var parentHeight   = parent.getBoundingClientRect().height
    var parentOffset   = parent.getBoundingClientRect().top + (parentHeight/2)
    var finalOffset    = (window.innerHeight/2) - parentOffset
    var translate      = finalOffset * el.getAttribute('data-parallax')

    el.style.transform = 'translate3d(0,' + translate.toFixed(1) +  'px,0)'

  }

  requestAnimationFrame( parallaxScroll )

}

parallaxScroll()