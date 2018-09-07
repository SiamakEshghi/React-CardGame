import React, { Fragment } from 'react';
import ReactLoading from 'react-loading';
import 'components/Card/style.css';
import { getIcon } from 'utils';
import cardBack from 'img/cardBack.png';

export default ({ suite = "", value = "", back, loading }) => {

    function renderCard () {
        if(loading) {
            return(
                <ReactLoading type="cylon" color="black"/>
            );
        }
        if(back) {
            return(
                <img className="back" src={cardBack}/>
            );
        }
        if(!suite || !value) {
            return(
                <h4>No More Card!</h4>
            );
        }
        return (
            <Fragment>
                <img className="icon" src={getIcon(suite)}/>
                <h3>{value}</h3>
            </Fragment>
        );

    }
    return (
        <div className="card">
            {renderCard()}
        </div>
    );
}