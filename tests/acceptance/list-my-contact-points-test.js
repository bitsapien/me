import { test } from 'qunit';
import moduleForAcceptance from 'bitsapien/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list my contact points');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
