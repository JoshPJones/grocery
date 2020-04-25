// List of favorites
// let produceFaves = ['Apples', 'Strawberries', 'Blueberries', 'Mushrooms'];

// Produce
// Packaged
// Refrigerated
// Frozen
// Snacks
// Bread
// Household
// Misc

// Add item as li to correct UL group based on radio toggle
// switch statement to say if x radio is checked, then add itemInput.value to x array

// Strikethrough li when checkbox active
// Delete LI when X link is pressed
// Clear check box active items
// Clear all LIs
// Add in favorites when add favorites button pushed

// Set items to local starage
// Get items from local storage

//Variables for the 8 lists
const produceList = document.querySelector('#produce-list');
const packagedList = document.querySelector('#packaged-list');
const refrigeratedList = document.querySelector('#refrigerated-list');
const frozenList = document.querySelector('#frozen-list');
const snacksList = document.querySelector('#snacks-list');
const breadList = document.querySelector('#bread-list');
const householdList = document.querySelector('#household-list');
const miscList = document.querySelector('#misc-list');

// Variables for buttons and forms
const expandAllBtn = document.querySelector('#expand-all');
const clearAllBtn = document.querySelector('#clear-all');
const clearCheckedBtn = document.querySelector('#clear-checked');
const addFavesBtn = document.querySelector('#add-favorites');
const form = document.querySelector('.input-form');
const itemInput = document.querySelector('#itemInput');
const cont = document.querySelector('.container');

// Event listeners

loadEventListeners();

function loadEventListeners() {
	// Get existing items fom local storage
	document.addEventListener('DOMContentLoaded', getItems);
	// Add item
	form.addEventListener('submit', addItem);
	// Strikethrough item
	cont.addEventListener('click', strikeItem);
	// Delete item
	cont.addEventListener('click', removeItem);

	// Add favorites
	addFavesBtn.addEventListener('click', addFavorites);
	// Clear checked items

	// clear all items
	clearAllBtn.addEventListener('click', clearAll);
}

// ***Functions that need to be defined
// Get existing items fom local storage

// Add item
function addItem(e) {
	if (itemInput.value === '') {
		alert('Please enter an item');
	} else {
		const item = itemInput.value;
		const li = document.createElement('li');
		li.className = 'list-group-item';
		li.innerHTML = `<input type="checkbox" class="complete" /><span class="ml-2">${item}</span
        ><a href="#" class="delete-item float-right"
            ><i class="far fa-trash-alt text-danger"></i
        ></a>`;
		if (document.getElementById('produceRadio').checked) {
			produceList.append(li);
			let produce;
			if (localStorage.getItem('produce') === null) {
				produce = [];
			} else {
				produce = JSON.parse(localStorage.getItem('produce'));
			}
			produce.push(itemInput.value);
			localStorage.setItem('produce', JSON.stringify(produce));
		} else if (document.getElementById('packagedRadio').checked) {
			packagedList.append(li);

			let packaged;
			if (localStorage.getItem('packaged') === null) {
				packaged = [];
			} else {
				packaged = JSON.parse(localStorage.getItem('packaged'));
			}
			packaged.push(itemInput.value);
			localStorage.setItem('packaged', JSON.stringify(packaged));
		} else if (document.getElementById('refrigeratedRadio').checked) {
			refrigeratedList.append(li);

			let refrigerated;
			if (localStorage.getItem('refrigerated') === null) {
				refrigerated = [];
			} else {
				refrigerated = JSON.parse(localStorage.getItem('refrigerated'));
			}
			refrigerated.push(itemInput.value);
			localStorage.setItem('refrigerated', JSON.stringify(refrigerated));
		} else if (document.getElementById('frozenRadio').checked) {
			frozenList.append(li);

			let frozen;
			if (localStorage.getItem('frozen') === null) {
				frozen = [];
			} else {
				frozen = JSON.parse(localStorage.getItem('frozen'));
			}
			frozen.push(itemInput.value);
			localStorage.setItem('frozen', JSON.stringify(frozen));
		} else if (document.getElementById('snacksRadio').checked) {
			snacksList.append(li);

			let snacks;
			if (localStorage.getItem('snacks') === null) {
				snacks = [];
			} else {
				snacks = JSON.parse(localStorage.getItem('snacks'));
			}
			snacks.push(itemInput.value);
			localStorage.setItem('snacks', JSON.stringify(snacks));
		} else if (document.getElementById('breadRadio').checked) {
			breadList.append(li);

			let bread;
			if (localStorage.getItem('bread') === null) {
				bread = [];
			} else {
				bread = JSON.parse(localStorage.getItem('bread'));
			}
			bread.push(itemInput.value);
			localStorage.setItem('bread', JSON.stringify(bread));
		} else if (document.getElementById('householdRadio').checked) {
			householdList.append(li);

			let household;
			if (localStorage.getItem('household') === null) {
				household = [];
			} else {
				household = JSON.parse(localStorage.getItem('household'));
			}
			household.push(itemInput.value);
			localStorage.setItem('household', JSON.stringify(household));
		} else if (document.getElementById('miscRadio').checked) {
			miscList.append(li);
			let misc;
			if (localStorage.getItem('misc') === null) {
				misc = [];
			} else {
				misc = JSON.parse(localStorage.getItem('misc'));
			}
			misc.push(itemInput.value);
			localStorage.setItem('misc', JSON.stringify(misc));
		}
	}
	// storeTaskInLocalStorage(taskInput.value);

	itemInput.value = '';
	var ele = document.getElementsByName('aisle');
	for (var i = 0; i < ele.length; i++) ele[i].checked = false;

	e.preventDefault();
}

