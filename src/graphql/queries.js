/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      PK
      SK
      username
      status
      grandTotal
      meta
      title
      price
      qty
      total
      createdAt
      updatedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        PK
        SK
        username
        status
        grandTotal
        meta
        title
        price
        qty
        total
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      title
      description
      price
      image
      inventory
      category
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        price
        image
        inventory
        category
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrderInfo = /* GraphQL */ `
  query GetOrderInfo(
    $PK: String
    $SK: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getOrderInfo(
      PK: $PK
      SK: $SK
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        PK
        SK
        username
        status
        grandTotal
        meta
        title
        price
        qty
        total
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
