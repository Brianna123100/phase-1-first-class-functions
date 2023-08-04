function receivesAFunction(call) {
    call()
}

function returnsANamedFunction() {
    return function namedFunction() {}
}

function returnsAnAnonymousFunction() {
    return function() {}
}