import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-i-a-s-incident', 'Unit | Serializer | i-i-s-i-a-s-incident', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-i-a-s-incident',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-i-a-s-incident-status',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
