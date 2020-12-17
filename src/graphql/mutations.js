/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createOrderEvent = /* GraphQL */ `
  mutation CreateOrderEvent(
    $input: CreateOrderEventInput!
    $condition: ModelOrderEventConditionInput
  ) {
    createOrderEvent(input: $input, condition: $condition) {
      id
      PK
      SK
      source
      eventType
      detail
      snapVersion
      snapData
      snapLastEvent
      snapLastVersion
      createdAt
      updatedAt
    }
  }
`;
export const updateOrderEvent = /* GraphQL */ `
  mutation UpdateOrderEvent(
    $input: UpdateOrderEventInput!
    $condition: ModelOrderEventConditionInput
  ) {
    updateOrderEvent(input: $input, condition: $condition) {
      id
      PK
      SK
      source
      eventType
      detail
      snapVersion
      snapData
      snapLastEvent
      snapLastVersion
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrderEvent = /* GraphQL */ `
  mutation DeleteOrderEvent(
    $input: DeleteOrderEventInput!
    $condition: ModelOrderEventConditionInput
  ) {
    deleteOrderEvent(input: $input, condition: $condition) {
      id
      PK
      SK
      source
      eventType
      detail
      snapVersion
      snapData
      snapLastEvent
      snapLastVersion
      createdAt
      updatedAt
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
