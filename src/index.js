/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( 'sg-block/bootstenberg-layout', {
	attributes: {
		itsSection:{
			type:'boolean',
			default:false
		},
		id:{
			type:'string',
		},
		hasContainer:{
			type:'boolean',
			default:false
		},
		fullWidth:{
			type:'boolean',
			default:false
		},
		showGuide:{
			type:'boolean',
			default:true
		},
		verticalAlign:{
			type:'string',
			default:''
		},
		style:{
			type: 'object',
			default: {}
		}
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
