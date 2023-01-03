function scrollWindow() {
    var scroll = document.querySelector('.trusted-row');
      if (scroll.offsetWidth + scroll.scrollLeft == scroll.scrollWidth) {
        var container = document.createElement("div");
        container.classList.add("trusted-column");
  
        var image1 = document.createElement("img");
        image1.src = images[imageIndex];
  
        container.appendChild(image1);
  
        scroll.appendChild(container);
  
        if (imageIndex == images.length - 1) {
          imageIndex = 0;
        } else {
          imageIndex += 2;
        }
      }
      scroll.scrollLeft += 1;
    }
  function handleScroll() {
      if (scrollStatus == false) {
        startScroll();
        scrollStatus = true;
      } else {
        stopScroll();
        scrollStatus = false;
      }
    }
  function startScroll() {
      timeout = setInterval(scrollWindow, 20);
      scrollStatus = true;
    }
  function stopScroll() {
      clearInterval(timeout);
      scrollStatus = false;
    }
  const images = [
    "https://cdn.d1baseball.com/logos/teams/256/georgemas.png",
    "https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png",
    "https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png",
    "https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://appcmsprod.viewlift.com/07f03878-2e8b-4f70-a4d9-ebb2a920da80/images/eagle-bank-arena.png",
    "https://logodix.com/logo/1810537.png",
    "https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png",
    "https://www.cs.umd.edu/cscareerfair/sites/default/files/cs.umd.edu.openhouse/images/company/mitre_0.png",
    "https://cdn.freelogovectors.net/wp-content/uploads/2019/02/leidos-logo.png",
    "https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png",
    "https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png",
    "https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png",
  ];
  var scrollStatus = false;
  var imageIndex = 0;
  handleScroll();
  document.querySelector('.trusted-row').addEventListener("click", function(){
    handleScroll();
  });