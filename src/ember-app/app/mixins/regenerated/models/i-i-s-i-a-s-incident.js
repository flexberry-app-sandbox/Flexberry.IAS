import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  caption: DS.attr('string'),
  description: DS.attr('string'),
  iD: DS.attr('number'),
  solveBefore: DS.attr('date'),
  status: DS.attr('i-i-s-i-a-s-incident-status'),
  category: DS.belongsTo('i-i-s-i-a-s-category', { inverse: null, async: false }),
  counterParty: DS.belongsTo('i-i-s-i-a-s-counter-party', { inverse: null, async: false }),
  responsible: DS.belongsTo('i-i-s-i-a-s-responsible', { inverse: null, async: false }),
  comment: DS.hasMany('i-i-s-i-a-s-comment', { inverse: 'incident', async: false })
});

export let ValidationRules = {
  caption: {
    descriptionKey: 'models.i-i-s-i-a-s-incident.validations.caption.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  description: {
    descriptionKey: 'models.i-i-s-i-a-s-incident.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  iD: {
    descriptionKey: 'models.i-i-s-i-a-s-incident.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  solveBefore: {
    descriptionKey: 'models.i-i-s-i-a-s-incident.validations.solveBefore.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  status: {
    descriptionKey: 'models.i-i-s-i-a-s-incident.validations.status.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  category: {
    descriptionKey: 'models.i-i-s-i-a-s-incident.validations.category.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  counterParty: {
    descriptionKey: 'models.i-i-s-i-a-s-incident.validations.counterParty.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  responsible: {
    descriptionKey: 'models.i-i-s-i-a-s-incident.validations.responsible.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  comment: {
    descriptionKey: 'models.i-i-s-i-a-s-incident.validations.comment.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('IncidentE', 'i-i-s-i-a-s-incident', {
    iD: attr('ID', { index: 0 }),
    status: attr('Status', { index: 1 }),
    solveBefore: attr('Solve before', { index: 2 }),
    caption: attr('Caption', { index: 3 }),
    description: attr('Description', { index: 4 }),
    responsible: belongsTo('i-i-s-i-a-s-responsible', 'Responsible', {
      name: attr('Name', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'name' }),
    counterParty: belongsTo('i-i-s-i-a-s-counter-party', 'Counter party', {
      name: attr('Name', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'name' }),
    category: belongsTo('i-i-s-i-a-s-category', 'Category', {
      name: attr('Name', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'name' }),
    comment: hasMany('i-i-s-i-a-s-comment', 'Comment', {
      commentText: attr('Comment text', { index: 0 })
    })
  });

  modelClass.defineProjection('IncidentL', 'i-i-s-i-a-s-incident', {
    iD: attr('ID', { index: 0 }),
    status: attr('Status', { index: 1 }),
    solveBefore: attr('Solve before', { index: 2 }),
    caption: attr('Caption', { index: 3 }),
    description: attr('Description', { index: 4 }),
    responsible: belongsTo('i-i-s-i-a-s-responsible', 'Name', {
      name: attr('Name', { index: 5 })
    }, { index: -1, hidden: true }),
    counterParty: belongsTo('i-i-s-i-a-s-counter-party', 'Name', {
      name: attr('Name', { index: 6 })
    }, { index: -1, hidden: true }),
    category: belongsTo('i-i-s-i-a-s-category', 'Name', {
      name: attr('Name', { index: 7 })
    }, { index: -1, hidden: true })
  });
};
