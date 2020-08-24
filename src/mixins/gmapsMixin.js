// if google is not available, wait for google to become available
// google not being available means you need to attach the script
// that script needs to make a call to the initMap function once it is loaded
window.checkAndAttachMapScript = function (callback) {
  if (!!window.google) {
    callback ();
    return true;
  }

  window.mapApiInitialized = callback
  const scriptNode = document.createElement('script')
  scriptNode.defer = true
  console.log("HELLO!!")
  scriptNode.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBilVkknWQSGcEw7ZQiwqhrJ6F_YJUKfTU&libraries=places,geometry&callback=mapApiInitialized'
  document.querySelector('head').appendChild(scriptNode)
}
