import { Serializer as PositionSerializer } from
  '../mixins/regenerated/serializers/i-i-s-i-a-s-position';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PositionSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
