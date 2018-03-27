import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from "react-router-dom";

export default class ProductListPagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: []
    };
    this.getPages = this.getPages.bind(this);
  }

  getPages = () => {
    var pages = [];
    var result = Math.ceil(this.props.count / 5);;
    for (var i = 1; i <= result; i++) {
      // note: we add a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink tag={Link} to={"/products/" + i}>
            {i}
          </PaginationLink>
        </PaginationItem>);
    }
    return pages;
  }

  render() {
    const pages = this.getPages();
    return (
      <Pagination size="lg">
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        {pages}
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
    );
  }
}
