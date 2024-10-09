import {
  defineNamespace,
  defineProjections,
  Model as ResponsibleMixin
} from '../mixins/regenerated/models/i-i-s-i-a-s-responsible';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ResponsibleMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
