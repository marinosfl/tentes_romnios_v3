<?php get_header(); ?>
<div class="content-wrapper">
    <?php include('sidebar.php');

    $term = get_queried_object();

    switch ($term->name) {
      case 'tentes':
        $post_type = 'tentes';
        $title = 'ΤΕΝΤΕΣ';
        break;
      case 'pergoles':
        $post_type = 'pergoles';
        $title = 'ΠΕΡΓΚΟΛΕΣ';
        break;
      case 'kataskeues':
        $post_type = 'kataskeues';
        $title = 'ΕΙΔΙΚΕΣ ΚΑΤΑΣΚΕΥΕΣ';
        break;
      default:

        break;
    }

    $posts = get_posts(
      array(
        'post_type' => $post_type,
      )
    );

    get_template_part('content', 'sliders');

    ?>

</div>
<?php get_footer();  ?> 