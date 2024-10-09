import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as CategoryMixin
} from '../mixins/regenerated/models/i-i-s-i-a-s-category';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(CategoryMixin, Validations, {
});

defineProjections(Model);

export default Model;
