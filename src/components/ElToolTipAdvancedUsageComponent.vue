<template>
  <div class="eltooltipadvancedusagecomponent">
    <el-tooltip :disabled="disabled" content="hogemoge" placement="bottom" effect="light">
      <el-button @click="disabled = !disabled">click to {{disabled ? 'active' : 'close'}}</el-button>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: 'ElToolTipAdvancedUsageComponent',
  data: () => ({
    disabled: false,
  }),
};
</script>

<style scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .expand-fade-leave-active {
    margin-left: 20px;
    opacity: 0;
  }
</style>
