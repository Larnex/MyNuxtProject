import { defineNuxtRouteMiddleware, navigateTo } from '#app'

export default defineNuxtRouteMiddleware((to) => {
  let userEmail;
  
  if (process.client) {
    userEmail = window.localStorage.getItem("userEmail");
  }

  console.log("🚀 ~ userEmail:", userEmail);

  if (!userEmail && to.path !== "/login") {
    console.log("Redirecting to login");
    return navigateTo("/login");
  } else if (userEmail && to.path === "/login") {
    console.log("Navigating to /students");
    return navigateTo("/students");
  }

  // Only return navigateTo when redirecting, otherwise
})