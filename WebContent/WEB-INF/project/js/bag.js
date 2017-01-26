window.onload=function(){
};

  function dragStart(event){
    var id = event.dataTransfer.getData("text/plain");

		//drag를 실행못하게 하는 이벤트
		//event.preventDefault();이게 호출되면 기본 이벤트가 발생하지 않는다.

		//dataTransfer: , setData: 데이타를 드래그에 저장? 세팅?
		//text/plain? , event.target 즉 내가 잡고 있는 데이터를 말함.
		event.dataTransfer.setData("text/plain",event.target.id);
  }

	//드래그 하고 위에 올렸을 때 이벤트
	function dragOver(event){
    event.preventDefault();
	}
  //마우스 오버 하면 id나옴
  var idx;
  function mouseover(){

  }

// 드래그 오버했을때  오버한 곳의 id알아내기
	//떨궜을때 이벤트
	function drop(event){
		//기본 이벤트 발생 안함
		event.preventDefault();

		//데이터를 꺼내옴
		var id = event.dataTransfer.getData("text/plain");
		var img = document.getElementById(id).cloneNode();
    var priv_img= document.getElementById(id)
    var real_id = event.target.id;
		//데이터를 어펜드함
    document.getElementById(real_id).appendChild(priv_img);

	}
