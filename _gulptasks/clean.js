import del from "del";

export const cleanView = () => {
	return del("view")
}

export const cleanImage = () => {
	return del("view/img")
}

module.exports = {
	cleanView,
	cleanImage
};
