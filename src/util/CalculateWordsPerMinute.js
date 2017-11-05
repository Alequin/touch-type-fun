
export default (totalKeysPressed, timeInSeconds) => {
  if(totalKeysPressed === 0 || timeInSeconds === 0) return 0
  const averageWordCount = totalKeysPressed/5.1
  const timeInMinutes = timeInSeconds/60
  if(averageWordCount < 1 && timeInMinutes < 1) return 0
  return Math.floor(averageWordCount/timeInMinutes)
}
