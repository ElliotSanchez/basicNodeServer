function route(handle, pathname) {
  console.log("router.js : About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname]();
  } else {
    console.log("router.js : No handle found for " + pathname);
  }
}

exports.route = route;
