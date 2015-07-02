# react-sentry

[![TRAVIS](https://secure.travis-ci.org/dcousens/react-sentry.png)](http://travis-ci.org/dcousens/react-sentry)
[![NPM](http://img.shields.io/npm/v/react-sentry.svg)](https://www.npmjs.org/package/react-sentry)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


## Example

``` javascript
// ...

getInitialState () {
	return { online: this.context.myStore.isOnline() }
},

componentDidMount () {
	this.watch(this.context.myStore, 'online', (online) => {
		this.setState({ online })
	})
},

// ...
```


## License

This library is free and open-source software released under the MIT license.
