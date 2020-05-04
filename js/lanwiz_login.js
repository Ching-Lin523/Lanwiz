$(function(){
  
    // 開啟 Modal 彈跳視窗
    $(".btn_modal").on("click", function(){
      $("div.overlay").addClass("-on");
    });
    
    // 關閉 Modal
    $(".btn_modal_close").on("click", function(){
      $("div.overlay").addClass("-opacity-zero");
      // $("div.overlay").show();
      
      // 設定隔一秒後，移除相關 class
      setTimeout(function(){
        $("div.overlay").removeClass("-on -opacity-zero");
        $("div.overlay").hide();
      }, 1000);
    });
    
  });


  function show_hide() {
    var login = document.getElementById("container1");
    var signup = document.getElementById("container2");
    var copyright = document.getElementById("copyright");
  
    if (login.style.display === "none") {
        login.style.display = "block";  //lonin出現
        document.getElementById("username").value="";
        document.getElementById("password").value="";
        signup.style.display = "none";  //signup消失
        copyright.style.margin = "200px 0px 0px 0px";
    } else {
        login.style.display = "none";   //login消失
        signup.style.display = "block"; //signup出現
        signup.style.visibility="visible";
        copyright.style.margin = "200px 0px 0px 0px";
     
        document.getElementById("fullname").value="";
        document.getElementById("username2").value="";
        document.getElementById("password2").value="";
        document.getElementById("comfirm_password").value="";
    }
}