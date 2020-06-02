const { Client } = require('@elastic/elasticsearch');
const client = new Client({ node: 'http://localhost:9200' });

export class Elastic {
	async search() {
		const result = await client.search({
			index: 'my-index',
			body: { foo: 'bar' }
		})
		console.log(">>>>>>>>>>>>", result);
		
		return result;
	}
}
