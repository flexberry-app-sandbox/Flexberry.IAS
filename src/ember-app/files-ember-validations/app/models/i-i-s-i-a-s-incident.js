import {
  defineNamespace,
  defineProjections,
  Model as IncidentMixin
} from '../mixins/regenerated/models/i-i-s-i-a-s-incident';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(IncidentMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
