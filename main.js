//clear btn

const clearBtn1 = document.querySelector('#clearBtn1')
clearBtn1.addEventListener('click', function (e) {
    
  e.preventDefault()
  document.querySelector('#insurance_catergory').value= undefined

  $('.selectpicker').selectpicker('render');

})

const clearBtn2 = document.querySelector('#clearBtn2')
clearBtn2.addEventListener('click', function (e) {
    
  e.preventDefault()
  document.querySelector('#company_select').value= undefined

  $('.selectpicker').selectpicker('render');

})

const clearBtn3 = document.querySelector('#clearBtn3')
clearBtn3.addEventListener('click', function (e) {
    
  e.preventDefault()
  document.querySelector('#product_select').value= undefined

  $('.selectpicker').selectpicker('render');

})

//product selection
//product database
const insurance_data ={
  "1":"自願醫保/住院醫保",
  "2":"標準私醫房",
  "3":"終身危疾"
}

const company_data = {
   "1":"-友邦",
  "2":"-安聯",
  "3":"-亞洲保險"
}

const test = document.querySelector('.test')

const product_menu = document.querySelector('#product_menu')
const insurance_choice =document.querySelector('#insurance_catergory')
const company_choice =document.querySelector('#company_select')
//

$('select').change(function () { //make select option clickable for Dom
  if(insurance_choice.value && company_choice.value){ 
    product_menu.innerHTML=""
    product_menu.innerHTML= `<select><option>${insurance_data[insurance_choice.value]} ${company_data[company_choice.value]} </option></select>`
$('.selectpicker').selectpicker('render');}
 
  
});

//QA

const question_search = document.querySelector('#question_search')
const form_more = document.querySelector('#form_more')
question_search.addEventListener('click',function(e){
    form_more.innerHTML =`
     <div class="row">
                  <div class="input-group col-3">
                    <select class="selectpicker" multiple title="請選擇保險種類">
  <option>沒有指定種類</option>
  <option>個人醫療</option>
  <option>危及保險</option>
</select>

                  </div>
                  <div class="input-group col-3">
                    <select class="selectpicker  dropup" multiple title="請選擇保險公司">
  <option>沒有指定公司</option>
  <option>安聯</option>
  <option>友邦</option>
</select>

                  </div>
                  <div class="input-group col-3">
                    <select class="selectpicker" multiple title="請選擇問題類型">
  <option>尋找適合的產品</option>
  <option>需要一般保險報價</option>
  <option>處理整合MPF</option>
</select>

                  </div>
                </div>
                <div  id="QA_sample">
                  <span>例如</span>
                  <div class="Q1">
                    <span >儲蓄保險點樣練揀?</span>
                  </div>
                  <div class="Q2">
                    <span >我需要買人壽嗎?</span>
                  
                   </div>
                    <div class="Q3">
                    <span class="Q3">有咩產品保未知已有疾病？</span>
                </div>
                </div>
    `
    $('.selectpicker').selectpicker('render')
   
   
   const Q1 = document.querySelector('.Q1')
const Q2 = document.querySelector('.Q2')
const Q3 = document.querySelector('.Q3')



 Q1.addEventListener('click', function (e) {
    
  e.preventDefault()
  document.querySelector('#Question_Large').value = Q1.innerText

  $('.selectpicker').selectpicker('render');

})
Q2.addEventListener('click', function (e) {
    
  e.preventDefault()
  document.querySelector('#Question_Large').value = Q2.innerText

  $('.selectpicker').selectpicker('render');

})
Q3.addEventListener('click', function (e) {
    
  e.preventDefault()
  document.querySelector('#Question_Large').value = Q3.innerText

  $('.selectpicker').selectpicker('render');

})
})


//
const mediaQuery = window.matchMedia('(min-width: 768px)')

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log('Media Query Matched!')
  }
}

// Register event listener
mediaQuery.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaQuery)