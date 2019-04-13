


function facebookAuth(){
    var provider = new firebase.auth.FacebookAuthProvider();

    provider.setCustomParameters({
        'display': 'popup'
      });

      

      firebase.auth().signInWithPopup(provider).then(function(result) {
        //   console.log(result)
        //   console.log(result.user)
        let user=result.user;
        console.log(user.uid);
        console.log(user.displayName);
        let userData={
            name:user.displayName,
            email:user.email,
            photo:user.photoURL,
            uid:user.uid
        }
        var displayName=user.displayName;
        console.log(displayName);

        
       localStorage.setItem('displayName',displayName);
       localStorage.setItem('photoURl',user.photoURL);
      //  localStorage.setItem('userUID',user.uid);
        // console.log(userData);
        

        firebase.database().ref('/').child(`User Detail/${userData.uid}`).set(userData)
        

// alert('ji');

      })
      .then(()=>{

        
        // alert(displayName);
        // alert('here')
      
          window.location="../index.html"
            
          
//           var user = firebase.auth().currentUser;
// if (!user) {
//   // console.log(user+'signed in');
// } else {
//   // No user is signed in.
//   console.log(user+'not signed in');
//   let loginBtn=document.getElementById('loginBtn').style.backgroundColor='red';
// }
         
        
      })
      
        
      
      .catch(function(error) {
        console.log(error.message)
      });

}



function logoutFunc(){
  firebase.auth().signOut()
  .then(()=>{
    console.log('sign out');
    window.location='./index.html'
    alert('Sign out successfully');
  })
  .catch(()=>{
    alert('Not signing out');
  })
}




