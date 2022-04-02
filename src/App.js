import './App.css';
import api from './api/index.js';
import React, { useLayoutEffect, useEffect, useContext, memo } from 'react';
import { StateContext, DispatchContext } from './appState/index.js';
import ProductDetails, { detailsStateInit } from './ProductDetails/index';
import RatingsReviews, { reviewStateInit } from './RatingsReviews/index';
import QAndA, { qAndAStateInit } from './QandA/index';
import RelatedProducts, { relatedStateInit } from './RelatedProducts/index';


api.get.initProductDataFetch(
  detailsStateInit,
  reviewStateInit,
  qAndAStateInit,
  relatedStateInit,
)

var renderCount = 0;

function App() {
  const [, dispatch] = useContext(DispatchContext);
  const [state] = useContext(StateContext);
  renderCount++
  if( state.dev.logs ) {
    state.dev.renders && console.log('\n\nDEV  RENDER   App     number of renders: ', renderCount)
    state.dev.state && console.log('DEV  App STATE: ', state)
  }
  if (state.dev.test) {
    state.dev.get(state)
  }

  useEffect(() => {

    initializeAppState(dispatch, state.currentProduct)
  }, []);




  return (
    <div className='App' data-testid="app"  >
      <ProductDetails />
      <RelatedProducts state={state.related} dev={state.dev} />
      <QAndA />
      <RatingsReviews />
    </div>
  );
}




const initializeAppState = (dispatch, prodId) => {
  return api.get.allProductData(prodId)
    .then((response) => {
      response.currentProduct = prodId
      dispatch({
        type: 'PROD_INIT',
        payload: response,
      });
    });
}

export default App;
