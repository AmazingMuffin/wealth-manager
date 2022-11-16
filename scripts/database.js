var db = new PouchDB('wealth-manager-db');

const event = new Event('databaseInfoLoaded');

function loadDatabaseInfo() {
  var res;
  db.info()
    .then(function (result) {
      res = result;
    })
    .catch(function (err) {
      console.log(err);
    });
  return res;
}
