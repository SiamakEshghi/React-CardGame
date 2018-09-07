import React, { PureComponent, Fragment } from 'react';
import Header from 'components/Header';
import Card from 'components/Card';
import 'components/style.css';
import { makeDeck } from 'utils';


class App extends PureComponent {
    constructor (props) {
        super(props);
        this.state = {
            deck: [],
            dealedDeck: [],
            counter: 0,
            loading: false
        }
    }
    componentDidMount (){
        this.setState({ deck: makeDeck() })
    }
    dealCard = () => {
        const { loading, counter, deck, dealedDeck } = this.state;

        if(!loading && (counter < deck.length)) {
            this.setState({ dealedDeck: [...dealedDeck, deck[counter]]},
                () => this.setState({ counter: counter + 1 })
            );
        } 
    }
    handleShuffle = () => {
        this.setState({ 
            loading: true,
            dealedDeck: [],
            counter: 0
            }, this.shuflleCard)
    }
    shuflleCard = () => {
        const { deck } = this.state;
        const shuffleDeck = deck;
        for(let i in shuffleDeck) {
            const randIndex = Math.floor(Math.random() * (51));
            const randCard = shuffleDeck[randIndex];
            shuffleDeck[randIndex] = shuffleDeck[i];
            shuffleDeck[i] = randCard ;
        }
        this.setState({ deck: shuffleDeck}, () => {
            //Do nothing just Get time  for showing loading
            setTimeout(() => this.setState({ loading: false }), 1000)
        })
    }
    renderDeckZone = () => {
        const { deck, counter, loading } = this.state;
        return (
            <div className="deckZone" >
                <h4>Click On Deck For Deal</h4>
                <div className="dealBtn" onClick={this.dealCard}>
                    {
                    loading ? <Card loading />
                    : counter < deck.length 
                    ? <Card back={true} />
                    : <Card />
                    }
                </div>
                <button onClick={this.handleShuffle}>Shuffle</button>
            </div>
        );
    }
    renderDealedcard = () => {
        const { dealedDeck } = this.state;
        return dealedDeck.map((deck, index) => 
            <div className="dealedDeck" key={index}>
                <Card value={deck.value} suite={deck.suite} />
            </div>
        );
    }
    render() {
        return(
            <div>
                <Header />
                <div className="container">
                        {this.renderDeckZone()}
                        <div className="dealedList">
                            {this.renderDealedcard()}
                        </div>
                </div>
            </div>
        );
    }
}
export default App;