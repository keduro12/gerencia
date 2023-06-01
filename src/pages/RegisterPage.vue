<template>
  <main>
    <div class="container">

      <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div class="d-flex justify-content-center py-4">
                <a href="https://sstarcompaty.netlify.app/" class="logo d-flex align-items-center w-auto">
                  <img src="src/assets/favicon.png" alt="">
                  <span class="d-none d-lg-block">StarCompany</span>
                </a>
              </div><!-- End Logo -->

              <div class="card mb-3">

                <div class="card-body">

                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">Crear Cuenta</h5>
                    <p class="text-center small">Ingresa los datos para crear una cuenta en StarCompany</p>
                  </div>

                  <form class="row g-3 needs-validation" novalidate @submit.prevent="handleSubmit">
                    <div class="col-12">
                      <label for="yourName" class="form-label">Nombre de la empresa</label>
                      <input type="text" name="name" class="form-control" id="yourName" required>
                      <div class="invalid-feedback">Please, enter your name!</div>
                    </div>

                    <div class="col-12">
                      <label for="yourEmail" class="form-label">Correo</label>
                      <input type="email" name="email" class="form-control" id="yourEmail" required v-model.trim="email">
                      <div class="invalid-feedback">Please enter a valid Email adddress!</div>
                    </div>

                    <!-- <div class="col-12">
                      <label for="yourUsername" class="form-label">Username</label>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" name="username" class="form-control" id="yourUsername" required>
                        <div class="invalid-feedback">Please choose a username.</div>
                      </div>
                    </div> -->

                    <div class="col-12">
                      <label for="yourPassword" class="form-label">Contraseña</label>
                      <input type="password" name="password" class="form-control" id="yourPassword" required v-model.trim="password">
                      <div class="invalid-feedback">Please enter your password!</div>
                    </div>
                    <br>
                    <div class="col-12">
                      <button class="btn btn-primary w-100" type="submit">Crear Cuenta</button>
                    </div>
                    <div class="col-12">
                      <p style="text-align: center;" class="small mb-0">Ya tienes cuenta? <RouterLink to="/login">Iniciar sesión</RouterLink> </p>
                    </div>
                  </form>

                </div>
              </div>

              <div class="credits">
                <!-- All the links in the footer should remain intact. -->
                <!-- You can delete the links only if you purchased the pro version. -->
                <!-- Licensing information: https://bootstrapmade.com/license/ -->
                <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->
                <!-- Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> -->
              </div>

            </div>
          </div>
        </div>

      </section>

    </div>
  </main><!-- End #main -->
</template>

<script setup>
  import { useUserStore } from "@/store/User.js"
  import { ref } from "vue";

  const userStore = useUserStore();

  const email = ref();
  const password = ref();

  const handleSubmit = async () => {
    await userStore.registerUser(email.value, password.value)

    console.log("hola")
  }
</script>

<style scoped>
</style>