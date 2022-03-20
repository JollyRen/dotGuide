import React from 'react';

export default function Language() {
	return (
		<div>
			Language:
			<div>
				<select name="language" id="language">
					<option value="JavaScript">JavaScript</option>
					<option value="C">C</option>
					<option value="C#">C#</option>
					<option value="C++">C++</option>
					<option value="CSS">CSS</option>
					<option value="Haskell">Haskell</option>
					<option value="Java">Java</option>
					<option value="JSX">JSX</option>
					<option value="Kotlin">Kotlin</option>
					<option value="PHP">PHP</option>
					<option value="Python">Python</option>
					<option value="Ruby">Ruby</option>
					<option value="Rust">Rust</option>
					<option value="SQL">SQL</option>
					<option value="Swift">Swift</option>
					<option value="XML/HTML">XML/HTML</option>
				</select>
			</div>
		</div>
	);
}
