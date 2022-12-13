const initialData = [
	{
		id: "1",
		name: "Gigabyte",
		capacity: 16,
		channelType: 'single',
		ddr: 4,
		clockSpeed: 3200,
		imageUrl: '/somewhere',
		price: 6000
	}
]

let data = [
	{
		id: "1",
		name: "Gigabyte",
		capacity: 16,
		channelType: 'single',
		ddr: 4,
		clockSpeed: 3200,
		imageUrl: '/somewhere',
		price: 6000
	}
]

const getAll = () => {
	return data
}

const getById = (id) => {
	return data.find(ram => ram.id === id)
}

const findQuery = query => {
	return data.filter(ram => {
		for (let key in query) {
			if (key === 'name') {
				if (ram.name.toLowerCase().includes(query[key].toLowerCase()))
					return true
			} else if (typeof (ram[key]) === "number") {
				if (ram[key] !== Number(query[key])) return false
			} else if (ram[key] !== query[key]) {
				return false
			}
		}
		return true
	}).slice(query.start, query.end)
}

const resetData = () => {
	data = initialData
}

const dataService = {
	getAll,
	getById,
	findQuery,
	resetData
}

export default dataService
