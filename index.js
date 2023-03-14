
fetch('header/header.html')
.then(response => response.text())
.then(data => {
  document.getElementById('header-content').innerHTML = data;

});

fetch('footer/footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer-content').innerHTML = data;
})
