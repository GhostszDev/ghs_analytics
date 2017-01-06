<?php
/*
Plugin Name: Ghost Analytics
Plugin URI: http://GhostszMusic.com
Description: Plugin for displaying your google analytics
Author: Steven "Ghost" Rivera
Version: 0.1
Author URI: http://GhostszMusic.com
*/

add_action( 'admin_init', 'ghs_admin_menu' );

function ghs_admin_menu() {
    add_menu_page(
        __( 'Analytic', 'textdomain' ),
        'Analytic',
        'manage_options',
        plugins_url(),
        'analytic_page',
        '',
        6
    );
}