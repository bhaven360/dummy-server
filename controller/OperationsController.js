let Data = require("../Database");
const { v4: uuidv4 } = require("uuid");

class OperationsController {
	// Get all the data
	async getAll(req, res) {
		if (Data) {
			res.status(200).json({ data: Data, message: "Data Acquired" });
		} else {
			res.status(404).json({ message: "Database not found" });
		}
	}

	// Create new data
	async createData(req, res) {
		const { title, content } = req.body;
		if (Data && title && content) {
			const body = {
				guid: uuidv4(),
				title,
				description: content,
			};
			console.log(body);
			Data.push(body);
			res.status(200).json({ data: body, message: "Data Acquired" });
		} else {
			res.status(404).json({ message: "Database not found" });
		}
	}

	// Update data
	async update_data(req, res) {
		const { id, title, content } = req.body;
		if (Data && id && title && content) {
			for (let i = 0; i < Data.length; i++) {
				const body = {
					guid: id,
					title,
					description: content,
				};
				if ((Data[i].guid = id)) {
					console.log(body);
					Data[i].title = title;
					Data[i].description = content;
					break;
				}
			}
			res.status(200).json({ message: "Data updated" });
		} else {
			res.status(404).json({ message: "Database not found" });
		}
	}

	// Delete Data
	async deleteData(req, res) {
		const { id } = req.body;
		if (id && Data) {
			Data = Data.filter((ele) => {
				return ele.guid !== id;
			});
            res.status(200).json({message: "Data Deleted"});
		} else {
			res.status(404).json({ message: "Database not found" });
        }
	}
}

module.exports = new OperationsController();
