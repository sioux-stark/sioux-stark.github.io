 function pictureSlider() {
    var index = 0; //Starting picture
    
    var imageArray = ['IMG_0693.JPG','IMG_1289.jpg','IMG_0722.JPG',];//picture array for carousel
    var picsCount = 3; //Number of pictures that need to be cycled through
    /**
     *The displayPhoto function removes the current photo being displayed
     *and then replaces with the photo from the array who's index matches
     *our index variable.
     */
    
    displayPhoto = function() {
      var imageHeight;
        $('#currentPhoto').fadeOut(500, function () { //fade out the current picture over the course of 500 milliseconds.
        $('#currentPhoto').attr('src', 'images/'+ imageArray[index] + '');
        });
         currentImage = $('#currentPhoto');
        currentImage.load(function() {
        $('#currentPhoto').fadeIn(400);//fade in the new picture over the course of 500 milliseconds.
        });
        
    }
    
        
    $('#rightPic').click(function(){ //when the right arrow is clicked run this function.
      if (index < picsCount-1) {
        index++;
        displayPhoto();
      } else {
        index = 0;
        displayPhoto();
      }
    });
    
    $('#leftPic').click(function(){ //when the left arrow is clicked run this function.
      if (index == 0) {
        index = picsCount -1;
        displayPhoto();
      } else {
        index--;
        displayPhoto();
      }
    });

    displayPhoto();
}