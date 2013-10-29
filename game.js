var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


var mareo = {
	name : "Mareo",
	age : 13,
	jump_height : 7,
	jump_speed : 15,
	speed : 3.5,
	x : 10,
	y : 10,
	width : 30,
	height : 40,
	time_in_air : 0,
	is_jumping : false
};
function gravity(){
	var gravity_power = 5;
	
	if(mareo.y >= ground.y-mareo.height){
		mareo.y = ground.y-mareo.height;
		mareo.time_in_air = 0;
	}
	else{
		mareo.y = mareo.y+gravity_power;
	}
}
function jump(){
	mareo.time_in_air = mareo.time_in_air+1;
	if(mareo.time_in_air <= mareo.jump_height && mareo.is_jumping){
		mareo.y = mareo.y-mareo.jump_speed;
	}
	if(mareo.time_in_air >= mareo.jump_height){
		mareo.is_jumping = false;
	}
}
var ground = {
	name : "ground",
	width : c.width,
	height : c.height-50,
	y : c.height-10,
	x : 0,
	color : "green",
	}
function draw() { 
	ctx.fillStyle = "red";
	ctx.fillRect(mareo.x,mareo.y,mareo.width,mareo.height);	
	ctx.fillStyle = ground.color
	ctx.fillRect(ground.x,ground.y,ground.width,ground.height);
}
draw();
function move_left() {
	if(mareo.x <= 0){
		mareo.x = 0;
	}
	else{
		mareo.x = mareo.x-mareo.speed;
	} 	
}
function move_right() {
	if(mareo.x >= c.width-mareo.width){
	mareo.x = c.width-mareo.width;
	}
	else{
		mareo.x = mareo.x+mareo.speed;
	}
}
var keysdown = {
	
}
window.addEventListener("keydown" ,function(event){
	keysdown[event.keyCode] = true;
});
setInterval(frame,10);
window.addEventListener("keyup" ,function(event){
	keysdown[event.keyCode] = false;
});
window.addEventListener("keypress" ,function(event){
	if (event.charCode === 119 || event.charCode === 32){
		mareo.is_jumping = true;
	}
});
function frame(){
	if(keysdown[37]){
		move_left();
	}
	if(keysdown[39]){
		move_right();
	}
	gravity();
	jump();
	clear();
	draw();
		
}
function clear(){
	ctx.fillStyle = "blue";
	ctx.fillRect(0,0,c.width,c.height);
}