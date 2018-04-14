//ui要素として実装した場合のダイアログ表示
//ui要素のプロパティには、:[propname].sync でバインディング
<template>
  <div class="eldialogcomponent">
    <el-button type="text" @click="dialogVisible = true">show dialog!</el-button>
    <el-dialog
      :title.sync='title'
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose">
      <span>{{ msg }}</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ElDialogComponent',
  data: () => ({
    title: 'dialog test!',
    msg: 'dialog test',
    dialogVisible: false,
  }),
};
</script>

<style scoped>

</style>
