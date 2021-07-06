$( document ).ready(function() {
    $("#eye1").click(function() {
        bootbox.alert({
            size: "medium",
            title: "Cara Menjaga Kesehatan Mata",
            message: `<center><video width="320" height="240" controls>mp3
            <source src="../video/mata.mp4" type="video/mp4">
            Browser tidak support, silahkan ganti Browser Anda!
            </video></center>
            <audio controls autoplay style="display:none">
            <source src="../voice/mata.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
            </audio>
            `
        });
    });

    $("#eye2").click(function() {
        bootbox.alert({
            size: "medium",
            title: "Cara Menjaga Kesehatan Mata",
            message: `<center><video width="320" height="240" controls>
            <source src="../video/mata.mp4" type="video/mp4">
            Browser tidak support, silahkan ganti Browser Anda!
            </video></center>
            <audio controls autoplay style="display:none">
            <source src="../voice/mata.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
            </audio>
            `
        })  
    });




    $("#gigi1").click(function() {
        bootbox.alert({
            size: "medium",
            title: "Cara Menjaga Kesehatan Gigi",
            message: `<center><video width="320" height="240" controls>
            <source src="../video/gigi.mp4" type="video/mp4">
            Browser tidak support, silahkan ganti Browser Anda!
            </video></center>
            <audio controls autoplay style="display:none">
            <source src="../voice/gigi.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
            </audio>
            `
        })  
    });

    $("#rambut").click(function() {
        bootbox.alert({
            size: "medium",
            title: "Cara Menjaga Kesehatan Rambut",
            message: `<center><video width="320" height="240" controls>
            <source src="../video/rambut.mp4" type="video/mp4">
            Browser tidak support, silahkan ganti Browser Anda!
            </video></center>
            <audio controls autoplay style="display:none">
            <source src="../voice/rambut.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
            </audio>
            `
        })  
    });

    $("#link1").click(function() {
        bootbox.alert({
            size: "medium",
            title: "Tata Cara Makan",
            message: `<center><video width="320" height="240" controls>
            <source src="../video/makan.mp4" type="video/mp4">
            Browser tidak support, silahkan ganti Browser Anda!
            </video></center>
            <audio controls autoplay style="display:none">
            <source src="../voice/makan.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
            </audio>
            `
        });
        console.log('tseting');
    });

    $("#link2").click(function() {
        bootbox.alert({
            size: "medium",
            title: "Tata Cara Memakai Baju",
            message: `<center><video width="320" height="240" controls>
            <source src="../video/baju.mp4" type="video/mp4">
            Browser tidak support, silahkan ganti Browser Anda!
            </video></center>
            <audio controls autoplay style="display:none">
            <source src="../voice/baju.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
            </audio>
            `
        });
    });

    $("#link3").click(function() {
        bootbox.alert({
            size: "medium",
            title: "Tata Cara Mandi",
            message: `<center><video width="320" height="240" controls>
            <source src="../video/mandi.mp4" type="video/mp4">
            Browser tidak support, silahkan ganti Browser Anda!
            </video></center>
            <audio controls autoplay style="display:none">
            <source src="../voice/mandi.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
            </audio>
            `
        });
    });
});

