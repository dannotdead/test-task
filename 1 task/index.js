const inputEl = document.querySelector('input')
const buttonEl = document.querySelector('button')
const timerEl = document.querySelector('span')

const formatNumber = (number, length) => {
  return number.toString().padStart(length, '0')
}

const formatTime = (time) => {
  const hours = Math.floor(time / 3600)
  const minutes = Math.floor((time % 3600) / 60)
  const seconds = time % 60

  return [
    formatNumber(hours, 2),
    formatNumber(minutes, 2),
    formatNumber(seconds, 2),
  ]
}

const formatTimerText = (seconds) => {
  const [hours, minutes, secondsFormatted] = formatTime(seconds)

  return `${hours}:${minutes}:${secondsFormatted}`
}

const createTimerAnimator = () => {
  let intervalId

  return (seconds) => {
    if (!seconds) {
      return
    }

    clearInterval(intervalId)

    timerEl.innerText = formatTimerText(seconds)

    intervalId = setInterval(() => {
      seconds -= 1

      timerEl.innerText = formatTimerText(seconds)

      if (seconds <= 0) {
        clearInterval(intervalId)
      }
    }, 1000)
  }
}

const animateTimer = createTimerAnimator()

inputEl.addEventListener('input', () => {
  const currentValue = inputEl.value
  const cleanedValue = currentValue.replace(/[^\d]/g, '')

  inputEl.value = cleanedValue
})

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value)

  animateTimer(seconds)

  inputEl.value = ''
})
