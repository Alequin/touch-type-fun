import assert from "assert"
import GraphQlQuery from "./../util/graphql/GraphQlQuery"

describe("GraphQlQueryBuilder", function(){

  it("should return GraphQlQuery object to query for all games by give type and fields", function(){
    const expected = `
      query{
        allGames(type: "standard"){
          edges{
            node{
              id title
            }
          }
        }
      }`
      const result = GraphQlQuery.getAllGamesByType("standard", ["id", "title"])
      assert.strictEqual(result.query, expected)
  })

  it("should return GraphQlQuery object to query for a games by ID and given fields", function(){
    const expected = `
    query{
      game(id: "this is an id"){
        id title
      }
    }`
    const result = GraphQlQuery.getGameById("this is an id", ["id", "title"])
    assert.strictEqual(result.query, expected)
  })

  it(`should return GraphQlQuery object to query for all games, including associated records,
    by give type and fields`, function(){
    const expected = `
    query{
      allGames(type: "standard"){
        edges{
          node{
            id title
            scores{
              edges{
                node{
                  timeInSeconds
                }
              }
            }
          }
        }
      }
    }`
    const result = GraphQlQuery.getAllGamesByTypeWithScores("standard", ["id", "title"], ["timeInSeconds"])
    assert.strictEqual(result.query, expected)
  })

  it(`should return GraphQlQuery object to add new score`, function(){
    const expected =`
    mutation{
      createScore(gameId: "gameId", timeInSeconds: 1000){
        ok
      }
    }`
    const result = GraphQlQuery.postNewScore("gameId", 1000)
    assert.strictEqual(result.query, expected)
  })

})
