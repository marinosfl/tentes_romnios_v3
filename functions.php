<?php

//hide admin bar in frontend
function hide_admin_bar_from_front_end()
{
  if (is_admin()) {
    return true;
  }
  return false;
}
add_filter('show_admin_bar', 'hide_admin_bar_from_front_end');

// include custom jQueryS
function include_custom_jquery()
{

  wp_deregister_script('jquery');
  wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', array(), null, false);
}

add_action('wp_enqueue_scripts', 'include_custom_jquery');

function enqueue_styles_and_scripts()
{
  // wp_enqueue_style('style', get_stylesheet_uri());

  // register webpack stylesheet and js with theme
  wp_enqueue_style('site_main_css', get_template_directory_uri() . '/build/css/main.min.css');
  wp_enqueue_script('site_main_js', get_template_directory_uri() . '/build/js/app.min.js', array(), '1.0.0', true);
}

add_action('wp_enqueue_scripts', 'enqueue_styles_and_scripts');

// Register menu
function menu()
{
  register_nav_menus(array(
    'header-menu' => 'Header Menu',
    'footer-menu' => 'Footer Menu'
  ));
}

add_action('init', 'menu');

//options page (Σελίδα διαχείρησης)
if (function_exists('acf_add_options_page')) {
  acf_add_options_page(array(
    'page_title' => 'Theme General Settings',
    'menu_title' => 'Σελίδα Διαχείρησης',
    'menu_slug' => 'theme-general-settings',
    'capability' => 'edit_posts',
    'redirect' => false
  ));
}


/* enabling featured image for post & custom posts */
add_theme_support('post-thumbnails');

function post_types_and_taxonomies()
{

  function register_custom_post_type($name, $menu_name, $register_name)
  {

    $labels = array(
      'name' => _x($name, 'Post type general name', 'textdomain'),
      'singular_name' => _x($name, 'Post type singular name', 'textdomain'),
      'menu_name' => _x($menu_name, 'Admin Menu text', 'textdomain'),
      'add_new' => _x('Προσθήκη', 'new item admin menu text', 'textdomain')
    );

    $args = array(
      'labels' => $labels,
      'public' => true,
      'publicly_queryable' => true,
      'show_ui' => true,
      'show_in_menu' => true,
      'query_var' => true,
      'rewrite' => array('slug' => $register_name),
      'capability_type' => 'post',
      'has_archive' => true,
      'hierarchical' => false,
      'menu_position' => null,
      'supports' => array('title', 'editor', 'thumbnail', 'excerpt', ),
      'show_in_rest' => true,
    );

    register_post_type($register_name, $args);
  }

  function register_tax($tax_name, $post_types, $label)
  {

    register_taxonomy(
      $tax_name,
      $post_types,
      array(
        'label' => __($label),
        'rewrite' => array('slug' => $tax_name),
        'hierarchical' => true,
        'show_in_rest' => true,
      )
    );
  }

  register_custom_post_type('Tentes', 'Τέντες', 'tentes');
  register_tax('tentes_tax', 'tentes', 'Κατηγορία Τεντας');

  register_custom_post_type('Pergoles', 'Πέργκολες', 'pergoles');
  register_tax('pergoles_tax', 'pergoles', 'Κατηγορία Περγκολας');

  register_custom_post_type('Kataskeues', 'Κατασκευές', 'kataskeues');
  register_tax('kataskeues_tax', 'kataskeues', 'Κατηγορία Κατασκευής');
}

add_action('init', 'post_types_and_taxonomies');

function remove_menus()
{
  if (!current_user_can('manage_options')) {
    remove_menu_page('edit.php');
    remove_menu_page('tools.php');
  }
}

add_action('admin_menu', 'remove_menus');

function add_cors_http_header()
{
  header("Access-Control-Allow-Origin: *");
}
add_action('init', 'add_cors_http_header');

