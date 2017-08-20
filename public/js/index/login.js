/**
 * Created by Jerry on 2017/8/20.
 */


define(["jquery", "jquery_cookie"], function ($) {
  $(function () {
    $("#login").click(function () {
      $.ajax({
        url: "/api/login",
        type: "post",
        data: $("#formData").serialize(),
        success: function (info) {
          // console.log(info);
          if (info.code === 200) {
            var userinfo = JSON.stringify(info.result);
            $.cookie("userinfo", userinfo, {path: "/", expires: 1});
            location.href = "/";
          }
        }
      })
      return false;
    });
  });
})