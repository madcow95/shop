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

export const getMoreData = async () => {
  const moreData = await axios.get( "https://codingapple1.github.io/shop/data2.json" ).catch( () => {
    alert( "서버와 통신에 실패함\n잠시 후 다시 시도해주셈" );
  } );
  return moreData.data;
}

export default { 
    getProductData,
    getMoreData
};