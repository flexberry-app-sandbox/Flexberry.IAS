import { Serializer as CounterPartySerializer } from
  '../mixins/regenerated/serializers/i-i-s-i-a-s-counter-party';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(CounterPartySerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
