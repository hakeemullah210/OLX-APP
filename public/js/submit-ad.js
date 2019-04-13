
let ads;

function submitAd(){
    
    try{

        // if(firebase.auth().currentUser.uid){
        //     //-------
        // }

        // alert('');
    let catergory=document.getElementById('category').value;
    // alert(catergory);
    let name=document.getElementById('name').value;
    let description=document.getElementById('description').value;
    let model=document.getElementById('model').value;
    let year=document.getElementById('year').value;
    let price=document.getElementById('price').value;
    let pic=document.getElementById('pic').files[0];
    // let userUID=localStorage.getItem('userUID');
    console.log(pic);

            
    // alert(userUID);
    
    
    let userUID=firebase.auth().currentUser.uid;
    // console.log(catergory,name,description,model,year);
    // alert(userUID);
    let storageRef=firebase.storage().ref().child(`Product Images/ ${pic.name}`)
    console.log(storageRef);
    storageRef.put(pic)
    .then((snapshot)=>{
        snapshot.ref.getDownloadURL().then((snapURL)=>{
            
            console.log(snapURL);
            let pushKey=firebase.database().ref().push().key
            // alert(pushKey);
            localStorage.setItem('pushKey',pushKey);
             ads={
                catergory,
                name,
                pushKey,
                description,
                model,
                year,
                price,
                snapURL,
                userUID
            }
        
            console.log(ads);

            
           

            firebase.database().ref('/ALL CATEGORY/'+catergory+'/'+pushKey).set(ads)
            .then(()=>{
                alert('Ad Posted Successfully');
                window.location='./submit-ad.html'
            })  
            .catch((err)=>{
                console.log(err.message);
                // alert('Please first login',err);
            })
        })
        .catch((err)=>{
            console(err.message)
            // alert('Please first login',err);
        })

    })


    }
    catch(e){
        // alert('Please login first!');
        // alert('Please login first!\n'+e.message)
        alert('Please login first!');
    console.log('Please login first!\n'+e.message);
    }
}



