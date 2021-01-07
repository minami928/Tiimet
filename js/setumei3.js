window.onload=function(){
  let nextBtn=document.getElementById("next")


  let  count=0;

  nextBtn.onclick=function(event){
      let nextCount;
      if (count<sliderItems.length-1) {
          // 次に表示する画像の番号
          nextCount=count+1;
      }
      else{
          nextCount=count-2;
      }
      sliderItems[count].style.display="none";
      // 次の画像を表示する
      sliderItems[nextCount].style.display="block";
      // 現在表示している画像の番号を更新
      count=nextCount;
  }
}
