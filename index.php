<?php
/*
Plugin Name: Ghost Analytics
Plugin URI: http://GhostszMusic.com
Description: Plugin for displaying your google analytics
Author: Steven "Ghost" Rivera
Version: 0.1
Author URI: http://GhostszMusic.com
*/

$domain = "";

function ghs_admin_scrs() {

    //styles
    wp_enqueue_style( 'bootstrap', get_template_directory_uri() . '/css/bootstrap.min.css');
    wp_enqueue_style( 'icons', get_template_directory_uri() . '/css/icons.css');
    wp_enqueue_style( 'datecss', get_template_directory_uri() . '/css/bootstrap-datetimepicker.min.css');
    wp_enqueue_style( 'main', get_template_directory_uri() . '/css/main.css');
    wp_enqueue_style( 'responsive', get_template_directory_uri() . '/css/responsive.css');
    wp_enqueue_style( 'style', get_template_directory_uri() . '/style.css');

    //scripts
    wp_enqueue_script('jq', get_template_directory_uri() . '/js/jquery-2.1.3.js');
    wp_enqueue_script('angularjs', get_template_directory_uri() . '/js/angular.min.js');
    wp_enqueue_script('angularjs-resource', get_template_directory_uri() . '/js/angular-resource.min.js');
    wp_enqueue_script('angularjs-route',  get_template_directory_uri() . '/js/angular-route.min.js');
    wp_enqueue_script('BSJS',  get_template_directory_uri() . '/js/bootstrap.min.js');
    wp_enqueue_script('UIBS',  get_template_directory_uri() . '/js/ui-bootstrap.min.js');
//    wp_enqueue_script('main', get_template_directory_uri() . '/js/main.js');
    wp_enqueue_script('moment', get_template_directory_uri() . '/js/moment.js');
    wp_enqueue_script('date', get_template_directory_uri() . '/js/bootstrap-datetimepicker.min.js');
    wp_enqueue_script('app', get_template_directory_uri() . '/js/app.js');
    wp_enqueue_script('GhsJS', get_template_directory_uri() . '/js/admin.js', array( 'angularjs', 'angularjs-route', 'jq', 'app', 'BSJS', 'UIBS', 'moment', 'date'), true);

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
