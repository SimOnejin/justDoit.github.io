// script.js

// 페이지 로드 완료 이벤트 처리
document.addEventListener("DOMContentLoaded", function () {
  var icon = document.getElementById("language");
  var content1 = document.getElementById("Nihongo");
  var content2 = document.getElementById("Kankokugo");

  // 아이콘 클릭 이벤트 처리
  icon.addEventListener("click", function () {
    if (content1.classList.contains("hidden")) {
      content1.classList.remove("hidden");
      content2.classList.add("hidden");
    } else {
      content1.classList.add("hidden");
      content2.classList.remove("hidden");
    }
  });
});
