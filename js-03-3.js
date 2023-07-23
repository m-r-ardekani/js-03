function average(num1,num2,num3,num4,num5) {
    const ave = (num1+num2+num3+num4+num5)/5
    if (ave < 12) {return 'Conditional'}
        else {
            return ave
        }
}
console.log (average (+prompt('num1'),+prompt('num2'),+prompt('num3'),+prompt('num4'),+prompt('num5'),))