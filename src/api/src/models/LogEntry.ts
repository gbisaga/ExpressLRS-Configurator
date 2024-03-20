import { Field, ObjectType } from 'type-graphql';
import JSONObjectScalar from '../graphql/scalars/JSONObjectScalar';

@ObjectType('LogEntry')
export default class LogEntry {
  @Field(() => String)
  level: string;

  @Field(() => String)
  message: string;

  @Field(() => String)
  timestamp: string;

  @Field(() => JSONObjectScalar, { nullable: true })
  context?: unknown;

  constructor(
    level: string,
    message: string,
    timestamp: string,
    context?: unknown
  ) {
    this.level = level;
    this.message = message;
    this.timestamp = timestamp;
    this.context = context;
  }
}
