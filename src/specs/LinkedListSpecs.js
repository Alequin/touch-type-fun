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

  it("can check size when no elements are present", () => {
    assert.strictEqual(linkedList.count(), 0)
  })

  it("head is null on construction", () => {
    assert.strictEqual(linkedList.head, null)
  })

  it("can add elements to linked list", () => {
    linkedList.push(123)
    assert.strictEqual(linkedList.count(), 1)
  })

})
