
class Game{

  constructor(options){
    this.id = options.id
    this.title = options.title
    this.description = options.description
    this.type = options.type
    this.difficulty = options.difficulty
    this.scores = mapScores(options.scores)
  }

  averageScore(){
    const total = this.scores.reduce((total, value) => {
      return total += value
    })
    return total / this.scores.length
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
