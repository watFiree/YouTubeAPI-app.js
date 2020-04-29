/* eslint-disable import/prefer-default-export */
export const formatNumber = data => {
    const number =data.toString();
    const array = [];
    for(let j =0 ;j<=2;j++){
        if(number.length%3 === j){
            if(j=== 1) array.push(number[0]);
            else if(j === 2) array.push(number.slice(0,2));
            for(let i = j; i<number.length; i += 3){
                array.push(number.slice(i,i+3))
            }
        return array.join(' ');
        }
    }
}