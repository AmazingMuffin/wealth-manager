/*
  
  Footer component
  Description : 

*/


function footerTemplate() {
  var htmlString = '<div>';
  htmlString += 'This is from the footer template';
  htmlString += '</div>';
  return htmlString;
}

function loadFooter() {
  component('#footer', footerTemplate);
}
