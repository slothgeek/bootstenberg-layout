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
import { ToolbarGroup,ToggleControl,ToolbarButton, PanelBody, ColorPicker, __experimentalRadio as Radio, __experimentalRadioGroup as RadioGroup } from '@wordpress/components';
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
							{ __( 'Layout (Fila)', 'bootstenberg-layout' ) }
						</div>
						{ __( 'Agrega una o más columnas presionando el botón de abajo con el símbolo de más.', 'bootstenberg-layout' ) }
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
						label={__("Mostrar guía", "bootstenberg-layout") }
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
				<div className="wp-block-sg-block-bootstenberg-layout">
					<PanelBody title={ __( 'Alineación', 'bootstenberg-layout' ) } initialOpen={ true }>
						<div className="label">
							<span>Alineación vertical</span>
							<button className="btn-clean" onClick={() => setAttributes({verticalAlign: ""})}>{__('Limpiar', 'bootstenberg-layout')}</button>
						</div>
						<RadioGroup
							onChange={ ( value ) => {
								setAttributes( { verticalAlign: value } );
							} }
							defaultChecked=""
							checked={ attributes.verticalAlign }>
							<Radio value=" align-items-start">{__('Arriba', 'bootstenberg-layout')}</Radio>
							<Radio value=" align-items-center">{__('Centro', 'bootstenberg-layout')}</Radio>
							<Radio value=" align-items-end">{__('Abajo', 'bootstenberg-layout')}</Radio>
						</RadioGroup>
					</PanelBody>
					<PanelBody title={ __( 'Espacio', 'bootstenberg-layout' ) } initialOpen={ false }>
						<ToggleControl
							label={__('¿Activar sección?','bootstenberg-layout')}
							help={ attributes.itsSection ? 'Sección.' : 'Solo fila.' }
							checked={ attributes.itsSection }
							onChange={ (value) => setAttributes( { itsSection: value } ) }
						/>
						<ToggleControl
							label={__('¿Activar contenedor?','bootstenberg-layout')}
							help={ attributes.hasContainer ? __('Contenedor.','bootstenberg-layout') : __('Solo fila.','bootstenberg-layout') }
							checked={ attributes.hasContainer }
							onChange={ (value) => setAttributes( { hasContainer: value } ) }
						/>
						<ToggleControl
							label={__('¿Ancho completo?','bootstenberg-layout')}
							help={ attributes.fullWidth ? __('Fila.','bootstenberg-layout')  : __('Solo fila.','bootstenberg-layout') }
							checked={ attributes.fullWidth }
							onChange={ (value) => setAttributes( { fullWidth: value } ) }
						/>
					</PanelBody>
					<PanelBody title={ __( 'Estilo', 'bootstenberg-layout' ) } initialOpen={ false }>
						<div className="sg-inspector">
							<div className="label">
								<span>{ __( 'Color de fondo', 'bootstenberg-layout' ) }</span>
								<button className="btn-clean" onClick={() => {
									let style = attributes.style;
									delete style.backgroundColor;
									setAttributes( {style: style} );

								}}>{ __( 'Limpiar', 'bootstenberg-layout' ) }
								</button>
							</div>
							<ColorPicker
								value={ attributes.style.backgroundColor }
								onChangeComplete={ ( color ) => setAttributes( { style: { ...attributes.style, backgroundColor: color.hex } } ) }
							/>
						</div>

						<div className="sg-inspector">

							<div className="label">
								<span>{ __( 'Color de texto', 'bootstenberg-layout' ) }</span>
								<button className="btn-clean" onClick={() => {
									let style = attributes.style;
									delete style.color;
									setAttributes( {style: style} );

								}}>{ __( 'Limpiar', 'bootstenberg-layout' ) }
								</button>
							</div>
							<ColorPicker
								value={ attributes.style.color }
								onChangeComplete={ ( color ) => setAttributes( { style: { ...attributes.style, color: color.hex } } ) }
							/>
						</div>
					</PanelBody>
				</div>
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
