$(function(){

  function buildHTML(message){
    if (message.image){
      var html = 
        `<div class= "main-chat__message-list__detail">
          <div class = "main-chat__message-list__detail__content">
            <div class = "main-chat__message-list__detail__content--name">
              ${message.user_name}
            </div>
            <div class = "main-chat__message-list__detail__content--time">
              ${message.created_at}
            </div>
          </div>   
          <div class = "main-chat__message-list__detail--message">
            <p class = "main-chat__message-list__detail--message__content"> 
              ${message.content}
            </p>
            <img src = ${message.image}>
          </div>
        </div>`
      return html;
    } else {
      var html = 
        `<div class= "main-chat__message-list__detail">
          <div class = "main-chat__message-list__detail__content">
            <div class = "main-chat__message-list__detail__content--name">
              ${message.user_name}
            </div>
            <div class = "main-chat__message-list__detail__content--time">
              ${message.created_at}
            </div>
          </div>   
          <div class = "main-chat__message-list__detail--message">
            <p class = "main-chat__message-list__detail--message__content"> 
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var url = $(this).attr('action');
    var formData = new FormData(this);
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $(".main-chat__message-list").append(html);
      $(".main-chat__message-list").animate({ scrollTop: $(".main-chat__message-list")[0].scrollHeight});
      $(".form--btn").prop("disabled", false);
      $("form")[0].reset();
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    });
  });
});