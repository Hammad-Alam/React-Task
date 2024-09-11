const ProductData = {
  title: "Zero Bolt",
  description:
    "Zero® Bolt - Bluetooth Smart Watch with 1 year warranty for Android & iOS Smartwatches - TFT HD Display, Heart Rate Sleep Monitoring Smartwatch, Single-Chip Bluetooth Calling, IP68 Waterproof Sports Fitness Tracker.",
  colorOptions: [
    {
      styleName: "Black Strap",
      imageUrl: "https://imgur.com/iOeUBV7.png",
    },
    {
      styleName: "Red Strap",
      imageUrl: "https://imgur.com/PTgQlim.png",
    },
    {
      styleName: "Blue Strap",
      imageUrl: "https://imgur.com/Mplj1YR.png",
    },
    {
      styleName: "Purple Strap",
      imageUrl: "https://imgur.com/xSIK4M8.png",
    },
  ],
  featureList: ["Time", "Heart Rate"],
};

Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

export default ProductData;
