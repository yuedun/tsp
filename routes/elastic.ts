const { Client } = require('@elastic/elasticsearch');
import { elastic } from '../config';
const client = new Client({ node: elastic });

export class Elastic {
	async search() {
		try {
			const result = await client.search({
				index: 'elk-nginxdomainname-2020-06-03',
				body: {
					query:{
						match:{
							referer: ""
						}
					}
				}
			})
			return result;
		} catch (error) {
			console.error(error);
		}
	}
	async info() {
		try {
			const result = await client.info();
			return result;
		} catch (error) {
			console.error(error);

		}
	}
}
