import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nav-bar', 'Integration | Component | nav bar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  // this.render(hbs`{{nav-bar}}`);
  this.render(hbs`{{nav-bar}}`);

  assert.equal(this.$('.nav-bar').length, 1, 'must load');
  // assert.of(this.$().text().length > 0, 'should have some');

  // Template block usage:
  // this.render(hbs`
  //   {{#nav-bar}}
  //     template block text
  //   {{/nav-bar}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