// Strikethrough item
function strikeItem(e) {
	// if ((e.target.classList.contains('complete').checked = true)) {
	// 	e.target.parentElement.style.textDecoration = 'line-through';
	// } else if ((e.target.classList.contains('complete').checked = false)) {
	// 	e.target.parentElement.style.textDecoration = 'none';
	// }
	// e.preventDefault();
	// } else if ((e.target.classList.contains('complete').checked = true)) {
	// 	e.target.parentElement.style.textDecoration = 'none';
}

// Delete item

// function removeItem(e) {
// 	if (e.target.parentElement.classList.contains('delete-item')) {
// 		// if (confirm('Are you sure?')) {

// 		removeTaskFromLocalStorageProduce(e.target.parentElement.parentElement);
// 		console.log(e.target.parentElement.parentElement.id);
// 		if (
// 			e.target.parentElement.parentElement.parentElement.id === 'produce-list'
// 		) {
// 			removeTaskFromLocalStorageProduce(e.target.parentElement.parentElement);
// 		}
// 		e.target.parentElement.parentElement.remove();
// 		// e.preventDefault();
// 	}
// }
// Using switch

function removeItem(e) {
	if (e.target.parentElement.classList.contains('delete-item')) {
		// if (confirm('Are you sure?')) {

		removeTaskFromLocalStorageProduce(e.target.parentElement.parentElement);
		console.log(e.target.parentElement.parentElement.id);

		switch (e.target.parentElement.parentElement.parentElement.id) {
			case 'produce-list':
				removeTaskFromLocalStorageProduce(e.target.parentElement.parentElement);
				break;
			case 'packaged-list':
				removeTaskFromLocalStoragePackaged(
					e.target.parentElement.parentElement
				);
				break;
			case 'refrigerated-list':
				removeTaskFromLocalStorageRefrigerated(
					e.target.parentElement.parentElement
				);
				break;
			case 'frozen-list':
				removeTaskFromLocalStorageFrozen(e.target.parentElement.parentElement);
				break;
			case 'snacks-list':
				removeTaskFromLocalStorageSnacks(e.target.parentElement.parentElement);
				break;
			case 'bread-list':
				removeTaskFromLocalStorageBread(e.target.parentElement.parentElement);
				break;
			case 'household-list':
				removeTaskFromLocalStorageHousehold(
					e.target.parentElement.parentElement
				);
				break;
			case 'misc-list':
				removeTaskFromLocalStorageMisc(e.target.parentElement.parentElement);
				break;

			default:
				break;
		}

		e.target.parentElement.parentElement.remove();
		e.preventDefault();
	}
}

