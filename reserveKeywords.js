import { lexTypeEnum } from "./enums.js"

export const keywords = {
    __FILE__: {
        name: "__FILE__",
        type: lexTypeEnum.keyword,
        description: 'contains current file'
    },
    __LINE__: {
        name: "__LINE__",
        type: lexTypeEnum.keyword,
        description: 'contains current line number in current file'
    },
    __PACKAGE__: {
        name: "__PACKAGE__",
        type: lexTypeEnum.keyword,
        description: 'contains the name of the current package'
    },
    and: {
        name: "and",
        type: lexTypeEnum.logicalOperator,
        description: 'logical AND operator'
    },
    or: {
        name: "or",
        type: lexTypeEnum.logicalOperator,
        description: 'logical OR operator'
    },
    not: {
        name: "not",
        type: lexTypeEnum.logicalOperator,
        description: 'logical NOT operator'
    },
    chomp: {
        name: "chomp",
        type: lexTypeEnum.keyword,
        description: 'Function that removes the last character from a string if it is a newline'
    },
    cmp: {
        name: "cmp",
        type: lexTypeEnum.comparisonOperator,
        description: ' Operator that compares two strings'
    },
    do: {
        name: "do",
        type: lexTypeEnum.keyword,
        description: 'Block that executes a sequence of statements.'
    },
    else: {
        name: "else",
        type: lexTypeEnum.keyword,
        description: "Block that is executed when an if statement evaluates to false"
    },
    elsif: {
        name: "elsif",
        type: lexTypeEnum.keyword,
        description: "Block that is executed when an if statement evaluates to false"
    },
    eq: {
        name: "eq",
        type: lexTypeEnum.comparisonOperator,
        description: "Operator that compares two strings for equality"
    },
    for: {
        name: "for",
        type: lexTypeEnum.keyword,
        description: "Loop that iterates over a list of values"
    },
    foreach: {
        name: "foreach",
        type: lexTypeEnum.keyword,
        description: "Loop that iterates over a list of values"
    },
    ge: {
        name: "ge",
        type: lexTypeEnum.comparisonOperator,
        description: "comparison operator"
    },
    gt: {
        name: "gt",
        type: lexTypeEnum.comparisonOperator,
        description: "comparison operator"
    },
    lt: {
        name: "lt",
        type: lexTypeEnum.comparisonOperator,
        description: "comparison operator"
    },
    le: {
        name: "le",
        type: lexTypeEnum.comparisonOperator,
        description: "comparison operator"
    },
    ne: {
        name: "ne",
        type: lexTypeEnum.comparisonOperator,
        description: "comparison operator"
    },
    not: {
        name: "not",
        type: lexTypeEnum.comparisonOperator,
        description: "comparison operator"
    },
    or: {
        name: "or",
        type: lexTypeEnum.comparisonOperator,
        description: "comparison operator"
    },
    last: {
        name: "last",
        type: lexTypeEnum.keyword,
        description: "Statement that immediately exits a loop"
    },
    my: {
        name: "my",
        type: lexTypeEnum.keyword,
        description: "keyword that declares a lexically scoped variable."
    },
    no: {
        name: "no",
        type: lexTypeEnum.keyword,
        description: "Used in front of a pragma to turn it off"
    },
    package: {
        name: "package",
        type: lexTypeEnum.keyword,
        description: "Keyword that declares the current package"
    },
    redo: {
        name: "redo",
        type: lexTypeEnum.keyword,
        description: "statement that restarts the current loop block"
    },
    return: {
        name: "return",
        type: lexTypeEnum.keyword,
        description: "Statement that returns a value from a subroutine"
    },
    sub: {
        name: "sub",
        type: lexTypeEnum.keyword,
        description: "Keyword that declares a subroutine"
    },
    tr: {
        name: "tr",
        type: lexTypeEnum.keyword,
        description: "Operator that translates characters in a string"
    },
    unless: {
        name: "unless",
        type: lexTypeEnum.keyword,
        description: "Block that is executed if a condition is false"
    },
    until: {
        name: "until",
        type: lexTypeEnum.keyword,
        description: " Loop that continues until a condition is true"
    },
    use: {
        name: "use",
        type: lexTypeEnum.keyword,
        description: "Keyword used to import modules or pragmas"
    },
    while: {
        name: "while",
        type: lexTypeEnum.keyword,
        description: "Loop that continues while a condition is true"
    },
    xor: {
        name: "xor",
        type: lexTypeEnum.logicalOperator,
        description: "Logical operator that performs a logical XOR operation"
    },
    "+": {
        name: "+",
        type: lexTypeEnum.arithmeticOperator,
        description: 'addition operator'
    },
    "-": {
        name: "-",
        type: lexTypeEnum.arithmeticOperator,
        description: 'subtraction operator'
    },
    "*": {
        name: "*",
        type: lexTypeEnum.arithmeticOperator,
        description: 'multiplication operator'
    },
    "/": {
        name: "/",
        type: lexTypeEnum.arithmeticOperator,
        description: 'division operator'
    },
    "%": {
        name: "%",
        type: lexTypeEnum.arithmeticOperator,
        description: 'modulus operator'
    },
    "**": {
        name: "**",
        type: lexTypeEnum.arithmeticOperator,
        description: 'exponentiation operator'
    },
    "++": {
        name: "++",
        type: lexTypeEnum.arithmeticOperator,
        description: 'increment operator'
    },
    "--": {
        name: "--",
        type: lexTypeEnum.arithmeticOperator,
        description: 'decrement operator'
    },
    "==": {
        name: "==",
        type: lexTypeEnum.comparisonOperator,
        description: 'equal to operator'
    },
    "!=": {
        name: "!=",
        type: lexTypeEnum.comparisonOperator,
        description: 'not equal to operator'
    },
    ">": {
        name: ">",
        type: lexTypeEnum.comparisonOperator,
        description: 'greater than operator'
    },
    "<": {
        name: "<",
        type: lexTypeEnum.comparisonOperator,
        description: 'less than operator'
    },
    ">=": {
        name: ">=",
        type: lexTypeEnum.comparisonOperator,
        description: 'greater than or equal to operator'
    },
    "<=": {
        name: "<=",
        type: lexTypeEnum.comparisonOperator,
        description: 'less than or equal to operator'
    },
    '?': {
        name: "?",
        type: lexTypeEnum.conditionalOperator,
        description: 'ternary conditional operator'
    },
    ':': {
        name: ":",
        type: lexTypeEnum.conditionalOperator,
        description: 'ternary conditional operator'
    },
    '=': {
        name: '=',
        type: lexTypeEnum.assignmentOperator,
        description: 'assignment operator'
    },
    '+=': {
        name: '+=',
        type: lexTypeEnum.assignmentOperator,
        description: 'addition assignment operator'
    },
    '-=': {
        name: '-=',
        type: lexTypeEnum.assignmentOperator,
        description: 'subtraction assignment operator'
    },
    '*=': {
        name: '*=',
        type: lexTypeEnum.assignmentOperator,
        description: 'multiplication assignment operator'
    },
    '/=': {
        name: '/=',
        type: lexTypeEnum.assignmentOperator,
        description: 'division assignment operator'
    },
    '%=': {
        name: '%=',
        type: lexTypeEnum.assignmentOperator,
        description: 'modulus assignment operator'
    },
    '**=': {
        name: '**=',
        type: lexTypeEnum.assignmentOperator,
        description: 'exponentiation assignment operator'
    },
    '<<=': {
        name: '<<=',
        type: lexTypeEnum.assignmentOperator,
        description: 'left shift assignment operator'
    },
    '>>=': {
        name: '>>=',
        type: lexTypeEnum.assignmentOperator,
        description: 'right shift assignment operator'
    },
    '&=': {
        name: '&=',
        type: lexTypeEnum.assignmentOperator,
        description: 'bitwise AND assignment operator'
    },
    '|=': {
        name: '|=',
        type: lexTypeEnum.assignmentOperator,
        description: 'bitwise OR assignment operator'
    },
    '^=': {
        name: '^=',
        type: lexTypeEnum.assignmentOperator,
        description: 'bitwise XOR assignment operator'
    },
    '||': {
        name: '||',
        type: lexTypeEnum.logicalOperator,
        description: 'logical OR operator'
    },
    '&&': {
        name: '&&',
        type: lexTypeEnum.logicalOperator,
        description: 'logical AND operator'
    },
    ".": {
        name: ".",
        type: lexTypeEnum.stringOperator,
        description: 'string concatenation operator'
    },
    "\"": {
        name: "\"",
        type: lexTypeEnum.stringOperator,
        description: 'string interpolation operator'
    },
    "'": {
        name: "'",
        type: lexTypeEnum.stringOperator,
        description: 'string literal operator'
    },
    ';': {
        name: ";",
        type: lexTypeEnum.punctuation,
        description: "statement separator"
    },
    ',': {
        name: ",",
        type: lexTypeEnum.punctuation,
        description: "function argument separator"
    },
    '.': {
        name: ".",
        type: lexTypeEnum.punctuation,
        description: "string concatenation operator"
    },
    '(': {
        name: "(",
        type: lexTypeEnum.punctuation,
        description: "opening parenthesis"
    },
    ')': {
        name: ")",
        type: lexTypeEnum.punctuation,
        description: "closing parenthesis"
    },
    '{': {
        name: "{",
        type: lexTypeEnum.punctuation,
        description: "opening curly brace"
    },
    '}': {
        name: "}",
        type: lexTypeEnum.punctuation,
        description: "closing curly brace"
    },
    '[': {
        name: "[",
        type: lexTypeEnum.punctuation,
        description: "opening square bracket"
    },
    ']': {
        name: "]",
        type: lexTypeEnum.punctuation,
        description: "closing square bracket"
    },
    '<': {
        name: "<",
        type: lexTypeEnum.punctuation,
        description: "opening angle bracket"
    },
    '>': {
        name: ">",
        type: lexTypeEnum.punctuation,
        description: "closing angle bracket"
    },
    ':': {
        name: ":",
        type: lexTypeEnum.punctuation,
        description: "label separator"
    },
    open: {
        name: "open",
        type: lexTypeEnum.keyword,
        description: "Used for opening files or file handles"
    },
    close: {
        name: "close",
        type: lexTypeEnum.keyword,
        description: "Used to close file handles"
    },
    split: {
        name: "split",
        type: lexTypeEnum.keyword,
        description: "Splits a string into an array based on a specified delimiter"
    },
    join: {
        name: "join",
        type: lexTypeEnum.keyword,
        description: "Concatenates the elements of an array into a single string using a specified delimiter"
    },
    shift: {
        name: "shift",
        type: lexTypeEnum.keyword,
        description: "Removes and returns the first element from an array"
    },
    unshift: {
        name: "unshift",
        type: lexTypeEnum.keyword,
        description: "Adds one or more elements to the beginning of an array"
    },
    push: {
        name: "push",
        type: lexTypeEnum.keyword,
        description: "Appends one or more elements to the end of an array"
    },
    pop: {
        name: "pop",
        type: lexTypeEnum.keyword,
        description: "Removes and returns the last element from an array"
    },
    sort: {
        name: "sort",
        type: lexTypeEnum.keyword,
        description: "Sorts the elements of an array or a list"
    },
    STDIN: {
        name: "STDIN",
        type: lexTypeEnum.keyword,
        description: "A filehandle representing the standard input stream"
    },
    STDOUT: {
        name: "STDOUT",
        type: lexTypeEnum.keyword,
        description: "A filehandle representing the standard output stream"
    },
    STDERR: {
        name: "STDERR",
        type: lexTypeEnum.keyword,
        description: "A filehandle representing the standard error stream"
    },
    BEGIN: {
        name: "BEGIN",
        type: lexTypeEnum.keyword,
        description: "A code block executed at compile-time, allowing early initialization or setup"
    },
    END: {
        name: "END",
        type: lexTypeEnum.keyword,
        description: "A code block executed at the end of the program, useful for cleanup or finalization tasks"
    }
}



