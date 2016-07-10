import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('home-card', 'Integration | Component | home card', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{home-card}}`);

  assert.equal(this.$('.my-name').length, 1, 'has name in the card');
  assert.equal(this.$('.my-display-picture').length, 1, 'has photo in the card');
  
  // // Template block usage:
  // this.render(hbs`
  //   {{#home-card}}
  //     template block text
  //   {{/home-card}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
