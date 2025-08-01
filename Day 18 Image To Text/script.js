const uploadInput = document.getElementById('upload');
const previewImg = document.getElementById('preview');
const outputText = document.getElementById('output');

uploadInput.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    // Show image preview
    const reader = new FileReader();
    reader.onload = function (e) {
      previewImg.src = e.target.result;
    };
    reader.readAsDataURL(file);

    // Start OCR
    Tesseract.recognize(
      file,
      'eng',
      {
        logger: m => console.log(m)
      }
    ).then(({ data: { text } }) => {
      outputText.innerText = text;
    });
  }
});
