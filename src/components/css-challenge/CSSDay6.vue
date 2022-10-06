<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="frame">
      <div class="center">
        <div class="grid">
          <div class="grid__left">
            <div class="profile">
              <div class="profile__content">
                <div class="profile__img">
                  <div class="circle-1"></div>
                  <div class="circle-2"></div>
                  <img
                    src="https://unsplash.com/photos/Zz5LQe-VSMY/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8N3x8d29tYW58ZW58MHx8fHwxNjY0NjkxNDE1&force=true&w=640"
                    alt=""
                  />
                </div>
                <div class="profile__text">
                  <h1>Jessica Potter</h1>
                  <p>Visual Artist</p>
                </div>
              </div>
              <div class="profile__button">
                <button>Follow</button>
                <button>Message</button>
              </div>
            </div>
          </div>
          <div class="grid__right">
            <div class="column">
              <div class="column__item">
                <h3>523</h3>
                <p>Posts</p>
              </div>
              <div class="column__item">
                <h3>1387</h3>
                <p>Likes</p>
              </div>
              <div class="column__item">
                <h3>146</h3>
                <p>Follower</p>
              </div>
            </div>
          </div>
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
  overflow: hidden;
  background: rgb(210, 61, 61);
  background: linear-gradient(
    30deg,
    rgba(210, 61, 61, 0.4) 0%,
    rgba(201, 77, 189, 0.4) 100%
  );
  color: #333;
  font-family: "Plus Jakarta Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  width: 18rem;
  height: 18rem;
  background-color: rgb(255, 243, 243);
  border-radius: 0.5rem;
  overflow: hidden;
}

.grid__left {
  grid-column: 1 / 2;
  grid-row: 1;
}

.grid__right {
  grid-column: 2 / 2;
  grid-row: 1;
}

.profile {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 1rem;
}

.profile__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.profile__text {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.profile__text > h1 {
  font-size: 1rem;
  text-align: center;
  color: #b94f4f;
}
.profile__text > p {
  font-size: 0.75rem;
  text-align: center;
  color: #af6161;
}

.profile__img {
  width: 6rem;
  height: 6rem;
  position: relative;
}

.profile__img > img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
}

.profile__img > .circle-1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90%;
  border-width: 1px;
  border-style: solid;
  border-color: #f3c1c1 #f3c1c1 #f3c1c1 transparent;
  border-radius: 50%;
  transition: all 0.5s ease-in-out;
}

.profile__img > .circle-2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: #f3c1c1 transparent #f3c1c1 #f3c1c1;
  border-radius: 50%;
  transition: all 1s ease-in-out;
}

.profile__img:hover > .circle-1 {
  transform: translate(-50%, -50%) rotate(360deg);
}

.profile__img:hover > .circle-2 {
  transform: translate(-50%, -50%) rotate(-360deg);
}

.profile__button {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.profile__button > button {
  background-color: transparent;
  outline: 1px solid #b94f4f;
  color: #b94f4f;
  border-radius: 5rem;
  padding: 0.375rem;
  border: none;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.profile__button > button:hover {
  background-color: #f8d1d1;
  outline: none;
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;
  gap: 1px;
}

.column__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #ffe1e1;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.column__item:hover {
  background-color: #f8d1d1;
}

.column__item:active {
  background-color: #f3c1c1;
}

.column__item > h3 {
  color: #b94f4f;
}

.column__item > p {
  color: #af6161;
  font-size: 0.75rem;
}
</style>
