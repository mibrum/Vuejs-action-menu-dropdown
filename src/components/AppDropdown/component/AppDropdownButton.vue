<template>
  <div>
    <button
      v-popover:dropdown-menu.bottom
      @click.stop="onToggleDropdown"
      class="button"
      aria-haspopup="true"
      :aria-expanded="dropdown ? 'true' : 'false'"
      aria-controls="menu-dropdown"
    >
      <i class="fas fa-ellipsis-h button-icon"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "AppDropdownButton",
  props: {
    dropdown: {
      type: Boolean,
      default: () => true,
    },
  },
  methods: {
    onToggleDropdown(value) {
      this.$emit("clicked", value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/objects/_transitions.mixin.scss";
@import "../scss/settings/_colors.scss";

.button {
  @include transition(0.3s);
  background-color: $white;
  box-shadow: $box-shadow;
  border-radius: 10%;

  &:hover {
    box-shadow: $box-shadow-hover;
  }
}

.button-icon {
  @include transition(0.8s);
  color: $text-color-light;
  padding: 10px;
  font-size: 20px;

  &:hover {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
