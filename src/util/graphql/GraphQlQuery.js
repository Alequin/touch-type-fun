
import makeRequest from "./GraphQlRequester"

class GraphQlQuery{

  constructor(query){
    this.query = query
  }

  execute(){
    return makeRequest(this.query)
  }

  static getAllGamesByType(type, fields){
    const query = `
      query{
        allGames(type: "${type}"){
          edges{
            node{
              ${fields.join(" ")}
            }
          }
        }
      }`
    return new GraphQlQuery(query)
  }

  static getAllGamesByTypeWithScores(type, gameFields, scoreFields){
    const query = `
    query{
      allGames{
        edges{
          node{
            ${gameFields.join(" ")}
            scores{
              edges{
                node{
                  ${scoreFields.join(" ")}
                }
              }
            }
          }
        }
      }
    }`
    return new GraphQlQuery(query)
  }

}

export default GraphQlQuery
