const query = `{
    ac {
        redirects {
            to
            from
         }
    }
  }`;

module.exports = function generateRedirects(actions, graphql) {
	const { createRedirect } = actions;
	return graphql(query)
		.then(result => {
			if (result.errors) {
				result.errors.forEach(e => console.error(e.toString()));
				return Promise.reject(result.errors);
			}
			const { redirects } = result.data.ac;

			console.log('Generating redirects');
			console.log(redirects);

			redirects.forEach(({ to, from }) => {
				createRedirect({
					fromPath: from,
					toPath: to,
					isPermanent: true
				});
			});
		})
		.catch(err => {
			console.warn(query);
			console.error(err);
		});
};
