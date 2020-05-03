/*selectbox-dropdown Menu*/
$('.selectbox-dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.selectbox-dropdown-menu').slideToggle(300);
    });
    $('.selectbox-dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.selectbox-dropdown-menu').slideUp(300);
    });
    $('.selectbox-dropdown .selectbox-dropdown-menu li').click(function () {
        $(this).parents('.selectbox-dropdown').find('span').text($(this).text());
        $(this).parents('.selectbox-dropdown').find('input').attr('value', $(this).attr('id'));
    });
/*End selectbox-dropdown Menu*/


$('.selectbox-dropdown-menu li').click(function () {
  var input = '<strong>' + $(this).parents('.selectbox-dropdown').find('input').val() + '</strong>',
      msg = '<span class="msg">Hidden input value: ';
//   $('.msg').html(msg + input + '</span>');
}); 