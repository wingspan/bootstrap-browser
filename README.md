# Project boilerplate for javascript browser apps.

* library project with example app project that uses it
* bower for javascript dependency management
* Grunt for build management and build plugins
* Grunt builds for Facebook React, RequireJS optimized builds, less compilation
* optimized library build that works with AMD and not-AMD (global namespace) (via Almond)
* app uses requirejs, but it could also just manhandle the script tags


## Notes

The library inlines one of its dependencies ('stacktrace' microlibrary), but the app controls the major dependencies (React, underscore). This is important because the app needs to force all the libraries to use the same version of any common depencencies. We don't want to "statically link" all the dependencies (even if that was reasonable) because we care about the size of the final optimized javascript file.

For the library's optimized build to finish, the optimizer needs to be able to see all the library's dependencies, even though they will not be inlined. That's why the library's bower configuration includes dependencies even though they will never be used.

## TODO

* example app project that doesn't use AMD
* JSHint grunt task

## License

MIT.
