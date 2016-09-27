$(document).ready(function() {

  var refreshToken = function(callback) {
    console.log('refreshToken');
    var token = {
      token : $('#refreshToken').val()
    }
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/refresh", true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var responseJSON = JSON.parse(this.responseText);
        $('#accessToken').val(responseJSON.access_token);
        $('#refreshToken').val(responseJSON.refresh_token);
        if(callback) callback();
      }
    };
    xhr.send(JSON.stringify(token));
  };

  var postannotation = function() {
    console.log('postannotation');
    var accessToken = $('#accessToken').val();
    var annotation = $('#annotation').val();

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://annotations.dev.organicity.eu", true);
    xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (this.readyState == 4) {
        if(this.status == 201) {
          alert('Annotation created successfully!');
        } else {
          refreshToken(postannotation);
        }
      }
    };
    xhr.send(annotation);
  };


  $('#send').click(function() {
    postannotation();
  });

  $('#refresh').click(function() {
    refreshToken();
  });

});
