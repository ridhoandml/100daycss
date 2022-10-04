<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  const buttonSearch = document.getElementById("buttonSearch");
  const inputSearch = document.getElementById("inputSearch");

  const buttonMenu = document.getElementById("buttonMenu");
  const containerMenu = document.getElementById("containerMenu");
  const containerNotification = document.getElementById(
    "containerNotification"
  );

  buttonSearch!.addEventListener("click", () => {
    inputSearch!.classList.toggle("active");
  });

  buttonMenu!.addEventListener("click", () => {
    containerMenu!.classList.toggle("active");
    containerNotification!.classList.toggle("active");
  });
});
</script>

<template>
  <div class="container">
    <div class="frame">
      <div class="center">
        <div class="notification" id="containerNotification">
          <div class="header">
            <i id="buttonMenu" class="bx bx-menu"></i>
            <h1>Notification</h1>
            <i id="buttonSearch" class="bx bx-search-alt"></i>
            <input
              id="inputSearch"
              class="input__search"
              type="text"
              placeholder="Search"
            />
          </div>
          <div class="content">
            <div class="content__line"></div>
            <div class="timeline">
              <div class="timeline__box-line">
                <div class="circle"></div>
              </div>
              <div class="timeline__content">
                <p>9:24 AM</p>
                <h2><span>John Walker</span> posted a photo on your wall.</h2>
              </div>
            </div>
            <div class="timeline">
              <div class="timeline__box-line">
                <div class="circle"></div>
              </div>
              <div class="timeline__content">
                <p>8:19 AM</p>
                <h2><span>Alice Parker</span> commented your last post.</h2>
              </div>
            </div>
            <div class="timeline">
              <div class="timeline__box-line">
                <div class="circle"></div>
              </div>
              <div class="timeline__content">
                <p>Yesterday</p>
                <h2><span>Luke Wayne</span> added you as friend.</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="menu" id="containerMenu">
          <a href="#">
            <i class="bx bxs-dashboard"></i>
            <span>Dashboard</span>
          </a>
          <a href="#">
            <i class="bx bxs-user"></i>
            <span>Profile</span>
          </a>
          <a href="#" class="active">
            <i class="bx bxs-bell"></i>
            <span>Notification</span>
          </a>
          <a href="#">
            <i class="bx bxs-chat"></i>
            <span>Message</span>
          </a>
          <a href="#">
            <i class="bx bxs-cog"></i>
            <span>Settings</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

@import url("https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css");

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
  background: #264057;
  color: #333;
  font-family: "Plus Jakarta Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.center {
  position: absolute;
  width: 18rem;
  height: 18rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.notification {
  position: absolute;
  z-index: 5;
  width: 18rem;
  height: 18rem;
  background-color: white;
  border-radius: 0.25rem;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.notification.active {
  transform: translate(50%, 0);
}

.header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #5f98cd;
}

.header > h1 {
  font-size: 1rem;
  font-weight: 700;
  color: white;
}

.header > i {
  font-size: 1.75rem;
  cursor: pointer;
  color: rgb(223, 223, 223);
  transition: all 0.2s ease-in-out;
}

.header > i:hover {
  color: white;
}

.header > .input__search {
  position: absolute;
  top: 0.75rem;
  left: 1rem;
  right: 4rem;
  outline: none;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  opacity: 0;
  transform: translate(1rem, 0);
  pointer-events: none;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.header > .input__search.active {
  opacity: 1;
  transform: translate(0, 0);
  pointer-events: all;
}

.content {
  padding: 0 0.5rem;
  min-height: 100%;
  position: relative;
}

.content__line {
  position: absolute;
  top: 0;
  left: 1.65rem;
  bottom: 0;
  width: 0.2rem;
  background-color: #ebebeb;
}

.timeline {
  display: flex;
  flex-direction: row;
  padding: 0 0.5rem;
}

.timeline:hover > .timeline__content {
  color: #5f98cd;
}

.timeline__box-line {
  position: relative;
  padding: 0.75rem;
  min-height: max-content;
}

.circle {
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translate(-50%, 0);
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: white;
  border: 2px solid #5f98cd;
  box-shadow: 0 0 0 3px #fff;
  cursor: pointer;
}

.timeline__content {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: 1rem 0.5rem 0 0.5rem;
  color: #666666;
  transition: color 0.3s ease-in-out;
  cursor: pointer;
}

.timeline__content > h2 {
  font-size: 0.875rem;
  font-weight: 500;
}

.timeline__content > h2 > span {
  font-weight: 700;
}

.timeline__content > p {
  font-size: 0.625rem;
}

.menu {
  position: absolute;
  top: 50%;
  z-index: 1;
  width: 16rem;
  height: 16rem;
  border-radius: 0.25rem;
  overflow: hidden;
  background-color: #43627d;
  transform: translate(2rem, -50%);
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  transition: transform 0.3s ease-in-out;
}

.menu.active {
  transform: translate(0, -50%);
}

.menu > a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #81b8eb;
  text-decoration: none;
  height: 100%;
  padding: 0 1rem;
  transition: color 0.2s ease-in-out;
}

.menu > a:hover {
  color: white;
}

.menu > a.active {
  color: white;
}

.menu > a > span {
  font-size: 0.75rem;
  font-weight: 600;
}
</style>
