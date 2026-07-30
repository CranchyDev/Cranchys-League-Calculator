window.displayChampions = displayChampions;

window.addEventListener("click", closeChampionsList);

// Champion Names
let championName1 = "";
let championName2 = "";

// Selected level of the champion
let selectedLevel = 1;

// Spells Champion 1
let spellNameQ = "";
let spellNameW = "";
let spellNameE = "";
let spellNameR = "";
let passiveName1 = "";

// Spells Champion 2
let spellNameQ2 = "";
let spellNameW2 = "";
let spellNameE2 = "";
let spellNameR2 = "";
let passiveName2 = "";

// Base stats
let baseHP = 0;
let baseMP = 0;
let baseMoveSpeed = 0;
let baseArmor = 0;
let baseSpellBlock = 0;
let baseAttackRange = 0;
let baseHPRegen = 0;
let baseMPRegen = 0;
let baseCrit = 0;
let baseAttackDamage = 0;
let baseAttackSpeed = 0;

// Per-level growth stats
let growthHP = 0;
let growthMP = 0;
let growthArmor = 0;
let growthSpellBlock = 0;
let growthHPRegen = 0;
let growthMPRegen = 0;
let growthCrit = 0;
let growthAttackDamage = 0;
let growthAttackSpeed = 0;

let selectedLevel2 = 1;

// Base stats
let baseHP2 = 0;
let baseMP2 = 0;
let baseMoveSpeed2 = 0;
let baseArmor2 = 0;
let baseSpellBlock2 = 0;
let baseAttackRange2 = 0;
let baseHPRegen2 = 0;
let baseMPRegen2 = 0;
let baseCrit2 = 0;
let baseAttackDamage2 = 0;
let baseAttackSpeed2 = 0;

// Per-level growth stats
let growthHP2 = 0;
let growthMP2 = 0;
let growthArmor2 = 0;
let growthSpellBlock2 = 0;
let growthHPRegen2 = 0;
let growthMPRegen2 = 0;
let growthCrit2 = 0;
let growthAttackDamage2 = 0;
let growthAttackSpeed2 = 0;

function displayChampions() 
{
	if (document.getElementById("dropbtn").innerHTML == "Expand")
	{
		if (document.getElementById("levelList").classList.contains("show"))
		{
			document.getElementById("levelList").classList.remove("show")
			document.getElementById("levelbtn").innerHTML = "Level";
		}
		document.getElementById("dropbtn").innerHTML = "Unpack";
		document.getElementById("championsList").classList.add("show");
	}
	else if (document.getElementById("dropbtn").innerHTML == "Unpack")
	{
		document.getElementById("dropbtn").innerHTML = "Expand";

		if (document.getElementById("championsList").classList.contains("show")) 
		{
			document.getElementById("championsList").classList.remove("show");
		}
	}
}

function displayChampions2() 
{
    if (document.getElementById("dropbtn2").innerHTML == "Expand") {
        document.getElementById("dropbtn2").innerHTML = "Unpack";
        document.getElementById("championsList2").classList.add("show");
    } 
    else if (document.getElementById("dropbtn2").innerHTML == "Unpack") {
        document.getElementById("dropbtn2").innerHTML = "Expand";

        if (document.getElementById("championsList2").classList.contains("show")) {
            document.getElementById("championsList2").classList.remove("show");
        }
    }
}

function displayLevel()
{
	if (document.getElementById("levelbtn").innerHTML.startsWith("Level"))
	{
		document.getElementById("levelbtn").innerHTML = "Select Level";
		document.getElementById("levelList").classList.add("show");
	}
	else if (document.getElementById("levelbtn").innerHTML == "Select Level")
	{
		document.getElementById("levelbtn").innerHTML = "Level";
		document.getElementById("levelList").classList.remove("show")
	}
	else
	{

	}
}

function displayLevel2()
{
	if (document.getElementById("levelbtn2").innerHTML.startsWith("Level"))
	{
		document.getElementById("levelbtn2").innerHTML = "Select Level";
		document.getElementById("levelList2").classList.add("show");
	}
	else if (document.getElementById("levelbtn2").innerHTML == "Select Level")
	{
		document.getElementById("levelbtn2").innerHTML = "Level";
		document.getElementById("levelList2").classList.remove("show")
	}
	else
	{

	}
}

