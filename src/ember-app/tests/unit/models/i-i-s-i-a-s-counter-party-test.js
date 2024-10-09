import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-i-a-s-counter-party', 'Unit | Model | i-i-s-i-a-s-counter-party', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-i-a-s-category',
    'model:i-i-s-i-a-s-comment',
    'model:i-i-s-i-a-s-counter-party',
    'model:i-i-s-i-a-s-incident',
    'model:i-i-s-i-a-s-position',
    'model:i-i-s-i-a-s-responsible',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
