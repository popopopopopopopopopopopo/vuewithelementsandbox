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
    <el-button @click="handleCancel">Cancel</el-button>
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
    isCancel: false,
    isConfirm: false,
  }),
  methods: {
    // closeボタン押したときに発砲される
    handleClose(done) {
      this.$confirm('Are you sure to close this dialog?')
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    handleCancel(done) {
      // Cancelボタンに対するイベントをハンドルする
      this.dialogVisible = false;
      this.isCancel = true;
    },
  },
};
</script>

<style scoped>

</style>
