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
      'posts_per_page' => -1
    )
  );

  $url = get_template_directory_uri();

  ?>
  <section class="category">
    <div class="category--heading">
      <h2 class="item-heading">
        <a href="<?php echo home_url(); ?>">
          <svg class="recipe__meta--icon recipe__meta--empty-star">
            <use xlink:href="<?php echo $url ?>/img/icons_sprites.svg#arrow_left_l" />
          </svg>
        </a>
        <span id="post-type" data-post-type="<?php echo $post_type ?>"><?php echo $title ?></span>
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