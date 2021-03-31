// Slider
$(".slider-block").slick(  {
   dots:true,
   dotsClass:'slick-dots',
   arrows:false,
   autoplay:true,
   autoplaySpeed:2000,
   adaptiveHeight: true,
   pauseOnDotsHover:true,
   // centerMode: true,
   // centerPadding: '60px',
   // slidesToShow: 1,
   responsive: [
     {
         breakpoint: 800,
         settings: {
           arrows:false,
           centerMode:true,
           centerPadding:'10px',
           slidesToShow:1,
         }
       },
       {
         breakpoint: 500,
         settings: {
           arrows:false,
           centerMode:true,
           centerPadding:'20px',
           slidesToShow:1,
         }
       }
     ]
})


// $('#apoint-form').on("submit", function () {
//   var action = $(this).attr('action');
//   $("#message").slideUp(750, function () {
//       $('#message').hide();
//       $('#asubmit')
//           .after('<img src="images/ajax-loader.gif" class="loader" />')
//           .attr('disabled', 'disabled');
//       $.post(action, {
//               name: $('#name').val(),
//               email: $('#email').val(),
//               service: $('#service').val(),
//               number: $('#number').val(),
//               date: $('#date').val(),
//               time: $('#time').val(),
//               comments: $('#comments').val()
//           },
//           function (data) {
//               document.getElementById('amessage').innerHTML = data;
//               $('#amessage').slideDown('slow');
//               setTimeout(function () {
//                   $('#amessage').slideUp('slow');
//                   console.log('SetTime');
//               }, 2000)

//               $('#apoint-form img.loader').fadeOut('slow', function () {
//                   $(this).remove()
//               });
//               $('#submit').removeAttr('disabled');
//               if (data.match('success') != null)
//                   $('#apoint-form').show('slow');
//           }
//       );

//   });
//   return false;
// });


// contact form

      // const constraints = {
      //     name: {
      //         presence: { allowEmpty: false }
      //     },
      //     email: {
      //         presence: { allowEmpty: false },
      //         email: true
      //     },
      //     message: {
      //         presence: { allowEmpty: false }
      //     }
      // };

      // const form = document.getElementById('contact-form');

      // form.addEventListener('submit', function (event) {
      //     const formValues = {
      //         name: form.elements.name.value,
      //         email: form.elements.email.value,
      //         message: form.elements.message.value
      //     };

      //     const errors = validate(formValues, constraints);

      //     if (errors) {
      //         event.preventDefault();
      //         const errorMessage = Object
      //             .values(errors)
      //             .map(function (fieldValues) {
      //                 return fieldValues.join(', ')
      //             })
      //             .join("\n");

      //         alert(errorMessage);
      //     }
      // }, false);
