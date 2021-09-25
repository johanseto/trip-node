console.log("something")
console.error("error")
console.warn("error")
var table = [{
        a: 1,
        b: 'z'
    },
    {
        a: 2,
        b: 'y'
    }
]
console.log(table)
console.table(table)

//Console group
console.log('Conversation')
console.group('conver')
console.log('Hi')
console.group('bla')
console.log('blablala')
console.log('blablala')
console.log('blablala')
console.log('blablala')
console.groupEnd('bla')
console.log('bye')
console.groupEnd('conver')
console.log('other thing or function')

//\

function function1() {
    console.group('function1')
    console.log('this is from first function')
    function2()
    console.log('I return to function1')
    console.groupEnd('function1')
}

function function2() {
    console.group('function2')
    console.log('this is from 2nd function')
    console.log('this is from 2nd function')
    console.log('this is from 2nd function')
    console.groupEnd('function2')

}

console.log('-------------starting')
function1()

// counting
console.count('times')
console.count('times')
console.count('times')
console.count('times')
console.count('times')
console.log('reset counter')
console.countReset('times')
console.count('times')