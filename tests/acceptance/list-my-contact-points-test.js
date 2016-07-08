import { test } from 'qunit';
import moduleForAcceptance from 'bitsapien/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list my contact points');

// test('visiting /', function(assert) {
//   visit('/');

//   andThen(function() {
//     assert.equal(currentURL(), '/');
//   });

  test('should load up once', function(assert) {
    visit('/');

    andThen(function() {
      assert.equal(find('.contact-card').length, 1, 'should load one instance of contact-card');
      assert.equal(find('.home-card').length, 1, 'should load one instance of home-card');
    });
  });

  // test('should list github profile', function(assert) {
  //   visit('/');
  //   andThen(function() {
  //     var link = 'https://github.com/bitsapien';
  //     assert.equal(find('.contact-points .github').length, 1, 'should have one instance of github link');
  //     assert.equal(find('.contact-points .github a').attr('href'), link, 'should link to '+link);
  //   });
  // });
  // test('should list twitter profile', function(assert) {
  //   visit('/');
  //   andThen(function() {
  //     var link = 'https://twitter.com/bitsapien_log';
  //     assert.equal(find('.contact-points .twitter').length, 1, 'should have one instance of twitter link');
  //     assert.equal(find('.contact-points .twitter a').attr('href'), link, 'should link to '+link);
  //   });    
  // });
  // test('should list facebook profile', function(assert) {
  //   visit('/');
  //   andThen(function() {
  //     var link = 'https://facebook.com/rahul.wozniak';
  //     assert.equal(find('.contact-points .facebook').length, 1, 'should have one instance of twitter link');
  //     assert.equal(find('.contact-points .facebook a').attr('href'), link, 'should link to '+link);
  //   });    
  // });
  // test('should list linkedin profile', function(assert) {
    
  // });
  // test('should list google plus profile', function(assert) {
    
  // });
  // test('should list phone', function(assert) {
    
  // });
  // test('should list address', function(assert) {
    
  // });
