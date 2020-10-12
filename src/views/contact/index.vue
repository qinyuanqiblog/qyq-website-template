<template>
  <div id="app">

    <!-- Section: Page Header -->
    <section class="section-page-header">
      <div class="container">
        <div class="row">

          <!-- Page Title -->
          <div class="col-md-8">
            <h1 class="title">Contact</h1>
            <div class="subtitle">There are many variations of passages </div>
          </div>
          <!-- /Page Title -->

          <!-- Breadcrumbs -->
          <div class="col-md-4">
            <ul class="breadcrumb">
              <li><i class="fa fa-fw fa-home"></i> <a href="#">Home</a></li>
              <li>Contact</li>
            </ul>
          </div>
          <!-- /Breadcrumbs -->

        </div>
      </div>
    </section>
    <!-- /Section: Page Header -->

    <!-- Main -->
    <main class="main-container">
      <div class="container">

        <div class="row">

          <!-- Contact Form -->
          <div
            class="col-md-8 contact-form fadeIn wow"
            data-wow-duration="1.3s"
          >

            <h3 class="title">Send Message</h3>

            <form
              class="form-ajax"
              method="post"
            >
              <input
                type="hidden"
                name="form"
                value="Contact Page"
              >
              <div class="row">
                <div class="form-group col-md-6">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Your Name... *"
                    required
                  >
                </div>
                <div class="form-group col-md-6">
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="E-mail address... *"
                    required
                  >
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-12">
                  <textarea
                    name="message"
                    class="form-control"
                    placeholder="Message... "
                  ></textarea>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-12">
                  <button
                    type="submit"
                    class="btn btn-theme"
                  ><i class="fa fa-fw fa-paper-plane-o"></i> Send Message</button>
                </div>
              </div>
            </form>
          </div>
          <!-- /Contact Form -->

          <!-- Address -->
          <div
            class="col-md-4 fadeIn wow"
            data-wow-duration="1.3s"
            data-wow-delay="0.7s"
          >

            <h3 class="title">Information</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered
              alteration in some form.
            </p>

            <ul class="contact-information">
              <li><i class="icon fa fa-fw fa-globe"></i><span>Address</span> 988782, Our Street, L.A.</li>
              <li><i class="icon fa fa-fw fa-envelope"></i><span>E-mail</span> clients@example.com</li>
              <li><i class="icon fa fa-fw fa-phone"></i><span>Phone</span> +12 345 678 000</li>
            </ul>

          </div>
          <!-- /Address -->

        </div>

      </div>

      <div id="map-canvas"></div>

    </main>
    <!-- /Main -->

    <!-- Footer -->
    <footer class="footer section-small">
      <div class="container">
        <div class="row">

          <!-- Footer Column -->
          <div class="col-md-3 col-xs-6 footer-col">

            <!-- Footer Logo -->
            <div class="logo">
              <img src="images/logo.png">
            </div>
            <!-- /Footer Logo -->

            <!-- Footer Text -->
            <p class="text">
              It is a long established fact that a reader will be distracted by the readable.
            </p>
            <!-- /Footer Text -->

            <hr>

            <!-- Copyright -->
            <p class="copyright">
              Copyright &copy; 2015-2016 <strong>Valery Timofeev</strong>
            </p>
            <!-- /Copyright -->

            <!-- Footer Social -->
            <ul class="social-inline">
              <li><a
                  href="#"
                  class="fa fa-fw fa-facebook"
                ></a></li>
              <li><a
                  href="#"
                  class="fa fa-fw fa-twitter"
                ></a></li>
              <li><a
                  href="#"
                  class="fa fa-fw fa-google-plus"
                ></a></li>
              <li><a
                  href="#"
                  class="fa fa-fw fa-dribbble"
                ></a></li>
              <li><a
                  href="#"
                  class="fa fa-fw fa-pinterest"
                ></a></li>
            </ul>
            <!-- /Footer Social -->

          </div>
          <!-- /Footer Column -->

          <!-- Footer Column -->
          <div class="col-md-3 col-xs-6 footer-col">

            <h3 class="title">Latest From <span class="text-theme">Blog</span></h3>

            <!-- Footer Post -->
            <div class="media post">
              <div class="media-left">
                <div class="image">
                  <img src="images/last-post-01.jpg">
                </div>
              </div>
              <div class="media-body">
                <p class="text">
                  It is a long established fact that a reader will be distracted.
                </p>
                <a href="#">Read more</a>
              </div>
            </div>
            <!-- /Footer Post -->

            <!-- Footer Post -->
            <div class="media post">
              <div class="media-left">
                <div class="image">
                  <img src="images/last-post-02.jpg">
                </div>
              </div>
              <div class="media-body">
                <p class="text">
                  It is a long established fact that a reader will be distracted.
                </p>
                <a href="#">Read more</a>
              </div>
            </div>
            <!-- /Footer Post -->

          </div>
          <!-- /Footer Column -->

          <!-- Footer Column -->
          <div class="col-md-2 col-xs-6 footer-col">

            <h3 class="title">Site Menu</h3>

            <!-- Footer Menu -->
            <ul class="menu">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <!-- /Footer Menu -->

          </div>
          <!-- /Footer Column -->

          <!-- Footer Column -->
          <div class="col-md-4 col-xs-6 footer-col">

            <h3 class="title">Signup to <span class="text-theme">Newsletter</span></h3>

            <!-- Footer Signup Form -->
            <div class="signup-form">
              <form
                method="post"
                class="form-inline"
              >
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Your E-mail...*"
                    required
                  >
                </div>
                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-theme"
                  ><i class="fa fa-fw fa-envelope"></i></button>
                </div>
              </form>

            </div>
            <!-- /Footer Signup Form -->

            <hr>

            <!-- Footer Tags -->
            <div class="tags">
              <a
                href="#"
                class="tag"
              >web</a>
              <a
                href="#"
                class="tag"
              >design</a>
              <a
                href="#"
                class="tag"
              >clean</a>
              <a
                href="#"
                class="tag"
              >minimal</a>
              <a
                href="#"
                class="tag"
              >pixel perfect</a>
              <a
                href="#"
                class="tag"
              >blog</a>
              <a
                href="#"
                class="tag"
              >gallery</a>
            </div>
            <!-- /Footer Tags -->

          </div>
          <!-- /Footer Column -->

        </div>
      </div>
    </footer>
    <!-- /Footer -->

    <!-- Scroll To Top -->
    <div
      id="scroll-to-top"
      class="scroll-to-top"
    >
      <i class="icon fa fa-angle-up"></i>
    </div>
    <!-- /Scroll To Top -->

    <!-- Modal: Result Message -->
    <div
      class="modal fade"
      id="result"
      role="dialog"
    >
      <div class="modal-dialog">
        <div class="modal-content">

          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              <i class="fa fa-times"></i>
            </button>
            <h4 class="modal-title">Sending message</h4>
          </div>

          <div class="modal-body">

            <div class="result-icon">
              <div class="icon-border">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  preserveAspectRatio="none"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="6.215"
                    transform="rotate(90 8 8)"
                  ></circle>
                </svg>
                <i class="icon fa fa-check"></i>
              </div>
            </div>

            <p class="modal-result h4 text-center"></p>
          </div>

        </div>
      </div>
    </div>
    <!-- /Modal: Result Message -->
  </div>
</template>

<script>
export default {
  name: 'about',
}
</script>

<style>
</style>
