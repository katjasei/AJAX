// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
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
// Make the above HTML by using DOM methods.
'use strict';
const ShowImages = (images) => {

  images.forEach((image)=>{

// Create elements with createElement()

    const li = document.createElement("li");
    const a = document.createElement("a");
    const h3 = document.createElement("h3");
    const img = document.createElement("img");
    const text = document.createElement("figcaption");
    const figure = document.createElement("figure");
    const header = document.createTextNode(image.mediaTitle);
// Add attributes with setAttribute()

    a.setAttribute('href','img/original/'+image.mediaUrl);
    img.setAttribute('src','img/thumbs/' + image.mediaThumb);


// Add elements with appendChild
    text.appendChild(h3);
    h3.appendChild(header);
    figure.appendChild(a);
    a.appendChild(img);
    figure.appendChild(text);
    li.appendChild(figure);

// When the above HTML is ready append it to the <ul> element

    const ul = document.querySelector('ul');
    ul.appendChild(li);

  });

};


fetch('images.json').then((response)=>{

  //console.log(response);

  return response.json();

}).then((images)=>{
  //
  // console.log(images);
  ShowImages(images);

});