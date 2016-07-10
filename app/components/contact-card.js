import Ember from 'ember';

const { $ } = Ember;

export default Ember.Component.extend({
  mouseEnter(){
    
    $('a').on('mouseover', function(){
      $('#contact-tooltip').html($(this).attr('title'));
      $('#contact-tooltip').fadeIn();
    });
    $('a').on('mouseout', function(){
      $('#contact-tooltip').html('');
      $('#contact-tooltip').fadeOut();
    });    
  }
});
