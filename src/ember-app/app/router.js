import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-i-a-s-category-l');
  this.route('i-i-s-i-a-s-category-e',
  { path: 'i-i-s-i-a-s-category-e/:id' });
  this.route('i-i-s-i-a-s-category-e.new',
  { path: 'i-i-s-i-a-s-category-e/new' });
  this.route('i-i-s-i-a-s-counter-party-l');
  this.route('i-i-s-i-a-s-counter-party-e',
  { path: 'i-i-s-i-a-s-counter-party-e/:id' });
  this.route('i-i-s-i-a-s-counter-party-e.new',
  { path: 'i-i-s-i-a-s-counter-party-e/new' });
  this.route('i-i-s-i-a-s-incident-l');
  this.route('i-i-s-i-a-s-incident-e',
  { path: 'i-i-s-i-a-s-incident-e/:id' });
  this.route('i-i-s-i-a-s-incident-e.new',
  { path: 'i-i-s-i-a-s-incident-e/new' });
  this.route('i-i-s-i-a-s-position-l');
  this.route('i-i-s-i-a-s-position-e',
  { path: 'i-i-s-i-a-s-position-e/:id' });
  this.route('i-i-s-i-a-s-position-e.new',
  { path: 'i-i-s-i-a-s-position-e/new' });
  this.route('i-i-s-i-a-s-responsible-l');
  this.route('i-i-s-i-a-s-responsible-e',
  { path: 'i-i-s-i-a-s-responsible-e/:id' });
  this.route('i-i-s-i-a-s-responsible-e.new',
  { path: 'i-i-s-i-a-s-responsible-e/new' });
});

export default Router;
