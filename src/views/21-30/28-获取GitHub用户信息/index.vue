<template>
  <div class="main-28">
    <!-- 搜索框 -->
    <form class="user-form" @submit="searchUser">
      <input type="text" v-model="searchVal" placeholder="搜索 GitHub 用户名，例如：zhang-bcxb">
    </form>

    <!-- 内容卡片 -->
    <main id="main">
      <div class="card" v-if="userData.name">
        <div>
          <img :src="userData.avatar_url" :alt="userData.name" class="avatar">
        </div>
        <div class="user-info">
          <h2>{{ userData.name || userData.login }}</h2>
          <p>{{ userData.bio ? userData.bio : 'bio不存在' }}</p>
          <ul>
            <li>{{ userData.followers }} <strong>Followes</strong></li>
            <li>{{ userData.following }} <strong>Following</strong></li>
            <li>{{ userData.public_repos }} <strong>Repos</strong></li>
          </ul>
          <div id="repos">
            <a v-for='(item,index) in reposData' :key="index"
               class="repo" :href="item.html_url" target="_blank">{{ item.name }}</a>
          </div>
        </div>
      </div>

      <div class="card" v-if="userData.message" style="color: white;">
        <h1>没查到该人</h1>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiUrl: 'https://api.github.com/users/',
      searchVal: '',
      userData: {},
      reposData: []
    }
  },
  created() {
    // this.getUser('zhang-bcxb')
    // this.getRepos('zhang-bcxb')
  },
  methods: {
    // 获取用户名
    async getUser(username) {
      this.fetchHandle(this.apiUrl + username)
          .then((data) => {
            // 处理解析后的 JSON 数据
            console.log(data)
            this.userData = data
            if (data.message != 'Not Found') {
              this.getRepos(username)
            }
          })

    },
    // 获取创建的项目名称
    async getRepos(username) {
      this.fetchHandle(this.apiUrl + username + '/repos?sort=created')
          .then((data) => {
            // 处理解析后的 JSON 数据
            // console.log(data)
            console.log(data)
            if(Array.isArray(data)){
              // 只要前面五个
              this.reposData = data.slice(0, 5)
            }
          })

    },
    async searchUser(e) {
      // 阻止默认事件
      e.preventDefault()
      // 获取数据的数据
      const user = this.searchVal || 'zhang-bcxb'
      // 判断用户是否存在zhang-bcxb
      if (user) {
        await this.getUser(user)
        this.searchVal = ''
      }
    },
    async fetchHandle(url) {
      const headerConfig = {
        headers: {
          Accept: 'application/json',
        },
      }
      return new Promise((resolve, reject) => {
        fetch(url, headerConfig)
            // 将响应数据解析为 JSON
            .then((res) => res.json())
            .then((data) => {
              // 处理解析后的 JSON 数据
              console.log(data)
              resolve(data)
            })
            .catch((error) => {
              console.log(error)
              reject('数据加载失败')
            })
      })
    }
  }
};

</script>

<style lang="less" scoped>
.main-28 {
  /* 水平垂直居中 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

/* 搜索表单 */
.user-form {
  width: 100%;
  max-width: 700px;
}

/* 输入框 */
.user-form input {
  width: 100%;
  display: block;
  background-color: #4c2885;
  border: none;
  border-radius: 10px;
  color: #fff;
  padding: 1rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  /* 文本阴影 */
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
  0 15px 40px rgba(0, 0, 0, 0.1);
}

/* 提示文本 */
.user-form input::placeholder {
  color: #bbb;
}

.user-form input:focus {
  outline: none;
}

/* 卡片 */
.card {
  max-width: 800px;
  background-color: #4c2885;
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
  0 15px 40px rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 3rem;
  margin: 0 1.5rem;
}

/* 头像 */
.avatar {
  border-radius: 50%;
  border: 10px solid #2a2a72;
  height: 150px;
  width: 150px;
}

/* 用户信息 */
.user-info {
  color: #eee;
  margin-left: 2rem;
}

.user-info h2 {
  margin-top: 0;
}

.user-info ul {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  max-width: 400px;
}

.user-info ul li {
  margin-left: 10px;
  display: flex;
  align-items: center;
}

.user-info ul li strong {
  font-size: 0.9rem;
  margin-left: 0.5rem;
}

/* 仓库标签 */
.repo {
  text-decoration: none;
  color: #fff;
  background-color: #212a72;
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
}

/* 媒体查询 */
@media (max-width: 500px) {
  .card {
    flex-direction: column;
    align-items: center;
  }

  .user-form {
    max-width: 400px;
  }
}
</style>
