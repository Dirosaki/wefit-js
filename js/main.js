const list = document.querySelector('.list-group')

list.children[0].classList.remove('active')

const renderElement = (elementType, text, attributes) => {
	const element = document.createElement(elementType)

	element.innerHTML = text
	Object.entries(attributes).forEach(([key, value]) => {
		element.setAttribute(key, value)
	})

	list.appendChild(element)
}

renderElement('li', 'Quarto item', {
	class: 'list-group-item active',
})

renderElement('li', 'Quinto item', {
	class: 'list-group-item',
})

const styles = `
	.btn-group-vertical {
		flex-direction: row;
		gap: 4px;
	}

	.col-lg-12 .btn-group-vertical .btn.btn-secondary {
		margin: 0;
		border-radius: 0.25rem;
		width: max-content;
		font-weight: 500;
	}

	.jumbotron {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		background: #6b757d;
		color: #f4f2f5;
		text-align: flex-end;
	}

	.jumbotron hr {
		width: 100%;
	}

	.jumbotron .lead {
		font-weight: 400;
	}

	.jumbotron p {
		font-weight: 500;
		text-align: end;
	}

	.jumbotron a {
		background: #28a844;
		border-color: #28a844;
	}

	.row:nth-of-type(3) > div.col-lg-3:nth-of-type(2) {
		order: 2;
	}

	.row:nth-of-type(3) > div.col-lg-3:nth-of-type(3) {
		order: 4;
	}

	.row:nth-of-type(3) > div.col-lg-3:nth-of-type(4) {
		order: 3;
	}

	.row:nth-of-type(3) > div.col-lg-3:nth-of-type(5) {
		order: 1;
	}

	.row:nth-of-type(3) > div.col-lg-3:nth-of-type(2) a {
		background: #28a844;
		border-color: #28a844;
	}
`

const stylesheet = document.createElement('style')

stylesheet.innerHTML = styles

document.head.appendChild(stylesheet)
