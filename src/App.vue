<template>
  <TheHeader />
  <div class="d-flex">
    <the-sidebar />
    <router-view v-slot="{ Component }">
      <transition name="slide-fade">
        <div class="content">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheSidebar from "@/components/TheSidebar";
import TheHeader from "@/components/TheHeader";

export default {
  name: "App",
  components: {
    TheHeader,
    TheSidebar,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
a:visited {
  color: inherit;
}

.size-240 {
  width: 240px;
  height: 240px;
}
.size-120 {
  width: 120px;
  height: 120px;
}

.d-flex {
  display: flex;
}
.flex-column {
  flex-direction: column;
}
.align-center {
  align-items: center;
}

.gap-16 {
  gap: 16px;
}

body {
  font-family: "Droid Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #2c3e50;
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(40px);
  opacity: 0;
}
.content {
  padding: 20px;
  width: 100%;
}

h1 {
  font-size: 28px;
}

.markdown {
  margin-top: 20px;
  background: #eee;
  width: 100%;
  padding: 20px;
  white-space: pre-wrap;
}
</style>
