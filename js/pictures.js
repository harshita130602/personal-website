(function(){
  $(".slideshow_querformat").on('click', '.img-swap', function() {
    var self = this,
        file = this.src,
        common = file.substring(0, file.length-6)
        currentId =  +file.substr(-6,2),
        id = ('0' + (currentId+1)).substr(-2),
        nextimage= new Image();

    nextimage.onload = function(){
       // image was preloaded so it exists
       var img = this;
       $(self).fadeOut(300, function(){self.src = img.src; $(self).fadeIn(300)});
    };
    nextimage.onerror = function(){
       // error occured while preloading. we assume image does not exist
       $(self).fadeOut(300, function(){self.src = common+ '01.jpg'; $(self).fadeIn(300)});
    };
    nextimage.src = common + id + '.jpg';
  });
});
