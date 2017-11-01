
class GraphQlQueryBuilder{

  static getAllGamesByType(type, fields){
    return (`
      query{
        allGames(type: "${type}"){
          edges{
            node{
              ${fields.join(" ")}
            }
          }
        }
      }`
    )
  }
}

export default GraphQlQueryBuilder
