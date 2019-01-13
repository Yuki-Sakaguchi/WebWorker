/**
 * WebWorkerからの処理を受け取る
 */
(function () {
  if (window.Worker) {
    const myWorker = new Worker('./js/worker.js')
    const first = document.querySelector('#number1')
    const second = document.querySelector('#number2')
    const result = document.querySelector('#result')

    first.addEventListener('change', () => {
      myWorker.postMessage([first.value, second.value])
      console.log('Main (first.onchange): Message posted to worker')
    })

    second.addEventListener('change', () => {
      myWorker.postMessage([first.value, second.value])
      console.log('Main (second.onchange): Message posted to worker')
    })

    myWorker.addEventListener('message', (e) => {
      result.value = e.data
      console.log('Message received from worker')
    })
  }
})()
