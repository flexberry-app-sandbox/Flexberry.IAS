import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  surname: DS.attr('string'),
  position: DS.belongsTo('i-i-s-i-a-s-position', { inverse: null, async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-i-a-s-counter-party.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  surname: {
    descriptionKey: 'models.i-i-s-i-a-s-counter-party.validations.surname.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  position: {
    descriptionKey: 'models.i-i-s-i-a-s-counter-party.validations.position.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('CounterPartyE', 'i-i-s-i-a-s-counter-party', {
    name: attr('Name', { index: 0 }),
    surname: attr('Surname', { index: 1 }),
    position: belongsTo('i-i-s-i-a-s-position', 'Position', {
      name: attr('Name', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('CounterPartyL', 'i-i-s-i-a-s-counter-party', {
    name: attr('Name', { index: 0 }),
    surname: attr('Surname', { index: 1 }),
    position: belongsTo('i-i-s-i-a-s-position', 'Name', {
      name: attr('Name', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
