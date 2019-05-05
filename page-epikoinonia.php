<?php get_header(); ?>
<div class="content-wrapper">
  <?php include('sidebar.php'); ?>
  <div class="contact">
    <section class="who">
      <h3 class="contact__title">ΠΟΙΟΙ ΕΙΜΑΣΤΕ</h3>
      <div class="contact__content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati mollitia saepe, nulla cupiditate aperiam vel blanditiis officiis deleniti, quasi sint facilis iste minus quibusdam fugit? Veritatis incidunt voluptatibus harum atque.</p>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, aut nihil ipsam tenetur modi nulla ipsa. Animi ut praesentium, magnam rerum asperiores nisi nulla eum, iusto accusamus sint iste dolorum.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam dolorem repellat, enim aliquid corporis officia tenetur error dolore voluptas. Iusto suscipit quae perspiciatis tenetur, minima natus ipsa doloribus voluptate?</p>
      </div>
    </section>
    <section class="stores">
      <div class="contact__title">ΚΑΤΑΣΤΗΜΑΤΑ</div>
      <div class="stores__tabs">
        <svg class="stores__tabs--icon">
          <use xlink:href="<?php echo $url ?>/img/icons_sprites.svg#shop1" />
        </svg>
        <div class="stores__tab stores__tab--left active" data-tab="left">ΝΕΑ ΣΜΥΡΝΗ</div>
        <div class="stores__tab stores__tab--right" data-tab="right">ΠΑΛΑΙΟ ΦΑΛΗΡΟ</div>
        <svg class="stores__tabs--icon">
          <use xlink:href="<?php echo $url ?>/img/icons_sprites.svg#shop2" />
        </svg>
      </div>
      <div class="stores__tab--content-wrapper">
        <div class="stores__tab--content stores__tab--left-content active" data-tab-content="left">
          <div class="contact--info-wrapper">
            <div class="contact--info">
              <svg class="contact--icon">
                <use xlink:href="<?php echo $url ?>/img/icons_sprites.svg#shop_mini" />
              </svg>
              <span>Ευξείνου Πόντου 127, Νέα Σμύρνη</span>
            </div>
            <div class="contact--info">
              <svg class="contact--icon">
                <use xlink:href="<?php echo $url ?>/img/icons_sprites.svg#phone" />
              </svg>
              <span>210 933 0676</span>
            </div>
            <div class="contact--info">
              <svg class="contact--icon">
                <use xlink:href="<?php echo $url ?>/img/icons_sprites.svg#mobile" />
              </svg>
              <span>694 851 2600</span>
            </div>

          </div>
          <div class="stores__tab--map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6293.526255720372!2d23.7133649675885!3d37.93596382779342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bc4b1cc987e7%3A0x7ebb73a72c2417ff!2zzqHOqc6czp3Omc6fzqMgzpnOk86dzpHOpM6Zzp_Oow!5e0!3m2!1sel!2sgr!4v1557050422380!5m2!1sel!2sgr" width="450" height="350" frameborder="0" style="border:0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="stores__tab--content stores__tab--right-content" data-tab-content="right">
          <div class="stores__tab--map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6293.526255720372!2d23.7133649675885!3d37.93596382779342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bc4b1cc987e7%3A0x7ebb73a72c2417ff!2zzqHOqc6czp3Omc6fzqMgzpnOk86dzpHOpM6Zzp_Oow!5e0!3m2!1sel!2sgr!4v1557050422380!5m2!1sel!2sgr" width="450" height="350" frameborder="0" style="border:0" allowfullscreen></iframe>
          </div>
          <div class="contact--info-wrapper">
            <div class="contact--info">
              <svg class="contact--icon">
                <use xlink:href="<?php echo $url ?>/img/icons_sprites.svg#shop_mini" />
              </svg>
              <span>Ευξείνου Πόντου 127, Νέα Σμύρνη</span>
            </div>
            <div class="contact--info">
              <svg class="contact--icon">
                <use xlink:href="<?php echo $url ?>/img/icons_sprites.svg#phone" />
              </svg>
              <span>210 933 0676</span>
            </div>
            <div class="contact--info">
              <svg class="contact--icon">
                <use xlink:href="<?php echo $url ?>/img/icons_sprites.svg#mobile" />
              </svg>
              <span>694 851 2600</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="form">
      <div class="contact__title">ΕΠΙΚΟΙΝΩΝΙΑ</div>
      <div class="contact__form--content">
        <div class="contact--info">
          <svg class="contact--icon">
            <use xlink:href="<?php echo $url ?>/img/icons_sprites.svg#mobile" />
          </svg>
          <span>694 851 2600</span>
        </div>
        <div class="contact--info">
          <svg class="contact--icon">
            <use xlink:href="<?php echo $url ?>/img/icons_sprites.svg#envelope" />
          </svg>
          <span>romnios@hotmail.com</span>
        </div>

        <hr />

        <form method="post" id="contact-form" class="contact__form">
          <div class="contact__form--col">
            <div class="contact--field-wrapper">
              <div class="contact--error-wrapper">
                <!-- <label for="name">Όνομα</label> -->
                <input type="text" id="name" name="name" class="contact--field" placeholder="Όνομα" />
              </div>
            </div>
            <div class="contact--field-wrapper">
              <div class="contact--error-wrapper">
                <!-- <label for="email">Ε-mail</label> -->
                <input type="email" id="email" name="email" class="contact--field" placeholder="Ε-mail" />
              </div>
            </div>
          </div>
          <div class="contact__form--col">
            <div class="contact--error-wrapper message-wrapper">
              <!-- <label for="message">Κείμενο</label> -->
              <textarea name="message" id="message" class="contact--field contact--area" cols="30" rows="10" placeholder="Κείμενο"></textarea>
            </div>
            <input type="submit" name="submit" value="Αποστολή" class="submit" />
          </div>

          <input type="hidden" name="url" value="<?php echo get_template_directory_uri(); ?>" />
          <input type="hidden" name="form" value="contact-form" />
        </form>

      </div>
    </section>
  </div>
</div>
<?php get_footer(); ?>