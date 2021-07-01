
window.addEventListener('load', (event) => {
    var footer = document.querySelector("footer").innerHTML;

    footer += `<a href="../home/"><i class="fa fa-home"></i></a>`;

    document.querySelector("footer").innerHTML = footer;

});


