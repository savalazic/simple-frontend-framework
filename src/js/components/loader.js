/**
 * Loader
 * -----
 * Adds 'data-ready' attribute to body
 */

const body = document.querySelector('body')

setTimeout( function() {
  body.setAttribute('data-ready', true)
}, 100)
