import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | mesimot', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:mesimot');
    assert.ok(route);
  });
});
