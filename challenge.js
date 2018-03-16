// ## Deliverables

// ***1. As a user, i should see the timer increment every second once the page has loaded
// ***2. As a user, i can manually increment and decrement the counter as i like
// ***3. As a user, i can like an individual number of the counter. I should see the appropriate number of likes associated with that particular number
// 4. As a user I can pause the game, which should disable all buttons except the pause button, which should now show the text 'resume'
// 5. As a user I can leave comments on my gameplay, such as "Wow, what a fun game this is"

(function() {

  let paused = false

  function incrementCounter() {
    if (!paused) {
      let counter = document.getElementById('counter');
      let integerCounter = parseInt(counter.innerText)
      integerCounter += 1
      counter.innerText = integerCounter
      return counter.innerText
    }
  }
  
  let interval = setInterval(incrementCounter, 1000);
  
  let decrement = document.querySelector('#\\-')
  let increment = document.querySelector('#\\+')
  let heart = document.querySelector('#\\<3')
  let pause = document.querySelector('#pause')
  let submit= document.querySelector('#submit')

  decrement.addEventListener('click', decrementCounterManually)
  increment.addEventListener('click', incrementCounterManually)
  heart.addEventListener('click', addLikes)
  pause.addEventListener('click', pauseStuff)
  submit.addEventListener('click', submitComment)

  function decrementCounterManually() {
    let counter = document.getElementById('counter');
    let integerCounter = parseInt(counter.innerText)
      integerCounter -= 1
      counter.innerText = integerCounter
      return counter.innerText
  }

  function incrementCounterManually() {
    let counter = document.getElementById('counter');
    let integerCounter = parseInt(counter.innerText)
      integerCounter += 1
      counter.innerText = integerCounter
      return counter.innerText
  }

  function addLikes(){
    let ul = document.querySelector('.likes')
    let counter = document.getElementById('counter')
    let listItem = document.createElement(`li`)
    let likeCount = 1
    let unorderList = document.querySelector('.likes').getElementsByTagName('li')
    let numberLikedList = []
    for (const li of unorderList) {
      numberLikedList.push(li.innerText.split(" ")[0])
    }
    if (!numberLikedList.includes(counter.innerText)) {
      listItem.innerText = counter.innerText + ` has been liked ` + likeCount + ` time`
      listItem.id = "li" + counter.innerText
      ul.append(listItem)
    } else {
      alreadyLiked = document.querySelector(`#li${counter.innerText}`)
      let alreadyLikedTimes = alreadyLiked.innerText.split(" ")[4]
      alreadyLikedTimesNumber = parseInt(alreadyLikedTimes)
      alreadyLikedTimesNumber += 1
      alreadyLiked.innerText = `${counter.innerText} has been liked ` + alreadyLikedTimesNumber + ' times'
    }
  }

  function pauseStuff() {
    if (!paused) {
      pause.innerText = "resume"
      decrement.removeEventListener('click', decrementCounterManually)
      increment.removeEventListener('click', incrementCounterManually)
      heart.removeEventListener('click', addLikes)
      // submit.removeEventListener('click', submitComment)
      submit.disabled = true
      paused = true
    } else {
      pause.innerText = "pause"
      decrement.addEventListener('click', decrementCounterManually)
      increment.addEventListener('click', incrementCounterManually)
      heart.addEventListener('click', addLikes)
      // submit.addEventListener('click', submitComment)
      paused = false
    }
  }

  function submitComment(event) {
    // console.log(event)
    event.preventDefault();
    let saveThisPlz = document.getElementById("comment-input").value
    let list = document.getElementById('list')
    let p = document.createElement('p')
    p.innerText = saveThisPlz
    list.append(p)
  }
  
})()