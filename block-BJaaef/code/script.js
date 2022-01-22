let peoplesNames = got.houses.reduce((acc,cv) =>{
    
    acc.push(cv.people.filter((obj) => {
       return obj.name;
     }));  
    return acc;
} ,[]).flat(Infinity);

let div = document.querySelector('div');
peoplesNames.forEach((char) =>{
    let ul = document.createElement('ul');
let img = document.createElement('img');
    img.src =char.image;
let cite = document.createElement('cite');
    cite.innerText =char.name;
let div1 =document.createElement('div')
    div1.classList.add('img-name')  ;  
 let p = document.createElement('p');
 p.innerText = char.description; 
 let a1 =document.createElement('a');
    a1.innerText="Learn More !"
   a1.href = char.wikiLink;
   div1.append(img ,cite);

   ul.append(div1 ,p ,a1);
div.append(ul);

});



