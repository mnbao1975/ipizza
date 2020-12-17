/* Amplify Params - DO NOT EDIT
	API_IPIZZA_GRAPHQLAPIIDOUTPUT
	API_IPIZZA_ORDEREVENTTABLE_ARN
	API_IPIZZA_ORDEREVENTTABLE_NAME
	API_IPIZZA_ORDERTABLE_ARN
	API_IPIZZA_ORDERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */
let AWS = require("aws-sdk");
let region = process.env.REGION;
let table = process.env.API_IPIZZA_ORDERTABLE_NAME;

AWS.config.update({ region });
let db = new AWS.DynamoDB.DocumentClient();
let aggregateOrderInfo = (record) => {
  let datetime = new Date().toISOString();
  let eventInfo = record.NewImage;
  let detailInfo = record.NewImage.detail.M;
  let orderId = detailInfo.orderId.S;
  let params = {
    TableName: table,
    Item: {
      id: orderId,
      PK: `order#${orderId}`,
      SK: `order#${orderId}`,
      username: detailInfo.username.S,
      grandTotal: parseFloat(detailInfo.price.N),
      status: eventInfo.eventType.S,
      createdAt: eventInfo.createdAt.S,
      updatedAt: eventInfo.updatedAt.S,
    },
  };
  return db.put(params).promise();
};

exports.handler = (event) => {
  //eslint-disable-line
  //console.log(JSON.stringify(event, null, 2));
  event.Records.forEach(async (record) => {
    console.log("DynamoDB Record: %j", record.dynamodb);
    try {
      await aggregateOrderInfo(record.dynamodb);
      console.log("It is done");
    } catch (error) {
      console.log(error);
    }
  });

  //return Promise.resolve("Successfully processed DynamoDB record");
};
