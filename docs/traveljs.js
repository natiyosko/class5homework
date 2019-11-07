

let destTemplate = '<tr><td>{{code}}</td><td>{{name}}</td><td>{{price}}</td></tr>'
let template = `<tr><td>{{code}}</td><td>{{name}}</td><td>{{id}}</td><td>{{tid}}</td><td>{{passengers}}</td><td>{{total}}</td></tr>`
let b = 1;
let orders = [];  

let destenation = function(code,name,price){
        this.code = code;
        this.name = name;
        this.price = price;
    }
    console.log(destenation);
let arrdestination = [
    new destenation(1,'Amrica',600),
    new destenation(2,'England',700),
    new destenation(3,'Germania',800),
    new destenation(4,'Australia',900)

]
let render = function(t,d){
    let arr = t.split('{{');
    for (let i = 1; i < arr.length; i++) {
        let frag = arr[i];
       let fr = frag.split('}}');
       arr[i] = d[ fr[0] ] + fr[1];
        }
        return arr.join('')
}
console.log(render);
let tbody = document.querySelector('.table-destenations tbody')
    for (let i = 0; i < arrdestination.length; i++) {
        const s = arrdestination[i];
        tbody.innerHTML += render(destTemplate,s);
        
    }
    console.log(tbody); 
 

function order(){
    let aa = arrdestination.find(x =>{
        return x.code == document.getElementById('input-Destination').value;
    })
     
  let code = b++;
  let name = document.getElementById('input-name').value;
  let id = document.getElementById('input-ID').value;
  let tid = aa.name;
  let passengers = document.getElementById('input-Passengers').value;
  let total = aa.price * document.getElementById('input-Passengers').value;
  

  let mm = document.querySelector('.table-orders tbody')

      mm.innerHTML += render(template,{code,name,id,tid,passengers,total})
      orders.push({code,name,id,tid,passengers,total})
  }
 

        function searchname(){
    
    let sr = orders.filter(y => {
        return y.name == document.getElementById('input-YourName').value;
    })
     
    
    
let tbody = document.querySelector('.table-YourName tbody')
   for (let i = 0; i < orders.length; i++) {
     if(sr.name == y.name){
         tbody.innerHTML += render(template,sr);
}
       
   } 
        
    } 


