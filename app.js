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

function removeItem(e) {
	if (e.target.parentElement.classList.contains('delete-item')) {
		// if (confirm('Are you sure?')) {
		e.target.parentElement.parentElement.remove();
		e.preventDefault();
	}
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

	produceFaves.forEach(function (item) {
		const li = document.createElement('li');
		li.className = 'list-group-item';
		li.innerHTML = `<input type="checkbox" class="complete" /><span class="ml-2">${item}</span
        ><a href="#" class="delete-item float-right"
            ><i class="far fa-trash-alt text-danger"></i
        ></a>`;
		produceList.append(li);
	});
	let produce;
	if (localStorage.getItem('produce') === null) {
		produce = [];
	} else {
		produce = JSON.parse(localStorage.getItem('produce'));
	}
	produce = produce.concat(produceFaves);
	localStorage.setItem('produce', JSON.stringify(produce));

	packagedFaves.forEach(function (item) {
		const li = document.createElement('li');
		li.className = 'list-group-item';
		li.innerHTML = `<input type="checkbox" class="complete" /><span class="ml-2">${item}</span
        ><a href="#" class="delete-item float-right"
            ><i class="far fa-trash-alt text-danger"></i
        ></a>`;
		packagedList.append(li);
	});
	let packaged;
	if (localStorage.getItem('packaged') === null) {
		packaged = [];
	} else {
		packaged = JSON.parse(localStorage.getItem('packaged'));
	}
	packaged = packaged.concat(packagedFaves);
	localStorage.setItem('packaged', JSON.stringify(packaged));

	refrigeratedFaves.forEach(function (item) {
		const li = document.createElement('li');
		li.className = 'list-group-item';
		li.innerHTML = `<input type="checkbox" class="complete" /><span class="ml-2">${item}</span
        ><a href="#" class="delete-item float-right"
            ><i class="far fa-trash-alt text-danger"></i
        ></a>`;
		refrigeratedList.append(li);
	});
	let refrigerated;
	if (localStorage.getItem('refrigerated') === null) {
		refrigerated = [];
	} else {
		refrigerated = JSON.parse(localStorage.getItem('refrigerated'));
	}
	refrigerated = refrigerated.concat(refrigeratedFaves);
	localStorage.setItem('refrigerated', JSON.stringify(refrigerated));

	frozenFaves.forEach(function (item) {
		const li = document.createElement('li');
		li.className = 'list-group-item';
		li.innerHTML = `<input type="checkbox" class="complete" /><span class="ml-2">${item}</span
        ><a href="#" class="delete-item float-right"
            ><i class="far fa-trash-alt text-danger"></i
        ></a>`;
		frozenList.append(li);
	});
	let frozen;
	if (localStorage.getItem('frozen') === null) {
		frozen = [];
	} else {
		frozen = JSON.parse(localStorage.getItem('frozen'));
	}
	frozen = frozen.concat(frozenFaves);
	localStorage.setItem('frozen', JSON.stringify(frozen));

	snacksFaves.forEach(function (item) {
		const li = document.createElement('li');
		li.className = 'list-group-item';
		li.innerHTML = `<input type="checkbox" class="complete" /><span class="ml-2">${item}</span
        ><a href="#" class="delete-item float-right"
            ><i class="far fa-trash-alt text-danger"></i
        ></a>`;
		snacksList.append(li);
	});
	let snacks;
	if (localStorage.getItem('snacks') === null) {
		snacks = [];
	} else {
		snacks = JSON.parse(localStorage.getItem('snacks'));
	}
	snacks = snacks.concat(snacksFaves);
	localStorage.setItem('snacks', JSON.stringify(snacks));

	breadFaves.forEach(function (item) {
		const li = document.createElement('li');
		li.className = 'list-group-item';
		li.innerHTML = `<input type="checkbox" class="complete" /><span class="ml-2">${item}</span
        ><a href="#" class="delete-item float-right"
            ><i class="far fa-trash-alt text-danger"></i
        ></a>`;
		breadList.append(li);
	});
	let bread;
	if (localStorage.getItem('bread') === null) {
		bread = [];
	} else {
		bread = JSON.parse(localStorage.getItem('bread'));
	}
	bread = bread.concat(breadFaves);
	localStorage.setItem('bread', JSON.stringify(bread));

	householdFaves.forEach(function (item) {
		const li = document.createElement('li');
		li.className = 'list-group-item';
		li.innerHTML = `<input type="checkbox" class="complete" /><span class="ml-2">${item}</span
        ><a href="#" class="delete-item float-right"
            ><i class="far fa-trash-alt text-danger"></i
        ></a>`;
		householdList.append(li);
	});
	let household;
	if (localStorage.getItem('household') === null) {
		household = [];
	} else {
		household = JSON.parse(localStorage.getItem('household'));
	}
	household = household.concat(householdFaves);
	localStorage.setItem('household', JSON.stringify(household));

	miscFaves.forEach(function (item) {
		const li = document.createElement('li');
		li.className = 'list-group-item';
		li.innerHTML = `<input type="checkbox" class="complete" /><span class="ml-2">${item}</span
        ><a href="#" class="delete-item float-right"
            ><i class="far fa-trash-alt text-danger"></i
        ></a>`;
		miscList.append(li);
	});
	let misc;
	if (localStorage.getItem('misc') === null) {
		misc = [];
	} else {
		misc = JSON.parse(localStorage.getItem('misc'));
	}
	misc = misc.concat(miscFaves);
	localStorage.setItem('misc', JSON.stringify(misc));
}
// produce = JSON.parse(localStorage.getItem('produce'));

// Clear checked items

// clear all items
function clearAll(e) {
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
