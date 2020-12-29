import React, { useState, useEffect } from 'react';

import Currency from './Currency';

const CurrencyList = () => {
  const [fav, setFav] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [error, setError] = useState(false);

  const addEntry = (e) => {
    setFav([...fav, e.target.id]);
  };

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch('http://api.nbp.pl/api/exchangerates/tables/A/').then((response) =>
      response
        .json()
        .then((res) => setCurrencies(res[0].rates))
        .catch(() => setError(true)),
    );
  }, []);

  return (
    <>
      <div>
        {currencies ? (
          <div>
            {currencies.map((data) => (
              <>
                <Currency
                  key={data.code}
                  id={data.code}
                  currency={data.currency}
                  code={data.code}
                  mid={data.mid}
                />
                <button type="button" id={data.code} onClick={addEntry}>
                  +
                </button>
              </>
            ))}
          </div>
        ) : (
          <div>
            <p>Upps... We have some problem, please try again.</p>
            <p>{error}</p>
          </div>
        )}
      </div>
      <div>
        <p>FavList</p>
        <div>
          <>
            {fav.map((favItem) => (
              <>
                <div
                  key={favItem.code}
                  id={favItem.code}
                  currency={favItem.currency}
                  code={favItem.code}
                  mid={favItem.mid}
                >
                  {favItem}
                </div>
                <button type="button" id={favItem.code} onClick={addEntry}>
                  -
                </button>
              </>
            ))}
          </>
        </div>
      </div>
    </>
  );
};

export default CurrencyList;