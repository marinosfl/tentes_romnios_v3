<aside class="sidebar">
    <?php include('header_text-box.php'); ?>
    <hr />
    <div class="sidebar__icon-box">
        <div class="sidebar__icon burger">
            <div class="bun"></div>
            <div class="bun"></div>
            <div class="bun"></div>
        </div>
        <div class="sidebar__icon"><i class="fas fa-phone"></i></div>
        <div class="sidebar__icon"><i class="fas fa-envelope"></i></div>
    </div>
    <nav class="navbar" role="navigation">
        <?php wp_nav_menu(array('theme_location' => 'header-menu')); ?>
        <hr />
        <div class="contact">
            <div class="contact--info contact--phone">
                <i class="fas fa-phone"></i>
                <h3>210 933 0676</h3>
            </div>
            <div class="contact--info contact--mobile">
                <i class="fas fa-mobile-alt"></i>
                <h3>694 851 2600</h3>
            </div>
            <div class="contact--info contact--email">
                <i class="fas fa-envelope"></i>
                <h3>romnios@hotmail.com</h3>
            </div>
        </div>
    </nav>

</aside> 