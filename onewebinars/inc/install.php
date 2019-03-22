<?php 

/**
 * 
 */
class Onewebinars_install
{
	
	function __construct()
	{
		load_theme_textdomain('onewebinars',get_template_directory() . '/languages' );
		add_action( 'after_setup_theme', array($this,'setup_theme') );
		$GLOBALS['content_width'] = 1980;
	}
	function setup_theme() {
	    add_theme_support( 'title-tag' );
	    add_theme_support( 'automatic-feed-links' );
	    add_theme_support( "post-thumbnails" );
	}
}
$Onewebinars_install = new Onewebinars_install();
?>