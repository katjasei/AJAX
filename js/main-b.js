// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array:

// After the loop print the HTML into <ul> element using innerHTML.
'use strict';
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
const ShowImages = (images) => {

  images.forEach((image)=>{
    const html = `<li>
    <figure>
        <a href="img/original/${image.mediaUrl}"><img src="img/thumbs/${image.mediaThumb}"></a>
        <figcaption>
            <h3>${image.mediaTitle}</h3>
        </figcaption>
    </figure>
</li>`;

   document.querySelector('ul').innerHTML += html;
  });
};


fetch('images.json').then((response)=>{
  //console.log(response);
  return response.json();

}).then((images)=>{
  console.log(images);
  ShowImages(images);

});