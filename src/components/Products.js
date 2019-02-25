import React, { Component, Fragment } from 'react';
import Product from './Product';
const config = require('../config.json');

export default class Products extends Component {

  state = {
    newproduct: null,
    products: []
  }

  fetchProducts = () => {
    // add call to AWS API Gateway to fetch products here
    // then set them in state
  }

  componentDidMount = () => {
    this.fetchProducts();
  }

  render() {
    return (
      <Fragment>
        <section className="section">
          <div className="container">
            <h1>Energy Products</h1>
            <p className="subtitle is-5">Invest in a clean future with our efficient and cost-effective green energy products:</p>
            <br />
            <div className="columns">
              <div className="column">
                <div className="tile is-ancestor">
                  <div className="tile is-4 is-parent  is-vertical">
                    { 
                      this.state.products.length > 0
                      ? this.state.products.map(product => <Product name={product.productname} id={product.id} key={product.id} />)
                      : <div className="tile notification is-warning">No products available</div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}
