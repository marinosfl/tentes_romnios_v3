<?php get_header(); ?>
<div class="content-wrapper">
    <?php include('sidebar.php'); ?>
    <!-- Loading base url of for later usage in image imports -->
    <?php $url = get_template_directory_uri(); ?>
    <main class="main">
        <div class="product product__tentes" data-taxonomy="tentes_tax">
            <div class="product__top-img">
                <h2 class="product__title">ΤΕΝΤΕΣ</h2>
                <div class="product__description">
                    <h2 class="item-heading">
                        <svg class="recipe__meta--icon recipe__meta--empty-star">
                            <use xlink:href="<?php echo $url ?>/img/icons_sprites.svg#arrow_down_l" />
                        </svg>
                        <span>ΤΕΝΤΕΣ</span>
                    </h2>
                    <p class="product__description--content">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, incidunt. Lorem, ipsum dolor.
                    </p>
                </div>
            </div>
            <div class="product__categories">

            </div>
        </div>
        <div class="product product__pergoles" data-taxonomy="pergoles_tax">
            <div class="product__top-img">
                <div class="product__top-img--hover"></div>
                <h2 class="product__title">ΠΕΡΓΚΟΛΕΣ</h2>
                <div class="product__description">
                    <h2 class="item-heading">
                        <svg class="recipe__meta--icon recipe__meta--empty-star">
                            <use xlink:href="<?php echo $url ?>/img/icons_sprites.svg#arrow_down_l" />
                        </svg>
                        <span>ΠΕΡΚΟΛΕΣ</span>
                    </h2>
                    <p class="product__description--content">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, incidunt. Lorem, ipsum dolor.
                    </p>
                </div>

            </div>
            <div class="product__categories">

            </div>
        </div>
        <div class="product product_kataskeues">
            <div class="product__top-img">
                <div class="product__top-img--hover"></div>
                <h2 class="product__title">ΕΙΔΙΚΕΣ ΚΑΤΑΣΚΕΥΕΣ</h2>
                <div class="product__description">
                    <h2 class="item-heading">
                        <svg class="recipe__meta--icon recipe__meta--empty-star">
                            <use xlink:href="<?php echo $url ?>/img/icons_sprites.svg#arrow_down_l" />
                        </svg>
                        <span>ΕΙΔΙΚΕΣ ΚΑΤΑΣΚΕΥΕΣ</span>
                    </h2>
                    <p class="product__description--content">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, incidunt. Lorem, ipsum dolor.
                    </p>
                </div>
            </div>
            <div class="product__categories">

            </div>
        </div>
    </main>
</div>

<input type="hidden" id="url" value="<?php echo home_url(); ?>">

<?php get_footer(); ?> 