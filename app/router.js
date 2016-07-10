import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('blog');
  this.route('about', function(){
    this.route('programmer');
    this.route('web-designer');
    this.route('open-source-contributor');
    this.route('ideopraxist');
    this.route('mooc');
  });
});

export default Router;
