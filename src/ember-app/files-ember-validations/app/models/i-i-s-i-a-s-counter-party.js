import {
  defineNamespace,
  defineProjections,
  Model as CounterPartyMixin
} from '../mixins/regenerated/models/i-i-s-i-a-s-counter-party';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(CounterPartyMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
