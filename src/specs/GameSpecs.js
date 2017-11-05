import assert from "assert"
import Game from "./../util/game/Game.js"
import GraphQlQuery from "./../util/graphql/GraphQlQuery"

describe("GraphQlQueryBuilder", function(){

  let mockGame
  let game

  beforeEach(() => {
    mockGame = {
      id: "1",
      title: "title",
      description: "description",
      body: "i'm the body",
      type: "STANDARD",
      difficulty: "SIMPLE",
      scores: {
        edges: [
          {node: {timeInSeconds: 20}},
          {node: {timeInSeconds: 40}}
        ]
      }
    }
    game = new Game(mockGame)
  })

  it("can make game from graphql result object", function(){
    const result = new Game(mockGame)
    assert.strictEqual(result.id, "1")
    assert.strictEqual(result.title, "title")
    assert.strictEqual(result.description, "description")
    assert.strictEqual(result.body, "i'm the body")
    assert.strictEqual(result.type, "standard")
    assert.strictEqual(result.difficulty, "simple")
    assert.deepEqual(result.scores, [20, 40])
  })

  it("can make game from graphql result object (no returned scores)", function(){
    delete mockGame.scores
    const result = new Game(mockGame)
    assert.strictEqual(result.id, "1")
    assert.strictEqual(result.title, "title")
    assert.strictEqual(result.description, "description")
    assert.strictEqual(result.body, "i'm the body")
    assert.strictEqual(result.type, "standard")
    assert.strictEqual(result.difficulty, "simple")
    assert.deepEqual(result.scores, [])
  })

  it("can calculate average score", () => {
    const expected = 30
    const result = game.averageScore()
    assert.strictEqual(result, expected)
  })

  it("average score rounds to 1 dp", () => {
    game.scores = [20, 21.5]
    const expected = 20.8
    const result = game.averageScore()
    assert.strictEqual(result, expected)
  })

  it("average score returns 0 if there are no scores", () => {
    game.scores = []
    const expected = 0
    const result = game.averageScore()
    assert.strictEqual(result, expected)
  })

  it("can calculate top score", () => {
    const expected = 40
    const result = game.topScore()
    assert.strictEqual(result, expected)
  })

  it("top score returns 0 if there are no scores", () => {
    game.scores = []
    const expected = 0
    const result = game.topScore()
    assert.strictEqual(result, expected)
  })

  it("can construct game with no arguement given", () => {
    const result = new Game()
    assert.strictEqual(result.id, null)
    assert.strictEqual(result.title, null)
    assert.strictEqual(result.description, null)
    assert.strictEqual(result.body, null)
    assert.strictEqual(result.type, null)
    assert.strictEqual(result.difficulty, null)
    assert.deepEqual(result.scores, [])
  })

  it("can get colour value based on game difficulty", () => {
    let expected
    let result

    game.difficulty = "simple"
    expected = "#34F32B"
    result = game.getDifficultColour()
    assert.strictEqual(result, expected)

    game.difficulty = "easy"
    expected = "#6AAB23"
    result = game.getDifficultColour()
    assert.strictEqual(result, expected)

    game.difficulty = "normal"
    expected = "#8F7C1F"
    result = game.getDifficultColour()
    assert.strictEqual(result, expected)

    game.difficulty = "hard"
    expected = "#B34D1A"
    result = game.getDifficultColour()
    assert.strictEqual(result, expected)

    game.difficulty = "extreme"
    expected = "#EA0613"
    result = game.getDifficultColour()
    assert.strictEqual(result, expected)

    game.difficulty = "not a colour"
    expected = "transparent"
    result = game.getDifficultColour()
    assert.strictEqual(result, expected)

    game.difficulty = null
    expected = "transparent"
    result = game.getDifficultColour()
    assert.strictEqual(result, expected)
  })
})
