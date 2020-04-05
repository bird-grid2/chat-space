$(function(){

  function buildHTML(user){
    var html = `
              <div class ='chat-group-user clearfix'>
                <p class='chat-group-user__name'>${user.name}</p>
                <div class='user-search-add chat-group-user__btn chat-group-user__btn--add' data-user-id='${user.id}' data-user-name='${user.name}'>追加</div>
              </div>`;
   $('#user-search-result').append(html);
  }

  function ErrMsgToHTML(){
    var html = `
              <div class ='chat-group-user clearfix'>
                <p class='chat-group-user__name'>ユーザーが見つかりません</p>
              </div>`;

    $('#user-search-result').append(html);
  }

  function addMember(result){
    var html = `
              <div class='chat-group-user'>
                <input name='group[user_ids][]' type='hidden' value='${result.userId}'>
                <p class='chat-group-user__name'>${result.userName}</p>
                <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
              </div>`;

    $('#chat-group-users').append(html)
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
      $('#user-search-result').empty();
      if (users.length !== 0){
        users.forEach(function(user){
          buildHTML(user);
        });
      } else if (input.length == 0){
        return false;
      } else {
        ErrMsgToHTML();
      }
    })  
    .fail(function(){
      alert('ユーザー検索に失敗しました');
    })
  });
  $(document).on('click', ".user-search-add.chat-group-user__btn.chat-group-user__btn--add", function(){
    const result = $(this).data();
    $(this).parent().remove();
    addMember(result);
  });
  $(document).on('click', ".user-search-remove.chat-group-user__btn.chat-group-user__btn--remove.js-remove-btn", function(){
     $(this).parent().remove();
  });
});