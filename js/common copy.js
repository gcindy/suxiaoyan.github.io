// function main () {
//  console.log('jaa')
//  const light = document.getElementsByClassName('code-widget-light')
//  const dark = document.getElementsByClassName('code-widget-dark')
//  const dom = document.querySelector('.code-widget');
//  console.log('class', dom.getAttribute('class'))
//  console.log('className', dom.className)
//  // code-widget-light
//  // code-widget-dark
// }

// main()

const mutationCallback = (mutationsList) => {
 for (let mutation of mutationsList) {
  let type = mutation.type;

  console.log('type=====>>>', type)

  switch (type) {
   case "childList":
    console.log("A child node has been added or removed.");
    break;
   case "attributes":
    console.log(`The ${mutation.attributeName} attribute was modified.`);
    break;
   case "subtree":
    console.log(`The subtree was modified.`);
    break;
   default:
    break;
  }
 }
};
mutationCallback()


const onClick = (onCLick) => {
 console.log('点击了=====>>>',)
}

onClick()
const main = () => {
 console.log('jaa')
 const light = document.getElementsByClassName('code-widget-light')
 const dark = document.getElementsByClassName('code-widget-dark')
 const dom = document.querySelector('.code-widget');
 console.log('class', dom.getAttribute('class'))
 console.log('className', dom.className)
}


function mains () {
 mutationCallback()
}
mains()


// color-toggle-btn
