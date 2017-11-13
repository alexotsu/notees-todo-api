const expect = require('expect');
const request = require('supertest');


const {app} = require('./../server');
// syntax above: ./ gets current directory, ../ moves one directory up
const {Todo} = require('./../models/todo');


// need to make dummy todos here because the below beforeEach resets the database to zero (for somereason)
const todos = [{
  text: 'First test todo'
}, {
  text: 'Second test todo'
  }];

// beforeEach is supertest syntax to run before each thing in the describe block
beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

describe('POST /todos', () => {
  // is testing an asynchronous event, so needs to have 'done' keyword
  it('should create a new todo', (done) => {
    let text = 'Test todo text';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if(err) {
          return done(err);
        }

        Todo.find({text}).then((todos) => {
          // use .find({text}) to find only the database entries with that text in it. This length should still be 1.
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done()
        }).catch((e) => done(e));
      });
  });

  it('should not create todo with bad data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if(err) {
          return done(err)
        }

        Todo.find().then((todos) => {
          // change todos.length to expect 2, since
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      });
  });
});

describe('GET /todos', () => {
  it('should get all todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  });
});
