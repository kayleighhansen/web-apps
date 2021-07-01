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

    db.collection("broken-cars").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            document.querySelector("main").innerHTML += `<img src="${doc.data().img_source}">`;

            var eventImgs = document.querySelectorAll("img");
            
            eventImgs.forEach((event) =>{
                event.addEventListener("click", function() {
                    console.log("click");
                });
            });
        });
    });

    