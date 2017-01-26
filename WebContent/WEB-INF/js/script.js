function MakeZombies(){
	if (HPgauge2 >= -80){

	var zombieLEVEL = parseInt(Math.random()*100+1);	// 좀비의 종류 결정

	var RandomCreateZombie =
		(zombieLEVEL<ran1)?zom01:
		(zombieLEVEL<ran2)?zom02:
		(zombieLEVEL<ran3)?zom03:
		(zombieLEVEL<ran4)?zom04:zom05; 	// 50, 65, 80, 90,
//	var zR = parseInt(Math.random()*3+1);				// SAMPLE 좀비마다 랜덤한 스피드를 부여
	var zR =
		(zombieLEVEL<ran1)?0.5:
		(zombieLEVEL<ran2)?1:
		(zombieLEVEL<ran3)?0.3:
		(zombieLEVEL<ran4)?1.5:0.2;

	var zX = parseInt(Math.random()*2000);				// 좀비의 매 생성 X축 좌표 1000
	var zY = parseInt(Math.random()*2000);				// 좀비의 매 생성 Y축 좌표 500
// 2000 1500
	var zD =
		(zombieLEVEL<ran1)?zombie_DMG1:			// 레벨 별 데미지 설정
		(zombieLEVEL<ran2)?zombie_DMG2:
		(zombieLEVEL<ran3)?zombie_DMG3:
		(zombieLEVEL<ran4)?zombie_DMG4:zombie_DMG5;

	var zombieWIDTH  =
		(zombieLEVEL<ran1)?80:			// 좀비 WIDTH 설정
		(zombieLEVEL<ran2)?80:
		(zombieLEVEL<ran3)?80:
		(zombieLEVEL<ran4)?110:300;

	var zombieHEIGHT =
		(zombieLEVEL<ran1)?120:			// 좀비 HEIGHT 설정
		(zombieLEVEL<ran2)?120:
		(zombieLEVEL<ran3)?120:
		(zombieLEVEL<ran4)?150:300;

	var zomHP =
		(zombieLEVEL<ran1)?100:					// 좀비 HP 설정
		(zombieLEVEL<ran2)?120:
		(zombieLEVEL<ran3)?250:
		(zombieLEVEL<ran4)?200:500;

	console.log("RandomCreateZombie :"+RandomCreateZombie);

	var zom = {
		SP:zR,							// 좀비 스피드 설정
		X:zX,							// X축 생성좌표
		Y:zY,							// Y축 생성좌표
		D:zD,							// 좀비 데미지 설정
		W:zombieWIDTH,					// 좀비 WIDTH
		H:zombieHEIGHT,					// 좀비 HEIGHT
		HP:zomHP,						// 좀비 HP 설정
		zom_photo:RandomCreateZombie	// 좀비별 사진 설정. zom01~05;
		}
	zombieLIST.push(zom);
	}
}

function realtime(){
		if (HPgauge2 >= -80)
		{
		update();
		draw_background();
		draw_background2();
		//fight();
		zombie_move();
		draw_zombies();
		draw_player();
		drawHP();
		drawHP2();

		moniter_clear();
		}
	if (HPgauge2 <= -80)
	died();
}

function  moniter_clear(){
//	ctx.clearRect(0, 0, 2000, 330);				// 상단 클리어
	ctx.clearRect(0, 750, 1600, 750);				// 하단 클리어
//	ctx.clearRect(0, 0, 370, 1500);				// 좌측 클리어
	ctx.clearRect(1200, 0, 900, 1500);			// 우측 클리어
}

