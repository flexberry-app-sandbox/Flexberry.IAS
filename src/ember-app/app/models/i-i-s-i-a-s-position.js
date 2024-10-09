import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as PositionMixin
} from '../mixins/regenerated/models/i-i-s-i-a-s-position';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(PositionMixin, Validations, {
});

defineProjections(Model);

export default Model;
