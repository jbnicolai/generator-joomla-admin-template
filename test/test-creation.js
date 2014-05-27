// Generated by CoffeeScript 1.7.1

/*
	generator-joomla-admin-template

	test-creation.coffee

	@author Sean
	
	@note Created on 2014-05-27 by PhpStorm
	@note uses Codoc
	@see https://github.com/coffeedoc/codo
 */

(function() {
  "use strict";
  var helpers, path;

  path = require("path");

  helpers = require("yeoman-generator").test;

  describe("joomla-admin-template generator", function() {
    beforeEach(function(done) {
      return helpers.testDirectory(path.join(__dirname, "temp"), (function(err) {
        if (err) {
          return done(err);
        }
        this.app = helpers.createGenerator("joomla-admin-template:app", ["../../app"]);
        return done();
      }).bind(this));
    });
    return it("creates expected files", function(done) {
      var expected;
      expected = [".jshintrc", ".editorconfig", "package.json"];
      helpers.mockPrompt(this.app, {
        someOption: true,
        description: "A sample description",
        name: "A template name",
        authorName: "Test author name",
        authorEmail: "testemail@gmail.com",
        authorURL: "testauthor@testauthor.com",
        license: "MIT",
        sassBoilerplate: true
      });
      this.app.options["skip-install"] = true;
      return this.app.run({}, function() {
        helpers.assertFile(expected);
        return done();
      });
    });
  });

}).call(this);

//# sourceMappingURL=test-creation.map
