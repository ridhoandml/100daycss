<template>
  <div class="container">
    <div class="frame">
      <div class="center">
        <div class="content">
          <i class="quote-icon bx bxs-quote-alt-right"></i>
          <div class="quote">
            <span
              >I know quite certainly that I myself have no special talent
              curiosity,</span
            >
            <span class="highlight"
              >obsession
              <div class="tooltip">
                <div class="tooltip__header">
                  [əbˈseʃ(ə)n]
                  <button class="button-audio">
                    <i class="bx bxs-volume-full"></i>
                  </button>
                </div>
                <div class="tooltip__body">
                  <b>Obsession</b>, a persistent disturbing preoccupation with
                  an often unreasonable idea or feeling.
                </div>
              </div>
            </span>
            <span>
              and dogged endurance, combined with self-criticism have brought me
              to my ideas.
            </span>
            <p class="author">Albert Einstein</p>
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
  box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background: #3e6e97;
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

.content {
  width: 20rem;
}

.quote-icon {
  position: absolute;
  z-index: -5;
  top: -3rem;
  left: -2rem;
  font-size: 6rem;
  color: #ffffff10;
}

.quote {
  font-size: 1.25rem;
  color: white;
  line-height: 140%;
}

.highlight {
  position: relative;
  cursor: pointer;
  background-color: #205685;
  padding: 0.175rem 0.5rem;
}

.tooltip {
  position: absolute;
  z-index: 5;
  width: 18rem;
  left: 50%;
  bottom: 150%;
  transform: translate(-50%, -20%);
  font-size: 0.875rem;
  opacity: 0;
  transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1),
    opacity 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: default;
}

.tooltip::after {
  position: absolute;
  content: "";
  bottom: -1.4rem;
  left: 50%;
  transform: translate(-50%, 0);
  width: 1.5rem;
  height: 1.5rem;
  background-color: #205685;
  clip-path: polygon(0% 0%, 50% 50%, 100% 0%);
}

.highlight:hover > .tooltip {
  transform: translate(-50%, 0);
  opacity: 1;
}

.tooltip__header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: white;
  color: #205685;
  font-weight: 700;
  border-radius: 0.25rem;
}

.tooltip__body {
  padding: 0.75rem 1rem;
  line-height: 140%;
  color: white;
  background-color: #205685;
  border-radius: 0 0 0.25rem 0.25rem;
}

.author {
  margin-top: 0.5rem;
  font-style: italic;
  font-weight: 200;
}

.button-audio {
  outline: none;
  border: none;
  padding: 0 0.25rem;
  background-color: transparent;
  color: #205685;
  cursor: pointer;
}
</style>
