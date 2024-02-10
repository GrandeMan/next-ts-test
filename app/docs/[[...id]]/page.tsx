interface ParamSchema {
	params: {
		id: string;
	};
}

const DocsIdPage = ({ params }: ParamSchema) => {
	return (
		<div>
			<h1>{params?.id}</h1>
			<p>This is the docs {params && params.id} page</p>
		</div>
	);
};

export default DocsIdPage;
