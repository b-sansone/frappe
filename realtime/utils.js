const { get_conf } = require("../node_utils");
const conf = get_conf();

function get_url(socket, path) {
	if (!path) {
		path = "";
	}
	let url = socket.request.headers.origin;
	console.log(`URL: ${url}`);
	if (conf.developer_mode) {
		let [protocol, host, port] = url.split(":");
		port = conf.webserver_port;
		url = `${protocol}:${host}:${port}`;
		console.log(`Dev url: ${url}`)
	}
	return url + path;
}

module.exports = {
	get_url,
};
