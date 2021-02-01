<template>
  <div v-click-outside="handleClickOutside" role="navigation" aria-label="Customer profile">
    <app-dropdown-button @clicked="toggleDropdown" :dropdown="dropdown" />
    <app-dropdown-content v-model="dropdown" />
  </div>
</template>

<script>
import AppDropdownButton from "./AppDropdownButton.vue";
import AppDropdownContent from "./AppDropdownContent.vue";

export default {
  components: { AppDropdownContent, AppDropdownButton },
  name: "AppDropdown",
  data() {
    return {
      dropdown: false,
    };
  },
  directives: {
    "click-outside": {
      bind: function(el, binding) {
        const ourClickEventHandler = (event) => {
          if (!el.contains(event.target) && el !== event.target) {
            binding.value(event);
          }
        };
        el.__vueClickEventHandler__ = ourClickEventHandler;
        document.addEventListener("click", ourClickEventHandler);
      },
      unbind: function(el) {
        document.removeEventListener("click", el.__vueClickEventHandler__);
      },
    },
  },
  methods: {
    toggleDropdown() {
      this.dropdown = !this.dropdown;
    },
    handleClickOutside() {
      if (this.dropdown) {
        this.dropdown = !this.dropdown;
      }
    },
  },
};
</script>
