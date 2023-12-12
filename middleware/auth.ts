import { defineNuxtRouteMiddleware, navigateTo } from "#app";

export default defineNuxtRouteMiddleware((to) => {
  let userEmail;

  if (process.client) {
    userEmail = window.localStorage.getItem("userEmail");
  }

  if (!userEmail && to.path !== "/login") {
    return navigateTo("/login");
  } else if (userEmail && to.path === "/login") {
    return navigateTo("/students");
  }

  // Only return navigateTo when redirecting, otherwise
});
