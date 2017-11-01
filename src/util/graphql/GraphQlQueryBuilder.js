
import makeRequest from "./GraphQlRequester"

class GraphQlQueryBuilder{

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

    return new GraphQlQueryBuilder(query)
  }
}

export default GraphQlQueryBuilder