// Remove items from local storage

function removeTaskFromLocalStorageProduce(taskItem) {
	let produces;
	if (localStorage.getItem('produce') === null) {
		produces = [];
	} else {
		produces = JSON.parse(localStorage.getItem('produce'));
	}

	produces.forEach(function (a, b) {
		if (taskItem.textContent === a) {
			produces.splice(b, 1);

			console.log(produces);
		}
	});
	localStorage.setItem('produce', JSON.stringify(produces));
}

function removeTaskFromLocalStoragePackaged(taskItem) {
	let packageds;
	if (localStorage.getItem('packaged') === null) {
		packageds = [];
	} else {
		packageds = JSON.parse(localStorage.getItem('packaged'));
	}

	packageds.forEach(function (a, b) {
		if (taskItem.textContent === a) {
			packageds.splice(b, 1);

			console.log(packageds);
		}
	});
	localStorage.setItem('packaged', JSON.stringify(packageds));
}

function removeTaskFromLocalStorageRefrigerated(taskItem) {
	let refrigerateds;
	if (localStorage.getItem('refrigerated') === null) {
		refrigerateds = [];
	} else {
		refrigerateds = JSON.parse(localStorage.getItem('refrigerated'));
	}

	refrigerateds.forEach(function (a, b) {
		if (taskItem.textContent === a) {
			refrigerateds.splice(b, 1);

			console.log(refrigerateds);
		}
	});
	localStorage.setItem('refrigerated', JSON.stringify(refrigerateds));
}

function removeTaskFromLocalStorageFrozen(taskItem) {
	let frozens;
	if (localStorage.getItem('frozen') === null) {
		frozens = [];
	} else {
		frozens = JSON.parse(localStorage.getItem('frozen'));
	}

	frozens.forEach(function (a, b) {
		if (taskItem.textContent === a) {
			frozens.splice(b, 1);

			console.log(frozens);
		}
	});
	localStorage.setItem('frozen', JSON.stringify(frozens));
}

function removeTaskFromLocalStorageSnacks(taskItem) {
	let snackss;
	if (localStorage.getItem('snacks') === null) {
		snackss = [];
	} else {
		snackss = JSON.parse(localStorage.getItem('snacks'));
	}

	snackss.forEach(function (a, b) {
		if (taskItem.textContent === a) {
			snackss.splice(b, 1);

			console.log(snackss);
		}
	});
	localStorage.setItem('snacks', JSON.stringify(snackss));
}

function removeTaskFromLocalStorageBread(taskItem) {
	let breads;
	if (localStorage.getItem('bread') === null) {
		breads = [];
	} else {
		breads = JSON.parse(localStorage.getItem('bread'));
	}

	breads.forEach(function (a, b) {
		if (taskItem.textContent === a) {
			breads.splice(b, 1);

			console.log(breads);
		}
	});
	localStorage.setItem('bread', JSON.stringify(breads));
}

function removeTaskFromLocalStorageHousehold(taskItem) {
	let households;
	if (localStorage.getItem('household') === null) {
		households = [];
	} else {
		households = JSON.parse(localStorage.getItem('household'));
	}

	households.forEach(function (a, b) {
		if (taskItem.textContent === a) {
			households.splice(b, 1);

			console.log(households);
		}
	});
	localStorage.setItem('household', JSON.stringify(households));
}

function removeTaskFromLocalStorageMisc(taskItem) {
	let miscs;
	if (localStorage.getItem('misc') === null) {
		miscs = [];
	} else {
		miscs = JSON.parse(localStorage.getItem('misc'));
	}

	miscs.forEach(function (a, b) {
		if (taskItem.textContent === a) {
			miscs.splice(b, 1);

			console.log(miscs);
		}
	});
	localStorage.setItem('misc', JSON.stringify(miscs));
}

// Get Items from local storage

