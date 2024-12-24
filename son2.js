const input = document.querySelector("#task")  ; // input değeri
const ulList = document.querySelector("#list")  ;           // ul nin yer alacagı list
let items;


 // sayfa ilk yüklendiğinde calısması için eventSayfa kuruldu
eventSayfa();

function eventSayfa() {

    input.addEventListener("submit" , newElement) 
    ulList.addEventListener("click", deleteLi)     // ul list ve alt grubu tıklanırsa deleteli fonksiyonunu calıstır
    
  }


  getItemsFromLS ();

// sayfa ilk yüklendiğinden localstoragedeki verileri alma
function getItemsFromLS (){
  if(localStorage.getItem("items")===null){
    items = [] 
    } 
  else{
      items = JSON.parse(localStorage.getItem("items"))
      items.forEach(function (item) {
        createItem(item);
    })

    }
    
}

/*
// sayfa ilk yüklendiğinden localstoragedeki verileri alma
function loadItems (){
    items = getItemsFromLS()
    items.forEach(function (item) {
        createItem(item);
    });
             
}
// sayfa ilk yüklendiğinden localstoragedeki verileri alma


//localStorage ekleme ve silme işlemi 

function setItemToLS(text){ 
  items = getItemsFromLS()
  items.push(text)
  localStorage.setItem("items", JSON.stringify(items))
}



//localStorage silme işlemi local

function deleteItemFromLS (text){
  items = getItemsFromLS()
  items.forEach(function(item,index){
      if(item === text){
        items.splice(index,1)
      }
  })


localStorage.setItem("items",JSON.stringify(items))
}


*/





function createItem(text){

    console.log(text)
    // li olusturma
    const li = document.createElement("li")  
    li.appendChild(document.createTextNode(text))

    // span olusturma
    let span = document.createElement('span')
    span.className = "close";  
    span.innerHTML = "X"; // <i class="bi bi-x"></i>
  
    // li nin altına span ı ekledik
    li.appendChild(span) 

    // ul nin altına li yi ekledik
    ulList.appendChild(li) 
}

// input ekleme alanı
function newElement(){
    if( input.value === "" )
    {

      //  hata mesajı altaki fonksiyon ile yapıldı ama mesajın kaybolmasını yapamadım 
      // bildirimHataEklendi() 
      $(".error").toast("show");
   
    }
    else 
    {
        // createıtem e gonderiyorum sebebi ınputtn gelen veri için bir yapı olusturacam aynı yapıyı localstorage içinde kullancaksam 
        // tek bir yerde yazmak daha mantıklı idi onu yaptım
        createItem(input.value)

        //setItemToLS(input.value)


        text = input.value
        //localStorage ekleme işlemi 

        items.push(text)
        localStorage.setItem("items", JSON.stringify(items))
     
        // hata mesajı altaki fonksiyon ile yapıldı ama mesajın kaybolmasını yapamadım 
        // bildirimUyariEklendi()
        $(".success").toast("show");


         // ekleme işleminden sonra inputu sıfırladık ki boş gelsin
        input.value=""

    }
   } 


// uyari mesajları eklenmedi  
function bildirimHataEklendi(){
  
  // let uyariMesaji = document.querySelector('#liveToast')
  
  // uyariMesaji.classList.remove("toast","success","hide")

  // uyariMesaji.classList.add("toast","error","show");

  // let message = document.querySelector('.toast-body')
  // message.textContent = "Listeye boş ekleme yapamazsınız!"
  
} 



// uyari mesajları eklendi  
function bildirimUyariEklendi(){

  
  let uyariMesajieklendi = document.querySelector('.mr-1')
  uyariMesajieklendi.innerHTML =` <div style="position: absolute; top: 0; right: 0">
        <div
          id="liveToast"
          class="toast success show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-delay="4000"
        >
          <div>
            <button
              type="button"
              class="close"
              data-dismiss="show"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="toast-body">Listeye eklendi.</div>
        </div>
      </div>  `


} 



// silme işlemi ve secme işlemi
// tıklandıgımız  ikon ise sil değilse oradakini secili yapmak için clas ekle dedik
function deleteLi(e){

    if( e.target.className === "close" ) // close tıklandı ikon tıklandı ise
    {

         e.target.parentElement.remove()


         // localstore silinmesi
         deleteItemFromLS(e.target.parentElement.firstChild.textContent)
     

         function deleteItemFromLS (text){
           
            items.forEach(function(item,index){
                if(item === text){
                  items.splice(index,1)
                }
            })
          
          
          localStorage.setItem("items",JSON.stringify(items))
          }

    }
    else {    // eğer close ikon tıklanmadı ise li yi seçili yap
        e.target.classList.add("checked");

       /* if( e.target.parentElement.firstChild =="checked") {    // eğer close ikon tıklanmadı ise li yi seçili yap
            e.target.parentElement.firstChild.remove()
            
                
        }
            */

        
    }
    
}




