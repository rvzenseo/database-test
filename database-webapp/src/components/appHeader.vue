<template>
    <header class="app-header">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Logo" />
      </div>
      <button class="menu-button" @click="toggleMenu">
        <!-- You can use an icon here instead of text -->
        <span v-if="!menuOpen">Menu ☰</span>
        <span v-else>Close ✕</span>
      </button>
      <div class="nav-menu" v-show="menuOpen">
        <nav>
          <router-link to="/" @click="toggleMenu">Home</router-link>
          <router-link to="/programs" @click="toggleLearn">Programs</router-link>
          <router-link to="/blog" @click="toggleLearn">Blog</router-link>
          <router-link to="/map" @click="toggleLearn">Map</router-link>
          <router-link to="/scanner" @click="toggleLearn">Scanner</router-link>
          <button @click="loginOrLogout">
            {{ user ? 'Logout' : 'Login' }}
          </button>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'AppHeader',
    data() {
      return {
        menuOpen: false,
        user: null // Placeholder for user authentication logic
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      },
      loginOrLogout() {
        if (this.user) {
          // Logout logic here
          console.log("Logging out...");
        } else {
          // Login logic here
          console.log("Logging in...");
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #fff;
  }
  
  .logo img {
    width: 100px;
  }
  
  .menu-button {
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .nav-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: white;
    width: 100%; /* Adjust based on your design */
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    z-index: 100;
  }
  
  nav a, nav button {
    padding: 10px;
    text-decoration: none;
    color: black;
    display: block;
    text-align: left;
  }
  
  nav a:hover, nav button:hover {
    background-color: #f0f0f0;
  }
  </style>
  