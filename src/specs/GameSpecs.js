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
    assert.strictEqual(result.type, "STANDARD")
    assert.strictEqual(result.difficulty, "SIMPLE")
    assert.deepEqual(result.scores, [20, 40])
  })

  it("can make game from graphql result object (no returned scores)", function(){
    delete mockGame.scores
    const result = new Game(mockGame)
    assert.strictEqual(result.id, "1")
    assert.strictEqual(result.title, "title")
    assert.strictEqual(result.description, "description")
    assert.strictEqual(result.type, "STANDARD")
    assert.strictEqual(result.difficulty, "SIMPLE")
    assert.deepEqual(result.scores, [])
  })

  it("can calculate average score", () => {
    const expected = 30
    const result = game.averageScore()
    assert.strictEqual(result, expected)
  })

  it("can calculate top score", () => {
    const expected = 40
    const result = game.topScore()
    assert.strictEqual(result, expected)
  })

})
