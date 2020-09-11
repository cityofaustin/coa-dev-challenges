# Frontend Challenge

### Challenge

Your task is to create a webpage that displays the schedule for pools and splash pads in Austin. This data comes from our Open Data Portal. For documentation, visit: https://data.austintexas.gov/Recreation-and-Culture/Austin-Pool-Schedule/xaxa-886r

### To get started:

- Install dependencies: `yarn`
- Run a local server: `yarn start`
- Find `TODO:`s in the code and build from there.

### Resources

- Endpoint to data: https://data.austintexas.gov/Recreation-and-Culture/Austin-Pool-Schedule/xaxa-886r
- React Hooks: https://reactjs.org/docs/hooks-intro.html
- React leaflet: https://react-leaflet.js.org/docs/en/examples
- Leaflet: https://leafletjs.com/reference-1.7.1.html
- Us. If you are stuck, or need guidance, leave a comment to a line of code in Github or email us.

### Some Hints & Guidelines

- You must work on this alone. Do not share the code challenge with others.
- Write clean code.
- The boilerplate uses React Hooks. They are fairly new, so if you're unfamiliar with them you're welcome to use classic lifecycle methods instead (render, componentWillMount, etc). That being said, React Hooks doesn't take long to pick up and it makes a lot of that data lifecycle management easier. So it might be worthwhile to give it a try. :)
- Don't spend more than an hour or two on the challenge, especially if you try any of the bonus features. There are many edge cases that go into creating an  

### Bonus

If you attempt this part, don't spend longer on it than you think is necessary. There are many edge cases that can arise from this feature! You're not expected to untangle all of them. Go as far or short as you'd like, this is just for fun.

Here's your bonus challenge: when you select a pool from the lefthand list, can you automatically zoom to that pool's location on the map and open its popup?

To run methods directly on a Leaflet marker component, you'll have to utilize the useRef() hook. Your logic might look something like this:
```
const poolMarkerRef = useRef()
useEffect((...) => {
  if (...) {
    poolMarkerRef.leafletElement.openPopup()
  }
}, [...])
```
---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
