<template>
    <div class="elpopovercomponent">
      <el-popover
        ref="popover1"
        placement="top-start"
        title="pop-title"
        width="200"
        trigger="hover"
        content="this is content, this is content, this is content">
      </el-popover>
      <el-popover
        ref="popover2"
        placement="bottom"
        title="pop-title"
        width="200"
        trigger="click"
        content="this is content, this is content, this is content">
      </el-popover>
      <el-button v-popover:popover1>Hover the popover</el-button>
      <el-button v-popover:popover2>Click to popover</el-button>
    </div>
</template>

<script>
export default {
  name: 'ElPopoverComponent',
};
</script>

<style scoped>

</style>
