$(() => {
  // 問1
  console.log("伊賀将之");

  // 問2
  $("#q1Button").on("click", () => {
    $("#myName").css("color", "red");
  });

  // 問3
  $("#q2Button").on("click", () => {
    alert($("#age").val());
  });

  // 問4
  $("#q3Button").on("click", () => {
    $("#q3Button").prop("disabled", true);
  });

  // ボーナス問題
  $("#java").hide();
  $("#javaScript").hide();

  $("#qBonusSelect").on("change", () => {
    if ($("#qBonusSelect").val() === "1") {
      $("#java").show();
      $("#javaScript").hide();
    } else if ($("#qBonusSelect").val() === "2") {
      $("#java").hide();
      $("#javaScript").show();
    } else {
      $("#java").hide();
      $("#javaScript").hide();
    }
  });

  //別解答==================================================
  // ボーナス問題(別解答)
  $("#java").css("display", "none");
  $("#javaScript").css("display", "none");

  $("#qBonusSelect").on("change", () => {
    if ($("#qBonusSelect").val() === "1") {
      $("#java").css("display", "block");
      $("#javaScript").css("display", "none");
    } else if ($("#qBonusSelect").val() === "2") {
      $("#java").css("display", "none");
      $("#javaScript").css("display", "block");
    } else {
      $("#java").css("display", "none");
      $("#javaScript").css("display", "none");
    }
  });
});
