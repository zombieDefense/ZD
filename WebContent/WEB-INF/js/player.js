
/* 주인공 객체 */
var Player = {
	health : 200,			// 에너지
	attack : 1,				// 공격력
	attack_speed : 0.5,		// 공격속도
	speed : 10,				// 이동속도
	imgPath : "../img/apeach.gif",	// 이미지경로
	positionX : 0,			// X좌표
	positionY : 0,			// Y좌표
	// 현재 객체 상태 출력 메서드
	getStatus : function(){
		return "현재 상태 : HP "+this.health+
					", 공격력 "+this.attack+
					", 공격속도 "+this.attack_speed+
					", 이동속도 "+this.speed+
					", 위치 "+this.positionX+"/"+this.positionY;
	}
}

/* 좀비 객체 */
var Zombie = {
	health : 100,			// 에너지
	attack : 10,			// 공격력
	attack_speed : 1,		// 공격속도
	speed : 5,				// 이동속도
	imgPath : "../img/apeach.gif",	// 이미지경로
	positionX : 0,			// X좌표
	positionY : 0,			// Y좌표
	// 현재 객체 상태 출력 메서드
	getStatus : function(){
		return "현재 상태 : HP "+this.health+
					", 공격력 "+this.attack+
					", 공격속도 "+this.attack_speed+
					", 이동속도 "+this.speed+
					", 위치 "+this.positionX+"/"+this.positionY;
	}
}

/* 좀비 생성객체(팩토리 패턴) */
function createZombie(health, attack, attack_speed, speed, imgPath) {
	var object = {};
	object.health = health;
	object.attack = attack;
	object.attack_speed = attack_speed;
	object.speed = speed;
	object.imgPath = imgPath;
	object.positionX = 0,
	object.positionY = 0,
	
	object.getStatus = function () {
		alert("현재 상태 : HP "+this.health+
				", 공격력 "+object.attack+
				", 공격속도 "+object.attack_speed+
				", 이동속도 "+object.speed+
				", 위치 "+object.positionX+"/"+object.positionY);
	}
	return object;
}


/*
 * 초기화 작업
 */
$(document).ready(function(){
	var status = Player.getStatus();
	$("#player").attr("src", "../img/apeach.gif");
	alert(status);
});
