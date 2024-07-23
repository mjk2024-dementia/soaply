// http://127.0.0.1:5501/details.html?idx=19

// https://www.dabipyeung.com/soaply_backend/model/get_details.php?qnt=19

const url = new URL(window.location.href);
console.log(url.searchParams.get('idx'));
const idx = url.searchParams.get('idx')

const detailWrapper = document.querySelector('.detail-wrapper')

const getDetailData = async () => {
  await fetch(
    `https://www.dabipyeung.com/soaply_backend/model/get_details.php?idx=${idx}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let dataElement;

      // if(Array.isArray(data)) {
      //   data=data;
      // } else {
      //   data= [data];
      // }

      //let dataArr = Array.isArray(data) ? data : [data];

      console.log(data);

       dataElement = `
        <p>${data.pro_idx}</p>
        <p>${data.pro_desc}</p>
        <h2>${data.pro_price}</h2>
        <h3>${data.pro_namw}</h3>
        <p>입력날짜 : ${data.pro_reg}</P>
        <img src="images/${data.pro_img}" alt="">
        }`;
        detailWrapper.insertAdjacentHTML('beforeend', dataElement);
    })
    .catch((error) => {
      console.log(error);
    });
 };


 getDetailData();