function getItems() {
	let produce;
	if (localStorage.getItem('produce') === null) {
		produce = [];
	} else {
		produce = JSON.parse(localStorage.getItem('produce'));
	}
	produce.forEach(function (item) {
		const li = document.createElement('li');
		li.className = 'list-group-item';
		li.innerHTML = `<input type="checkbox" class="complete" /><span class="ml-2">${item}</span
        ><a href="#" class="delete-item float-right"
            ><i class="far fa-trash-alt text-danger"></i
        ></a>`;
		produceList.append(li);
	});

	let packaged;
	if (localStorage.getItem('packaged') === null) {
		packaged = [];
	} else {
		packaged = JSON.parse(localStorage.getItem('packaged'));
	}
	packaged.forEach(function (item) {
		const li = document.createElement('li');
		li.className = 'list-group-item';
		li.innerHTML = `<input type="checkbox" class="complete" /><span class="ml-2">${item}</span
        ><a href="#" class="delete-item float-right"
            ><i class="far fa-trash-alt text-danger"></i
        ></a>`;
		packagedList.append(li);
	});

	let refrigerated;
	if (localStorage.getItem('refrigerated') === null) {
		refrigerated = [];
	} else {
		refrigerated = JSON.parse(localStorage.getItem('refrigerated'));
	}
	refrigerated.forEach(function (item) {
		const li = document.createElement('li');
		li.className = 'list-group-item';
		li.innerHTML = `<input type="checkbox" class="complete" /><span class="ml-2">${item}</span
        ><a href="#" class="delete-item float-right"
            ><i class="far fa-trash-alt text-danger"></i
        ></a>`;
		refrigeratedList.append(li);
	});

	let frozen;
	if (localStorage.getItem('frozen') === null) {
		frozen = [];
	} else {
		frozen = JSON.parse(localStorage.getItem('frozen'));
	}
	frozen.forEach(function (item) {
		const li = document.createElement('li');
		li.className = 'list-group-item';
		li.innerHTML = `<input type="checkbox" class="complete" /><span class="ml-2">${item}</span
        ><a href="#" class="delete-item float-right"
            ><i class="far fa-trash-alt text-danger"></i
        ></a>`;
		frozenList.append(li);
	});

	let snacks;
	if (localStorage.getItem('snacks') === null) {
		snacks = [];
	} else {
		snacks = JSON.parse(localStorage.getItem('snacks'));
	}
	snacks.forEach(function (item) {
		const li = document.createElement('li');
		li.className = 'list-group-item';
		li.innerHTML = `<input type="checkbox" class="complete" /><span class="ml-2">${item}</span
        ><a href="#" class="delete-item float-right"
            ><i class="far fa-trash-alt text-danger"></i
        ></a>`;
		snacksList.append(li);
	});

	let bread;
	if (localStorage.getItem('bread') === null) {
		bread = [];
	} else {
		bread = JSON.parse(localStorage.getItem('bread'));
	}
	bread.forEach(function (item) {
		const li = document.createElement('li');
		li.className = 'list-group-item';
		li.innerHTML = `<input type="checkbox" class="complete" /><span class="ml-2">${item}</span
        ><a href="#" class="delete-item float-right"
            ><i class="far fa-trash-alt text-danger"></i
        ></a>`;
		breadList.append(li);
	});

	let household;
	if (localStorage.getItem('household') === null) {
		household = [];
	} else {
		household = JSON.parse(localStorage.getItem('household'));
	}
	household.forEach(function (item) {
		const li = document.createElement('li');
		li.className = 'list-group-item';
		li.innerHTML = `<input type="checkbox" class="complete" /><span class="ml-2">${item}</span
        ><a href="#" class="delete-item float-right"
            ><i class="far fa-trash-alt text-danger"></i
        ></a>`;
		householdList.append(li);
	});

	let misc;
	if (localStorage.getItem('misc') === null) {
		misc = [];
	} else {
		misc = JSON.parse(localStorage.getItem('misc'));
	}
	misc.forEach(function (item) {
		const li = document.createElement('li');
		li.className = 'list-group-item';
		li.innerHTML = `<input type="checkbox" class="complete" /><span class="ml-2">${item}</span
        ><a href="#" class="delete-item float-right"
            ><i class="far fa-trash-alt text-danger"></i
        ></a>`;
		miscList.append(li);
	});
}

