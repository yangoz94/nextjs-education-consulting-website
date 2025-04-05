import { Entity, EntityItem } from "dynamodb-toolbox";
import { MyTable } from "../lib/ddb-toolbox";

export const UserEntity = new Entity({
    name: 'User',
    timestamps: true,
    attributes: {
      PK: { partitionKey: true, default: (data:any) => `USER#${data.username}`, dependsOn: 'username' },
      SK: { sortKey: true, default: () => `METADATA` },
      username: { type: 'string', required: true },
      password: { type: 'string', required: true },
    },
    table: MyTable
  } as const);


  export type UserDDB = EntityItem<typeof UserEntity>