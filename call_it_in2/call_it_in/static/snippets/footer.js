
window.addEventListener('load', (event) => {
    var footer = document.querySelector("footer").innerHTML;

    console.log(footer);

    footer += `<a href="../home/"><i class="fa fa-home"></i></a>`;

    console.log(footer);

    document.querySelector("footer").innerHTML = footer;

});


