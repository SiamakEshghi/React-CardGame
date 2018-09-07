import clubIcon from 'img/clubIcon.png';
import diamondIcon from 'img/diamondIcon.png';
import heartIcon from 'img/heartIcon.png';
import spadeIcon from 'img/spadeIcon.png';

const SUITES = ['heart', 'club', 'diamond', 'spade'];
const VALUES = ['ACE', '2', '3', '4', '5', '6', '7', '8', '9', '10', "J", "Q", "K"];

export const getIcon = (suitName) => {
    switch (suitName) {
        case 'club' : return clubIcon;
        case 'diamond' : return diamondIcon;
        case 'heart' : return heartIcon;
        case 'spade' : return spadeIcon;
        default: return
    }
}

export const makeDeck = () => {
    let deck = [];
    for (let i in SUITES) {
        for(let j in VALUES) {
            deck = [...deck, {suite: SUITES[i], value: VALUES[j]}]
        }
    }

    return deck;
}