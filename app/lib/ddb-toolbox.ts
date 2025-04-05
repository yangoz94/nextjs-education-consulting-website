import { DynamoDB, DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { Table, Entity } from "dynamodb-toolbox";
import { STS } from "@aws-sdk/client-sts";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const marshallOptions = {
  // Specify your client options as usual
  convertEmptyValues: false,
};

const translateConfig = { marshallOptions };

const sts = new STS({
  region: "us-east-1",
});

export const DocumentClient = DynamoDBDocumentClient.from(
  new DynamoDBClient({
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
  }),
  translateConfig
);

export const MyTable = new Table({
  // Specify table name (used by DynamoDB)
  name: "projects-mix-ddb",

  // Define partition and sort keys
  partitionKey: "PK",
  sortKey: "SK",

  // Add the DocumentClient
  DocumentClient,
});
