/*************************************************************
 
  건물정보

**************************************************************/

$(document).ready(function () {
  // 마우스가 .pc_menu 전체에 올라가면 모든 .dep2 드롭다운 메뉴 표시
  $('.pc_menu').on('mouseenter', function () {
    $('.dep2').stop(true, true).slideDown(200);
  });

  // 마우스가 메뉴 전체를 벗어나면 모든 .dep2 드롭다운 메뉴 숨김
  $('.pc_menu').on('mouseleave', function () {
    $('.dep2').stop(true, true).slideUp(200);
  });
});







