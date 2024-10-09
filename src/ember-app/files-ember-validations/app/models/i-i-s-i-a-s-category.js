import {
  defineNamespace,
  defineProjections,
  Model as CategoryMixin
} from '../mixins/regenerated/models/i-i-s-i-a-s-category';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(CategoryMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
