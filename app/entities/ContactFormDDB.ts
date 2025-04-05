import { Entity, EntityItem } from "dynamodb-toolbox";
import { MyTable } from "../lib/ddb-toolbox";
import { v4 as uuidv4 } from 'uuid';

export const ContactFormEntity = new Entity({
    name: 'ContactForm',
    timestamps: true,
    attributes: {
      PK: { partitionKey: true, default: `ContactForm` },
      SK: { sortKey: true, default: (data:{id:string}) => `ID#${data.id}`, dependsOn: 'id' },
      id: { type: 'string', required: true, default: () => uuidv4()},
      fullName: { type: 'string', required: true },
      email: { type: 'string', required: true },
      phone: { type: 'string', required: true },
      question: { type: 'string', required: true },
    },
    table: MyTable
  } as const);

  export type ContactFormDDB = EntityItem<typeof ContactFormEntity>