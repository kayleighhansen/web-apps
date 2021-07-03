var firebaseConfig = {
    apiKey: "AIzaSyAWl6AN8aXgoU89KA3BSqzADiH98TkU2I4",
    authDomain: "call-it-in-2b59e.firebaseapp.com",
    projectId: "call-it-in-2b59e",
    storageBucket: "call-it-in-2b59e.appspot.com",
    messagingSenderId: "308216176979",
    appId: "1:308216176979:web:7f4fcee470022679d481a6",
    measurementId: "G-8YLXKEWDTL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var carColor = urlParams.get('cars');

    console.log(carColor);

db.collection("broken-cars").get().then((querySnapshot) => {
    if (carColor!= null){
        document.querySelector("main").innerHTML += `<h2 class="title-car-section">${carColor}</h2>`;
    }
    querySnapshot.forEach((doc) => {

        if (doc.data().car_color == carColor | carColor == 'all' | carColor == null) {
            //document.querySelector("option").value = carColor;
            document.querySelector("main").innerHTML += `<img src="${doc.data().img_source}">`;

            var eventImgs = document.querySelectorAll("img");
            
            eventImgs.forEach((event) =>{
                event.addEventListener("click", function() {
                    console.log("click");
                    document.querySelector("main").innerHTML = "";
                    document.querySelector("main").innerHTML += `<div class="car-detail-div"><img src="${event.src}" alt="car-img" class="download-this"><br></div>`;
                    document.querySelector("main").innerHTML += `<div class="car-detail-div"><button class="download-img">Download Image</button></div>`;
                    document.querySelector("main").innerHTML += `<div class="reload-btn-div"><button class="reload-btn" onclick="reload()">Back to Cars</button></div>`;
                    console.log(event.src);

                    let btnDownload = document.querySelector('.download-img');
                    let btnDownloadSrc = document.querySelector('.download-this').src;

                    console.log(btnDownloadSrc);

                    btnDownload.addEventListener('click', () => {
                        axios({
                            url: btnDownloadSrc,
                            method:'GET',
                            responseType: 'blob'
                        })
                        .then((response) => {
                        const url = window.URL
                        .createObjectURL(new Blob([response.data]));
                                const link = document.createElement('a');
                                link.href = url;
                                link.setAttribute('download', 'image.jpg');
                                document.body.appendChild(link);
                                link.click();
                        })
                    });
                });
            });

        }
    });
});





function reload() {
    location.reload();
}

function download(file, text) {
              
    //creating an invisible element
    var element = document.createElement('a');
    element.setAttribute('href', 
    'data:text/plain;charset=utf-8, '
    + encodeURIComponent(text));
    element.setAttribute('download', file);
  
    // Above code is equivalent to
    // <a href="path of file" download="file name">
  
    document.body.appendChild(element);
  
    //onClick property
    element.click();
  
    document.body.removeChild(element);
}