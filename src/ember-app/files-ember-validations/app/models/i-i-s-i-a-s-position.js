import {
  defineNamespace,
  defineProjections,
  Model as PositionMixin
} from '../mixins/regenerated/models/i-i-s-i-a-s-position';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(PositionMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
