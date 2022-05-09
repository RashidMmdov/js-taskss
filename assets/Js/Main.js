let lists = document.querySelectorAll(".ListD") 

let zones = document.querySelectorAll(".DropZone")
lists.forEach(list=>{
        // list.addEventListener('drag',()=>{
        //     console.log("dragging");
        // })

         list.addEventListener('dragstart',(e)=>{
        e.dataTransfer.setData("text",e.target.id)
        list.classList.add("element-opacity")
    
    })

    list.addEventListener('dragend',()=>{
        console.log("Drag process is finished by me");
        list.classList.remove("element-opacity")

    })
})

zones.forEach(zone=>{
    zone.addEventListener('dragenter',function(e){
        console.log("hello");
    })

})

