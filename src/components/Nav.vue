<template>
  <div class="nav-seun-a">
    <router-link to="/" class="logo">AS.</router-link>
    <button
      @click="toogleContactModal"
      class="contact-btn for-desk"
      >Contact Me <i class="las la-paper-plane"></i></button>
    <button
      @click="toogleContactModal"
      class="contact-btn for-mobile"
      ><i class="las la-paper-plane"></i></button>

       <div id="contactModal" class="modal">
        <div class="modal-content full-modal-width" style="padding: 20px 0px;">
          <span
            style="margin-right: 10px;"
            id="Claimclose"
            @click="toogleContactModal"
            class="close"
            >&times;</span
          >
          <a class="contact-btn-hov" href="mailto:seunvigo@gmail.com,abiola@vigowork.com">abiola@vigowork.com</a>
          <p class="contact-btn-or">or</p>
          <a
          style="margin-top: 0px;"
          target="_blank"
          href="https://wa.me/2348102038614?text=Hi%2C%20I%20would%20like%20to%20hire%20you%20for%20a%20software%20development%20project"
          class="bg-contact-btn"
          >Send a message on <i class="lab la-whatsapp"></i></a
        >
        </div>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    toogleContactModal(){
       let contactModal = document.getElementById('contactModal');
      if (contactModal.style.display == 'block') {
        contactModal.style.display = 'none';
      } else {
        contactModal.style.display = 'block';
      
      }
    }
  }
};
</script>

<style scoped></style>
