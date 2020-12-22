// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, Profile } = initSchema(schema);

export {
  Todo,
  Profile
};