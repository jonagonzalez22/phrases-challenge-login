import React from 'react';

function withTitle(WrappedComponent: React.ComponentType<any>, title: string) {
	return function WithTitleComponent(props: any) {
		return <WrappedComponent {...props} title={title} />;
	};
}

export default withTitle;
