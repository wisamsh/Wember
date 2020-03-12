'use strict';

define("missionsapp/tests/integration/components/list-of-drafts-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | list-of-drafts', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <ListOfDrafts />
      */
      {
        id: "hvExUr1A",
        block: "{\"symbols\":[],\"statements\":[[5,\"list-of-drafts\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <ListOfDrafts>
              template block text
            </ListOfDrafts>
          
      */
      {
        id: "L9KEOSUI",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"list-of-drafts\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("missionsapp/tests/integration/components/mesimot-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | mesimot', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Mesimot />
      */
      {
        id: "VSZ8i8GG",
        block: "{\"symbols\":[],\"statements\":[[5,\"mesimot\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Mesimot>
              template block text
            </Mesimot>
          
      */
      {
        id: "TIcsrTS0",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"mesimot\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("missionsapp/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/list-of-drafts.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/list-of-drafts.js should pass ESLint\n\n5:8 - \'Checkbox\' is defined but never used. (no-unused-vars)\n38:31 - \'d\' is defined but never used. (no-unused-vars)\n60:31 - \'d\' is defined but never used. (no-unused-vars)\n70:31 - \'d\' is defined but never used. (no-unused-vars)\n87:17 - Unexpected console statement. (no-console)\n91:13 - Unexpected console statement. (no-console)');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/mesimot.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/mesimot.js should pass ESLint\n\n2:8 - \'fetch\' is defined but never used. (no-unused-vars)\n3:10 - \'hash\' is defined but never used. (no-unused-vars)');
  });
});
define("missionsapp/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('missionsapp/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'missionsapp/templates/application.hbs should pass TemplateLint.\n\n');
  });
});
define("missionsapp/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/list-of-drafts-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/list-of-drafts-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/mesimot-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/mesimot-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/mesimot-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/mesimot-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/mesimot-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/mesimot-test.js should pass ESLint\n\n');
  });
});
define("missionsapp/tests/test-helper", ["missionsapp/app", "missionsapp/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("missionsapp/tests/unit/controllers/mesimot-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | mesimot', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:mesimot');
      assert.ok(controller);
    });
  });
});
define("missionsapp/tests/unit/routes/mesimot-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | mesimot', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:mesimot');
      assert.ok(route);
    });
  });
});
define('missionsapp/config/environment', [], function() {
  var prefix = 'missionsapp';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('missionsapp/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
