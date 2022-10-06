<template>
  <div class="container">
    <div class="frame">
      <div class="center">
        <div class="number">
          <div class="number__one">
            <div class="straight"></div>
            <div class="diagonal"></div>
          </div>
          <div class="number__zero one"></div>
          <div class="number__zero two"></div>
        </div>
        <div class="text">
          <p class="days">DAYS</p>
          <p class="challenge">CSS CHALLENGE</p>
          <p></p>
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
  background: #fff;
  color: #333;
  font-family: "Courier New", "Courier", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(67, 57, 160);
  background: linear-gradient(
    30deg,
    rgba(67, 57, 160, 1) 0%,
    rgba(77, 195, 201, 1) 100%
  );
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
}

.number {
  width: 100%;
  display: flex;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
  position: relative;
}

.number__one {
  position: relative;
  width: 1rem;
}

.number__one .diagonal {
  position: absolute;
  top: 0.1rem;
  right: 1rem;
  z-index: 3;
  width: 1.5rem;
  height: 2.5rem;
  border-radius: 2px;
  background-color: white;
  transform: rotate(50deg);
  filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.25));
}

.number__one .straight {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 5;
  width: 1.5rem;
  height: 6rem;
  border-radius: 2px;
  background-color: white;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.25));
}

.number__zero {
  width: 6rem;
  height: 6rem;
  border: 1.5rem solid white;
  border-radius: 100px;
  position: relative;
  display: inline-block;
  margin-left: -0.75rem;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.25));
}

.number__zero:last-child {
  z-index: -5;
}

.text p {
  margin: -1.25rem;
  text-align: center;
}

.days {
  font-size: 5rem;
}

.challenge {
  font-size: 1.5rem;
}
</style>
