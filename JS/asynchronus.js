const datas = [
    {name:"Ali",Profession: "SE"},
    {name:"Abdullah",Profession: "SE"}
]

const getDatas = ()=>{
    let output = "";
    setTimeout(() => {
        datas.forEach(
            (data)=>{
                output+=`<li>${data.name}</li>`
            }
            
        ), 
        document.body.innerHTML = output;
    }, 1000);
}

// Callbacks
// const createDatas =   (newDatas,callback) =>{
//     setTimeout(() => {
//         datas.push(newDatas);
//         callback();
//     }, 2000);
// }

// createDatas({name:"Adan",Profession: "SE"},getDatas)



// Promises 
// const createDatas =   (newDatas) =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         datas.push(newDatas);
//         let error = false;
//         if(!error)
//         {
//             resolve()
//         }
//         else{
//             reject("Kush sai nahi he!")
//         }
        
//     }, 2000);
//     }
// )   
// }

// createDatas({name:"Adan",Profession: "SE"}).then(getDatas).catch(err=>console.log(err))



// async await 


const createDatas =   (newDatas) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        datas.push(newDatas);
        let error = false;
        if(!error)
        {
            resolve()
        }
        else{
            reject("Kush sai nahi he!")
        }
        
    }, 2000);
    }
)   
}


const process = async () => {

    await createDatas({name:"Adan",Profession: "SE"});
    getDatas();
    
}

process();