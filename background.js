var images = new Array();
images[0] = "url(button.PNG)";
images[1] = "url(survival1.PNG)";
images[2] = "url(survival2.PNG)";
images[3] = "url(survival3.PNG)";
images[4] = "url(hallway4.PNG)";
images[5] = "url(hallway3.PNG)";
images[6] = "url(hallway2.PNG)";
images[7] = "url(hallway1.PNG)";
images[8] = "url(rlyeh.PNG)";
images[9] = "url(speed.PNG)";
images[10] = "url(onomas2.PNG)";
images[11] = "url(onomas3.PNG)";
images[12] = "url(onomaTitle.PNG)";





var body = document.body;

body.style.backgroundImage = images[Math.floor((Math.random() * 12))];

body.style.backgroundImage.opacity = 0.7;


        var slideIndex = 1;
        showSlides(slideIndex);

        // Next/previous controls
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        // Thumbnail image controls
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";
            dots[slideIndex-1].className += " active";
        }





