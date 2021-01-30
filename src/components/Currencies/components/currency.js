/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { connect } from 'react-redux';

import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { addToFavorites } from '../../../redux/Currencies/actions-currencies';

import './currency.scss';

const Currency = ({ currency, addToFavorites }) => {
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };

  // const styles = {
  //   wrapper: {
  //     transform: clicked && 'rotateZ(360deg)',
  //   },
  // };

  return (
    <>
      {clicked === false ? (
        <div className="wrapper">
          <div className="currency">
            <div className="currency__name">{currency.currency}</div>
            <div className="currency__value">
              <div>{currency.code}</div>
              <div>{currency.mid.toFixed(4)} PLN</div>
            </div>
          </div>
          <div className="currency__star">
            <button
              className="currency__button"
              type="button"
              onClick={() => addToFavorites(currency.code)}
            >
              <StarBorderIcon style={{ fontSize: 30, color: '#939597' }} onClick={handleClicked} />
            </button>
          </div>
        </div>
      ) : (
        <div className="wrapper">
          <div className="currency">
            <div className="currency__value currency__value--fav">
              <div>
                <span className="blue">{currency.code}</span> IS IN FAVORITES
              </div>
            </div>
          </div>
          <div className="currency__star">
            <button
              className="currency__button"
              type="button"
              onClick={() => addToFavorites(currency.code)}
            >
              <StarIcon style={{ fontSize: 30, color: '#fbc02d' }} onClick={handleClicked} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (id) => dispatch(addToFavorites(id)),
});

export default connect(null, mapDispatchToProps)(Currency);
