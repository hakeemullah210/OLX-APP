let chatKey=localStorage.getItem('chatKey');
let userUID=localStorage.getItem('userUID');
// alert(chatKey);
// alert(userUID);

document.getElementById("btn-send").addEventListener("click", () => {
    var text = document.getElementById("text");
    // var day = new Date();
    // var email = localStorage.getItem("email");
    var displayName=localStorage.getItem('displayName');
    // alert(displayName)
    var obj = {
      msg: text.value,
      displayName: displayName,
    //   dateTime: day.toUTCString()
    };
    firebase
      .database()
      .ref("Chat/"+userUID+'/'+chatKey+'/')
      .push(obj);
    document.getElementById("text").value = "";
  });
  
  firebase
    .database()
    .ref("Chat/"+userUID+'/'+chatKey+'/')
    .on("child_added", data => {
      var history =
        "<div><span id='medium'>" +
        data.val().displayName +
        ": </span><span id='big'>" +
        data.val().msg +
        "</span></div>";
      document.getElementById("chatHistory").innerHTML += history;
      var element = document.getElementById("chatHistory");
      element.scrollTo(0, element.scrollHeight);
    });