import assert from "assert"
import GraphQlQueryBuilder from "./../util/graphql/GraphQlQueryBuilder"

describe("GraphQlQueryBuilder", function(){

  it("should build a games by type query and insert the expected fields", function(){
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
      const result = GraphQlQueryBuilder.getAllGamesByType("standard", ["id", "title"])
      assert.strictEqual(result, expected)
  })

})
