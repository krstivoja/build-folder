<?php

/**
 * Plugin Name: ZIP File Builder
 * Plugin URI: https://example.com/zip-file-builder
 * Description: A WordPress plugin to create ZIP archives of specified files and folders.
 * Version: 1.0.0
 * Author: Your Name
 * Author URI: https://example.com
 * License: GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: zip-file-builder
 * Domain Path: /languages
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
    die;
}

// Define constants
define('ZIP_FILE_BUILDER_VERSION', '1.0.0');
define('ZIP_FILE_BUILDER_PATH', plugin_dir_path(__FILE__));
define('ZIP_FILE_BUILDER_URL', plugin_dir_url(__FILE__));
