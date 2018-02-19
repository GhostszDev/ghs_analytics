<?php
/*
Plugin Name: Ghost Analytics
Plugin URI: http://GhostszMusic.com
Description: Plugin for displaying your google analytics
Author: Steven "Ghost" Rivera
Version: 0.1
Author URI: http://GhostszMusic.com
*/

$domain = site_url();

function ghs_admin_scrs($hook) {

    if ( $hook != 'toplevel_page_ghs_analytics') {
        return;
    }

    //styles
    wp_enqueue_style( 'bootstrap', plugin_dir_url( __FILE__ ) . 'css/bootstrap.min.css');
    wp_enqueue_style( 'icons', plugin_dir_url( __FILE__ ) . 'css/icons.css');
    wp_enqueue_style( 'datecss', plugin_dir_url( __FILE__ ) . 'css/bootstrap-datetimepicker.min.css');
    wp_enqueue_style( 'main', plugin_dir_url( __FILE__ ) . 'css/main.css');
    wp_enqueue_style( 'responsive', plugin_dir_url( __FILE__ ) . 'css/responsive.css');
    wp_enqueue_style( 'style', plugin_dir_url( __FILE__ ) . 'css/admin.css');

    //scripts
    wp_enqueue_script('jq', plugin_dir_url( __FILE__ ) . 'js/jquery-2.1.3.js');
    wp_enqueue_script('angularjs', plugin_dir_url( __FILE__ ) . 'js/angular.min.js');
    wp_enqueue_script('angularjs-resource', plugin_dir_url( __FILE__ ) . 'js/angular-resource.min.js');
    wp_enqueue_script('angularjs-route',  plugin_dir_url( __FILE__ ) . 'js/angular-route.min.js');
    wp_enqueue_script('BSJS',  plugin_dir_url( __FILE__ ) . 'js/bootstrap.min.js');
    wp_enqueue_script('UIBS',  plugin_dir_url( __FILE__ ) . 'js/ui-bootstrap.min.js');
//    wp_enqueue_script('main', plugin_dir_url( __FILE__ ) . '/js/main.js');
    wp_enqueue_script('moment', plugin_dir_url( __FILE__ ) . 'js/moment.js');
    wp_enqueue_script('date', plugin_dir_url( __FILE__ ) . 'js/bootstrap-datetimepicker.min.js');
    wp_enqueue_script('app', plugin_dir_url( __FILE__ ) . 'js/app.js');
    wp_enqueue_script('GhsJS', plugin_dir_url( __FILE__ ) . 'js/admin.js', array( 'angularjs', 'angularjs-route', 'jq', 'app', 'BSJS', 'UIBS', 'moment', 'date'), true);

}

function ghs_admin_add_page() {
    add_menu_page( 'Ghs Analytics', 'GHS Analytics', 'manage_options', 'ghs_analytics', 'ghs_admin_create_page', '', 126 );
}

function ghs_admin_create_page(){
    require_once(dirname( __FILE__ ) . '/pages/admin-dashboard.html');
}

//add actions
add_action( 'admin_menu', 'ghs_admin_add_page' );
add_action( 'admin_enqueue_scripts', 'ghs_admin_scrs' );
?>
