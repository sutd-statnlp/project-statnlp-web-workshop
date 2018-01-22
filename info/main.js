var config = {
  apiKey: "AIzaSyBsSK5PakPF3As3JN0E3Wm27VUsnGc7srw",
  authDomain: "wsregistration.statnlp.tk",
  databaseURL: "https://statnlp-ws.firebaseio.com",
  projectId: "statnlp-ws",
  storageBucket: "statnlp-ws.appspot.com",
  messagingSenderId: "591724988616"
};
firebase.initializeApp(config);


var database = firebase.database();
var googleProvider = new firebase.auth.GoogleAuthProvider();

$('#m-btn-signout').hide();

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    loadUserSignIn(user);
  } else {
    loadUserSingOut();
  }
});

function loadData() {
  database.ref('users').on('value', function (snapshot) {
    if (snapshot) {
      loadArrayFromSnapshot(snapshot);
      $('#m-sec-info').hide();
      $('#m-sec-table').show();
    }
  });
}

function appendTableRow(user) {
  $('#m-tbody').append(
    '<tr>' +
    '<td>' + user.firstName + '</td>' +
    '<td>' + user.lastName + '</td>' +
    '<td>' + user.email + '</td>' +
    '<td>' + formatDate(user.date) + '</td>' +
    '<td>' + (user.role === 'other' ? user.customRole : user.role) + '</td>' +
    '</tr>'
  );
}

function formatDate(date) {
  return date.toString().split('GMT')[0];
}

function loadArrayFromSnapshot(snapshot) {
  $('#m-tbody').empty();
  snapshot.forEach(function (snapshot) {
    var childKey = snapshot.key;
    var childData = snapshot.val();
    childData['date'] = new Date(childKey * 1);
    appendTableRow(childData);
  });
  $('#table').DataTable();
}

function signIn() {
  firebase.auth().signInWithPopup(googleProvider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    loadUserSignIn(user);
    // ...
  }).catch(function (error) {
    console.log(error);
  });

}

function loadUserSignIn(user) {
  $('#m-btn-signin').hide();
  $('#m-btn-signout').show();
  $('#m-btn-signout').text(user.email + ' - Sign Out');
  loadData();

}

function loadUserSingOut() {
  $('#m-btn-signin').show();
  $('#m-btn-signout').hide();
  $('#m-sec-table').hide();
  $('#m-sec-info').show();
  $('#m-tbody').empty();
}

function signOut() {
  firebase.auth().signOut().then(function () {
    loadUserSingOut();
  }).catch(function (error) {
    console.log(error);
  });
}