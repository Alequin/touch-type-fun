
function Host(){}

Host.route = (route) => {
  return "http://localhost:8000" + route
}

export default Host
