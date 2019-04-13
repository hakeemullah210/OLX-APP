
function searchFunc(){
  
    var input, filter, ul, li, a, i;
    input = document.getElementById('searchtxt');
    filter = input.value.toUpperCase();
    ul = document.getElementById('category');
    li = ul.getElementsByTagName('div');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName('span')[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        }

        else {
            li[i].style.display = 'none';
        }
    }

}


function renderBikes(){
    // alert('bikes');
    let category=[];

firebase.database().ref('ALL CATEGORY'+'/'+'Bikes').once('value',(snap)=>{
    let data=snap.val();
    
    console.log(data);

    // for(var key1 in data){
    //     // console.log()
    //     for(var key2 in data[key1]){
    //         // data[key1][key2].adkey=key2;
    //         category.push(data[key1][key2])
    //     }
    // }
    for(var key1 in data){
        category.push(data[key1]);
    }
    console.log(category);

  
})
.then(()=>{
  // console.log('then wala'+category[0].price);
  
  for(var k=0;k<category.length;k++){
    // console.log(category[k].name);
    // console.log(category[k].price);
    document.getElementById('category').innerHTML+=`
    <div class="card" id="categoryClass" style="width: 16rem;">
      <img class="card-img-top" src="${category[k].snapURL}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Rs ${category[k].price}</h5>
  
        
        
        <span class="card-text" ><p>${category[k].name}</p></span> <br>
                 
        <a href="#" class="btn btn-primary">Details...</a>
        <button class="btn btn-danger"  onclick="letsChat('${category[k].pushKey}','${category[k].userUID}')">Let's Chat</button>
      </div>
    </div>
    `

}
})
.catch((err)=>{
  console.log(err.message);
})


    
  }


//-------------------catergory of cars----------------


function renderCars(){
    // alert('bikes');
    let category=[];

firebase.database().ref('ALL CATEGORY'+'/'+'Cars').once('value',(snap)=>{
    let data=snap.val();
    
    console.log(data);

    // for(var key1 in data){
    //     // console.log()
    //     for(var key2 in data[key1]){
    //         // data[key1][key2].adkey=key2;
    //         category.push(data[key1][key2])
    //     }
    // }
    for(var key1 in data){
        category.push(data[key1]);
    }
    console.log(category);

  
})
.then(()=>{
  // console.log('then wala'+category[0].price);
  
  for(var k=0;k<category.length;k++){
    // console.log(category[k].name);
    // console.log(category[k].price);
    document.getElementById('category').innerHTML+=`
    <div class="card" id="categoryClass" style="width: 16rem;">
      <img class="card-img-top" src="${category[k].snapURL}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Rs ${category[k].price}</h5>
  
        
        
        <span class="card-text" ><p>${category[k].name}</p></span> <br>
                 
        <a href="#" class="btn btn-primary">Details...</a>
        <button class="btn btn-danger"  onclick="letsChat('${category[k].pushKey}','${category[k].userUID}')">Let's Chat</button>
      </div>
    </div>
    `

}
})
.catch((err)=>{
  console.log(err.message);
})


    
  }



//-----------mobiles data---------------


function renderMobiles(){
// alert('bikes');
let category=[];

firebase.database().ref('ALL CATEGORY'+'/'+'Mobiles').once('value',(snap)=>{
    let data=snap.val();
    
    console.log(data);

    // for(var key1 in data){
    //     // console.log()
    //     for(var key2 in data[key1]){
    //         // data[key1][key2].adkey=key2;
    //         category.push(data[key1][key2])
    //     }
    // }
    for(var key1 in data){
        category.push(data[key1]);
    }
    console.log(category);

  
})
.then(()=>{
  // console.log('then wala'+category[0].price);
  
  for(var k=0;k<category.length;k++){
    // console.log(category[k].name);
    // console.log(category[k].price);
    document.getElementById('category').innerHTML+=`
    <div class="card" id="categoryClass" style="width: 16rem;">
      <img class="card-img-top" src="${category[k].snapURL}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Rs ${category[k].price}</h5>
  
        
        
        <span class="card-text" ><p>${category[k].name}</p></span> <br>
                 
        <a href="#" class="btn btn-primary">Details...</a>
        <button class="btn btn-danger"  onclick="letsChat('${category[k].pushKey}','${category[k].userUID}')">Let's Chat</button>
      </div>
    </div>
    `

}
})
.catch((err)=>{
  console.log(err.message);
})


}


function renderElectronics(){
    let category=[];

    firebase.database().ref('ALL CATEGORY'+'/'+'Electronic & Appliances').once('value',(snap)=>{
        let data=snap.val();
        
        console.log(data);
    
        // for(var key1 in data){
        //     // console.log()
        //     for(var key2 in data[key1]){
        //         // data[key1][key2].adkey=key2;
        //         category.push(data[key1][key2])
        //     }
        // }
        for(var key1 in data){
            category.push(data[key1]);
        }
        console.log(category);
    
      
    })
    .then(()=>{
      // console.log('then wala'+category[0].price);
      
      for(var k=0;k<category.length;k++){
        // console.log(category[k].name);
        // console.log(category[k].price);
        document.getElementById('category').innerHTML+=`
        <div class="card" id="categoryClass" style="width: 16rem;">
          <img class="card-img-top" src="${category[k].snapURL}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Rs ${category[k].price}</h5>
      
            
            
            <span class="card-text" ><p>${category[k].name}</p></span> <br>
                     
            <a href="#" class="btn btn-primary">Details...</a>
            <button class="btn btn-danger"  onclick="letsChat('${category[k].pushKey}','${category[k].userUID}')">Let's Chat</button>
          </div>
        </div>
        `
    
    }
    })
    .catch((err)=>{
      console.log(err.message);
    })
    
}






function letsChat(chatKey,userUID){
try{
    
  if(firebase.auth().currentUser.uid){
    console.log('please login first');
  }

  window.location='../pages/chat.html'
  localStorage.setItem('chatKey',chatKey);
  localStorage.setItem('userUID', userUID); 
  // alert('Key of present product'+chatKey+'posted by'+userUID);
}
catch(e){
  alert('Please login first!');
    console.log('Please login first!\n'+e.message);
}

}