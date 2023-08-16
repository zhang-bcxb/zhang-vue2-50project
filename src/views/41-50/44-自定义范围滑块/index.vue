<template>
  <div class="main-44">
    <h2>自定义范围滑块</h2>
    <!-- 滑块盒子 -->
    <div class="range-container">
      <!-- 滑块表单 -->
      <input type="range" id="range" min="0" max="100" @input="rangeHandle">
      <!-- 数字提示（与表单绑定） -->
      <label for="range">50</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    rangeHandle(e) {
      // 滑动的数值
      const value = e.target.value
      // nextElementSibling 返回指定元素之后的下一个兄弟元素
      const label = e.target.nextElementSibling

      // 获取轨道宽度=>300px
      const range_width = getComputedStyle(e.target).getPropertyValue('width')
      // 获取按钮宽度=>80px
      const label_width = getComputedStyle(label).getPropertyValue('width')

      // 去除单位，得到数值
      const num_width = parseInt(range_width)
      const num_label_width = parseInt(label_width)

      // 最大和最小
      const max = +e.target.max
      const min = +e.target.min

      // 提示框定位计算
      // 50*300/100（一个数值对应3个宽度） - 80/2(自身宽度的一半)
      // scale(value, min, max, -10, 10) 可要可不要，只是让偏移更明显一些
      const left = value * (num_width / max) - num_label_width / 2 +
          this.scale(value, min, max, -10, 10)
      //console.log(scale(value, min, max, 10, -10)) // 50 => 0
      //console.log(left) // 110 => 50 * 3 - 40
      label.style.left = `${left}px`

      // 更新提示
      label.innerHTML = value
    },
    // 数值映射函数
    scale(number, inMin, inMax, outMin, outMax) {
      return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
    }
  }
};

</script>

<style lang="less" scoped>
.main-44 {
  /* 水平垂直居中 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

h2 {
  position: absolute;
  top: 10px;
}

.range-container {
  position: relative;
}

/* 滑块表单 */
input[type='range'] {
  width: 300px;
  margin: 18px 0;
  /* 取消元素的默认外观样式 */
  -webkit-appearance: none;
}

input[type='range'] {
  outline: none;
}

/* 数字提示 */
input[type='range'] + label {
  background-color: #fff;
  width: 80px;
  /* 定位到滑块上面 */
  position: absolute;
  top: -25px;
  /* 居中显示：300(总宽度)/2 - 80(自身宽度)/2 */
  left: 110px;
  padding: 5px 0;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

/* 浏览器兼容处理 */
/* Chrome & Safari */
input[type='range']::-webkit-slider-runnable-track {
  /* 自定义滑动条轨道 */
  background: purple;
  border-radius: 5px;
  width: 100%;
  height: 10px;
  cursor: pointer;
}

input[type='range']::-webkit-slider-thumb {
  /* 自定义滑动条按钮 */
  -webkit-appearance: none;
  height: 24px;
  width: 24px;
  background: #fff;
  border-radius: 50%;
  border: 1px solid purple;
  /* 居中到轨道上：（自身高度 - 轨道高度）/2 =》（24-10）/2=7 */
  margin-top: -7px;
  cursor: pointer;
}

/* Firefox */
input[type='range']::-moz-range-track {
  background: purple;
  border-radius: 4px;
  width: 100%;
  height: 13px;
  cursor: pointer;
}

input[type='range']::-moz-range-thumb {
  -webkit-appearance: none;
  height: 24px;
  width: 24px;
  background: #fff;
  border-radius: 50%;
  border: 1px solid purple;
  margin-top: -7px;
  cursor: pointer;
}

/* IE */
input[type='range']::-ms-track {
  background: purple;
  border-radius: 4px;
  width: 100%;
  height: 13px;
  cursor: pointer;
}

input[type='range']::-ms-thumb {
  -webkit-appearance: none;
  height: 24px;
  width: 24px;
  background: #fff;
  border-radius: 50%;
  border: 1px solid purple;
  margin-top: -7px;
  cursor: pointer;
}
</style>
