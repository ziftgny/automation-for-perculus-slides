//function for sleeping
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
//we get the div element and its value which will change when teacher goes through another page of the pdf
var changing_value = document.getElementsByClassName("board-pager-menu-item current-page");
//get the download button
var download_button = document.getElementsByClassName("pointer btn-event download-image");
//adding event listeners
if(window.addEventListener) {
   changing_value[0].addEventListener('DOMSubtreeModified', contentChanged, false);
} else
   if(window.attachEvent) {
      changing_value[0].attachEvent('DOMSubtreeModified', contentChanged);
   }
   function contentChanged() {
    //sleep and click on the download button
    sleep(250).then(() => {
    download_button[0].click();
    });
 
}
