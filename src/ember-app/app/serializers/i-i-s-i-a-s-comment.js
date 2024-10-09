import { Serializer as CommentSerializer } from
  '../mixins/regenerated/serializers/i-i-s-i-a-s-comment';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(CommentSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
