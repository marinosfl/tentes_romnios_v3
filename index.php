<?php get_header(); ?>
<div class="content-wrapper">
    <?php include('sidebar.php'); ?>
    <main class="main">
        <div class="product product__tentes" data-taxonomy="tentes_tax">
            <div class="product__top-img">
                <h2 class="product__title">ΤΕΝΤΕΣ</h2>
                <div class="product__description">
                    <h2 class="item-heading">
                        <i class="fas fa-angle-down"></i>
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
                        <i class="fas fa-angle-down"></i>
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
                        <i class="fas fa-angle-down"></i>
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