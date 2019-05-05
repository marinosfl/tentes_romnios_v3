<?php $url = get_template_directory_uri(); ?>

<aside class="sidebar">
    <div class="sidebar__fixed">
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
                    <svg class="recipe__meta--icon recipe__meta--empty-star">
                        <use xlink:href="<?php echo $url ?>/img/icons_sprites.svg#phone" />
                    </svg>
                    <h3>210 933 0676</h3>
                </div>
                <div class="contact--info contact--mobile">
                    <svg class="recipe__meta--icon recipe__meta--empty-star">
                        <use xlink:href="<?php echo $url ?>/img/icons_sprites.svg#mobile" />
                    </svg>
                    <h3>694 851 2600</h3>
                </div>
                <div class="contact--info contact--email">
                    <svg class="recipe__meta--icon recipe__meta--empty-star">
                        <use xlink:href="<?php echo $url ?>/img/icons_sprites.svg#envelope" />
                    </svg>
                    <h3>romnios@hotmail.com</h3>
                </div>
            </div>
        </nav>
    </div>
</aside> 