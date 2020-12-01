/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCart = /* GraphQL */ `
  subscription OnCreateCart {
    onCreateCart {
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
export const onUpdateCart = /* GraphQL */ `
  subscription OnUpdateCart {
    onUpdateCart {
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
export const onDeleteCart = /* GraphQL */ `
  subscription OnDeleteCart {
    onDeleteCart {
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
export const onCreateLineItem = /* GraphQL */ `
  subscription OnCreateLineItem {
    onCreateLineItem {
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
export const onUpdateLineItem = /* GraphQL */ `
  subscription OnUpdateLineItem {
    onUpdateLineItem {
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
export const onDeleteLineItem = /* GraphQL */ `
  subscription OnDeleteLineItem {
    onDeleteLineItem {
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
