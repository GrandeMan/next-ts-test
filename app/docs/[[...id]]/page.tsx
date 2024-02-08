interface ParamSchema {
	params: {
		id: string;
	};
	searchParams: {
		[key: string]: string | string[] | undefined;
	};
}

const DocsIdPage = ({ params, searchParams }: ParamSchema) => {
	console.log(searchParams);

	return (
		<div>
			<h1>{params?.id}</h1>
			<p>This is the docs {params && params.id} page</p>
		</div>
	);
};

export default DocsIdPage;
