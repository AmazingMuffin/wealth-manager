/*
  
  Footer component
  Description : 

*/
let { store, component } = reef;

function footerTemplate() {
  var htmlString = '<div>';
  htmlString += 'This is from the footer template';
  htmlString += '</div>';
}

function loadFooter() {
  component('#footer', footerTemplate);
}
