<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <title></title>
  <style>
    .btn {
      border: solid 1px;
      border-color: black;
      background-color: white;
      padding: 10px 20 px;
    }
  </style>
  
  <script>
    function fnOff() {
      $(".btn").css("border-color","white");
      $(".btn").css("color","white");
      $(".btn").css("background-color","black");
      $(".body").css("background-color","black");
    }
    function fnOn() {
      $(".btn").css({"border-color":"black",
        "color":"black",
        "background-color","white")});
      $(".body").css("background-color","white");
    }
  </script>
</head>

<body>
  <input type="button" value="Lights off" class = "btn" onclick="fnOff();">
  <input type="button" value="Lights on" class = ="btn" onclick="fnOn();">
</body>

</html>
