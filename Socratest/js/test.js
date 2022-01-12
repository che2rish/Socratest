const endPoint = 6;
let qidx = 0;

function goNextQ(){
  goNext(++qidx);
}

function goNext(qidx){
  if(qidx === 5){
    move_result();
  }
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qidx].q;
  qidx++;
  console.log(qidx);
  nextImg(qidx);
  nextText();
  
  var status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint) * (qidx+1)+ '%';
}

function nextImg(qidx){
  // var Q_Img = document.createElement('img');
  var imgDiv = document.querySelector('#Q_Img');
  var imgURL = '../img/Q' + qidx + ".png"; 

  // Q_Img.src = imgURL;
  // Q_Img.alt = qidx;
  // Q_Img.classList.add('img-fluid');
  // imgDiv.appendChild(Q_Img);
  // <img src = "../img/Q1.png" alt = "1" class = "img-fluid" ></img>
  imgDiv.innerHTML = "<img src = " +imgURL+" alt = "+qidx+ " class = 'Q_Img img-fluid'></img>";
}

function nextText(){
  var textBox = document.querySelector('.answer');
  textBox.innerHTML = "<input type='text' name='answer' class='col-lg-6 col-md-8 col-sm-10 col-12 my-3 mx-auto'></input>"
}
