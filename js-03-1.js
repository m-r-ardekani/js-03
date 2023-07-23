function calculator(left_number , operator , right_number){
    if (operator === '+') {return (left_number + right_number)}
        else if (operator === '-') {return (left_number - right_number)}
        else if (operator === '*') {return (left_number * right_number)}
        else if (operator === '/') {return (left_number / right_number)}
    if (isNaN(left_number) || isNaN(right_number)) {return ("error")}
    if (operator === '/' && right_number === 0) {return ('undefined')}

}
console.log (calculator (+prompt('left_number') ,prompt('operator'), +prompt('right_number')))
