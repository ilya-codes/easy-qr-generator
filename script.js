const form = document.getElementById("qrform");
const qr = document.getElementById("qr");
const placeholder = document.getElementById("placeholderImg");
const downloadBtn = document.getElementById("download-btn");

const onGenerateSubmit = (e) => {
  e.preventDefault();

  const url = document.getElementById("url").value;

  placeholder.style.opacity = 0;

  setTimeout(() => {
    cleanUp();
    generateQRCode(url, 300);

    setTimeout(() => {
      const saveUrl = qr.querySelector("img").src;
      createLink(saveUrl);
    }, 50);
  }, 600);
};

const generateQRCode = (url, size) => {
  const qrcode = new QRCode("qr", {
    text: url,
    width: size,
    height: size,
  });
};

const createLink = (url) => {
  downloadBtn.classList.remove("disabled");
  downloadBtn.href = url;
  downloadBtn.download = "qrcode";
};

const cleanUp = () => {
  qr.innerHTML = "";
};

form.addEventListener("submit", onGenerateSubmit);
