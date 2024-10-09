import {
  defineNamespace,
  defineProjections,
  Model as CommentMixin
} from '../mixins/regenerated/models/i-i-s-i-a-s-comment';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(CommentMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
