<?php get_header(); ?>
<div class="content-wrapper">
    <?php include('sidebar.php');

    $term = get_queried_object();

    switch ($term->taxonomy) {
        case 'tentes_tax':
            $post_type = 'tentes';
            $breadcrumbs = 'ΤΕΝΤΕΣ /';
            break;
        case 'pergoles_tax':
            $post_type = 'pergoles';
            $breadcrumbs = 'ΠΕΡΓΚΟΛΕΣ /';
            break;
        default:

            break;
    }



    $posts = get_posts(array(
        'post_type' => $post_type,
        'tax_query' => array(
            array(
                'taxonomy' => $term->taxonomy,
                'field' => 'id',
                'terms' => $term->term_id
            )
        )
    ));
    ?>
    <section class="category">
        <div class="category--heading">
            <h5 class="breadcrumbs"><?php echo $breadcrumbs ?></h5>
            <h2 class="item-heading">
                <a href="<?php echo home_url(); ?>"><i class="fas fa-angle-left"></i></a>
                <span id="post-type" data-post-type="<?php echo $post_type ?>"><?php echo $term->name ?></span>
            </h2>
        </div>
        <div class="category--images">
            <div class="swiper-container">
                <div class="swiper-wrapper">

                    <?php
                    foreach ($posts as $post) {
                        $image = get_the_post_thumbnail_url($post->ID);
                        if ($image) {
                            echo '<div class="swiper-slide" data-post-id="' . $post->ID . '">
                                     <img src="' . $image . '" alt="Post featured image">
                                 </div>';
                        }
                    }
                    ?>

                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </div>
        <div class="category__active">
            <div class="swiper-container">
                <div class="swiper-wrapper">

                </div>

                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>

                <div class="swiper-pagination"></div>
            </div>
        </div>
</div>
</section>
</div>
<?php get_footer();  ?> 