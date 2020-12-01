/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCart = /* GraphQL */ `
  query GetCart($id: ID!) {
    getCart(id: $id) {
      id
      username
      lineItems {
        items {
          id
          cartID
          title
          price
          number
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCarts = /* GraphQL */ `
  query ListCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        lineItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLineItem = /* GraphQL */ `
  query GetLineItem($id: ID!) {
    getLineItem(id: $id) {
      id
      cartID
      title
      price
      number
      createdAt
      updatedAt
    }
  }
`;
export const listLineItems = /* GraphQL */ `
  query ListLineItems(
    $filter: ModelLineItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLineItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cartID
        title
        price
        number
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
