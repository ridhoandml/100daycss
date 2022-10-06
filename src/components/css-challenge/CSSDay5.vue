<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="frame">
      <div class="center">
        <div class="box">
          <div class="header">
            <div class="header__left">
              <span>Weekly Report</span>
              <span>01. Feb - 07. Feb</span>
            </div>
            <div class="header__right">
              <span>Revenue</span>
              <span>$ 3621.79</span>
            </div>
          </div>
          <div class="content">
            <div class="legend">
              <span class="label">Legend</span>
              <span class="red">Views</span>
              <span class="blue">Purchases</span>
            </div>
            <div class="stats">
              <div class="data-red">
                <svg>
                  <polyline
                    points="9,46 50,12 90,23 130,11 171,38 211,48 251,19"
                  ></polyline>
                </svg>
                <div class="point-1">
                  <div class="tooltip">458</div>
                </div>
                <div class="point-2">
                  <div class="tooltip">812</div>
                </div>
                <div class="point-3">
                  <div class="tooltip">746</div>
                </div>
                <div class="point-4">
                  <div class="tooltip">877</div>
                </div>
                <div class="point-5">
                  <div class="tooltip">517</div>
                </div>
                <div class="point-6">
                  <div class="tooltip">434</div>
                </div>
                <div class="point-7">
                  <div class="tooltip">458</div>
                </div>
              </div>
              <div class="data-blue">
                <svg>
                  <polyline
                    points="9,61 50,50 90,65 130,55 171,61 211,74 251,64"
                  ></polyline>
                </svg>
                <div class="point-1">
                  <div class="tooltip">26</div>
                </div>
                <div class="point-2">
                  <div class="tooltip">41</div>
                </div>
                <div class="point-3">
                  <div class="tooltip">22</div>
                </div>
                <div class="point-4">
                  <div class="tooltip">36</div>
                </div>
                <div class="point-5">
                  <div class="tooltip">25</div>
                </div>
                <div class="point-6">
                  <div class="tooltip">13</div>
                </div>
                <div class="point-7">
                  <div class="tooltip">20</div>
                </div>
              </div>
              <div class="indicator line-1"></div>
              <div class="indicator line-2"></div>
              <div class="indicator line-3"></div>
              <div class="days">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
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
  background: #e4e4e4;
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

.box {
  height: 14rem;
  width: 18rem;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0.25rem 0.25rem 1rem #00000020;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  background-color: #5ac699;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem 0.25rem 0 0;
  color: white;
}

.header__left,
.header__right {
  display: flex;
  flex-direction: column;
}

.header__left > span:first-child,
.header__right > span:last-child {
  font-size: 0.875rem;
  text-transform: uppercase;
  font-weight: 700;
}

.header__left > span:last-child,
.header__right > span:first-child {
  font-size: 0.75rem;
}

.header__right > span:first-child {
  text-align: right;
}

.content {
  padding: 0.5rem 1rem;
  height: 9rem;
}

.legend {
  display: flex;
  justify-content: flex-end;
  font-size: 0.625rem;
  gap: 1rem;
}

.legend > .label {
  width: 100%;
}

.legend > .red {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.red::before {
  content: "";
  width: 0.75rem;
  height: 0.15rem;
  border-radius: 5rem;
  background-color: #fa7373;
}

.legend > .blue {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.blue::before {
  content: "";
  width: 0.75rem;
  height: 0.15rem;
  border-radius: 5rem;
  background-color: #7ba2ff;
}

.stats {
  position: relative;
  height: 100%;
}

.days {
  position: absolute;
  top: 7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 0.625rem;
  text-transform: uppercase;
  color: #949494;
}

.indicator {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 1px;
  background-color: #f2f2f2;
}

.line-1 {
  top: 1rem;
}
.line-2 {
  top: 3.5rem;
}
.line-3 {
  top: 6rem;
}

svg {
  position: absolute;
  z-index: 5;
  top: 1rem;
}

svg > polyline {
  fill: none;
  stroke-width: 2px;
}

.data-red {
  stroke: #fa7373;
}

.data-blue {
  stroke: #7ba2ff;
}

[class^="point-"] {
  position: absolute;
  z-index: 10;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 1rem;
  cursor: pointer;
}

.data-red [class^="point-"] {
  background-color: #fa7373;
}

.data-blue [class^="point-"] {
  background-color: #7ba2ff;
}

[class^="point-"] > .tooltip {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translate(-50%, 10px);
  z-index: 15;
  padding: 0.25rem 0.425rem;
  border-radius: 0.2rem;
  color: white;
  font-size: 0.625rem;
  font-weight: 700;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  cursor: default;
}

.data-red [class^="point-"] > .tooltip {
  background-color: #fa7373;
}

.data-blue [class^="point-"] > .tooltip {
  background-color: #7ba2ff;
}

[class^="point-"] > .tooltip::after {
  position: absolute;
  content: "";
  bottom: -0.5rem;
  left: 50%;
  transform: translate(-50%, 0);
  width: 0.5rem;
  height: 0.5rem;
  clip-path: polygon(0% 0%, 50% 50%, 100% 0%);
}

.data-red [class^="point-"] > .tooltip::after {
  background-color: #fa7373;
}

.data-blue [class^="point-"] > .tooltip::after {
  background-color: #7ba2ff;
}

[class^="point-"]:hover > .tooltip {
  visibility: visible;
  opacity: 1;
  transform: translate(-50%, 0);
}

.data-red .point-1 {
  top: 56px;
  left: 8px;
}

.data-red .point-2 {
  top: 24px;
  left: 46px;
}

.data-red .point-3 {
  top: 34px;
  left: 86px;
}

.data-red .point-4 {
  top: 24px;
  left: 128px;
}

.data-red .point-5 {
  top: 50px;
  left: 166px;
}

.data-red .point-6 {
  top: 60px;
  left: 207px;
}

.data-red .point-7 {
  top: 32px;
  left: 246px;
}

.data-blue .point-1 {
  top: 72px;
  left: 8px;
}

.data-blue .point-2 {
  top: 62px;
  left: 46px;
}

.data-blue .point-3 {
  top: 76px;
  left: 86px;
}

.data-blue .point-4 {
  top: 67px;
  left: 128px;
}

.data-blue .point-5 {
  top: 73px;
  left: 166px;
}

.data-blue .point-6 {
  top: 86px;
  left: 207px;
}

.data-blue .point-7 {
  top: 76px;
  left: 246px;
}
</style>
