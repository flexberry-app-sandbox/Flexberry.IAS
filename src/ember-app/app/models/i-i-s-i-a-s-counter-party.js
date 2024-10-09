import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as CounterPartyMixin
} from '../mixins/regenerated/models/i-i-s-i-a-s-counter-party';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(CounterPartyMixin, Validations, {
});

defineProjections(Model);

export default Model;
