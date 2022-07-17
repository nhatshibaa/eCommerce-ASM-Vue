<template>
  <div class="breadcrumb-area pt-95 pb-95 bg-img"
       style="background-image:url(assets/img/banner/banner-2.jpg);">
    <div class="container">
      <div class="breadcrumb-content text-center">
        <h2>Register</h2>
        <ul>
          <li><a href="/">home</a></li>
          <li class="active">Register</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="login-register-area pt-95 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-md-12 ml-auto mr-auto">
          <div class="login-register-wrapper">
            <div class="login-register-tab-list nav">
              <h4> register </h4>
            </div>
            <div class="tab-content">
              <div class="login-form-container">
                <div class="login-register-form">
                  <form action="#" method="post">
                    <input type="text" name="user-name" placeholder="Username">
                    <input type="password" name="user-password" placeholder="Password">
                    <input name="user-email" placeholder="Email" type="email">
                    <div class="button-box">
                      <button type="submit"><span>Register</span></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `Register`,
}
</script>

<style scoped>

</style>
