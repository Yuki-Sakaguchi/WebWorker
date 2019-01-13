/**
 * WebWorkerを使う
 */

onmessage = function (e) {
  console.log('Worker: Message received from main script')

  const workerResult = (e.data[0] * e.data[1])
  console.log('Worker: Postiong message back to main script')
  postMessage(workerResult)
}