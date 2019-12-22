import { h} from 'preact';
import { useState, useEffect } from 'preact/hooks';
import style from './style';
const SEARCH = 'https://api.github.com/search/repositories';

console.log(SEARCH)
export default function Home() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch(`${SEARCH}?q=preact`)
			.then(res => res.json())
			.then(data => setItems((data && data.items) || []));
	}, []);

	return (
		<div>
			<h1 style="text-align:center; font-weight: 200">Example</h1>
			<div class="list">
				{items.map(result => (
					<Result {...result} />
				))}
			</div>
		</div>
	);
}

const Result = result => (
	<div class="repl-list-item">
		<div>
			<a
				href={result.html_url}
				target="_blank"
				rel="noopener noreferrer"
				class="repl-link"
			>
				{result.full_name}
			</a>
			{" - "}
			<strong>{result.stargazers_count}</strong>
		</div>
		<p>{result.description}</p>
	</div>
);

require('preact/debug');