/*
* Created by Binay- Signup / Login
* */
(function () {
  $('.form').find('input, textarea').on('keyup blur focus', function (e) {

    var $this = $(this),
      label = $this.prev('label');
    if (e.type === 'keyup') {
      if ($this.val() === '') {
        label.removeClass('active highlight');
      } else {
        label.addClass('active highlight');
      }
    } else if (e.type === 'blur') {
      if ($this.val() === '') {
        label.removeClass('active highlight');
      } else {
        label.removeClass('highlight');
      }
    } else if (e.type === 'focus') {

      if ($this.val() === '') {
        label.removeClass('highlight');
      }
      else if ($this.val() !== '') {
        label.addClass('highlight');
      }
    }

    //check the login trigger

    $('#btnLogin').click(function () {
      login()
    });


  });

  $('.tab a').on('click', function (e) {
    e.preventDefault();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    target = $(this).attr('href');

    $('.tab-content > div').not(target).hide();

    $(target).fadeIn(600);

  });

  /*
  * Login function
  * */
  function login() {
    var sEmail = $('#txtLoginEmail').val();
    var sPassword = $('#txtLoginPassword').val();
    if ($.trim(sEmail).length === 0) {
      alert('Please enter valid email address');
      e.preventDefault();
    }
    if ($.trim(sPassword).length < 5) {
      alert('Password is small');
      e.preventDefault();
    }

    if (validateEmail(sEmail) && sPassword === '12345') {
      setTimeout(function () {
        window.location.href = './home.html';
      }, 1000);
    }
  }

  /*
  * function to validate email
  * */
  function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
      return true;
    }
    else {
      return false;
    }
  }
})();

