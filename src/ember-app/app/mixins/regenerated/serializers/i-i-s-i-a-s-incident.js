import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      category: { serialize: 'odata-id', deserialize: 'records' },
      counterParty: { serialize: 'odata-id', deserialize: 'records' },
      responsible: { serialize: 'odata-id', deserialize: 'records' },
      comment: { serialize: false, deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
