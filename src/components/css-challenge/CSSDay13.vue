<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  const profile = document.getElementById("profile");
  const buttonClose = document.getElementById("buttonClose");
  const profileImage = document.getElementById("profileImage");
  const contentContainer = document.getElementById("contentContainer");
  const backgroundImage = document.getElementById("backgroundImage");

  const allButtonGallery = document.querySelectorAll(".button");

  allButtonGallery.forEach((element) => {
    element.addEventListener("click", () => {
      profile?.classList.toggle("active");
      buttonClose?.classList.toggle("active");
      profileImage?.classList.toggle("active");
      contentContainer?.classList.toggle("active");
      backgroundImage?.classList.toggle("active");
    });
  });

  buttonClose?.addEventListener("click", () => {
    buttonClose?.classList.toggle("active");
    profileImage?.classList.toggle("active");
    contentContainer?.classList.toggle("active");
    backgroundImage?.classList.toggle("active");
    setTimeout(() => {
      profile?.classList.toggle("active");
    }, 1000);
  });
});
</script>

<template>
  <div class="container">
    <div class="frame">
      <div class="profile" id="profile">
        <button id="buttonClose" class="">
          <i class="bx bx-x"></i>
        </button>
        <img
          class="profile__image"
          id="profileImage"
          src="https://images.unsplash.com/profile-1565313960841-3afa95905c92?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
          alt=""
        />
        <div class="content" id="contentContainer">
          <div class="content__list">
            <p>Julian Wan</p>
            <div class="button__list">
              <button>
                <i class="bx bxs-phone"></i>
              </button>
              <button>
                <i class="bx bxs-message"></i>
              </button>
              <button>
                <i class="bx bxs-heart"></i>
              </button>
            </div>
          </div>
        </div>
        <img
          id="backgroundImage"
          class="background__image"
          src="https://unsplash.com/photos/mMCNuGN1I8o/download?ixid=MnwxMjA3fDB8MXxhbGx8MXx8fHx8fDJ8fDE2NjQ5NzIyMzE&force=true&w=640"
          alt="Background"
        />
      </div>
      <div class="grid">
        <div class="grid__item">
          <button class="button">
            <i class="bx bx-plus"></i>
          </button>
          <div class="background__overlay"></div>
          <img
            class="image"
            src="https://unsplash.com/photos/YahGHzFaXzU/download?ixid=MnwxMjA3fDB8MXxhbGx8Mnx8fHx8fDJ8fDE2NjQ5NzIyMzE&force=true&w=640"
            alt="Image 1"
          />
        </div>
        <div class="grid__item">
          <button class="button">
            <i class="bx bx-plus"></i>
          </button>
          <div class="background__overlay"></div>
          <img
            class="image"
            src="https://unsplash.com/photos/ijI6UBdDQ1Q/download?ixid=MnwxMjA3fDB8MXxhbGx8MjF8fHx8fHwyfHwxNjY0OTcyMzI3&force=true&w=640"
            alt="Image 1"
          />
        </div>
        <div class="grid__item">
          <button class="button">
            <i class="bx bx-plus"></i>
          </button>
          <div class="background__overlay"></div>
          <img
            class="image"
            src="https://unsplash.com/photos/lhE9AnQCYMw/download?ixid=MnwxMjA3fDB8MXxhbGx8Mjd8fHx8fHwyfHwxNjY0OTcyMzI3&force=true&w=640"
            alt="Image 1"
          />
        </div>
        <div class="grid__item">
          <button class="button">
            <i class="bx bx-plus"></i>
          </button>
          <div class="background__overlay"></div>
          <img
            class="image"
            src="https://unsplash.com/photos/DWaC44FUV5o/download?ixid=MnwxMjA3fDB8MXxhbGx8MzJ8fHx8fHwyfHwxNjY0OTcyMzUx&force=true&w=640"
            alt="Image 1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: static;
  width: 400px;
  height: 400px;
}

.frame {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 2px;
  box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background: white;
  color: #333;
  font-family: "Plus Jakarta Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.profile {
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  visibility: hidden;
}

.profile.active {
  visibility: visible;
}

.profile > .content {
  position: absolute;
  z-index: 20;
  bottom: 0;
  left: 0;
  right: 0;
  height: 14rem;
  transform: translate(0, 100%);
  transition: transform 1s ease-in-out;
}

.profile > .content.active {
  transform: translate(0, 0);
}

.content__list {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #df5656;
}

.profile__image {
  position: absolute;
  z-index: 50;
  top: 8rem;
  left: 50%;
  transform: translate(-50%, -250%);
  outline: 0.175rem solid white;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  transition: transform 1s ease-in-out;
}

.profile__image.active {
  transform: translate(-50%, 0);
}

.content__list > p {
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 1.25rem;
  color: white;
  cursor: default;
}

.button__list {
  position: absolute;
  top: 7rem;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  gap: 1rem;
}

.button__list > button {
  height: 3rem;
  width: 3rem;
  outline: none;
  border: 1px solid white;
  background-color: transparent;
  border-radius: 50%;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.button__list > button:hover {
  transform: scale(1.2);
}

.profile > .background__image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 12rem;
  width: 100%;
  object-fit: cover;
  object-position: center;
  transform: translate(0, -125%);
  transition: transform 1s ease-in-out;
}

.profile > .background__image.active {
  transform: translate(0, 0);
}

.profile > button {
  position: absolute;
  z-index: 6;
  top: 1rem;
  right: 1rem;
  height: 3.5rem;
  width: 3.5rem;
  outline: none;
  border: none;
  border-radius: 50%;
  background-color: #df5656;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  transform: translate(0, -250%);
  transition: transform 1s ease-in-out;
}

.profile > button.active {
  transform: translate(0, 0);
}

.grid {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.25rem;
}

.grid__item {
  position: relative;
  height: 100%;
  width: 100%;
  cursor: pointer;
}

.grid__item > .button {
  position: absolute;
  z-index: 6;
  top: 50%;
  left: 50%;
  height: 3.5rem;
  width: 3.5rem;
  outline: none;
  border: none;
  border-radius: 50%;
  background-color: #df5656;
  transform: translate(-50%, -50%) scale(1.5);
  cursor: pointer;
  font-size: 2rem;
  color: white;
  opacity: 0;
  transition: transform 0.8s cubic-bezier(0.075, 0.82, 0.165, 1),
    opacity 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.grid__item > .background__overlay {
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #00000050;
  opacity: 0;
  transition: opacity 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.grid__item:hover > .button {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.grid__item:hover > .background__overlay {
  opacity: 1;
}

.grid__item > .image {
  z-index: 4;
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
