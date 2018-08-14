// $(function() {
//   // Пользовательские функции
// });
// +(function($) {
//   "use strict";

//   // UPLOAD CLASS DEFINITION
//   // ======================

//   var dropZone = document.getElementById("drop-zone");
//   var uploadForm = document.getElementById("js-upload-form");

//   var startUpload = function(files) {
//     console.log(files);
//   };

//   uploadForm.addEventListener("submit", function(e) {
//     var uploadFiles = document.getElementById("js-upload-files").files;
//     e.preventDefault();

//     startUpload(uploadFiles);
//   });

//   dropZone.ondrop = function(e) {
//     e.preventDefault();
//     this.className = "upload-drop-zone";

//     startUpload(e.dataTransfer.files);
//   };

//   dropZone.ondragover = function() {
//     this.className = "upload-drop-zone drop";
//     return false;
//   };

//   dropZone.ondragleave = function() {
//     this.className = "upload-drop-zone";
//     return false;
//   };
// })(jQuery);

let dropArea = document.getElementById('drop-area');
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false)
})

function preventDefaults(e) {
    e.preventDefault()
    e.stopPropagation()
};

['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false)
});

['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false)
})

function highlight(e) {
    dropArea.classList.add('highlight')
}

function unhighlight(e) {
    dropArea.classList.remove('highlight')
}

dropArea.addEventListener('drop', handleDrop, false)
function handleDrop(e) {
  let dt = e.dataTransfer
  let files = dt.files
  handleFiles(files)
}