import { Auth, API } from "aws-amplify";
import { monotonicFactory } from "ulid";
import { createOrderEvent } from "../src/graphql/mutations";

const addOrderEvent = async ({ source, eventType, detail }) => {
  // Sortable ID
  const ulid = monotonicFactory();
  const id = ulid();
  const eventInfo = {
    PK: "order#evt",
    SK: `evt#${id}`,
    source,
    eventType,
    detail: JSON.stringify(detail),
  };

  return API.graphql({
    query: createOrderEvent,
    variables: { input: eventInfo },
  });
};

export { addOrderEvent };
