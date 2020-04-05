$(function(){

  function buildHTML(with_argument){
    var html = `
              <div class ='chat-group-user clearfix'>
                <p class='chat-group-user__name'>ユーザー名</p>
                <div class='user-search-add chat-group-user__btn chat_group-user__btn--add" data-user-id='ユーザーのid' data-user-name='ユーザー名'>追加</div>
              </div>
              `
  }

  function buildHTML(without_argument){
    var html = `
              <div class ='chat-group-user clearfix'>
                <p class='chat-group-user__name'>ユーザー名が見つかりません</p>
              </div>
              `
  }

  $('#user-search-field').on('keyup', function(){
    var input = $(this).val();
    $.ajax({
      url: '/users',
      type: 'GET',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users){
      var users = 
      $().empty();
      if (users !== ""){
        var html = buildHTML(with_argument);
        return html;
      } else {
        var html = buildHTML(without_argument);
        return html;
      }


      console.log('成功です')
    })
    .fail(function(){
      console.log('失敗です')
    })
  });
});