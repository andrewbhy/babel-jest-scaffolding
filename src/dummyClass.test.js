

import DummyClass from "./dummyClass";


it("printMessage returns correct message", ()=>{

    let obj = new DummyClass();
    let message : String = "aa";

    expect(obj.printMessage(message) ).toEqual(message)


})