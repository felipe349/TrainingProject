import React, { Component } from 'react';
import './App.css';
import ProductList from './components/productList';
import ProductListPagination from './components/productListPagination';

export default class ProductListBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
        this.getPaginationConfig = this.getPaginationConfig.bind(this);
        this.mountPagination = this.mountPagination.bind(this);
    }

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ products: res.products, count: res.count }))
            .catch(err => console.log(err));
    }


    callApi = async () => {

        try {
            const response = await fetch('/products/');
            return await response.json();
        } catch (error) {
            console.log('Error: ', error);
        }

        // return fetch('/products/')
        // .then(response => response.json())
        // .catch(error => {
        // console.log('TEM UM ERRO BIZARRO AQUI: ', error);
        // throw Error(error);
        // });


        // const response = await fetch('/api/products/');
        // const body = await response.json();
        // if (response.status !== 200) throw Error(body.message);
        // return body;
    };

    //Need a better name.
    getPaginationConfig = (page, limit = 4) => {
        let start = 0
        if (page > 1) {
            start = (page - 1) * 5;
            limit = start + 4;
        }

        if (limit > this.state.products.length) {
            limit = this.state.products.length - 1;
        }

        return {
            start,
            limit
        };
    };

    mountPagination = (start, limit) => {
        let products = [];
        for (let i = start; i <= limit; i++) {
            products.push(
                <ProductList key={i} id={this.state.products[i]._id}
                    name={this.state.products[i].name}
                    description={this.state.products[i].description} />
            );
        }
        return products;
    };

    render() {
        let { start, limit } = this.getPaginationConfig(this.props.match.params.page);
        const products = this.mountPagination(start, limit);
        return (
            <div>
                {products}
                <div className="pagination">
                    <ProductListPagination page={this.props.match.params.page} count={this.state.count} />
                </div>
            </div>
        );
    }
}
