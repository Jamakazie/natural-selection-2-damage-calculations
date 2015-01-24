var damage_machine = {
	hits_to_kill: function(actor, weapon){ console.log("hello " + actor);}
};

function hits_to_kill(actor, weapon){
	var effective_armor =  calc_armor(actor.base_armor[0], weapon.type); 
	console.log("running analysis on actor:\t" + actor.name);
	console.log("running analysis on weapon:\t" + weapon.name);
}
function calc_armor(total_armor, damage_type){
	var modifier;
	switch(damage_type){
		case "corrode":
			modifier = .23;
			break;

		case "heavy":
		case "nerve_gas":
		case "splash":
		case "structural":
			modifier = 1;
			modifier = 1;
			break;

		case "flame":
		case "normal":
			modifier = 2;
			break;

		case "light":
			modifier = 4;
			break;

		default:
			modifier = 1;
			console.log("This shouldn't happen :(");
			break;
	}
	var effective_armor = total_armor * modifier;
	console.log('base armor is :\t' + total_armor);
	console.log('effective armor is: ' + effective_armor);
	return effective_armor;
}
function calc_effective_health(total_health, damage_type){
	// Nothing seems to do less damage to health than anythign else?
	return total_health;
}

function time_to_kill(actor, weapon, accuracy){
	accuracy = accuracy || 100; // let's only do integer accuracy for now
	var total_actor_health = calc_armor(actor.base_armor[0]) + 
					calc_effective_health(actor.base_health);
	var number_of_hits = total_actor_health / weapon.base_damage;
	var seconds_to_kill = number_of_hits * weapon.fire_rate;
	console.log("it will take: " + time_to_kill + " seconds to kill: " + actor.name);
	return seconds_to_kill;
}




hits_to_kill(actors[0], weapons[0]);

console.log("calling time to kill\n\n");

time_to_kill(actors[0], weapons[0], 100);
