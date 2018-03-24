import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

export default class FoodList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: Array(5).fill("null"),
        };
    }

    componentWillMount() {
        this.callApi()
            .then(res => this.setState({ products: res.express }))
            .catch(err => console.log(err));
    }


    callApi = async () => {
        const response = await fetch('/api/products');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    render() {
        console.log("alright");
        console.log(this.state.products);
        var products = [];
        for (var i = 0; i < 1; i++) {
            // note: we add a key prop here to allow react to uniquely identify each
            // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
            products.push(
            <ListGroupItem key={i}>
                <ListGroupItemHeading key={i.id}>
                 {this.state.products[i].name}
                </ListGroupItemHeading>
                <ListGroupItemText>
                    {this.state.products[i].description}
                </ListGroupItemText>
            </ListGroupItem>);
        }
        
        return (
            <ListGroup>
                {products}
            </ListGroup>
        );
    }
}