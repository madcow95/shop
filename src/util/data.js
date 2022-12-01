import axios from 'axios';

export const getProductData = () => {
    const productData = [
        {
          id : 0,
          title : "White and Black",
          content : "Born in France",
          price : 120000
        },
      
        {
          id : 1,
          title : "Red Knit",
          content : "Born in Seoul",
          price : 110000
        },
      
        {
          id : 2,
          title : "Grey Yordan",
          content : "Born in the States",
          price : 130000
        }
    ];
    return productData;
}

export const getMoreData = async ( dataNo ) => {
  const res = await axios.get( `https://codingapple1.github.io/shop/data${ dataNo }.json` ).catch( () => {
    alert( "더 이상 상품이 없어요" );
  } );
  return res ? res.data : false;
}

export default { 
    getProductData,
    getMoreData
};