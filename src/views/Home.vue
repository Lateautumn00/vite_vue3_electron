<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div class="common-layout">
		<el-button @click="console.log('999')">点击</el-button>
	</div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.common-layout {
	font-size: $font-size-normal;
}
.el-header {
	-webkit-app-region: drag; /**实现拖拽窗口 */
	--el-header-height: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	//justify-content: flex-end;
	border-bottom: 1px #dcdfe6 solid;
}
.eContainer {
	height: calc(100vh - 51px);
}
.wContainer {
	height: 100vh;
}
.el-divider--vertical {
	height: auto;
	border-left: 1px #dcdfe6 solid;
	border-right: 1px #dcdfe6 solid;
	cursor: e-resize;
}
</style>
