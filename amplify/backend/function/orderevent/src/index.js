/* Amplify Params - DO NOT EDIT
	API_IPIZZA_GRAPHQLAPIIDOUTPUT
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
let aggregateOrderInfo = (event) => {
  let params = {
    TableName: table,
    Item: {
      id: "558c20a9-2a27-49db-8d67-999999999999",
      PK: "order#aggregate",
      SK: "order#aggregate",
    },
  };
  return db.put(params).promise();
};

exports.handler = (event) => {
  //eslint-disable-line
  //console.log(JSON.stringify(event, null, 2));
  event.Records.forEach(async (record) => {
    // console.log("DynamoDB Record: %j", record.dynamodb);
    console.log(`tablename is: ${table}`);
    try {
      await aggregateOrderInfo(event);
      console.log("It is done");
    } catch (error) {
      console.log(error);
    }
  });

  //return Promise.resolve("Successfully processed DynamoDB record");
};
