function addNumbers(a,b) {
 return a+b;
}

describe ("first test suite", function(){
	it ("2 should equal 2", function(){
		expect("2").toBe("2");
	});
	it ("1 should not equal 2", function(){
		expect("1").not.toBe("2");
	});
});

describe("test addition of numbers", function(){
	it("1 plus 1 should equal 2", function(){
		expect(addNumbers(1,1)).toEqual(2);
	});
});