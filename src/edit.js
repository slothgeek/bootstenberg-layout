/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InnerBlocks, InspectorControls, BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup,ToggleControl,ToolbarButton, PanelBody, ColorPicker } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import { help } from '@wordpress/icons';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ clientId, attributes, setAttributes }) {

	const ALLOWED_BLOCKS = [ 'sg-block/bootstenberg-columns'];

	const { select } = wp.data;

	const parentBlock = select( 'core/block-editor' ).getBlocksByClientId( clientId )[ 0 ];
	const childBlocks = parentBlock.innerBlocks;

	const emptyBlock = () => {
		if ( childBlocks.length == 0){

			return(
				[
					<div className="sg-empty-inner-block">
						<div className="sg-block-name">
							<span className="dashicons dashicons-grid-view"></span>
							{ __( 'Layout (Fila)', 'bootstenberg' ) }
						</div>
						{ __( 'Agrega una o más columnas presionando el botón de abajo con el símbolo de más.', 'bootstenberg' ) }
					</div>
				]
			)
		}
	}

	const blockControls = ( ) => {

		return (
			<BlockControls>
				<ToolbarGroup class="sg-toolbar">
					<ToolbarButton
						icon={ help }
						label={__("Mostrar guía", "bootstenberg") }
						onClick={ () => setAttributes( {showGuide: !attributes.showGuide} ) }
						className={ attributes.showGuide ? 'active' : ''}
					/>
				</ToolbarGroup>
			</BlockControls>
		);
	}

	const settings = () => {
		return(
			<InspectorControls>
				<PanelBody title={ __( 'Espacio', 'bootstenberg' ) } initialOpen={ false }>
					<ToggleControl
						label="¿Activar sección?"
						help={ attributes.itsSection ? 'Sección.' : 'Solo fila.' }
						checked={ attributes.itsSection }
						onChange={ (value) => setAttributes( { itsSection: value } ) }
					/>
					<ToggleControl
						label="¿Activar contenedor?"
						help={ attributes.hasContainer ? 'Contenedor.' : 'Solo fila.' }
						checked={ attributes.hasContainer }
						onChange={ (value) => setAttributes( { hasContainer: value } ) }
					/>
					<ToggleControl
						label="¿Ancho completo?"
						help={ attributes.fullWidth ? 'Fila.' : 'Solo fila.' }
						checked={ attributes.fullWidth }
						onChange={ (value) => setAttributes( { fullWidth: value } ) }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Estilo', 'bootstenberg' ) } initialOpen={ false }>
					<div className="sg-inspector">
						<div className="label">
							<span>{ __( 'Color de fondo', 'bootstenberg' ) }</span>
							<button className="btn-clean" onClick={() => {
								let style = attributes.style;
								delete style.backgroundColor;
								setAttributes( {style: style} );

							}}>{ __( 'Limpiar', 'bootstenberg' ) }
							</button>
						</div>
						<ColorPicker
							value={ attributes.style.backgroundColor }
							onChangeComplete={ ( color ) => setAttributes( { style: { ...attributes.style, backgroundColor: color.hex } } ) }
						/>
					</div>

					<div className="sg-inspector">

						<div className="label">
							<span>{ __( 'Color de texto', 'bootstenberg' ) }</span>
							<button className="btn-clean" onClick={() => {
								let style = attributes.style;
								delete style.color;
								setAttributes( {style: style} );

							}}>{ __( 'Limpiar', 'bootstenberg' ) }
							</button>
						</div>
						<ColorPicker
							value={ attributes.style.color }
							onChangeComplete={ ( color ) => setAttributes( { style: { ...attributes.style, color: color.hex } } ) }
						/>
					</div>

				</PanelBody>
			</InspectorControls>

		)
	}

	const blockProps = useBlockProps( {
		className: attributes.showGuide ? 'guide' : '',
	} );

	return (
		<div { ...blockProps } style={ attributes.style }>
			{ blockControls() }
			{ settings() }
			{ emptyBlock() }
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				renderAppender={ () => (
					<div class="apender-container">
						<InnerBlocks.ButtonBlockAppender />
					</div>

				) }
			/>

		</div>
	);
}

const rowCustomClassName = createHigherOrderComponent((BlockListBlock) => {
	return props => {
		if(props.name == "sg-block/bootstenberg-layout"){
			return <BlockListBlock { ...props } className={ 'row' } />
		}

		return <BlockListBlock { ...props } />
	}
}, 'rowCustomClassName');

wp.hooks.addFilter('editor.BlockListBlock', 'sg-block/bootstenberg-layout', rowCustomClassName);
