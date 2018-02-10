import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithNotes, withNotes } from '@storybook/addon-notes';
import Toggle from '../components/Toggle';

storiesOf('Toggle', module)
	.add(
		'Default Toggle',
		withNotes(
			'Check the source to see how to add notes to help component usage' // with notes example
		)(() => <Toggle actionLogger={action('clicked')} />) // action logger example
	)
	.add('Toggle with Default ON', () => <Toggle defaultOn />)
	.add('Toggle with Render Props', () => (
		<Toggle>
			{(on, handleToggleState) => {
				const text = on ? 'Fuck Yea' : 'Fuck No';
				const customToggleStyle = {
					border: 'solid 2px skyblue',
					borderRadius: 4,
					cursor: 'pointer',
					background: '#fff',
					padding: 5,
					color: 'skyblue',
					textTransform: 'uppercase',
				};
				return (
					<button
						onClick={handleToggleState}
						style={customToggleStyle}
						className={text}
					>
						{text}
					</button>
				);
			}}
		</Toggle>
	));
