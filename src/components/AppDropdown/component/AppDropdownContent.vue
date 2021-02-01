<template>
  <span v-show="value">
    <popover name="dropdown-menu">
      <ul id="menu-dropdown">
        <app-dropdown-item
          v-for="(item, index) in items"
          :key="index"
          :item="item"
        />
      </ul>
    </popover>
  </span>
</template>

<script>
import AppDropdownItem from "./AppDropdownItem";

export default {
  name: "AppDropdownContent",
  components: {
    AppDropdownItem,
  },
  props: {
    value: {
      required: true,
    },
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/settings/_colors.scss";

[data-popover="dropdown-menu"] {
  -webkit-box-shadow: $box-shadow;
  box-shadow: $box-shadow;
  background-color: $white;
  text-align: left;
  border-radius: 5px;
  width: 100%;

  &:before {
    display: none;
  }
}
</style>
