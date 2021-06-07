<?php
/**
 * Plugin Name:       Bootstenberg Layout (Gutenberg Block)
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            SlothGeek
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       bootstenberg-layout
 *
 * @package           sg-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function create_block_bootstenberg_layout_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'create_block_bootstenberg_layout_block_init' );

if (is_admin()) {
	function add_boostrap_js_to_gutenberg(){
		wp_enqueue_script(
			'bootstrap-js-cdn',
			'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js',
			array(),
			'1.0',
			false
		);
	}
	add_action('admin_enqueue_scripts', 'add_boostrap_js_to_gutenberg');

	function add_bootstrap_css_to_gutenberg(){
		add_theme_support( 'editor-styles' );
		add_editor_style( 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css' );
	}
	add_action('after_setup_theme', 'add_bootstrap_css_to_gutenberg');
}