// Add favorites
function addFavorites() {
	let produceFaves = ['Apples', 'Strawberries', 'Blueberries', 'Mushrooms'];
	let packagedFaves = ['Black beans', 'Tuna', 'Hummus', 'Oatmeal'];
	let refrigeratedFaves = ['Eggs', 'Almond Milk'];
	let frozenFaves = ['Veggie Burgers', 'Frozen peas', 'Nuggets'];
	let snacksFaves = ['Chips'];
	let breadFaves = ['Bread', 'Buns', 'Rice cakes'];
	let householdFaves = ['Bike wipes', 'Hand soap'];
	let miscFaves = [];

	//Start of function
	produceFaves.forEach(function (item) {
		if (
			localStorage.getItem('produce') === null ||
			localStorage.getItem('produce').includes(item) == false
		) {
			const li = document.createElement('li');
			li.className = 'list-group-item';
			li.innerHTML = `<input type="checkbox" class="complete" /><span class="ml-2">${item}</span
        ><a href="#" class="delete-item float-right"
            ><i class="far fa-trash-alt text-danger"></i
        ></a>`;
			produceList.append(li);
		}
	});
	let produce;
	if (localStorage.getItem('produce') === null) {
		produce = [];
	} else {
		produce = JSON.parse(localStorage.getItem('produce'));
	}
	produce = produce.concat(produceFaves);
	produce = Array.from(new Set(produce));

	localStorage.setItem('produce', JSON.stringify(produce));
	// End of function

	packagedFaves.forEach(function (item) {
		if (
			localStorage.getItem('packaged') === null ||
			localStorage.getItem('packaged').includes(item) == false
		) {
			const li = document.createElement('li');
			li.className = 'list-group-item';
			li.innerHTML = `<input type="checkbox" class="complete" /><span class="ml-2">${item}</span
	><a href="#" class="delete-item float-right"
		><i class="far fa-trash-alt text-danger"></i
	></a>`;
			packagedList.append(li);
		}
	});
	let packaged;
	if (localStorage.getItem('packaged') === null) {
		packaged = [];
	} else {
		packaged = JSON.parse(localStorage.getItem('packaged'));
	}
	packaged = packaged.concat(packagedFaves);
	packaged = Array.from(new Set(packaged));

	localStorage.setItem('packaged', JSON.stringify(packaged));
	// End of function

	refrigeratedFaves.forEach(function (item) {
		if (
			localStorage.getItem('refrigerated') === null ||
			localStorage.getItem('refrigerated').includes(item) == false
		) {
			const li = document.createElement('li');
			li.className = 'list-group-item';
			li.innerHTML = `<input type="checkbox" class="complete" /><span class="ml-2">${item}</span
	><a href="#" class="delete-item float-right"
		><i class="far fa-trash-alt text-danger"></i
	></a>`;
			refrigeratedList.append(li);
		}
	});
	let refrigerated;
	if (localStorage.getItem('refrigerated') === null) {
		refrigerated = [];
	} else {
		refrigerated = JSON.parse(localStorage.getItem('refrigerated'));
	}
	refrigerated = refrigerated.concat(refrigeratedFaves);
	refrigerated = Array.from(new Set(refrigerated));

	localStorage.setItem('refrigerated', JSON.stringify(refrigerated));
	// End of function

	frozenFaves.forEach(function (item) {
		if (
			localStorage.getItem('frozen') === null ||
			localStorage.getItem('frozen').includes(item) == false
		) {
			const li = document.createElement('li');
			li.className = 'list-group-item';
			li.innerHTML = `<input type="checkbox" class="complete" /><span class="ml-2">${item}</span
	><a href="#" class="delete-item float-right"
		><i class="far fa-trash-alt text-danger"></i
	></a>`;
			frozenList.append(li);
		}
	});
	let frozen;
	if (localStorage.getItem('frozen') === null) {
		frozen = [];
	} else {
		frozen = JSON.parse(localStorage.getItem('frozen'));
	}
	frozen = frozen.concat(frozenFaves);
	frozen = Array.from(new Set(frozen));

	localStorage.setItem('frozen', JSON.stringify(frozen));
	// End of function

	snacksFaves.forEach(function (item) {
		if (
			localStorage.getItem('snacks') === null ||
			localStorage.getItem('snacks').includes(item) == false
		) {
			const li = document.createElement('li');
			li.className = 'list-group-item';
			li.innerHTML = `<input type="checkbox" class="complete" /><span class="ml-2">${item}</span
	><a href="#" class="delete-item float-right"
		><i class="far fa-trash-alt text-danger"></i
	></a>`;
			snacksList.append(li);
		}
	});
	let snacks;
	if (localStorage.getItem('snacks') === null) {
		snacks = [];
	} else {
		snacks = JSON.parse(localStorage.getItem('snacks'));
	}
	snacks = snacks.concat(snacksFaves);
	snacks = Array.from(new Set(snacks));

	localStorage.setItem('snacks', JSON.stringify(snacks));
	// End of function

	breadFaves.forEach(function (item) {
		if (
			localStorage.getItem('bread') === null ||
			localStorage.getItem('bread').includes(item) == false
		) {
			const li = document.createElement('li');
			li.className = 'list-group-item';
			li.innerHTML = `<input type="checkbox" class="complete" /><span class="ml-2">${item}</span
	><a href="#" class="delete-item float-right"
		><i class="far fa-trash-alt text-danger"></i
	></a>`;
			breadList.append(li);
		}
	});
	let bread;
	if (localStorage.getItem('bread') === null) {
		bread = [];
	} else {
		bread = JSON.parse(localStorage.getItem('bread'));
	}
	bread = bread.concat(breadFaves);
	bread = Array.from(new Set(bread));

	localStorage.setItem('bread', JSON.stringify(bread));
	// End of function

	householdFaves.forEach(function (item) {
		if (
			localStorage.getItem('household') === null ||
			localStorage.getItem('household').includes(item) == false
		) {
			const li = document.createElement('li');
			li.className = 'list-group-item';
			li.innerHTML = `<input type="checkbox" class="complete" /><span class="ml-2">${item}</span
	><a href="#" class="delete-item float-right"
		><i class="far fa-trash-alt text-danger"></i
	></a>`;
			householdList.append(li);
		}
	});
	let household;
	if (localStorage.getItem('household') === null) {
		household = [];
	} else {
		household = JSON.parse(localStorage.getItem('household'));
	}
	household = household.concat(householdFaves);
	household = Array.from(new Set(household));

	localStorage.setItem('household', JSON.stringify(household));
	// End of function

	miscFaves.forEach(function (item) {
		if (
			localStorage.getItem('misc') === null ||
			localStorage.getItem('misc').includes(item) == false
		) {
			const li = document.createElement('li');
			li.className = 'list-group-item';
			li.innerHTML = `<input type="checkbox" class="complete" /><span class="ml-2">${item}</span
        ><a href="#" class="delete-item float-right"
            ><i class="far fa-trash-alt text-danger"></i
        ></a>`;
			miscList.append(li);
		}
	});
	let misc;
	if (localStorage.getItem('misc') === null) {
		misc = [];
	} else {
		misc = JSON.parse(localStorage.getItem('misc'));
	}
	misc = misc.concat(miscFaves);
	misc = Array.from(new Set(misc));

	localStorage.setItem('misc', JSON.stringify(misc));
	// End of function
}
// produce = JSON.parse(localStorage.getItem('produce'));

// Clear checked items

// clear all items
function clearAll(e) {
	if (confirm('Are you sure?')) {
		produceList.remove();
		packagedList.remove();
		refrigeratedList.remove();
		frozenList.remove();
		snacksList.remove();
		breadList.remove();
		householdList.remove();
		miscList.remove();
		localStorage.clear();
		location.reload();
	}
}
