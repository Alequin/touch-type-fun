import assert from "assert"
import LinkedList from "./../util/LinkedList"

describe("LinkedList", function(){

  let linkedList

  beforeEach(() => {
    linkedList = new LinkedList()
  })

  it("can be constructed", () => {
    assert(linkedList)
  })

})
