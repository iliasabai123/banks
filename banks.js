let groupData = [
	{
		alternative: null,
		bankName: "Eurasian Bank",
		bank_id: 1,
		bank_id_alser: 1,
		monthlyPayment: 0,
		percent: 1,
		preApprovedOfferId: 0,
		product_period: 3,
		product_type: 2,
		redirectUrl: null,
		rejectReason: "заявка отказана банком",
		response_status: 2,
	},
	{
		alternative: null,
		bankName: "Halyk Bank",
		bank_id: 3,
		bank_id_alser: 3,
		monthlyPayment: 0,
		percent: 1.2,
		preApprovedOfferId: 0,
		product_period: 6,
		product_type: 1,
		redirectUrl: null,
		rejectReason: "Заявка отклонена Банком",
		response_status: 2,
	},
	{
		alternative: null,
		bankName: "Halyk Bank",
		bank_id: 3,
		bank_id_alser: 3,
		monthlyPayment: 0,
		percent: 1.2,
		preApprovedOfferId: 0,
		product_period: 3,
		product_type: 1,
		redirectUrl: null,
		rejectReason: "Заявка отклонена Банком",
		response_status: 2,
	},
	{
		alternative: null,
		bankName: "Halyk Bank",
		bank_id: 3,
		bank_id_alser: 3,
		monthlyPayment: 0,
		percent: 1.2,
		preApprovedOfferId: 0,
		product_period: 9,
		product_type: 1,
		redirectUrl: null,
		rejectReason: "Заявка отклонена Банком",
		response_status: 2,
	},
	{
		alternative: null,
		bankName: "Halyk Bank",
		bank_id: 3,
		bank_id_alser: 3,
		monthlyPayment: 0,
		percent: 1.2,
		preApprovedOfferId: 0,
		product_period: 3,
		product_type: 1,
		redirectUrl: null,
		rejectReason: "Заявка отклонена Банком",
		response_status: 1,
	},
]

//Метод для группировки массива с обьектами
function groupBy(list, keyGetter) {
	const map = new Map();
	list.forEach((item) => {
		const key = keyGetter(item);
		const collection = map.get(key);
		if (!collection) {
			map.set(key, [item]);
		} else {
			collection.push(item);
		}
	});
	return map;
}

let test = [];

//Вызываем данный метод

const grouped = groupBy(groupData, pet => pet.bankName);


grouped.forEach(item => {
	console.log(item);
	item.forEach(item => {
	})
})
