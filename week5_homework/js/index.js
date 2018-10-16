//1. Use a public API
//2. Update the DOM based on the response from the API

$(function(){
    //Connect to the database
    var response = firebase.database();
    var data = response.ref('users');

// table.set({user:Emma Nguyen, email:t.emmanguyen@gmail.com});
// table.on('value', function(latestTable){
//     users = latestTable.val();
//     $('#users').html("Welcome, " + message.user);
// });

    // Firebase Event Listeners
    data.on('value', function(response) {
        var users = response.val(); // This is an OBJECT

        $('#user-board').html(''); // Start with a clean message board

        // Iterate messages object
        for(key in users)
        {
            var user = users[key];
            var s = '';

            s += '<li data-id="' + key + '" class="list-group-item">';
            s += '  <h3>' + user.name + '</h3>';
            s += '  ' + user.email + ' ';
            s += '  <i class="fa fa-trash float-right delete"></i>';
            s += '  <i class="fa fa-thumbs-up float-right ' + (user.approved==="yes"?'text-success':'') + '"></i>';
            s += '  <i class="fa fa-thumbs-down float-right '  + (user.approved==="no"?'text-danger':'') + '"></i>';
            s += '</li>';

            $('#user-board').append(s);
        }

    });

  // jQuery Event Listeners
  $('#add-user').on('click', function() {
        //Create an object
        var user = {
            'name': $('#name').val(),
            'email': $('#email').val(),
            'approved': "undecided"
        };

        //Push the object into the array
        data.push(user);
        //
        //Reset the input
        $('#content').val('')
  });

  //Prevent Form Submission
  $('#formReservation').on('submit', function(event){
      event.preventDefault();
  })

  $('#user-board').on('click', '.delete', function (event) {
    var id = $(this).parent().data('id');
    response.ref('users/' + id).remove();
  });

  $('#user-board').on('click', '.fa-thumbs-up', function (event) {
    approve($(this), 'yes');
  });

  $('#user-board').on('click', '.fa-thumbs-down', function (event) {
    approve($(this), 'no');
  });

  function approve(button, decision)
  {
    if(button && decision)
    {
      var id = button.parent().data('id');
      response.ref('users/' + id).update({
        approved: decision
      });
    }
  }

});
