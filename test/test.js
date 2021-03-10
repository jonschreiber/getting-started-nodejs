 var request = require('supertest')
    , express = require('express')
    , assert = require('assert');

  var app = require('../app.js');

  describe('GET /', function(){
    it('it should respond with json', function(done){
      request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res){
        if (err) done(err);
        done();
      });
    });
  });
