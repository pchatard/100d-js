// Cash Register

/*
Design a cash register drawer function checkCashRegister() that accepts purchase
price as the first argument (price), payment as the second argument (cash),
and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due,
or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key
change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills,
sorted in highest to lowest order, as the value of the change key.
*/

function checkCashRegister(price, cash, cid) {
	let status = "";
	let change = [];
	let changeDue = cash - price;
	let drawerTotal =
		Math.round(cid.reduce((prev, curr) => prev + curr[1], 0) * 100) / 100;
	const register = cid.reduce(
		function (acc, curr) {
			acc.total += curr[1];
			acc[curr[0]] = curr[1];
			return acc;
		},
		{ total: 0 }
	);

	if (changeDue > drawerTotal) {
		status = "INSUFFICIENT_FUNDS";
	} else if (changeDue === drawerTotal) {
		status = "CLOSED";
		change = [...cid];
	} else {
		const currencies = [
			{ name: "ONE HUNDRED", value: 100 },
			{ name: "TWENTY", value: 20 },
			{ name: "TEN", value: 10 },
			{ name: "FIVE", value: 5 },
			{ name: "ONE", value: 1 },
			{ name: "QUARTER", value: 0.25 },
			{ name: "DIME", value: 0.1 },
			{ name: "NICKEL", value: 0.05 },
			{ name: "PENNY", value: 0.01 },
		];
		const changeArr = currencies.reduce((acc, elem) => {
			let currentVal = 0;
			while (register[elem.name] > 0 && changeDue >= elem.value) {
				changeDue -= elem.value;
				register[elem.name] -= elem.value;
				currentVal += elem.value;
				changeDue = Math.round(changeDue * 100) / 100;
			}
			if (currentVal > 0) {
				acc.push([elem.name, currentVal]);
			}
			return acc;
		}, []);

		if (changeArr.length < 1 || changeDue > 0) {
			status = "INSUFFICIENT_FUNDS";
			change = [];
		} else {
			status = "OPEN";
			change = changeArr;
		}
	}
	return { status, change };
}

// Tests
console.log(
	checkCashRegister(19.5, 20, [
		["PENNY", 1.01],
		["NICKEL", 2.05],
		["DIME", 3.1],
		["QUARTER", 4.25],
		["ONE", 90],
		["FIVE", 55],
		["TEN", 20],
		["TWENTY", 60],
		["ONE HUNDRED", 100],
	])
); // should return an object.
console.log(
	checkCashRegister(19.5, 20, [
		["PENNY", 1.01],
		["NICKEL", 2.05],
		["DIME", 3.1],
		["QUARTER", 4.25],
		["ONE", 90],
		["FIVE", 55],
		["TEN", 20],
		["TWENTY", 60],
		["ONE HUNDRED", 100],
	])
); // should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
console.log(
	checkCashRegister(3.26, 100, [
		["PENNY", 1.01],
		["NICKEL", 2.05],
		["DIME", 3.1],
		["QUARTER", 4.25],
		["ONE", 90],
		["FIVE", 55],
		["TEN", 20],
		["TWENTY", 60],
		["ONE HUNDRED", 100],
	])
); // should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
console.log(
	checkCashRegister(19.5, 20, [
		["PENNY", 0.01],
		["NICKEL", 0],
		["DIME", 0],
		["QUARTER", 0],
		["ONE", 0],
		["FIVE", 0],
		["TEN", 0],
		["TWENTY", 0],
		["ONE HUNDRED", 0],
	])
); // should return {status: "INSUFFICIENT_FUNDS", change: []}.
console.log(
	checkCashRegister(19.5, 20, [
		["PENNY", 0.01],
		["NICKEL", 0],
		["DIME", 0],
		["QUARTER", 0],
		["ONE", 1],
		["FIVE", 0],
		["TEN", 0],
		["TWENTY", 0],
		["ONE HUNDRED", 0],
	])
); // should return {status: "INSUFFICIENT_FUNDS", change: []}.
console.log(
	checkCashRegister(19.5, 20, [
		["PENNY", 0.5],
		["NICKEL", 0],
		["DIME", 0],
		["QUARTER", 0],
		["ONE", 0],
		["FIVE", 0],
		["TEN", 0],
		["TWENTY", 0],
		["ONE HUNDRED", 0],
	])
); // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
