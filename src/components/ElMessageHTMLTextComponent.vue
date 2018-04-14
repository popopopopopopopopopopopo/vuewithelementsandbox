<template>
    <div class="elmessagehtmltextcomponent">
      <el-button type="text" @click="showConfirm">Click to open HTML dialog Box</el-button>
    </div>
</template>

<script>
const mesHTML = '<strong>This is <i>HTML</i> string</strong>';
export default {
  name: 'ElMessageHTMLTextComponent',
  methods: {
    showConfirm() {
      this.$confirm(mesHTML, 'html text dialog!', {
        dangerouslyUseHTMLString: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then((value) => {
          if (value.action === 'confirm') {
            this.$message({
              type: 'success',
              message: `value: ${value.value}`,
            });
          } else {
            this.$message({
              type: 'info',
              message: 'not confirm value',
            });
          }
        })
        .catch(((reason) => {
          // ここのメソッドの形式が違うと動作しない
          this.$message({
            type: 'info',
            message: `rejected: ${reason}`,
          });
        }));
    },
  },
};
</script>

<style scoped>

</style>
