import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nav-set', 'Integration | Component | nav set', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nav-set}}`);

  assert.equal(this.$('.nav-set').length, 1, 'must load');

  // Template block usage:
  // this.render(hbs`
  //   {{#nav-set}}
  //     template block text
  //   {{/nav-set}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
