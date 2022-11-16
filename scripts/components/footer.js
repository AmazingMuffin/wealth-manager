/*
  
  Footer component
  Description : 

*/
let { store, component } = reef;
let data = store({
  dbName: '',
});

function template() {
  let { dbName } = data;

  var htmlString = '<div>';
  htmlString += 'Connected to database : ';
  htmlString += '</div>';
  //return htmlString;
  return 'xx ${dbName}';
}

function loadFooter() {
  var res = loadDatabaseInfo();
  component('#footer', template);
}
