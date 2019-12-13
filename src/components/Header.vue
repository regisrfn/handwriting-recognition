<template>
  <div class="header">
    <router-link to='/' class="header__link">
      <img svg-inline src="@/img/contract.svg" alt="trillo logo" class="logo">
    </router-link>
    

    <form action="#" class="search">
      <input type="text" class="search__input" placeholder="Search">
      <button class="search__button">
        <img  svg-inline src="@/img/SVG/magnifying-glass.svg" alt="" class="search__icon"/>
      </button>
    </form>

    <nav class="user-nav">
        <div class="user-nav__icon-box">
            <div>
              <img class="user-nav__icon" svg-inline src='@/img/SVG/bookmark.svg' alt="">
              <span class="user-nav__notification">7</span>
            </div>
        </div>
        <div class="user-nav__icon-box">
            <div>
              <img class="user-nav__icon" svg-inline src='@/img/SVG/chat.svg' alt="">
              <span class="user-nav__notification">11</span>
            </div>
        </div>
        <div class="user-nav__user">
            <img svg-inline src="@/img/user.svg" alt="" class="user-nav__user-photo">
            <span class="user-nav__username">User</span>
        </div>
    </nav>
  </div>
</template>