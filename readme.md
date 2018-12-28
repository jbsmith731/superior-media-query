# superior-mq
css-in-js media queries

#### `screen.below` Input:
```js
@import screen from 'superior-mq'

screen.below('480px', `
  font-size: 1rem;
`)
```

#### `screen.below` Output:
```css
@media screen and (max-width: 479px) {
  font-size: 12px;
}
```
---
#### `screen.above` Input:
```js
@import screen from 'superior-mq'

screen.above('480px', `
  font-size: 1rem;
`)
```

#### `screen.above` Output:
```css
@media screen and (max-width: 480px) {
  font-size: 12px;
}
```
---
#### `screen.between` Input:
```js
@import screen from 'superior-mq'

screen.between('600px', '800px' `
  font-size: 1rem;
`)
```

#### `screen.between` Output:
```css
@media screen and (min-width: 600px) and (max-width: 799px) {
  font-size: 1rem;
}
```
---
### With styled-components
```js
import styled from 'styled-components';
import screen from '@superior-media-query';

const PageHeading = styled.h1`
  font-size: 1.75rem;
  margin-bottom: .25rem;

  ${screenAbove('480px', `
    font-size: 2.5rem;
    margin-bottom: 1rem;
  `)}
`;
```
