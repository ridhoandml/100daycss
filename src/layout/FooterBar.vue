<template>
  <div class="footer">
    <p class="footer__text text__left">
      Thanks to
      <a class="divider" href="https://100dayscss.com/" target="_blank"
        >Matthias Martin</a
      >
      Creator 100 Days CSS
    </p>
    <p class="footer__text text__right">
      Made with ❤️ by
      <a class="divider" href="https://ridhoandml.com" target="_blank"
        >Ridho Anandamal</a
      >
      using
      <a href="https://vuejs.org/" target="_blank">VueJS 3</a>
    </p>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 18rem;
  padding: 2rem 1rem;
  margin-top: 1rem;
  cursor: default;
  clip-path: polygon(0% 40%, 0% 100%, 100% 100%, 100% 0%);
  background-color: white;
  color: #0f172a;
  width: 400px;
}

.footer__text {
  font-size: 0.875rem;
}

.text__right {
  text-align: end;
}

.footer__text > .divider {
  display: block;
  margin: 0.25rem 0 0.75rem 0;
}

.footer__text > a {
  position: relative;
  padding: 0 0.25rem;
  text-decoration: none;
  font-weight: 700;
  color: #0ea5e9;
  transition: color 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.footer__text > a:hover {
  color: white;
}

.footer__text > a::after {
  content: "";
  position: absolute;
  z-index: -1;
  bottom: -0.25rem;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #0ea5e9;
  border-radius: 2px;
  transition: height 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.footer__text > a:hover::after {
  height: 1.75rem;
  border-radius: 0;
}

@media only screen and (min-width: 400px) {
  .footer {
    padding: 3rem;
    width: 100%;
  }

  .footer__text {
    font-size: 1rem;
  }
}
</style>
