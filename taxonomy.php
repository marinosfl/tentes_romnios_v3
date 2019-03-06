<?php get_header(); ?>
<div class="content-wrapper">
    <?php include('sidebar.php'); ?>
    <section class="category">
        <div class="category--heading">
            <h5 class="breadcrumbs">TΕΝΤΕΣ /</h5>
            <h2 class="item-heading">
                <i class="fas fa-angle-left"></i>
                <span>ΑΝΤΙΡΙΔΑ</span>
            </h2>
        </div>
        <div class="category--images">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="<?php echo get_template_directory_uri(); ?>/img/3.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="<?php echo get_template_directory_uri(); ?>/img/5.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="<?php echo get_template_directory_uri(); ?>/img/5.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="<?php echo get_template_directory_uri(); ?>/img/2.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="<?php echo get_template_directory_uri(); ?>/img/3.jpg" alt="">
                    </div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </div>
        <div class="category__active">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="<?php echo get_template_directory_uri(); ?>/img/5.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="<?php echo get_template_directory_uri(); ?>/img/3.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="<?php echo get_template_directory_uri(); ?>/img/5.jpg" alt="">
                    </div>
                </div>

                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>

                <div class="swiper-pagination"></div>
            </div>
        </div>
</div>
</section>
</div>
<?php get_footer(); ?> 