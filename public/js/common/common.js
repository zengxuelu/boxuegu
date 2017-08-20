/**
 * Created by Jerry on 2017/8/20.
 */

define(["jquery", "template", "jquery_cookie"], function ($, template) {
  
  $(function () {
    
   
    
    //共用的侧边栏
    if (location.pathname !== "/login") {
      //判断用户有没有PHPSESSID，如果有，说明登录了，如果没有，跳转到login页面
      if ($.cookie("PHPSESSID")) {
        //设置头像和名字
        var info = JSON.parse($.cookie("userinfo"));
        var html = template("uesrinfo-tpl", info);
        $("#userinfo").html(html);
      } else {
        location.href = "/login";
      }
      
    }
    
    //退出功能
    $("#logout").click(function () {
      $.ajax({
        type: "post",
        url: "/api/logout",
        success: function (info) {
          if (info.code == 200) {
            $.removeCookie("userinfo", {path: "/"});
            location.href = "/login";
          }
        }
      });
    });
    
  })
  
});
