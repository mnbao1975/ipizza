/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCart = /* GraphQL */ `
  mutation CreateCart(
    $input: CreateCartInput!
    $condition: ModelCartConditionInput
  ) {
    createCart(input: $input, condition: $condition) {
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
export const updateCart = /* GraphQL */ `
  mutation UpdateCart(
    $input: UpdateCartInput!
    $condition: ModelCartConditionInput
  ) {
    updateCart(input: $input, condition: $condition) {
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
export const deleteCart = /* GraphQL */ `
  mutation DeleteCart(
    $input: DeleteCartInput!
    $condition: ModelCartConditionInput
  ) {
    deleteCart(input: $input, condition: $condition) {
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
export const createLineItem = /* GraphQL */ `
  mutation CreateLineItem(
    $input: CreateLineItemInput!
    $condition: ModelLineItemConditionInput
  ) {
    createLineItem(input: $input, condition: $condition) {
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
export const updateLineItem = /* GraphQL */ `
  mutation UpdateLineItem(
    $input: UpdateLineItemInput!
    $condition: ModelLineItemConditionInput
  ) {
    updateLineItem(input: $input, condition: $condition) {
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
export const deleteLineItem = /* GraphQL */ `
  mutation DeleteLineItem(
    $input: DeleteLineItemInput!
    $condition: ModelLineItemConditionInput
  ) {
    deleteLineItem(input: $input, condition: $condition) {
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
