const PersonController = require ('../controllers/person.controllers');

module.exports = function(app){
    app.get('/api', PersonController.index);
    app.post('/api/people',PersonController.createPerson)
}