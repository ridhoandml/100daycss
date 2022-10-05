<template>
  <div class="navbar">
    <div class="nav__left">
      <p>100 Days CSS</p>
      <div class="left__button">
        <button class="button">
          <i class="bx bxs-sun"></i>
        </button>
        <button class="button">
          <i class="bx bx-menu"></i>
        </button>
      </div>
    </div>
    <div class="nav__right"></div>
  </div>
</template>

<style scoped>
.navbar {
  padding: 1.5rem;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
}

.nav__left {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.nav__left > p {
  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 100;
  letter-spacing: 2px;
  color: #0f172a;
  cursor: default;
}

.left__button {
  display: flex;
  gap: 1rem;
}

.button {
  position: relative;
  width: 3rem;
  height: 3rem;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  overflow: hidden;
}

.button::after {
  content: "";
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #0ea5e9;
  height: 0;
  transition: height 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.button:hover::after {
  height: 3rem;
}

.button > i {
  position: absolute;
  z-index: 5;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  color: #0ea5e9;
  transition: color 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.button:hover > i {
  color: white;
}
</style>
