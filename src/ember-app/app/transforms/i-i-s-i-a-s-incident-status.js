import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import IncidentStatusEnum from '../enums/i-i-s-i-a-s-incident-status';

export default FlexberryEnum.extend({
  enum: IncidentStatusEnum,
  sourceType: 'IIS.IAS.IncidentStatus'
});
