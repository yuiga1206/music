$(function () {

  $.ajax({
    type: 'GET', // GET or POST
    url: 'music.php', // 取得するファイルpath
    success: function (data) {  //取得成功のとき
      playMusic(data);
    },

    error: function () {       //取得失敗のとき
      console.log('取得失敗');
    }
  });

  function playMusic($a) {
    var $src = $a;
    $('#audio').attr('src', $src);  // src属性を動的に追加
    var $audio = $('#audio').get(0);  // getelementbyid
    $audio.play();
    if ($audio.paused) {
      $('body').append('<p>停止中</p>');
      $('body').on('tac')
    } else {
      $('body').append('<p>再生中</p>');
    }
      setTimeout(function () {
        $audio.removeAttribute("src");  // src属性を削除
      }, 10);
      setTimeout(function () {
        $audio.pause();  // 任意の秒数後に再生＆読み込みの停止
        $audio.load();
        // }, 60000);
      }, 10000);
  }


});