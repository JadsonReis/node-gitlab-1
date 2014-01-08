// Generated by CoffeeScript 1.6.3
(function() {
  var Gitlab, assert, credentials, gitlab, projectId, userId;

  assert = require('assert');

  Gitlab = require('..').ApiV3;

  credentials = {
    host: "http://demo.gitlab.com",
    token: "Wvjy2Krpb7y8xi93owUz",
    password: "123456",
    login: "test@test.com"
  };

  gitlab = new Gitlab({
    token: credentials.token,
    url: credentials.host
  });

  projectId = 3;

  userId = 1;

  describe('User', function() {
    describe('#all()', function() {
      return it('should retrieve array of users without error', function(done) {
        return gitlab.users.all(function(result) {
          done();
          return result;
        });
      });
    });
    describe('#show()', function() {
      return it('should retrive a single user', function(done) {
        return gitlab.users.show(userId, function(result) {
          done();
          return result;
        });
      });
    });
    return describe('#session()', function() {
      return it('should retrieve a users session without error', function(done) {
        return gitlab.users.session(credentials.login, credentials.password, function(result) {
          done();
          return result;
        });
      });
    });
  });

  describe('Project', function() {
    describe('#all()', function() {
      return it('should retrieve array of projects without error', function(done) {
        return gitlab.projects.all(function(result) {
          done();
          return result;
        });
      });
    });
    describe('#show()', function() {
      return it('should retrieve single project', function(done) {
        return gitlab.projects.show(projectId, function(result) {
          done();
          return result;
        });
      });
    });
    describe('Members', function() {
      return describe('#listMembers()', function() {
        return describe('#list', function() {
          return it('should retrieve list of members of a project', function(done) {
            return gitlab.projects.members.list(projectId, function(result) {
              done();
              return result;
            });
          });
        });
      });
    });
    return describe('#repository', function() {
      describe('#listBranches', function() {
        return it('should retrive branches of a given project', function(done) {
          return gitlab.projects.repository.listBranches(projectId, function(result) {
            done();
            return result;
          });
        });
      });
      describe('#listCommits()', function() {
        return it('should retrieve list of members of a project', function(done) {
          return gitlab.projects.repository.listCommits(projectId, function(result) {
            done();
            return result;
          });
        });
      });
      describe('#listTags()', function() {
        return it('should retrieve list of members of a project', function(done) {
          return gitlab.projects.repository.listTags(projectId, function(result) {
            done();
            return result;
          });
        });
      });
      return describe('#listTree()', function() {
        return it('should retrieve list of members of a project', function(done) {
          return gitlab.projects.repository.listTree(projectId, function(result) {
            done();
            return result;
          });
        });
      });
    });
  });

}).call(this);