//Worked with Ali Abdullah on this part
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    function showAlert() {
            var appName = navigator.appName;
            var product = navigator.product;
            var appVersion = navigator.appVersion;
            var userAgent = navigator.userAgent;
            var platform = navigator.platform;
            var language = navigator.language;

            var infoMessage = "Navigator Information:\n"
                + "App Name: " + appName + "\n"
                + "Product: " + product + "\n"
                + "App Version: " + appVersion + "\n"
                + "User Agent: " + userAgent + "\n"
                + "Platform: " + platform + "\n"
                + "Language: " + language;

            alert(infoMessage);
    }

    function showWindowSize() {
            var innerHeight = window.innerHeight;
            var innerWidth = window.innerWidth;

            var sizeMessage = "Window Size Information:\n"
                + "Inner Height: " + innerHeight + " pixels\n"
                + "Inner Width: " + innerWidth + " pixels";

            alert(sizeMessage);
    }

    function showScreenInfo() {
            var screenWidth = screen.width;
            var screenHeight = screen.height;
            var availScreenWidth = screen.availWidth;
            var availScreenHeight = screen.availHeight;
            var colorDepth = screen.colorDepth;
            var pixelDepth = screen.pixelDepth;

            var infoMessage = "Screen Information:\n"
                + "Screen Width: " + screenWidth + " pixels\n"
                + "Screen Height: " + screenHeight + " pixels\n"
                + "Available Screen Width: " + availScreenWidth + " pixels\n"
                + "Available Screen Height: " + availScreenHeight + " pixels\n"
                + "Color Depth: " + colorDepth + " bits per pixel\n"
                + "Pixel Depth: " + pixelDepth + " bits per pixel";

            alert(infoMessage);
    }

    function showLocationInfo() {
            var href = window.location.href;
            var hostname = window.location.hostname;
            var pathname = window.location.pathname;
            var protocol = window.location.protocol;

            var infoMessage = "Location Information:\n"
                + "Href: " + href + "\n"
                + "Hostname: " + hostname + "\n"
                + "Pathname: " + pathname + "\n"
                + "Protocol: " + protocol;

            alert(infoMessage);
    }

    function showGeolocationInfo() {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var latitude = position.coords.latitude;
                    var longitude = position.coords.longitude;

                    var infoMessage = "Geolocation Information:\n"
                        + "Latitude: " + latitude + "\n"
                        + "Longitude: " + longitude;

                    alert(infoMessage);
                });
            } else {
                alert("Geolocation is not supported in this browser.");
            }
    }