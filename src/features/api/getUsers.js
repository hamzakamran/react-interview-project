import userData from "../../assets/userData";

const getUsers = async () => {
	return new Promise((resolve, reject) => {
		try {
			setTimeout(() => {
				resolve(userData);
			}, 800);
		} catch (err) {
			reject(err);
		}
	});
};

export default getUsers;
