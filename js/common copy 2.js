window.onload = function () {
 if (document.getElementsByClassName('code-widget-light').length > 0) {


  // array.forEach(element => {

  // });


  console.log('包含 code-widget-light 这个class');
 } else {
  console.log('包含 code-widget-dark 这个class');
 }
}




const change = () => {
 console.log('hexo=====>>>', myElement)
 const childElements = myElement[ 1 ].childNodes;


 console.log('childElements=====>>>', childElements)
 // console.log('hexo=====>>>', )

 // 查找子元素
 const myElement = document.getElementsByClassName('code')


 Array.from(myElement).map(element => {
  console.log('qq=====>>>', element.children)
  // element.getElementsByClassName('code')
 });
}

//  页面加载完成后执行
const onload = () => {

}

// 当点击 color-toggle-btn 这个id才执行
// const onClick = () => {
//  document.getElementById('color-toggle-btn').addEventListener('click', function (event) {
//   const myElement = document.getElementsByClassName('code')
//   if (document.getElementsByClassName('code-widget-light').length > 0) {
//    console.log('hexo=====>>>', myElement)
//    const childElements = myElement[ 1 ].childNodes;


//    console.log('childElements=====>>>', childElements)
//    // console.log('hexo=====>>>', )


//    Array.from(myElement).map(element => {
//     console.log('qq=====>>>', element.children)
//     // element.getElementsByClassName('code')
//    });

//    // array.forEach(element => {

//    // });


//    console.log('包含 code-widget-light 这个class');
//   } else {
//    console.log('包含 code-widget-dark 这个class');
//   }
//  });
// }
