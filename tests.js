// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("sayHello", function() {
    it("should be a defined function", function() {
        expect(typeof sayHello).toBe("function");
    });
    it("should return a string when called", function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when passed the boolean true', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed the boolean false', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe("isFive", function() {
    it("should be a defined function", function() {
        expect(typeof isFive).toBe("function");
    });
    it("should return true when passed the number 5", function() {
        expect(isFive(5)).toBe(true);
    });
    it("Should return false when a string is entered", function() {
        expect(isFive("5")).toBe(false);
    });
    it("should return a boolean value", function() {
        expect(typeof isFive()).toBe("boolean")
    });
});

describe("isEven", function() {
    it("Should be a defined function", function(){
        expect(typeof isEven).toBe("function");
    });
    it("should return true when passed the number 2", function() {
        expect(isEven(2)).toBe(true);
    });
    it("should return true when passed the number -4", function() {
        expect(isEven(-4)).toBe(true);
    });
    it("should return false when passed the number 3", function() {
        expect(isEven(3)).toBe(false);
    });
    it("should return false when passed the string 'banana'", function() {
        expect(isEven("banana")).toBe(false);
    });
    it("should return true when passed the string '8'", function() {
        expect(isEven("8")).toBe(true);
    });
    it("should return false when passed infinity", function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it("should return false with a boolean input like isEven(true) or isEven(false", function(){
        expect(isEven(true)).toBe(false);
    });
    it("should return false when passed without and argument", function(){
        expect(isEven()).toBe(false);
    });
});

describe("isVowel",function() {
    it("should be a defined function", function(){
        expect(typeof isVowel).toBe("function");
    });
    it("should always return a boolean", function(){
        expect(typeof isVowel()).toBe("boolean");
    });
    it("should return true when passed the string 'a'",function(){
        expect(isVowel("a")).toBe(true);
    });
    it("should return true when passed the string 'A'",function() {
        expect(isVowel("A")).toBe(true);
    });
    it("should return false when passed the string 'y'",function() {
        expect(isVowel("y")).toBe(false);
    });
    it("should return false when passed the number '4'",function() {
        expect(isVowel(4)).toBe(false);
    });
    it("should return false when passed a boolean as an argument",function() {
        expect(isVowel(true)).toBe(false);
    });
    it("should return false when passed the string 'banana'",function() {
        expect(isVowel("banana")).toBe(false);
    });
    it("should return false when passed without and argument", function(){
        expect(isVowel()).toBe(false);
    });
});

describe("add", function() {
    it("should be a defined function", function(){
        expect(typeof add).toBe("function")
    });
    it("should return the number 5 when 2 and 3 are entered", function(){
        expect(add(2,3)).toBe(5);
    });
    it("should return the number -12 when -3 and -9 are entered", function(){
        expect(add(-3,-9)).toBe(-12);
    });
    it("should return the number 11 when '5' and 6 are entered", function(){
        expect(add("5",6)).toBe(11);
    });
    it("should return the number 6 when '-4' and '10' are entered", function(){
        expect(add("-4","10")).toBe(6);
    });
    it("should return NaN when 'banana' and 'split' are entered", function(){
        expect(add("banana","split")).toBe(isNaN(add));
    });
    it("should return NaN when 2 and 'apples' are entered", function() {
        expect(add(2, "apples")).toBe(isNaN(add));
    });
    it("should return NaN when no arguments are passed", function() {
        expect(add()).toBe(isNaN(add));
    });

});