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
        <div class="product">
            <h2 class="product__title">ΤΕΝΤΕΣ</h2>
            <div class="product__top-img"></div>
            <div class="product__categories">1</div>
        </div>
        <div class="product">
            <h2 class="product__title">ΠΕΡΓΚΟΛΕΣ</h2>
            <div class="product__top-img"></div>
            <div class="product__categories">2</div>
        </div>
        <div class="product">
            <h2 class="product__title">ΕΙΔΙΚΕς ΚΑΤΑΣΚΕΥΕΣ</h2>
            <div class="product__top-img"></div>
            <div class="product__categories">3</div>
        </div>
    </main>
</div>

<input type="hidden" id="url" value="<?php echo home_url(); ?>">

<?php get_footer(); ?> 