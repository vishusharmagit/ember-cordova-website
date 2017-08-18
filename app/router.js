import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('installation');
  this.route('livereload');

  this.route('workflow', function() {
    this.route('project-setup');
    this.route('building');
    this.route('livereload');
    this.route('icon-and-splash');
    this.route('hooks');
    this.route('default-webViews');
  });

  this.route('core', function() {
    this.route('cli-reference');
    this.route('platform-service');
  });

  this.route('plugins', function() {
    this.route('ember-cordova-events');
    this.route('ember-cordova-splash');
    this.route('ember-cordova-keyboard');
  });
});

export default Router;
