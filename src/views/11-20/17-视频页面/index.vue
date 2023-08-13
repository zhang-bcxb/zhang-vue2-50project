<template>
  <div class="main-17"><!-- 主盒子 -->
    <main class="main">
      <!-- 搜索头部 -->
      <header class="header">
        <input @keydown="searchMovies" type="text" id="search" class="search" placeholder="Search movie">
      </header>
      <!-- 电影列表 -->
      <ul id="movie-list" class="movie-list">
        <li class="movie" v-for='(item,index) in movieArr' :key="index">
          <img :src="`${urlObj.imgUrl + item.poster_path}`" alt="图片不存在">
          <div class="movie-info">
            <h3 class="movie-name">{{ item.title }}</h3>
            <span :class="`movie-score ${setVoteClass(item.vote_average)}`">{{ item.vote_average }}</span>
          </div>
          <div class="movie-overview">
            <h3>{{ item.title }}</h3>
            <p>{{ item.overview }}</p>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urlObj: {
        apiUrl: 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1',
        imgUrl: 'https://image.tmdb.org/t/p/w1280',
        searchUrl: 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query='
      },
      movieArr: []
    }
  },
  created() {
    // 修改 body 的溢出隐藏，不要滚动条
    document.body.style.overflow = 'hidden'
    // 获取电影数据
    this.getMovies(this.urlObj.apiUrl)
  },
  methods: {
    // 获取电影数据
    async getMovies(url) {
      const headerConfig = {
        headers: {
          Accept: 'application/json',
        },
      }
      fetch(url, headerConfig)
          // 将响应数据解析为 JSON
          .then((res) => res.json())
          .then((data) => {
            // 处理解析后的 JSON 数据
            // console.log(data)
            this.movieArr = data.results
          })
    },
    // 评分样式
    setVoteClass(vote) {
      if (vote >= 8) {
        return 'green'
      } else if (vote >= 5) {
        return 'orange'
      } else {
        return 'red'
      }
    },
    // 搜索电影
    searchMovies(e) {
      // 按下回车键
      if (e.keyCode === 13) {
        // 将空白字符替换成空
        let value = e.target.value.replace(/\s+/, '')
        if (value) {
          // 搜索关键字:Bionicle
          this.getMovies(this.urlObj.searchUrl + value)
          // 一秒后,清除搜索框内容
          setTimeout(() => {
            e.target.value = ''
          }, 1000)
        }
      }
    }
  }
};

</script>

<style lang="less" scoped>
.main-02 {
  height: 100%;
  overflow: hidden;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 16px;
}

*{
  box-sizing: border-box;
}

/* 主盒子 */
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: #2396ef;
}

/* 头部 */
.main > .header {
  width: 100%;
  height: 5rem;
  background-color: #02254b;
  padding: 1rem;
  display: flex;
  /* 水平方向:设置子元素在盒子末端对齐 */
  justify-content: flex-end;
}

/* 搜索框 */
.main > .header > .search {
  outline: none;
  border: 2px solid #137beb;
  box-shadow: 0 3px 4px #2396ef;
  border-radius: 50px;
  background-color: transparent;
  color: #fff;
  padding: .2rem 1.5rem;
  font-size: 1rem;
}

/* 搜索框内的提示文本 */
.main > .header > .search::-webkit-input-placeholder {
  color: #3b5cee;
  font-size: 18px;
}

/* 电影列表 */
.main > .movie-list {
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  /* 出现滑动条 */
  overflow-x: hidden;
  overflow-y: auto;
  /* 动态计算高度:整个页面高度-头部的高度 */
  height: calc(100vh - 5rem);
  padding: 15px 0;
}

/* 电影卡片 */
.main > .movie-list > .movie {
  /* 动态计算宽度:卡片宽度-外边距宽度(1.2*2)*/
  width: calc(25% - 2.4rem);
  overflow: hidden;
  margin: 1.2rem;
  box-shadow: 0 4px 5px #137beb;
  position: relative;
  background-color: #0727b8;
  border-radius: 5px;
  cursor: pointer;
}

/* 电影图片的显示 */
.main > .movie-list > .movie > img {
  display: block;
  width: 100%;
}

/* 电影信息 */
.main > .movie-list > .movie > .movie-info {
  display: flex;
  /* 水平平分空间 */
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.5rem;
  color: #fff;
}

/* 电影信息-标题 */
.main > .movie-list > .movie > .movie-info > h3 {
  font-size: 1rem;
  /* 溢出显示省略号 */
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

/* 电影信息-电影评分 */
.main > .movie-list > .movie > .movie-info > .movie-score {
  padding: .3rem .4rem;
  background-color: #031a27;
  border-radius: 4px;
  font-weight: bold;
}

.main > .movie-list > .movie > .movie-info > .movie-score.green {
  color: #4ce21f;
}

.main > .movie-list > .movie > .movie-info > .movie-score.red {
  color: #ec3d3d;
}

.main > .movie-list > .movie > .movie-info > .movie-score.orange {
  color: #eba015;
}

/* 电影简介 */
.main > .movie-list > .movie > .movie-overview {
  position: absolute;
  transition: transform .3s ease-in-out;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: linear-gradient(to bottom, #f2f3f4, #e1e2e3);
  padding: 1.5rem;
  transform: translateY(101%);
  max-height: 100%;
}

/* 电影简介-标题 */
.main > .movie-list > .movie > .movie-overview > h3 {
  text-align: center;
  color: #535455;
  margin: .5rem 0;
}

/* 电影简介-内容 */
.main > .movie-list > .movie > .movie-overview > p {
  line-height: 1.5;
  /* 用于控制在何处中断单词以适应容器的宽度 */
  word-break: break-all;
  padding: 5px;
  color: #363738;
}

/* 电影简介-触摸显示 */
.main > .movie-list > .movie:hover .movie-overview {
  transform: translateY(25%);
}

/* 重置滑动条 */
::-webkit-scrollbar {
  width: 10px;
  height: 5px;
  background: #81c2f3;
}

::-webkit-scrollbar-thumb {
  width: 5px;
  height: 5px;
  background-color: #0b4877;
}

/* 媒体查询 */
@media screen and (max-width: 600px) {
  .main > .movie-list::after {
    content: "";
    clear: both;
    height: 0;
    visibility: hidden;
    display: table;
  }

  .main > .movie-list > .movie {
    width: 100%;
    float: left;
  }
}
</style>
