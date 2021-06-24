

  const app = document.getElementById('root')

  const chat_box = document.createElement('div')
  chat_box.setAttribute('class', 'chat-box')

  app.appendChild(chat_box)


  var request = new XMLHttpRequest()

  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET','https://dev.onebanc.ai/assignment.asmx/GetTransactionHistory?userId=1&recipientId=2' , true)
  
  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    var array= data.transactions
    console.log(array)
    for(i=0;i<array.length;i++)
    {
      var hello="hello"
      const msg=document.createElement('div')
      console.log(array[i].type)
      if((array[i].type==1 && array[i].direction==1)||(array[i].type==2 && array[i].direction==1))
      {
        msg.setAttribute('class','mess mess-r ')
      }
      else
      {
        msg.setAttribute('class','mess mess-l ')
      }
      
      chat_box.appendChild(msg)
     
    
      const amountdiv= document.createElement('div')
      amountdiv.setAttribute('class','amountdiv')
      const amount=document.createElement('p')
      const rupee="Rs. "
      amount.textContent=rupee+array[i].amount
      msg.appendChild(amountdiv)
      amountdiv.appendChild(amount)

      const statusdiv=document.createElement('div')
      statusdiv.setAttribute('class','statusdiv')
      msg.appendChild(statusdiv)

      const request=document.createElement('p')
        request.setAttribute('class','request')
        statusdiv.appendChild(request)
       

      if(array[i].type==1 && array[i].direction==1)
      {
        request.textContent="You  Paid"
      }
      else if(array[i].type==1 && array[i].direction==2)
      {
        request.textContent="You  Recieved"
      }
      else if(array[i].type==2 && array[i].direction==2)
      {
        request.textContent="Request  Recieved"
      }
      else if(array[i].type==2 && array[i].direction==1)
      {
        request.textContent="You  Requested"
      }
      
      console.log(array[i].id)
      
      const buttondiv= document.createElement('div')
      buttondiv.setAttribute('class','buttondiv')
      msg.appendChild(buttondiv)
      if(array[i].type==2 && array[i].direction==2)
      {
        console.log(array[i].status)
      const button1=document.createElement('button')
      button1.setAttribute('class','button')
      button1.innerText="Pay"

      const button2=document.createElement('button')
      button2.setAttribute('class','button')
      button2.innerText="Decline"
      
      buttondiv.appendChild(button1)
      buttondiv.appendChild(button2)
      }
      else if(array[i].type==2 && array[i].direction==1)
      {
        const button3=document.createElement('button')
      button3.setAttribute('class','button')
      button3.innerText="Cancel"
      buttondiv.appendChild(button3)
      }
      
      else{
        
        const tranid=document.createElement('p')
        tranid.setAttribute('class','tranid')
         var idString="Transaction ID:   "
         var idstring2 ="A123415627855"+array[i].id
        tranid.textContent=idString+"\n"+idstring2
        buttondiv.appendChild(tranid)
      }

      const arrowdiv= document.createElement('div')
      arrowdiv.setAttribute('class','arrowdiv')
      msg.appendChild(arrowdiv)
      const time=document.createElement('div')
      time.setAttribute('class','time')

      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        previous_date = "";
        
           // var content = document.getElementById("content");
           let b = Date.parse(array[i].startDate);
            let c = new Date(b);
            var trandate=c.getDate() + " " + monthNames[c.getMonth()] + " " + c.getFullYear()
            time.innerText =trandate +", "+array[i].startDate.slice(11,-3);
             arrowdiv.appendChild(time)
      

        


      const arrow=document.createElement('i')  
      arrow.setAttribute('class','arrow-b right')
      arrow.onclick=function()
      {
        alert('Button Pressed')
      }
      
      
      
     
      arrowdiv.appendChild(arrow)
    
      console.log(array[i].amount)
    }
      
  }
  
  // Send request
  request.send()
