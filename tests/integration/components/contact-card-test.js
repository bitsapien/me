import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('contact-points', 'Integration | Component | contact points', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{contact-card}}`);

  assert.equal(this.$('.contact-card').length, 1,'must appear');

  // Template block usage:
  // this.render(hbs`
  //   {{#contact-points}}
  //     github.com/bitsapien
  //     twitter.com/bitsapien_log
  //   {{/contact-points}}
  // `);

  // assert.equal(this.$().text().trim(), 'github.com/bitsapien\n  twitter.com/bitsapien_log');
});
