<template>
  <div class="buttonanddialog">
    <el-button @click="visible = true">show dialog!</el-button>
    <el-dialog :visible.sync="visible" title="Dialog Sample">
      <p>Hi! Element</p>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ButtonAndDialog',
  data: () => ({ visible: false }),
};
</script>

<style scoped>

</style>
