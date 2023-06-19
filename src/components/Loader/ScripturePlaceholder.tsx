import * as React from 'react';
import ReactPlaceholder from '@oscar-21/react-placeholder';

import { ScriptureBookBlock } from './PlaceHolders';

const customerPlaceholder = (
	<div className="flex flex-wrap w-full">
		{['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''].map((item, k) => {
			return (
				<div className="w-1/2 sm:1/4 md:1/6 p-2 inline-block" key={k}>
					<ScriptureBookBlock />
				</div>
			);
		})}
	</div>
);

const ScripturePlaceholder: React.FC<{ loading: boolean }> = ({ loading, children }) => {
	return (
		<ReactPlaceholder showLoadingAnimation ready={!loading} customPlaceholder={customerPlaceholder}>
			{children}
		</ReactPlaceholder>
	);
};

export default ScripturePlaceholder;
