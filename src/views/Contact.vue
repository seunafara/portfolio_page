<template>
  <div class="port-home">
    <section class="section-hero">
      <div class="reg-flex-c">
        <h2 class="hero-intro" style="width: 100%;">
          I'd love to hear from you, <br /><span class="intro-big"
            >Contact Me.</span
          >
          <br />
          <span class="intro-sm">
            Together we can build amazing web/mobile applications and change the
            world.</span
          >
        </h2>
        <a
          href="mailto:seunvigo@gmail.com,abiola@vigowork.com"
          class="bg-contact-btn"
          >Send a message</a
        >
        <p class="contact-p">Socials :</p>
        <div class="reg-flex icons">
          <a href="https://github.com/seunafara" target="_blank">
            <i class="lab la-github"></i
          ></a>
          <a href="https://www.linkedin.com/in/seun-afara" target="_blank">
            <i class="lab la-linkedin"></i
          ></a>
          <a href="https://twitter.com/seunafara" target="_blank">
            <i class="lab la-twitter"></i
          ></a>
          <a href="https://www.instagram.com/seunafara/" target="_blank">
            <i class="lab la-instagram"></i
          ></a>
        </div>
      </div>
      <img class="memoji-about" src="../../public/uploads/contact.gif" alt="" />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
   metaInfo() {
    return {
      
       title: `Contact Me`,
      titleTemplate: '%s | Afara Seun',
      meta: [
        {
          name: "description",
          content:
            "Have questions for me? Kindly contact me todat.",
        },
      ],
    };
  },
};
</script>
