<template>
  <section class="vh-100">
  <div class="container-fluid">
    <div class="row">
      <div id="myform" class="col-lg-6 text-black">

        <div class="px-5 pt-5 ms-xl-4">
           <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 640 512"><path d="M456 0c-48.6 0-88 39.4-88 88v29.2L12.5 390.6c-14 10.8-16.6 30.9-5.9 44.9s30.9 16.6 44.9 5.9L126.1 384H259.2l46.6 113.1c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3L311.1 384H352c1.1 0 2.1 0 3.2 0l46.6 113.2c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3l-42-102C484.9 354.1 544 280 544 192V128v-8l80.5-20.1c8.6-2.1 13.8-10.8 11.6-19.4C629 52 603.4 32 574 32H523.9C507.7 12.5 483.3 0 456 0zm0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
        </div>

        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form style="width: 23rem;">

            <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Log in</h3>

            <div class="form-outline mb-4">
              <input type="email" id="form2Example18" class="form-control form-control-lg" />
              <label class="form-label" for="form2Example18">Email address</label>
            </div>

            <div class="form-outline mb-4">
              <input type="password" id="form2Example28" class="form-control form-control-lg" />
              <label class="form-label" for="form2Example28">Password</label>
            </div>

            <div class="pt-1 mb-4">
              <button class="btn btn-info btn-lg btn-block" type="button">
                <router-link
                style="text-decoration:none"
                class="text-white"
                to="/home"
                active-class="active-link"
                exact-active-class="active-link"
                >Login
                </router-link>
              </button>
            </div>

            <p class="small mb-5 pb-lg-2"><a class="text-muted" style="text-decoration:none" href="#!">Forgot password?</a></p>
            <p>Don't have an account? <router-link
                to="/sign-up"
                style="text-decoration:none"
                class="text-primary"
                active-class="active-link"
                exact-active-class="active-link"
                >Register Here
                </router-link></p>

          </form>

        </div>

      </div>

      <div id="side-background" class="col-lg-6 px-0 d-none d-lg-block">
        <img src="../assets/tower.jpg"
          alt="Login image" class="w-100 vh-100" style="object-fit: cover; object-position: left;">
      </div>

    </div>
  </div>
</section>
</template>

<script>
export default {

}
</script>

<style>

.bg-image-vertical {
position: relative;
overflow: hidden;
background-repeat: no-repeat;
background-position: right center;
background-size: auto 100%;
}

#myform {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* #side-background {
    background: linear-gradient(to right, #003f5e, #00d9ff);
    height: 100vh;
    background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
} */

@media (max-width: 992px) {

}

</style>
