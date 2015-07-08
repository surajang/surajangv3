var slotCount;
var slotPosition = 1;
var thisSlot;
var nextSlot;

function initSlot() {
  // initSlot(): 배너 총 갯수와 각 slot의 이미지 데이터 불러오는 처리 수행. !! 반드시 turnSlot보다 먼저 호출합니다!!
  var i;
  var src;
  slotCount = $("#bannerbox").attr("data-slotcount");
  for(i = 1; i <= slotCount; i++){
    src = $("#slot"+i).attr("data-banner-img");
    $("#slot"+i).css("background","url("+src+")").css("background-position","center center").css("background-repeat","no-repeat");
  }
}

function turnSlot() {
  //turnSlot(): 배너이미지를 순차적으로 Crossfade하여 순환시킴
  //전환할 슬롯 2개를 thisSlot, nextSlot에 세팅. + Slot Loop처리
  thisSlot = "#slot" + slotPosition;
  if(slotPosition >= slotCount) {
    nextSlot = "#slot1";
    slotPosition = 0;
  } else { nextSlot = "#slot" + (slotPosition + 1);}
  $(thisSlot).css("z-index","2").css("display","block");
  $(nextSlot).css("z-index","1").css("display","block");
  $(thisSlot).fadeOut("750", function(){$(this).css("z-index","0");});
  slotPosition++;
}

$(document).ready(function(){
  initSlot();
  setInterval(turnSlot, 5000);
});