import { Entity, EntityItem } from "dynamodb-toolbox";
import { MyTable } from "../lib/ddb-toolbox";
import { v4 as uuidv4 } from 'uuid';

export const ApplicationFormEntity = new Entity({
    name: 'ApplicationForm',
    timestamps: true,
    attributes: {
      PK: { partitionKey: true, default:`ApplicationForm` },
      SK: { sortKey: true, default: (data:{id:string}) => `ID#${data.id}`, dependsOn: 'id' },
      id: { type: 'string', required: true, default: () => uuidv4()},
      package: { type: 'string', required: true },
      programType: { type: 'string', required: true },
      whyUSA: { type: 'string', required: true },
      academicInterests: { type: 'string', required: true },
      fullName: { type: 'string', required: true },
      email: { type: 'string', required: true },
      phone: { type: 'string', required: true },
      citizenship: { type: 'string', required: true },
      university: { type: 'string', required: true },
      major: { type: 'string', required: true },
      gpa: { type: 'string', required: true },
      extracurricular: { type: 'string', required: true },
      workExperience: { type: 'string', required: true },
      englishProficiency: { type: 'string', required: true },
      toeflIelts: { type: 'string', required: true },
      gre: { type: 'string', required: true },
    },
    table: MyTable
  } as const);

  export type ApplicationFormDDB = EntityItem<typeof ApplicationFormEntity>