function closeChampionsList(event)
{
	// If a champion was clicked
	if (event.target.classList.contains("selectedChampion")) 
	{
		if (document.getElementById("levelList").classList.contains("show"))
		{
			document.getElementById("levelList").classList.remove("show");
		}
		const nameDisplay = event.target.innerHTML;
		document.getElementById("putSomethingHere").innerHTML = nameDisplay;
		document.getElementById("championsList").classList.remove("show");
		document.getElementById("menu-image").style.display = "block";
		document.getElementById("menu-image").src = "imgs/" + nameDisplay + ".jpg";
		document.getElementById("dropbtn").innerHTML = "Expand";
		
		championName1 = event.target.innerHTML.replace(/\s+/g, "").replace(/'/g, "").replace(/\./g, ""); // Removes spaces, ' and .

		// For specific cases where capital letters are still left (the .JSON files are very specific).
		if (championName1 === "ChoGath") championName1 = "Chogath";
		if (championName1 === "BelVeth") championName1 = "Belveth";
		if (championName1 === "KhaZix") championName1 = "Khazix";
		if (championName1 === "Wukong") championName1 = "MonkeyKing";
		if (championName1 === "VelKoz") championName1 = "Velkoz";
		if (championName1 === "NunuandWillump") championName1 = "Nunu";

		fetch(`championstats/${championName1}.json`)
		.then(response => response.json())
		.then(data => {
		//console.log(data.data[championName1].stats);
		console.log(championName1);

			baseHP = parseFloat(data.data[championName1].stats.hp);
			baseMP = parseFloat(data.data[championName1].stats.mp);
			baseMoveSpeed = parseFloat(data.data[championName1].stats.movespeed);
			baseArmor = parseFloat(data.data[championName1].stats.armor);
			baseSpellBlock = parseFloat(data.data[championName1].stats.spellblock);
			baseAttackRange = parseFloat(data.data[championName1].stats.attackrange);
			baseHPRegen = parseFloat(data.data[championName1].stats.hpregen);
			baseMPRegen = parseFloat(data.data[championName1].stats.mpregen);
			baseCrit = parseFloat(data.data[championName1].stats.crit);
			baseAttackDamage = parseFloat(data.data[championName1].stats.attackdamage);
			baseAttackSpeed = parseFloat(data.data[championName1].stats.attackspeed);

			growthHP = parseFloat(data.data[championName1].stats.hpperlevel);
			growthMP = parseFloat(data.data[championName1].stats.mpperlevel);
			growthArmor = parseFloat(data.data[championName1].stats.armorperlevel);
			growthSpellBlock = parseFloat(data.data[championName1].stats.spellblockperlevel);
			growthHPRegen = parseFloat(data.data[championName1].stats.hpregenperlevel);
			growthMPRegen = parseFloat(data.data[championName1].stats.mpregenperlevel);
			growthCrit = parseFloat(data.data[championName1].stats.critperlevel);
			growthAttackDamage = parseFloat(data.data[championName1].stats.attackdamageperlevel);
			growthAttackSpeed = parseFloat(data.data[championName1].stats.attackspeedperlevel);

			document.getElementById("hereAttackDamage").textContent = "0";
			document.getElementById("hereAttackDamage").textContent = Math.round(baseAttackDamage + growthAttackDamage * (selectedLevel - 1) * (0.7025 + 0.0175 * (selectedLevel - 1)));

			document.getElementById("hereAttackSpeed").textContent = "0";
			document.getElementById("hereAttackSpeed").textContent = (baseAttackSpeed * (1 + (growthAttackSpeed / 100) * ((selectedLevel - 1) * (0.7025 + 0.0175 * (selectedLevel - 1))))).toFixed(3);

			document.getElementById("hereCriticalChance").textContent = "0";
			document.getElementById("hereCriticalChance").textContent = Math.round(baseCrit + growthCrit * (selectedLevel - 1) * (0.7025 + 0.0175 * (selectedLevel - 1)));

			document.getElementById("hereHealthPoints").textContent = "0";
			document.getElementById("hereHealthPoints").textContent = Math.round(baseHP + growthHP * (selectedLevel - 1) * (0.7025 + 0.0175 * (selectedLevel - 1)));

			document.getElementById("hereHealthRegen").textContent = "0";
			document.getElementById("hereHealthRegen").textContent = Math.round(baseHPRegen + growthHPRegen * (selectedLevel - 1) * (0.7025 + 0.0175 * (selectedLevel - 1)));

			document.getElementById("hereManaPoints").textContent = "0";
			document.getElementById("hereManaPoints").textContent = Math.round(baseMP + growthMP * (selectedLevel - 1) * (0.7025 + 0.0175 * (selectedLevel - 1)));

			document.getElementById("hereManaRegen").textContent = "0";
			document.getElementById("hereManaRegen").textContent = Math.round(baseMPRegen + growthMPRegen * (selectedLevel - 1) * (0.7025 + 0.0175 * (selectedLevel - 1)));

			document.getElementById("hereArmor").textContent = "0";
			document.getElementById("hereArmor").textContent = Math.round(baseArmor + growthArmor * (selectedLevel - 1) * (0.7025 + 0.0175 * (selectedLevel - 1)));

			document.getElementById("hereMagicResistance").textContent = "0";
			document.getElementById("hereMagicResistance").textContent = Math.round(baseSpellBlock + growthSpellBlock * (selectedLevel - 1) * (0.7025 + 0.0175 * (selectedLevel - 1)));

			document.getElementById("hereMovementSpeed").innerHTML = baseMoveSpeed;

			// Spells for Champion Selected 1

			spellNameQ = "";
			spellNameW = "";
			spellNameE = "";
			spellNameR = "";
			passiveName = "";

			spellNameQ = data.data[championName1].spells[0].id;
			spellNameW = data.data[championName1].spells[1].id;
			spellNameE = data.data[championName1].spells[2].id;
			spellNameR = data.data[championName1].spells[3].id;
			passiveName = data.data[championName1].passive.image.full;

			document.getElementById("spellQ_img").src = "spell/" + spellNameQ + ".png";
			document.getElementById("spellW_img").src = "spell/" + spellNameW + ".png";
			document.getElementById("spellE_img").src = "spell/" + spellNameE + ".png";
			document.getElementById("spellR_img").src = "spell/" + spellNameR + ".png";
			document.getElementById("spellP_img").src = "passive/" + passiveName;

		})
		.catch(error => console.error(error));

		fetch(`championabilities/championabilities.json`)
    	.then(response => response.json())
    	.then(data => {
        	// Access the champion directly
			const champ = data[championName1];

			// Line-by-line string formatting
			document.getElementById("spellP-damage").innerText = `${champ.P[0].name}: ${getFlatDamage(champ.P[0])}`;
			document.getElementById("spellQ-damage").innerText = `${champ.Q[0].name}: ${getFlatDamage(champ.Q[0])}`;
			document.getElementById("spellW-damage").innerText = `${champ.W[0].name}: ${getFlatDamage(champ.W[0])}`;
			document.getElementById("spellE-damage").innerText = `${champ.E[0].name}: ${getFlatDamage(champ.E[0])}`;
			document.getElementById("spellR-damage").innerText = `${champ.R[0].name}: ${getFlatDamage(champ.R[0])}`;

			// Preparation for spell total damage
			const qRank = Number(document.getElementById("q-rank").value);
        	const wRank = Number(document.getElementById("w-rank").value);
        	const eRank = Number(document.getElementById("e-rank").value);
        	const rRank = Number(document.getElementById("r-rank").value);

        	// Get damage per spell rank
        	const qDmg = getDamageAtRank(champ.Q[0], qRank);
        	const wDmg = getDamageAtRank(champ.W[0], wRank);
        	const eDmg = getDamageAtRank(champ.E[0], eRank);
        	const rDmg = getDamageAtRank(champ.R[0], rRank);

        	// Calculate and set total damage
        	const total = qDmg + wDmg + eDmg + rDmg;
        	document.getElementById("total-spell-damage").innerText = total;
	
    	});

		return;

	}
	else if (event.target.classList.contains("selectedChampion2"))
	{
		const nameDisplay = event.target.innerHTML;
		document.getElementById("putSomethingHere2").innerHTML = nameDisplay;
		document.getElementById("championsList2").classList.remove("show");
		document.getElementById("menu-image2").style.display = "block";
		document.getElementById("menu-image2").src = "imgs/" + nameDisplay + ".jpg";
		document.getElementById("dropbtn2").innerHTML = "Expand";

		championName2 = event.target.innerHTML.replace(/\s+/g, "").replace(/'/g, "").replace(/\./g, ""); // Removes spaces, ' and .

		// For specific cases where capital letters are still left (the .JSON files are very specific).
		if (championName2 === "ChoGath") championName2 = "Chogath";
		if (championName2 === "BelVeth") championName2 = "Belveth";
		if (championName2 === "KhaZix") championName2 = "Khazix";
		if (championName2 === "Wukong") championName2 = "MonkeyKing";
		if (championName2 === "VelKoz") championName2 = "Velkoz";
		if (championName2 === "NunuandWillump") championName2 = "Nunu";


		fetch(`championstats/${championName2}.json`)
		.then(response => response.json())
		.then(data => {
			 console.log(data.data[championName2].stats);

			baseHP2 = parseFloat(data.data[championName2].stats.hp);
			baseMP2 = parseFloat(data.data[championName2].stats.mp);
			baseMoveSpeed2 = parseFloat(data.data[championName2].stats.movespeed);
			baseArmor2 = parseFloat(data.data[championName2].stats.armor);
			baseSpellBlock2 = parseFloat(data.data[championName2].stats.spellblock);
			baseAttackRange2 = parseFloat(data.data[championName2].stats.attackrange);
			baseHPRegen2 = parseFloat(data.data[championName2].stats.hpregen);
			baseMPRegen2 = parseFloat(data.data[championName2].stats.mpregen);
			baseCrit2 = parseFloat(data.data[championName2].stats.crit);
			baseAttackDamage2 = parseFloat(data.data[championName2].stats.attackdamage);
			baseAttackSpeed2 = parseFloat(data.data[championName2].stats.attackspeed);

			growthHP2 = parseFloat(data.data[championName2].stats.hpperlevel);
			growthMP2 = parseFloat(data.data[championName2].stats.mpperlevel);
			growthArmor2 = parseFloat(data.data[championName2].stats.armorperlevel);
			growthSpellBlock2 = parseFloat(data.data[championName2].stats.spellblockperlevel);
			growthHPRegen2 = parseFloat(data.data[championName2].stats.hpregenperlevel);
			growthMPRegen2 = parseFloat(data.data[championName2].stats.mpregenperlevel);
			growthCrit2 = parseFloat(data.data[championName2].stats.critperlevel);
			growthAttackDamage2 = parseFloat(data.data[championName2].stats.attackdamageperlevel);
			growthAttackSpeed2 = parseFloat(data.data[championName2].stats.attackspeedperlevel);

			document.getElementById("hereAttackDamage2").textContent = "0";
			document.getElementById("hereAttackDamage2").textContent = Math.round(baseAttackDamage2 + growthAttackDamage2 * (selectedLevel2 - 1) * (0.7025 + 0.0175 * (selectedLevel2 - 1)));

			document.getElementById("hereAttackSpeed2").textContent = "0";
			document.getElementById("hereAttackSpeed2").textContent = (baseAttackSpeed2 * (1 + (growthAttackSpeed2 / 100) * ((selectedLevel2 - 1) * (0.7025 + 0.0175 * (selectedLevel2 - 1))))).toFixed(3);

			document.getElementById("hereCriticalChance2").textContent = "0";
			document.getElementById("hereCriticalChance2").textContent = Math.round(baseCrit2 + growthCrit2 * (selectedLevel2 - 1) * (0.7025 + 0.0175 * (selectedLevel2 - 1)));

			document.getElementById("hereHealthPoints2").textContent = "0";
			document.getElementById("hereHealthPoints2").textContent = Math.round(baseHP2 + growthHP2 * (selectedLevel2 - 1) * (0.7025 + 0.0175 * (selectedLevel2 - 1)));

			document.getElementById("hereHealthRegen2").textContent = "0";
			document.getElementById("hereHealthRegen2").textContent = Math.round(baseHPRegen2 + growthHPRegen2 * (selectedLevel2 - 1) * (0.7025 + 0.0175 * (selectedLevel2 - 1)));

			document.getElementById("hereManaPoints2").textContent = "0";
			document.getElementById("hereManaPoints2").textContent = Math.round(baseMP2 + growthMP2 * (selectedLevel2 - 1) * (0.7025 + 0.0175 * (selectedLevel2 - 1)));

			document.getElementById("hereManaRegen2").textContent = "0";
			document.getElementById("hereManaRegen2").textContent = Math.round(baseMPRegen2 + growthMPRegen2 * (selectedLevel2 - 1) * (0.7025 + 0.0175 * (selectedLevel2 - 1)));

			document.getElementById("hereArmor2").textContent = "0";
			document.getElementById("hereArmor2").textContent = Math.round(baseArmor2 + growthArmor2 * (selectedLevel2 - 1) * (0.7025 + 0.0175 * (selectedLevel2 - 1)));

			document.getElementById("hereMagicResistance2").textContent = "0";
			document.getElementById("hereMagicResistance2").textContent = Math.round(baseSpellBlock2 + growthSpellBlock2 * (selectedLevel2 - 1) * (0.7025 + 0.0175 * (selectedLevel2 - 1)));

			document.getElementById("hereMovementSpeed2").innerHTML = baseMoveSpeed2;

			// Spells for Champion Selected 2

			spellNameQ2 = "";
			spellNameW2 = "";
			spellNameE2 = "";
			spellNameR2 = "";
			passiveName2 = "";

			spellNameQ2 = data.data[championName2].spells[0].id;
			spellNameW2 = data.data[championName2].spells[1].id;
			spellNameE2 = data.data[championName2].spells[2].id;
			spellNameR2 = data.data[championName2].spells[3].id;
			passiveName2 = data.data[championName2].passive.image.full;

			document.getElementById("spellQ2_img").src = "spell/" + spellNameQ2 + ".png";
			document.getElementById("spellW2_img").src = "spell/" + spellNameW2 + ".png";
			document.getElementById("spellE2_img").src = "spell/" + spellNameE2 + ".png";
			document.getElementById("spellR2_img").src = "spell/" + spellNameR2 + ".png";
			document.getElementById("spellP2_img").src = "passive/" + passiveName2;
			
		})
		.catch(error => console.error(error));

		fetch(`championabilities/championabilities.json`)
    	.then(response => response.json())
    	.then(data => {
        	// Access the champion directly
			const champ = data[championName2];

			// Line-by-line string formatting
			document.getElementById("spellP2-damage").innerText = `${champ.P[0].name}: ${getFlatDamage(champ.P[0])}`;
			document.getElementById("spellQ2-damage").innerText = `${champ.Q[0].name}: ${getFlatDamage(champ.Q[0])}`;
			document.getElementById("spellW2-damage").innerText = `${champ.W[0].name}: ${getFlatDamage(champ.W[0])}`;
			document.getElementById("spellE2-damage").innerText = `${champ.E[0].name}: ${getFlatDamage(champ.E[0])}`;
			document.getElementById("spellR2-damage").innerText = `${champ.R[0].name}: ${getFlatDamage(champ.R[0])}`;

			// Prepartion for spell total damage
			const qRank = Number(document.getElementById("q2-rank").value);
        	const wRank = Number(document.getElementById("w2-rank").value);
        	const eRank = Number(document.getElementById("e2-rank").value);
        	const rRank = Number(document.getElementById("r2-rank").value);

        	// Get damage per spell rank
        	const qDmg = getDamageAtRank(champ.Q[0], qRank);
        	const wDmg = getDamageAtRank(champ.W[0], wRank);
        	const eDmg = getDamageAtRank(champ.E[0], eRank);
        	const rDmg = getDamageAtRank(champ.R[0], rRank);

        	// Calculate and set total damage
        	const total = qDmg + wDmg + eDmg + rDmg;
        	document.getElementById("total-spell-damage2").innerText = total;
	

    	});

		return;
	}
	else
	{

	}

	// If a spell rank was clicked
	if (event.target.classList.contains("spell-rank-selected"))
	{
		fetch(`championabilities/championabilities.json`)
    	.then(response => response.json())
    	.then(data => {

			// For specific cases where capital letters are still left (the .JSON files are very specific).
			if (championName1 === "ChoGath") championName1 = "Chogath";
			if (championName1 === "BelVeth") championName1 = "Belveth";
			if (championName1 === "KhaZix") championName1 = "Khazix";
			if (championName1 === "Wukong") championName1 = "MonkeyKing";
			if (championName1 === "VelKoz") championName1 = "Velkoz";
			if (championName1 === "NunuandWillump") championName1 = "Nunu";

        	// Access the champion directly
			const champ = data[championName1];

			// Preparation for spell total damage
			const qRank = Number(document.getElementById("q-rank").value);
        	const wRank = Number(document.getElementById("w-rank").value);
        	const eRank = Number(document.getElementById("e-rank").value);
        	const rRank = Number(document.getElementById("r-rank").value);

        	// Get damage per spell rank
        	const qDmg = getDamageAtRank(champ.Q[0], qRank);
        	const wDmg = getDamageAtRank(champ.W[0], wRank);
        	const eDmg = getDamageAtRank(champ.E[0], eRank);
        	const rDmg = getDamageAtRank(champ.R[0], rRank);

        	// Calculate and set total damage
        	const total = qDmg + wDmg + eDmg + rDmg;
        	document.getElementById("total-spell-damage").innerText = total;
	
    	});
	}
	
	if (event.target.classList.contains("spell-rank-selected2"))
	{
		fetch(`championabilities/championabilities.json`)
    	.then(response => response.json())
    	.then(data => {

			// For specific cases where capital letters are still left (the .JSON files are very specific).
			if (championName2 === "ChoGath") championName2 = "Chogath";
			if (championName2 === "BelVeth") championName2 = "Belveth";
			if (championName2 === "KhaZix") championName2 = "Khazix";
			if (championName2 === "Wukong") championName2 = "MonkeyKing";
			if (championName2 === "VelKoz") championName2 = "Velkoz";
			if (championName2 === "NunuandWillump") championName2 = "Nunu";

        	// Access the champion directly
			const champ = data[championName2];

			// Preparation for spell total damage
			const qRank = Number(document.getElementById("q2-rank").value);
        	const wRank = Number(document.getElementById("w2-rank").value);
        	const eRank = Number(document.getElementById("e2-rank").value);
        	const rRank = Number(document.getElementById("r2-rank").value);

        	// Get damage per spell rank
        	const qDmg = getDamageAtRank(champ.Q[0], qRank);
        	const wDmg = getDamageAtRank(champ.W[0], wRank);
        	const eDmg = getDamageAtRank(champ.E[0], eRank);
        	const rDmg = getDamageAtRank(champ.R[0], rRank);

        	// Calculate and set total damage
        	const total = qDmg + wDmg + eDmg + rDmg;
        	document.getElementById("total-spell-damage2").innerText = total;
	
    	});
	}
	else
	{

	}


	if (event.target !== document.getElementById("dropbtn") && !document.getElementById("championsList").contains(event.target))
	{

		if (document.getElementById("championsList").classList.contains("show"))
		{
			document.getElementById("championsList").classList.remove("show");
			document.getElementById("dropbtn").innerHTML = "Expand"; 
		}
	}
}

function calculateStatsWithLevel(level)
{
	selectedLevel = parseInt(level.textContent.trim());
	console.log("Selected level:", selectedLevel);

	document.getElementById("hereAttackDamage").textContent = "0";
	document.getElementById("hereAttackDamage").textContent = Math.round(baseAttackDamage + growthAttackDamage * (selectedLevel - 1) * (0.7025 + 0.0175 * (selectedLevel - 1)));

	document.getElementById("hereAttackSpeed").textContent = "0";
	document.getElementById("hereAttackSpeed").textContent = (baseAttackSpeed * (1 + (growthAttackSpeed / 100) * ((selectedLevel - 1) * (0.7025 + 0.0175 * (selectedLevel - 1))))).toFixed(3);

	document.getElementById("hereCriticalChance").textContent = "0";
	document.getElementById("hereCriticalChance").textContent = Math.round(baseCrit + growthCrit * (selectedLevel - 1) * (0.7025 + 0.0175 * (selectedLevel - 1)));

	document.getElementById("hereHealthPoints").textContent = "0";
	document.getElementById("hereHealthPoints").textContent = Math.round(baseHP + growthHP * (selectedLevel - 1) * (0.7025 + 0.0175 * (selectedLevel - 1)));

	document.getElementById("hereHealthRegen").textContent = "0";
	document.getElementById("hereHealthRegen").textContent = Math.round(baseHPRegen + growthHPRegen * (selectedLevel - 1) * (0.7025 + 0.0175 * (selectedLevel - 1)));

	document.getElementById("hereManaPoints").textContent = "0";
	document.getElementById("hereManaPoints").textContent = Math.round(baseMP + growthMP * (selectedLevel - 1) * (0.7025 + 0.0175 * (selectedLevel - 1)));

	document.getElementById("hereManaRegen").textContent = "0";
	document.getElementById("hereManaRegen").textContent = Math.round(baseMPRegen + growthMPRegen * (selectedLevel - 1) * (0.7025 + 0.0175 * (selectedLevel - 1)));

	document.getElementById("hereArmor").textContent = "0";
	document.getElementById("hereArmor").textContent = Math.round(baseArmor + growthArmor * (selectedLevel - 1) * (0.7025 + 0.0175 * (selectedLevel - 1)));

	document.getElementById("hereMagicResistance").textContent = "0";
	document.getElementById("hereMagicResistance").textContent = Math.round(baseSpellBlock + growthSpellBlock * (selectedLevel - 1) * (0.7025 + 0.0175 * (selectedLevel - 1)));



	document.getElementById("levelList").classList.remove("show");
	document.getElementById("levelbtn").innerHTML = "Level "+ selectedLevel +"";

	compareCalculationsBetweenChampionStats();
}

function calculateStatsWithLevelAgain(level)
{
	selectedLevel2 = parseInt(level.textContent.trim());
	console.log("Selected level:", selectedLevel2);

	document.getElementById("hereAttackDamage2").textContent = "0";
	document.getElementById("hereAttackDamage2").textContent = Math.round(baseAttackDamage2 + growthAttackDamage2 * (selectedLevel2 - 1) * (0.7025 + 0.0175 * (selectedLevel2 - 1)));

	document.getElementById("hereAttackSpeed2").textContent = "0";
	document.getElementById("hereAttackSpeed2").textContent = (baseAttackSpeed2 * (1 + (growthAttackSpeed2 / 100) * ((selectedLevel2 - 1) * (0.7025 + 0.0175 * (selectedLevel2 - 1))))).toFixed(3);

	document.getElementById("hereCriticalChance2").textContent = "0";
	document.getElementById("hereCriticalChance2").textContent = Math.round(baseCrit2 + growthCrit2 * (selectedLevel2 - 1) * (0.7025 + 0.0175 * (selectedLevel2 - 1)));

	document.getElementById("hereHealthPoints2").textContent = "0";
	document.getElementById("hereHealthPoints2").textContent = Math.round(baseHP2 + growthHP2 * (selectedLevel2 - 1) * (0.7025 + 0.0175 * (selectedLevel2 - 1)));

	document.getElementById("hereHealthRegen2").textContent = "0";
	document.getElementById("hereHealthRegen2").textContent = Math.round(baseHPRegen2 + growthHPRegen2 * (selectedLevel2 - 1) * (0.7025 + 0.0175 * (selectedLevel2 - 1)));

	document.getElementById("hereManaPoints2").textContent = "0";
	document.getElementById("hereManaPoints2").textContent = Math.round(baseMP2 + growthMP2 * (selectedLevel2 - 1) * (0.7025 + 0.0175 * (selectedLevel2 - 1)));

	document.getElementById("hereManaRegen2").textContent = "0";
	document.getElementById("hereManaRegen2").textContent = Math.round(baseMPRegen2 + growthMPRegen2 * (selectedLevel2 - 1) * (0.7025 + 0.0175 * (selectedLevel2 - 1)));

	document.getElementById("hereArmor2").textContent = "0";
	document.getElementById("hereArmor2").textContent = Math.round(baseArmor2 + growthArmor2 * (selectedLevel2 - 1) * (0.7025 + 0.0175 * (selectedLevel2 - 1)));

	document.getElementById("hereMagicResistance2").textContent = "0";
	document.getElementById("hereMagicResistance2").textContent = Math.round(baseSpellBlock2 + growthSpellBlock2 * (selectedLevel2 - 1) * (0.7025 + 0.0175 * (selectedLevel2 - 1)));

	document.getElementById("levelList2").classList.remove("show");
	document.getElementById("levelbtn2").innerHTML = "Level "+ selectedLevel2 +"";

	compareCalculationsBetweenChampionStats();
}

function compareCalculationsBetweenChampionStats()
{
	const ad1 = parseFloat(document.getElementById("hereAttackDamage").textContent.trim());
	const ad2 = parseFloat(document.getElementById("hereAttackDamage2").textContent.trim());

	const ar1 = parseFloat(document.getElementById("hereArmor").textContent.trim());
	const ar2 = parseFloat(document.getElementById("hereArmor2").textContent.trim());

	const mr1 = parseFloat(document.getElementById("hereMagicResistance").textContent.trim());
	const mr2 = parseFloat(document.getElementById("hereMagicResistance2").textContent.trim());

	const as1 = parseFloat(document.getElementById("hereAttackSpeed").textContent.trim());
	const as2 = parseFloat(document.getElementById("hereAttackSpeed2").textContent.trim());

	const ms1 = parseFloat(document.getElementById("hereMovementSpeed").textContent.trim());
	const ms2 = parseFloat(document.getElementById("hereMovementSpeed2").textContent.trim());

	const hp1 = parseFloat(document.getElementById("hereHealthPoints").textContent.trim());
	const hp2 = parseFloat(document.getElementById("hereHealthPoints2").textContent.trim());

	const hpRegen1 = parseFloat(document.getElementById("hereHealthRegen").textContent.trim());
	const hpRegen2 = parseFloat(document.getElementById("hereHealthRegen2").textContent.trim());

	const mp1 = parseFloat(document.getElementById("hereManaPoints").textContent.trim());
	const mp2 = parseFloat(document.getElementById("hereManaPoints2").textContent.trim());

	const mpRegen1 = parseFloat(document.getElementById("hereManaRegen").textContent.trim());
	const mpRegen2 = parseFloat(document.getElementById("hereManaRegen2").textContent.trim());

	if (ad1 > ad2)
	{
		document.getElementById("hereAttackDamage").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereAttackDamage2").style.backgroundColor = "#FF7F7F";
	}
	else if (ad1 < ad2)
	{
		document.getElementById("hereAttackDamage2").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereAttackDamage").style.backgroundColor = "#FF7F7F";
	}
	else
	{
		document.getElementById("hereAttackDamage").style.backgroundColor = "";
		document.getElementById("hereAttackDamage2").style.backgroundColor = "";
	}

	if (ar1 > ar2)
	{
		document.getElementById("hereArmor").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereArmor2").style.backgroundColor = "#FF7F7F";
	}
	else if (ar1 < ar2)
	{
		document.getElementById("hereArmor2").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereArmor").style.backgroundColor = "#FF7F7F";
	}
	else
	{
		document.getElementById("hereArmor").style.backgroundColor = "";
		document.getElementById("hereArmor2").style.backgroundColor = "";
	}


	if (mr1 > mr2)
	{
		document.getElementById("hereMagicResistance").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereMagicResistance2").style.backgroundColor = "#FF7F7F";
	}
	else if (mr1 < mr2)
	{
		document.getElementById("hereMagicResistance2").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereMagicResistance").style.backgroundColor = "#FF7F7F";
	}
	else
	{
		document.getElementById("hereMagicResistance").style.backgroundColor = "";
		document.getElementById("hereMagicResistance2").style.backgroundColor = "";
	}


	if (as1 > as2)
	{
		document.getElementById("hereAttackSpeed").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereAttackSpeed2").style.backgroundColor = "#FF7F7F";
	}
	else if (as1 < as2)
	{
		document.getElementById("hereAttackSpeed2").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereAttackSpeed").style.backgroundColor = "#FF7F7F";
	}
	else
	{
		document.getElementById("hereAttackSpeed").style.backgroundColor = "";
		document.getElementById("hereAttackSpeed2").style.backgroundColor = "";
	}


	if (ms1 > ms2)
	{
		document.getElementById("hereMovementSpeed").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereMovementSpeed2").style.backgroundColor = "#FF7F7F";
	}
	else if (ms1 < ms2)
	{
		document.getElementById("hereMovementSpeed2").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereMovementSpeed").style.backgroundColor = "#FF7F7F";
	}
	else
	{
		document.getElementById("hereMovementSpeed").style.backgroundColor = "";
		document.getElementById("hereMovementSpeed2").style.backgroundColor = "";
	}

	if (hp1 > hp2)
	{
		document.getElementById("hereHealthPoints").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereHealthPoints2").style.backgroundColor = "#FF7F7F";
	}
	else if (hp1 < hp2)
	{
		document.getElementById("hereHealthPoints2").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereHealthPoints").style.backgroundColor = "#FF7F7F";
	}
	else
	{
		document.getElementById("hereHealthPoints").style.backgroundColor = "";
		document.getElementById("hereHealthPoints2").style.backgroundColor = "";
	}

	if (hpRegen1 > hpRegen2)
	{
		document.getElementById("hereHealthRegen").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereHealthRegen2").style.backgroundColor = "#FF7F7F";
	}
	else if (hpRegen1 < hpRegen2)
	{
		document.getElementById("hereHealthRegen2").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereHealthRegen").style.backgroundColor = "#FF7F7F";
	}
	else
	{
		document.getElementById("hereHealthRegen").style.backgroundColor = "";
		document.getElementById("hereHealthRegen2").style.backgroundColor = "";
	}

	if (mp1 > mp2)
	{
		document.getElementById("hereManaPoints").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereManaPoints2").style.backgroundColor = "#FF7F7F";
	}
	else if (mp1 < mp2)
	{
		document.getElementById("hereManaPoints2").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereManaPoints").style.backgroundColor = "#FF7F7F";
	}
	else
	{
		document.getElementById("hereManaPoints").style.backgroundColor = "";
		document.getElementById("hereManaPoints2").style.backgroundColor = "";
	}

	if (mpRegen1 > mpRegen2)
	{
		document.getElementById("hereManaRegen").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereManaRegen2").style.backgroundColor = "#FF7F7F";
	}
	else if (mpRegen1 < mpRegen2)
	{
		document.getElementById("hereManaRegen2").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereManaRegen").style.backgroundColor = "#FF7F7F";
	}
	else
	{
		document.getElementById("hereManaRegen").style.backgroundColor = "";
		document.getElementById("hereManaRegen2").style.backgroundColor = "";
	}
}

// Helper functions

// Gets the ONLY the flat damage for each ability
function getFlatDamage(ability) {
    if (!ability || !ability.modifiers) return "No Flat Damage";

    // Find the modifier where type is "Flat"
    const flatMod = ability.modifiers.find(m => m.type === "Flat");

    if (!flatMod || !flatMod.values) return "No Flat Damage";

    // Join the array values with slashes: e.g. "50 / 80 / 110 / 140 / 170"
    return flatMod.values.join(' / ');
}

// Gets the flat damage at each rank of the ability to perform calculations
function getDamageAtRank(ability, rank) {
    if (!ability || !ability.modifiers || ability.modifiers.length === 0) return 0;
    
    // Grab the values array (e.g. [50, 80, 110, 140, 170])
    const values = ability.modifiers[0].values;
    if (!values || values.length === 0) return 0;

    // Rank 1 is index 0, Rank 2 is index 1, etc.
    const rankIndex = Math.max(0, rank - 1);
    
    // Return value at index, or fallback to max rank if out of bounds
    return values[rankIndex] || values[values.length - 1] || 0;
}

function calculateSpellDamage()
{

}

// Specific scripts for specific things

