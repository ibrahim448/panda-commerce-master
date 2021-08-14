                // heading tag h2 color
const colors =  document.querySelectorAll('.container h2');

                for(let color of colors ){
                    color.style.color = 'lightblue'
                }

                // section background color
const bgColor = document.getElementById('backpack');
                bgColor.style.background = 'tomato';


                // all card select and border radius
const cards  = document.querySelectorAll('.card');
for(const card of cards){
    card.style.borderRadius = '30px';
}

            // all button select and remove when click
const buttons = document.querySelectorAll('button.js-button');
    for(let button of buttons){
        button.addEventListener('click', function(){
            button.remove();
        })
    }


    //  document.getElementById('input-field').addEventListener('keyup', function(event){
    //     const inputField = document.getElementById('input-field')
    //     if(event.target.value == 'submit'){
    //         document.getElementById('button-active').removeAttribute('disabled')
    //     }
    //     else{
    //         document.getElementById('button-active').setAttribute('disabled', true)
    //     }
    // })

    // document.getElementById('input-field').addEventListener('change', function(){
    //     const inputField = document.getElementById('input-field')
    
    // })

// set same value and submit button active
    const inputFild  =document.getElementById('input-field');

            inputFild.addEventListener('keyup', function(event){
                if(event.target.value == 'submit'){
                    document.getElementById('button-active').removeAttribute('disabled')
                }
                else{
                    document.getElementById('button-active').setAttribute('disabled', true)
                }
            })


const subscribe = document.getElementById('subscribe');
      subscribe.addEventListener('click', function(){
          subscribe.style.background = 'blue';
      })

// mousehover and mouseout event
function setNewImage(){
    document.getElementById('image-change1').src="images/bags/bag-2.png";
}
function setOldImage(){
    document.getElementById('image-change1').src="images/bags/bag-1.png";
}
