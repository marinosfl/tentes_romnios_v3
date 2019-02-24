<?php get_header(); ?>
<div class="content-wrapper">
    <aside class="sidebar">
        <div class="burger">
            <span class="bun"></span>
            <span class="bun"></span>
            <span class="bun"></span>
        </div>
        <div class="sidebar__icon-box">
            <div class="sidebar__icon"><i class="fas fa-phone"></i></div>
            <div class="sidebar__icon"><i class="fas fa-envelope"></i></div>
        </div>
        <nav class="navbar" role="navigation">
            <?php wp_nav_menu(array('theme_location' => 'header-menu')); ?>
        </nav>
    </aside>
    <main class="main">

    </main>
</div>

<input type="hidden" id="url" value="<?php echo home_url(); ?>">

<?php get_footer(); ?> 