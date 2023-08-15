<template>
  <div class="main-37">
    <!-- 标题 -->
    <h1>口袋妖怪</h1>
    <!--卡片大盒子 -->
    <div class="poke-container" ref="pockDom" id="poke-container">
      <!-- 口袋妖怪卡片 -->
      <div class="pokemon" v-for='(item,index) in cardData' :key="item.id"
           :style="`background-color: ${item.color}`">
        <div class="img-container">
          <img :src="item.img" :alt="item.name"/>
        </div>
        <div class="info">
          <span class="number">{{ item.id }}</span>
          <h3 class="name">{{ item.name }}</h3>
          <small class="type">Type: <span>{{ item.type }}</span></small>
        </div>
      </div>

      <!-- 创建 span 使盒子对齐 -->
      <template v-if="spanNum>0">
        <span style="width: 180px" v-for='(item,index) in spanNum' :key="index"></span>
      </template>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: {
        fire: '#FDDFDF',
        grass: '#DEFDE0',
        electric: '#FCF7DE',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#98d7a5',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#eaeda1',
        flying: '#F5F5F5',
        fighting: '#E6E0D4',
        normal: '#F5F5F5',
      },
      // 获取所有颜色的键名
      mainTypes: [],
      imgPath: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
      // 需要生成的卡片数量
      cardNum: 40,
      // 卡片数据
      cardData: [],
      // 对齐 span 的个数
      spanNum: 0
    }
  },
  created() {
    this.createSpan()
    this.mainTypes = Object.keys(this.colors)
    this.getPokemon()
  },
  methods: {
    // 创建 span 对齐
    createSpan() {
      // 一个卡片的宽度：120 + 20*2 + 10*2 = 180
      // 计算需要创建的 span，最大宽度为：1200
      this.spanNum = Math.floor(1200 / 180) - 2
      console.log(this.spanNum)
    },
    // 获取类型
    getType(types) {
      // ['grass', 'poison']
      const poke_types = types.map((type) => type.type.name)
      //console.log('poke_types: ', poke_types)
      // 找到颜色类型
      return this.mainTypes.find((type) => poke_types.indexOf(type) > -1)
      // console.log('type: ', type)
    },
    // 获取数据
    async getPokemon() {
      for (let i = 1; i <= this.cardNum; i++) {
        let data = await this.getOneData(i)
        // console.log(data)
        let type = this.getType(data.types)

        this.cardData.push({
          id: data.id.toString().padStart(3, '0'),
          img: `${this.imgPath + data.id}.png`,
          name: data.name[0].toUpperCase() + data.name.slice(1),
          type: type,
          color: this.colors[type]
        })
      }
    },
    async getOneData(id) {
      const headerConfig = {
        headers: {
          Accept: 'application/json',
        },
      }
      return fetch('https://pokeapi.co/api/v2/pokemon/' + id, headerConfig)
          // 将响应数据解析为 JSON
          .then((res) => res.json())
    }
  }
};

</script>

<style lang="less" scoped>
.main-37 {
  /* 水平垂直居中 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  /* 字符间隔 */
  letter-spacing: 10px;
}

/* 卡片大盒子 */
.poke-container {
  display: flex;
  /* 支持换行 */
  flex-wrap: wrap;
  /* 水平平分 */
  justify-content: space-between;
  /* 垂直居中 */
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
}

/* 最后一排对齐 */
/* 120 + 20*2 + 10*2 = 180 */
/* width: 361px; */
/* (6-2)*180 = 720 */
/* .poke-container::after {
  content: "";
  height: 0;
  width: 720px;
} */

/* 卡片盒子 */
.pokemon {
  background-color: #eee;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  margin: 10px;
  padding: 20px;
  text-align: center;
}

/* 图片盒子 */
.pokemon .img-container {
  background-color: rgba(207, 19, 19, 0.6);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  text-align: center;
}

.pokemon .img-container img {
  max-width: 90%;

  margin-top: 20px;
}

/* 卡片信息 */
.pokemon .info {
  margin-top: 20px;
}

/* 卡片序号 */
.pokemon .info .number {
  background-color: rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 0.8em;
}

/* 卡片名字 */
.pokemon .info .name {
  margin: 15px 0 7px;
  letter-spacing: 1px;
}
</style>
