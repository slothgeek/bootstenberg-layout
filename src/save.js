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
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes}) {

	const classes = attributes.className !== undefined ? attributes.className : '';

	return attributes.hasContainer ?
		(
			<div id={ attributes.id } className={ `bootstenberg-layout container ${classes}` } style={ attributes.style }>
				{
					attributes.itsSection ?
						(
							<section className={ `row${attributes.verticalAlign}` }>
								<InnerBlocks.Content />
							</section>
						) :
						(
							<div className={ `row${attributes.verticalAlign}` }>
								<InnerBlocks.Content />
							</div>
						)
				}
			</div>
		) :
		(
			attributes.itsSection ?
				(
					<section id={ attributes.id }  className={`bootstenberg-layout row ${ classes }${ attributes.fullWidth?' full-width':'' }${attributes.verticalAlign}` } style={ attributes.style }>
						<InnerBlocks.Content />
					</section>
				) :

				(
					<div id={ attributes.id }  className={`bootstenberg-layout row ${ classes }${ attributes.fullWidth?' full-width':''  }${attributes.verticalAlign}` } style={ attributes.style }>
						<InnerBlocks.Content />
					</div>
				)
		);
}
