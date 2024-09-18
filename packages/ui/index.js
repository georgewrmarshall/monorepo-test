// packages/ui/index.js
const { colors } = require("@georgewrmarshall/design-tokens-test");

const Button = () => {
  console.log(`Button styled with primary color: ${colors.primary}`);
  console.log(`Button styled with secondary color: ${colors.secondary}`);
};

Button();