function update() {
			var press = false;
			if (keyPressed[38])
			if(back_y<100)			// 캐릭터가 캔버스 y축에서 벗어나지 못하게
			{	back_y += player_speed;	press = true;
					for(var idx=0; idx<zombieLIST.length; idx++){
						zombieLIST[idx].Y+=player_speed;
					}} // 상

			if (keyPressed[40])
			if(back_y>-800)			// 캐릭터가 캔버스 y축에서 벗어나지 못하게
			{	back_y -= player_speed;	press = true;
				for(var idx=0; idx<zombieLIST.length; idx++){
					zombieLIST[idx].Y-=player_speed;
				}} // 하

			if (keyPressed[37])
			if(back_x<400)			// 캐릭터가 캔버스 x축에서 벗어나지 못하게
			{	back_x += player_speed;	press = true;
				for(var idx=0; idx<zombieLIST.length; idx++){
					zombieLIST[idx].X+=player_speed;
				}} // 좌

			if (keyPressed[39])
			if(back_x>-1120)			// 캐릭터가 캔버스 x축에서 벗어나지 못하게
			{	back_x -= player_speed;	press = true;
				for(var idx=0; idx<zombieLIST.length; idx++){
					zombieLIST[idx].X-=player_speed;
				}} // 우
}


function draw_player() {	// 플레이어의 시작 위치 및 width, height 설정
	ctx.beginPath();
	ctx.drawImage(player, 600, 350, 70, 100);
	ctx.stroke();
}

function draw_zombies() {	// 좀비들의 시작 위치 및 width, height 설정

	for(var idx=0; idx<zombieLIST.length; idx++){
		ctx.beginPath();
		ctx.drawImage(zombieLIST[idx].zom_photo, zombieLIST[idx].X, zombieLIST[idx].Y, zombieLIST[idx].W, zombieLIST[idx].H);
		ctx.stroke();
	}
}

function draw_background() { // MAIN BACKGROUND 그림
	//ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스를 깔끔한 상태로 유지보수

	ctx.beginPath();
	ctx.drawImage(ui_interface, back_x, back_y,2000,1500);
	ctx.stroke();
}

function draw_background2() { // UI 그림
	//ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.drawImage(ui_interface2, 0, 0, 1200, 750);
	ctx.stroke();
}

function drawHP() {		// 초록색 HP
	ctx.fillStyle = HPCol1;
	ctx.fillRect(player_x-5, player_y-16, HPgauge1, 12);
}

function drawHP2() {	// 빨강색 HP
	ctx.fillStyle = HPCol2;
	ctx.fillRect(player_x+75, player_y-16, HPgauge2, 12);

}

function died() {		// 유저 HP 없을 시 DIED 창 그림 구현
	ctx.beginPath();
	ctx.drawImage(Event_die, player_x-210, player_y-120, 500, 100);
	ctx.stroke();
}


function fight() {
	for(var idx=0; idx<zombieLIST.length; idx++){

		if ( Math.abs(player_x-zombieLIST[idx].X) < 57 )			// 좀비와의 x축 좌표가 거의 닿으면
			if ( Math.abs(player_y-zombieLIST[idx].Y) < 90) 		// 좀비와의 y축 좌표가 거의 닿으면
			{
				console.log("부딪힘");
				if (HPgauge2 > -80)
					HPgauge2 -= zombieLIST[idx].D;

				if (HPgauge1 > 0)
					HPgauge1 -= zombieLIST[idx].D;
			}
	}
}

function zombie_move() {

	for(var idx=0; idx<zombieLIST.length; idx++)
	{
			if (zombieLIST[idx].X > player_x)					// 좀비가 플레이어의 오른쪽에 있으면,
			{	zombieLIST[idx].X -= zombieLIST[idx].SP;	}

			else if(Math.abs(zombieLIST[idx].X-player_x)<3)		// 위치 보정
			{	zombieLIST[idx].X = player_x;		}

			else if(zombieLIST[idx].X < player_x)
			{	zombieLIST[idx].X += zombieLIST[idx].SP;	}


			if (zombieLIST[idx].Y > player_y) 					// 좀비가 플레이어의 오른쪽에 있으면,
			{	zombieLIST[idx].Y -= zombieLIST[idx].SP;	}

			else if(Math.abs(zombieLIST[idx].Y-player_y)<3)		// 위치 보정
			{	zombieLIST[idx].Y = player_y;		}

			else if (zombieLIST[idx].Y < player_y)
			{	zombieLIST[idx].Y += zombieLIST[idx].SP;	}
	}
}










/*
	무빙이 똑똑한 좀비
	else if(Math.abs(xx-x)<3)  // 위치 보정
	{	xx = x;		}
	else if(Math.abs(yy-y)<3)  // 위치 보정
	{	yy = y;		}
*/
