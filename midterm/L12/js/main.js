let div_big = document.querySelector('.big');
let div_big_img = document.querySelector('.big .img img');
div_big.style.display = 'none';
div_big.onclick = function(){
	div_big.style.display = 'none';
	div_big_img.src = '';
};

for(let i=1;i<=30;i++){
  document.querySelector('.photo'+i).onclick = function(){
  div_big_img.src = document.querySelector('.photo'+i+' img').src;
  div_big.style.display = 'block';
 }
}
