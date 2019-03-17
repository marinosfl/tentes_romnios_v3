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

    get_template_part('content', 'sliders');
    ?>


</div>
<?php get_footer();  ?> 