<template>
  <div id="app" class="layout">

      <div class="footerPusher">
      
        <Header />

        <main class="main layout__page post">
          <SidebarItems :items="items" class="sidebar"/>
          <slot/>
        </main>

      </div>

      <Footer/>

  </div>
</template>

<script>
  import items from '../../data/sidebar_docs.yaml'
export default {
  components: {
    SidebarItems: () => import("~/components/Sidebar.vue"),
    Header: () => import("~/components/Header.vue"),
    Footer: () => import("~/components/Footer.vue"),
  },

  data() {
    return {
      items: items
    }
  }

}
</script>


<style scoped>

    .sidebar {
     display: none;
     padding-top: 0;
    }
  
    .sidebar::-webkit-scrollbar { display: none; } /* Hide scrollbar for Chrome, Safari and Opera */

    @media screen and (max-width: 1080px) {
      .sidebar {
        display: block;
      }

      .sidebar#sidebarDocs {
        top: 4rem;
      }
    }

    @media screen and (max-width: 860px) {

      .sidebar#sidebarDocs {
        top: 7rem;
      }
    }

  
  </style>
