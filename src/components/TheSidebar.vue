<template>
  <aside class="sidebar d-flex flex-column">
    <h2 class="sidebar-title">Usage examples</h2>
    <router-link
      class="link"
      v-for="link in LINKS"
      :key="link.name"
      :to="{ name: link.name }"
    >
      {{ link.title }}
    </router-link>
  </aside>
</template>

<script setup>
const LINKS = [
  { title: "Base", name: "index" },
  { title: "Slots", name: "slots" },
  { title: "Customize", name: "customize" },
];
</script>

<script>
export default {
  name: "TheSidebar",
};
</script>

<style lang="scss">
.sidebar {
  padding-top: 24px;
  width: 320px;
  max-width: calc(100vh - 60px);
  overflow-y: auto;
  border-right: 1px solid #eaecef;
  user-select: none;

  &-title {
    font-size: 18px;
    padding-left: 24px;
    padding-bottom: 8px;
  }
  .router-link-active {
    border-left: 5px solid #3eaf7c;
    color: #3eaf7c;
  }
}

.link {
  padding: 5px 5px 5px 24px;
  border-left: 5px solid transparent;
  cursor: pointer;
  transition: 0.3s;
  font-size: 16px;

  &:hover {
    color: #3eaf7c;
  }
}
</style>
