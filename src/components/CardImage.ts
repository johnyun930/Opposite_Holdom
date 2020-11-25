import Back from '../Images/cardImage/cardback.png';

export const CardBack = Back;

function importAllCard(): string[]{
    let cardArray: string[]= [];
    for(let i=1;i<11;i++){
        const importing: Promise<any> =  import(`../Images/cardImage/${i}.png`);
      importing.then((value) => {
          cardArray.push(value.default);
        });
         
    }
    return cardArray;
}

export const cardArray = importAllCard();