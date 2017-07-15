$(document).ready(() => {
  $.get('sentence.html', response => {
    $('#sentences').html(response)
  })
  $.get('this_doesnt_exit.html', data => {
    doSomethingGood()
  }).fail(error => {
    console.log('Something went wrong: ' + error)
  })
})
