<template>
  <li class="item">
    <a tabindex="0">
      <i :class="`${item.icon} item-icon`"></i>
      {{ item.value }}
    </a>
  </li>
</template>

<script>
export default {
  name: "AppDropdownItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/settings/_colors.scss";
@import "../scss/objects/_transitions.mixin.scss";

.item-icon {
  color: $text-color-lighter;
  margin-right: 10px;
}

.item {
  cursor: pointer;
  padding: 0 15px;

  &:first-child {
    border-radius: 4px 4px 0 0;
  }

  &:last-child {
    border-radius: 0 0 4px 4px;

    a {
      border-bottom: 0;
    }
  }

  a {
    @include transition(0.3s);
    border-bottom: 1px solid rgba($black, 0.05);
    color: $text-color-light;
    display: block;
    padding: 16px 0;
    font-size: 14px;
    text-decoration: none;

    &:active {
      color: $text-color-accent;
    }

    &:hover {
      color: $text-color-accent;
    }

    &:focus {
      color: $text-color-accent;
      outline: none;
    }
  }
}
</style>
