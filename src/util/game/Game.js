
class Game{

  constructor(options = {}){
    this.id = options.id || null
    this.title = options.title || null
    this.description = options.description || null
    this.type = options.type ? options.type.toLowerCase() : null
    this.difficulty = options.difficulty ? options.difficulty.toLowerCase() : null
    this.scores = mapScores(options.scores)
  }

  averageScore(){
    if(this.scores.length === 0) return 0
    const total = this.scores.reduce((total, value) => {
      return total += value
    })
    const average = total / this.scores.length
    return Math.round(average * 10) / 10
  }

  topScore(){
    let max = 0
    for(let num of this.scores){
      if(num > max) max = num
    }
    return max
  }
}

function mapScores(preMapScores){
  if(!preMapScores) return []
  const scores = preMapScores.edges.map((score) => {
    return score.node.timeInSeconds
  })
  return scores
}

export default Game
